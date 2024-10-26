import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import RecommendationCard from "./components/recommendationCard";
import "./app.css";

function App() {
  const [topNote, setTopNote] = useState("");
  const [vibes, setVibes] = useState("");
  const [baseNote, setBaseNote] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommend = () => {
    const mockRecommendations = [
      { name: "Perfume A", notes: "Lavender, Rose, Vanilla" },
      { name: "Perfume B", notes: "Bergamot, Sandalwood, Amber" }
    ];
    setRecommendations(mockRecommendations);
  };

  return (
    <div className="container">
      <h1 >Find Your Perfect Scent</h1>
      <div className="select-form">
        <Dropdown label="Vibes" options={["Sweet", "Fresh", "Oceanic", "Spicy", "Woody", "Floral", "Earthy", "Citrusy", "Herbal", "Warm", "Fruity", "Oriental", "Powdery", "Musky", "Green", "Aquatic", "Smoky", "Clean", "Exotic"]} onSelect={setVibes} />
        <Dropdown label="Top Note" options={["Basil", "Bergamot", "Black Pepper", "Cardamom", "Cinnamon Leaf", "Coriander", "Ginger", "Grapefruit", "Jasmine", "Lavender", "Lemon", "Lemongrass", "Lime", "Mandarin", "Orange Blossom", "Fresh Ocean", "Peppermint", "Pine", "Rose", "Rosemary", "Sandalwood", "Sweet Orange", "Tea Tree" ]} onSelect={setTopNote} />
        <Dropdown label="Base Note" options={["Basil", "Bergamot", "Black Pepper", "Cardamom", "Cinnamon Leaf", "Coriander", "Ginger", "Grapefruit", "Jasmine", "Lavender", "Lemon", "Lemongrass", "Lime", "Mandarin", "Orange Blossom", "Fresh Ocean", "Peppermint", "Pine", "Rose", "Rosemary", "Sandalwood", "Sweet Orange", "Tea Tree" ]} onSelect={setBaseNote} />
        <button className="submit-button" onClick={handleRecommend}>Get Recommendations</button>
      </div>

      <div className="recommendations">
        {recommendations.map((perfume, index) => (
          <RecommendationCard key={index} name={perfume.name} notes={perfume.notes} />
        ))}
      </div>
    </div>
  );
}

export default App;
