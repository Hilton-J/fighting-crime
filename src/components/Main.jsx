import { useState, useEffect } from "react";
// import axios from 'axios'

const Main = () => {
  const [criminals, setCrime] = useState([]);
  // const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.fbi.gov/wanted/v1/list');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCrime(data.items);
    } catch (error) {
      // setError(error.message);
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get(`https://api.fbi.gov/wanted/v1/list`);
  //     setCrime(data);
  //   };
  //   fetchData();
  // }, []);

  console.log(criminals);
  return (
    <div className="flex justify-center">
      {/* {error && <p>Error: {error}</p>} */}
      <div className="grid md:grid-cols-4 w-[60%] gap-x-[5rem]">
        {
          criminals.map((criminal) => (
            <div className="w-full" key={criminal.uid}>

              {/* <p>{criminal.description}</p> */}
              <div className=" h-[75%] w-full">
                <img src={criminal.images[0]?.original || ''} alt={criminal.title} className="size-full" />
              </div>
              <h3>{criminal.title}</h3>
            </div>
            // criminals.race_raw
          ))
        }
      </div>
    </div>
  );
};

export default Main;
