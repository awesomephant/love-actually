import React from "react";

function CalendarLink(props) {
  return (
    <a
      className="calendarLink"
      target="_blank"
      rel="noreferrer"
      href={`https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
        props.title
      )}&location=${encodeURIComponent(props.location)}&dates=${props.start}/${
        props.end
      }&details=${encodeURIComponent(props.details)}`}
    >
      <span className="button--text">
      add to calendar
      </span>
    </a>
  );
}

export default CalendarLink;
