import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridWeek from "@fullcalendar/timegrid";
import timeGridDay from "@fullcalendar/timegrid";

var date = new Date();
var d = date.getDate(),
  m = date.getMonth(),
  y = date.getFullYear();

const events = [
  {
    title: "All Day Event",
    start: new Date(y, m, 1),
    backgroundColor: "#f56954", //red
    borderColor: "#f56954", //red
    allDay: true,
  },
  {
    title: "Long Event",
    start: new Date(y, m, d - 5),
    end: new Date(y, m, d - 2),
    backgroundColor: "#f39c12", //yellow
    borderColor: "#f39c12", //yellow
  },
  {
    title: "Meeting",
    start: new Date(y, m, d, 10, 30),
    allDay: false,
    backgroundColor: "#0073b7", //Blue
    borderColor: "#0073b7", //Blue
  },
  {
    title: "Lunch",
    start: new Date(y, m, d, 12, 0),
    end: new Date(y, m, d, 14, 0),
    allDay: false,
    backgroundColor: "#00c0ef", //Info (aqua)
    borderColor: "#00c0ef", //Info (aqua)
  },
  {
    title: "Birthday Party",
    start: new Date(y, m, d + 1, 19, 0),
    end: new Date(y, m, d + 1, 22, 30),
    allDay: false,
    backgroundColor: "#00a65a", //Success (green)
    borderColor: "#00a65a", //Success (green)
  },
  {
    title: "Click for Google",
    start: new Date(y, m, 28),
    end: new Date(y, m, 29),
    url: "https://www.google.com/",
    backgroundColor: "#3c8dbc", //Primary (light-blue)
    borderColor: "#3c8dbc", //Primary (light-blue)
  },
];

const Calender = () => {
  const headerToolbar = {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay",
  };
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Calendar</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Calendar</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky-top mb-3">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Draggable Events</h4>
                  </div>
                  <div className="card-body">
                    <div id="external-events">
                      <div className="external-event bg-success">Lunch</div>
                      <div className="external-event bg-warning">Go home</div>
                      <div className="external-event bg-info">Do homework</div>
                      <div className="external-event bg-primary">
                        Work on UI design
                      </div>
                      <div className="external-event bg-danger">
                        Sleep tight
                      </div>
                      <div className="checkbox">
                        <label for="drop-remove">
                          <input type="checkbox" id="drop-remove" />
                          remove after drop
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Create Event</h3>
                  </div>
                  <div className="card-body">
                    <div
                      className="btn-group"
                      style={{
                        width: "100%",
                        marginBottom: "10px",
                      }}
                    >
                      <ul className="fc-color-picker" id="color-chooser">
                        <li>
                          <a className="text-primary" href="#">
                            <i className="fa fa-square"></i>
                          </a>
                        </li>
                        <li>
                          <a className="text-warning" href="#">
                            <i className="fa fa-square"></i>
                          </a>
                        </li>
                        <li>
                          <a className="text-success" href="#">
                            <i className="fa fa-square"></i>
                          </a>
                        </li>
                        <li>
                          <a className="text-danger" href="#">
                            <i className="fa fa-square"></i>
                          </a>
                        </li>
                        <li>
                          <a className="text-muted" href="#">
                            <i className="fa fa-square"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="input-group">
                      <input
                        id="new-event"
                        type="text"
                        className="form-control"
                        placeholder="Event Title"
                      />

                      <div className="input-group-append">
                        <button
                          id="add-new-event"
                          type="button"
                          className="btn btn-primary"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card card-primary">
                <div className="card-body p-0">
                  <div>
                    <FullCalendar
                      plugins={[dayGridPlugin, timeGridWeek, timeGridDay]}
                      initialView="dayGridMonth"
                      weekends={false}
                      events={events}
                      eventContent={renderEventContent}
                      headerToolbar={headerToolbar}
                      themeSystem="bootstrap"
                      editable
                      droppable
                    />
                  </div>
                  <div id="calendar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calender;

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
