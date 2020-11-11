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
      Add to Google Calendar
    </a>
  );
}

export default CalendarLink;
