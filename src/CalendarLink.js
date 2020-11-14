import React from "react";

function CalendarLink(props) {
  return (
    <a
      class="calendarLink"
      target="_blank"
      rel="noreferrer"
      href={`https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
        props.title
      )}&location=${encodeURIComponent(props.location)}&dates=${props.start}/${
        props.end
      }&details=${encodeURIComponent(props.details)}`}
    >
      <span className="button--text">
      Add to Google Calendar
      </span>
    </a>
  );
}

export default CalendarLink;
