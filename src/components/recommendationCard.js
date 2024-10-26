import React from "react";

function RecommendationCard({ name, notes }) {
  return (
    <div className="recommendation-card">
      <p className="perfume-name">{name}</p>
      <p className="perfume-notes">{notes}</p>
    </div>
  );
}

export default RecommendationCard;
