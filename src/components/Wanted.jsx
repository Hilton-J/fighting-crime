import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from 'flowbite-react'
// import Pagination from "./Pagination";

const customTheme = {
  button: {
    color: {
      primary: 'bg-red-500 hover:bg-red-600',
    },
  },
};

const Wanted = () => {
  const [criminals, setCrime] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);


  const [currentPage, setCurrentPage] = useState(1); //set page number
  const itemsLength = 20;

  // const [postPerPage, setPostPerPage] = useState(8); // number of results per page

  // const lastPostIndex = currentPage * postPerPage; // (1 * 8) = 8
  // const firstPostIndex = lastPostIndex - postPerPage; // (8-8) = 0
  // const totalPosts = criminals.length;
  const url = input
    ? `https://api.fbi.gov/wanted/v1/list?title=${encodeURIComponent(input)}`
    : `https://api.fbi.gov/wanted/v1/list?page=${currentPage}`;

  // console.log(lastPostIndex);
  // console.log(firstPostIndex);
  // console.log(totalPosts);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const totalPages = Math.ceil(data.total / itemsLength);
        console.log(data.total);
        console.log(data.items.length);
        console.log(totalPages);
        setTotalPages(totalPages);
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

  console.log(totalPages);

  const setPage1 = () => {
    setCurrentPage(1)
  }

  const setPage2 = () => {
    setCurrentPage(2);
  };

  const setPage3 = () => {
    setCurrentPage(3);
  };

  // useEffect(() => {
  //   if (input) {
  //     setLoading(true);
  //     fetch(
  //       `https://api.fbi.gov/wanted/v1/list?title=${encodeURIComponent(input)}`
  //     )
  //       .then((res) => res.json())
  //       .then((json) => {
  //         setCrime(json.items || []);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         setError(err.message);
  //         setLoading(false);
  //       });
  //   } else {
  //     fetchData();
  //   }
  // }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // const currentPosts = criminals.slice(firstPostIndex, lastPostIndex);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div>
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

      <div className="text-center space-x-5 my-4">
        <button
          onClick={setPage1}
          className="w-[3rem] bg-blue-950 rounded-xl shadow-xl text-white"
        >
          1
        </button>
        <button
          onClick={setPage2}
          className="w-[3rem] bg-blue-950 rounded-xl shadow-xl text-white"
        >
          2
        </button>
        <button
          onClick={setPage3}
          className="w-[3rem] bg-blue-950 rounded-xl shadow-xl text-white"
        >
          3
        </button>
      </div>
      
      {/* TODO: Pagination is not what it's supposed to be */}
      <div className="flex overflow-x-auto sm:justify-center flex-row">
        <Pagination theme={{ theme: customTheme }} currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} className="flex space-x-10" />
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

      {/* <Pagination
        totalPosts={totalPosts}
        postsPerPage={postPerPage}
        onPageChange={setCurrentPage}
      /> */}
    </div>
  );
};

export default Wanted;
