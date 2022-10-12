import React, { useState } from "react";

export default function Event({ event }) {

  const [showDetails, setShowDetails] = useState(false);

  const toggleShowDetails = () => {
    setShowDetails((prevState) => !prevState);
  };

  return (

    <div className="event">
      <h2 className="event-title">{event.summary}</h2>
      <p>{event.start.dateTime}</p>
      <p>{event.location}</p>

      {!showDetails ? (
        <button className="details"
          onClick={toggleShowDetails}
          value="Details"
        >Details</button>
        ) : (
        <div>
          <h3 className="about">About event:</h3>
            <a
            className="link"
            href={event.htmlLink}
            target="_blank"
            rel="noreferrer"
              >See Details on Google Calendar
            </a>
            <p>{event.description}</p>

          <button className="details"
            onClick={toggleShowDetails}
            value="Hide Details"
          >Hide Details</button>
        </div>
      )}
    </div>
  )
}
