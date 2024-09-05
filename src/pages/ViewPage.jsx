import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

const ViewPage = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.fbi.gov/@wanted-person/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setDetails(data); // Assuming the data is directly what you need
    } catch (error) {
      console.error("Error fetching data : ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  // console.log(details.files[0].url);

  return (
    <div>
      {details ? (
        <div className="grid justify-items-center ">
          {/* Render details here */}
          <div className="text-center mt-[3rem]">
            <div className="bg-blue-950 my-8 text-white p-4 w-f ">
              <h1>More About The Criminal</h1>
            </div>
            <h1 className="max-w-[46rem] text-5xl text-blue-950 font-serif text-wrap font-bold">
              {details.title}
            </h1>
          </div>
          {/* Add more fields as necessary */}
          <div className="align-center">
            <img
              className="size-[25rem] mt-[2rem] shadow-lg"
              src={details.images[0]?.original || ""}
              alt=""
            />
            {/* <img className = 'size-[20rem]' src={details.images[1]?.original || ''} alt=""/> */}
            {/* <img className = 'size-[20rem]' src={details.images[2]?.original || ''} alt=""/> */}
          </div>
          <div>
            <h1 className="text-center text-4xl text-blue-950 font-serif mt-[3rem] ">
              DESCRIPTION
            </h1>
          </div>
          <div className="flex justify-center p-10 ">
            <div className="border-gray-400 border-solid border-2 w-[40rem] shadow-lg  ">
              <p className="bg-white pl-2">
                Date(s) of Birth Used : {details.dates_of_birth_used}
              </p>
              <p className="bg-gray-300 pl-2">Hair : {details.hair}</p>
              <p className="bg-white pl-2">Height : {details.height_max}</p>
              <p className="bg-gray-300 pl-2">Sex : {details.sex}</p>
              <p className="bg-white pl-2">
                Nationality : {details.nationality}
              </p>
            </div>
            <div className="border-gray-400 border-solid border-2 w-[40rem] shadow-lg ">
              <p className="bg-white pl-2">
                Place of Birth : {details.place_of_birth}
              </p>
              <p className="bg-gray-300 pl-2">Eyes : {details.eyes}</p>
              <p className="bg-white pl-2">Weight : {details.weight}</p>
              <p className="bg-gray-300 pl-2">Race : {details.race}</p>
            </div>
          </div>
          <div className="mb-11">
            <a
              className="flex items-center gap-4 px-6 py-3 bg-blue-950 text-white hover:bg-blue-400 rounded-full"
              href={details.files[0].url}
              target="_blank"
            >
              <FaEye />
              WANTED POSTER
            </a>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewPage;
