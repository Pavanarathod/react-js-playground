// @ts-nocheck

import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, SetData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const mov = await axios.get("");

      SetData(mov.data.results);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <div className="container">
        {data.map((mov) => (
          <div key={mov.id} className="image__container">
            <img
              src={`https://image.tmdb.org/t/p/original${mov.poster_path}`}
              alt=""
              className="hd__images"
            />

            <h1>{mov.nmae || mov.title || mov.original_name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
