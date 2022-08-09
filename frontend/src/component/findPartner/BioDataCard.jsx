import { Button } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import man from "../../image/man.png";
import woman from "../../image/Screenshot.pngwomen.png";
import "./style.css";

const BioDataCard = ({ s , i}) => {

  
  console.log(s , "my data")
  console.log("hello world");

  
  return (
    <div className="biodata-card" key={i}>
      <div className="card">
        <div className="image-area">
          {s?.sex === "Male" && <img src={man} alt="man" />}
          {s?.sex === "Female" && <img src={woman} alt="man" />}

          <div className="head">
            {" "}
            <h1>Biodata ID</h1> <h1>{s?._id.slice(10, 20)}</h1>
          </div>
        </div>
        <div className="info">
          <div className="one-box">
            <label>Name</label>
            <p>{s?.name}</p>
          </div>
          <div className="one-box">
            <label>Division</label>
            <p>{s?.division}</p>
          </div>
          <div className="one-box">
            <label>Marital status</label>
            <p>{s?.maritalStatus}</p>
          </div>
          <div className="one-box">
            <label>Profession</label>
            <p>{s?.profession}</p>
          </div>
          <div className="one-box">
            <label>religious</label>
            <p>{s?.religious}</p>
          </div>
        </div>
        <div className="copy-link">
         <Link to={`/single-bio-data-view/${s?._id}`}>
          <Button variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
           get full view
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BioDataCard;
