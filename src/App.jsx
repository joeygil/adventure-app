import { useState } from "react";
import "./App.css";
import Form from "./assets/Form";

function App() {
  const [adventure, setAdventure] = useState({ adventures: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleClick = async () => {
    setIsLoading(true);
    const response = await fetch("src/assets/adventures.json");
    if (!response.ok) {
      throw new Error(`Error! Status ${response.status}`);
    }
    const result = await response.json();
    // console.log("results is: ", JSON.stringify(result));

    setAdventure(result);
    setIsLoading(false);
  };

  const distance = document.querySelector(".distance-box");
  const dogsAllowed = document.querySelector(".dogs-box");
  const isItFree = document.querySelector(".free-box");

  // console.log(typeof parseInt(distance.value));

  return (
    <>
      <div className="banner-container">
        <img src="/assets/images/leaves.jpg" className="top-image"></img>
        <img src="/assets/images/off-road.png" className="jeep-image"></img>
      </div>
      <h1 className="app-title">PICK YOUR ADVENTURE!</h1>
      <p className="app-description">
        Can't decide where to go? <br />
        Fill in the below for some inspiration
      </p>
      <div className="top-wrapper">
        <h1>Where we off mate?</h1>
        <div className="form-wrapper">
          <form className="find-adventure">
            <label htmlFor="distance">How far we going?</label>
            <input
              type="number"
              placeholder="Distance in minutes"
              id="distance"
              className="distance-box"
              required
            />
            <label htmlFor="dogs" className="dogs-label">
              Taking dogs?
            </label>
            <input type="checkbox" id="dogs" className="dogs-box" />
            <hr className="horizontal-divide" />
            <label htmlFor="free" className="free-label">
              Is it free?
            </label>
            <input type="checkbox" id="free" className="free-box" />
          </form>
        </div>
        <div className="App">
          <button type="submit" onClick={handleClick} className="lets-go-btn">
            Let's Go!
          </button>
        </div>

        <div>
          {adventure.adventures
            .filter(
              (adv) =>
                adv.distance <= parseInt(distance.value) &&
                adv.dogs === dogsAllowed.checked &&
                adv.free === isItFree.checked
            )
            .map((adv) => {
              return (
                <div key={adv.id} className="adv-result-container">
                  <h2>{adv.name}</h2>
                  <h3>{adv.location}</h3>
                  <p>{adv.description}</p>
                  <img className="result-image" src={adv.image}></img>
                  <p>{adv.distance} mins</p>
                </div>
              );
            })}
        </div>
      </div>
      <br />
      <p className="add-description">
        Been somewhere cool? <br /> Add it below so others can find it!
      </p>
      <div className="form-wrapper-bottom">
        <Form />
      </div>
    </>
  );
}

export default App;
