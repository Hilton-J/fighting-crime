import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [criminals, setCrime] = useState([]);
  // const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.fbi.gov/wanted/v1/list");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCrime(data.items);
    } catch (error) {
      // setError(error.message);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const criminal = criminals.slice(0, 8);

  console.log(criminals);
  return (
    <div className="flex justify-center">
      {/* {error && <p>Error: {error}</p>} */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 w-[60%] gap-x-[3rem] gap-y-[0.5rem]">
        {criminal.map((criminal) => (
          <div
            className="w-full grid grid-rows-subgrid row-span-2 shadow-lg overflow-hidden font-serif text-center font-bold text-blue-950 my-10 rounded-xl"
            key={criminal.uid}
          >
            {" "}
            {/** grid grid-rows-subgrid row-span-2 == These 3 classes work together in making sure that your card content (the children) are aligned. You guys can remove and add each class to see them in action. I used row because the card content is displayed in a row direction. The 2 in row-span-2, indicates the number of the elements (children) in my card. */}
            {/* <p>{criminal.description}</p> */}
            <div className=" w-full  ">
              <Link to={`/view/${criminal.uid}`}>
                <img
                  src={criminal.images[0]?.original || ""}
                  alt={criminal.title}
                  className="size-full"
                />
              </Link>
            </div>
            <h3 className="font-serif text-center ">{criminal.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;