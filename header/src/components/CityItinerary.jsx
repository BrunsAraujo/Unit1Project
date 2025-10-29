import { useEffect, useState, useRef } from "react";
import { cityData } from "./cityData";

function cityItinerary({ city, onBack }) {
  const [itinerary, setItinerary] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (city && cityData[city]) {
      setItinerary(cityData[city]);
    } else {
      setItinerary(null);
    }
  }, [city]);

  const scrollToDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="itinerary">
      <h2>Itinerary for {city}</h2>
      {itinerary ? (
        <>
          <p>{itinerary.summary}</p>
          <button onClick={scrollToDetails}>View Details</button>
          <div ref={detailsRef} className="details">
            <h3>Details</h3>
            <p>{itinerary.details}</p>
          </div>
        </>
      ) : (
        <p>No itinerary available for this city.</p>
      )}
      <button onClick={onBack}>Back to City List</button>
    </div>
  );
}

export default cityItinerary;