import { useState } from "react";
import "../App.css";

const Form = () => {
  const url = "images/adventures.json";
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState(0);
  const [dogs, setDogs] = useState(false);
  const [free, setFree] = useState(false);
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    // event.preventDefault();
    const adventure = { name, location, distance, dogs, free, image };

    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        location: location,
        distance: distance,
        dogs: dogs,
        free: free,
        image: image,
      }),
    }).then(() => {
      alert("Your submission has been added!");
    });

    console.log(adventure);
  };

  return (
    <>
      <div className="bottom-wrapper">
        <form onSubmit={handleSubmit} className="add-adventure">
          <h1>Add an adventure:</h1>
          <label htmlFor="name">Name:</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            placeholder="Name"
            required
          />
          <label htmlFor="location">Location:</label>
          <input
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            id="location"
            placeholder="Location"
            required
          />

          <label htmlFor="distance">Distance:</label>
          <input
            onChange={(e) => setDistance(e.target.value)}
            type="number"
            id="distance"
            placeholder="Distance in minutes"
            required
          />

          <label htmlFor="dogs">Dogs:</label>
          <input
            onChange={(e) => setDogs(e.target.checked)}
            type="checkbox"
            id="dogs"
          />
          <hr className="horizontal-divide" />
          <label htmlFor="free">Free:</label>
          <input
            onChange={(e) => setFree(e.target.checked)}
            type="checkbox"
            id="free"
          />

          <label htmlFor="image">Image:</label>
          <input
            onChange={(e) => setImage(e.target.value)}
            type="text"
            id="image"
            placeholder="Image URL"
          />

          <br />
          <button type="submit" className="lets-go-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
