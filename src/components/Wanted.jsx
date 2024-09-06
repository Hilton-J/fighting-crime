import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate'



const Wanted = () => {
  const [criminals, setCrime] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [dataLength, setDataLength] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const pageCount = Math.ceil(dataLength / itemsPerPage);

  const url = input
    ? `https://api.fbi.gov/wanted/v1/list?title=${encodeURIComponent(input)}`
    : `https://api.fbi.gov/wanted/v1/list?page=${currentPage}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setDataLength(data.total);
        setCrime(data.items);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, url]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    window.scroll(0, 0);
    setCurrentPage(event.selected + 1);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-blue-950 my-8 text-white p-4 ">
        <h1>Wanted</h1>
      </div>
      <div className="relative text-center">
        <input
          className="font-semibold text-black w-[20rem] py-3 px-4 border-blue-950 border-2 rounded-[40px]"
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search for criminal"
        />
      </div>

      <div className="flex w-full justify-center">
        <ReactPaginate
          breakLabel='...'
          nextLabel="next >"
          nextLinkClassName="px-3 py-2 rounded-lg hover:bg-blue-950 hover:text-white"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          previousLinkClassName='px-3 py-2 rounded-lg hover:bg-blue-950 hover:text-white'
          renderOnZeroPageCount={null}
          containerClassName='flex space-x-5 p-5'
          pageLinkClassName='px-3 py-2 rounded-lg hover:bg-blue-950 hover:text-white'
          activeLinkClassName='px-3 py-2 rounded-lg bg-blue-950 text-white'
          disabledLinkClassName='hover:cursor-not-allowed hover:bg-transparent hover:text-black'
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div className="flex justify-center">
        {criminals.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 w-[60%] gap-x-[3rem] gap-y-[0.5rem] ">
            {criminals.map((criminal) => (
              <div
                className="w-full grid grid-rows-subgrid row-span-2 shadow-lg my-10 rounded-xl overflow-hidden text-center font-serif text-blue-950 font-bold"
                key={criminal.uid}
              >
                <div className="w-full">
                  <Link to={`/view/${criminal.uid}`}>
                    <img
                      src={
                        criminal.images[0]?.original || "/fallback-image.png"
                      }
                      alt={criminal.title}
                      className="size-full"
                    />
                  </Link>
                </div>
                <h3>{criminal.title}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p>No criminal found</p>
        )}
      </div>
    </div>
  );
};

export default Wanted;
