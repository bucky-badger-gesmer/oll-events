import React, { useEffect, useState } from "react";
import "./App.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "@material-ui/core";
import { Button, Modal } from "react-bootstrap";

function App() {
  const [events, setEvents] = useState([]);
  const [venues, setVenues] = useState([]);
  const [artists, setArtists] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [show, setShow] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);

  useEffect(() => {
    fetch("https://oll-coding-exercise.s3-us-west-2.amazonaws.com/events.json")
      .then((res) => res.json())
      .then((events) => {
        setEvents(events);
        fetch(
          "https://oll-coding-exercise.s3-us-west-2.amazonaws.com/venues.json"
        )
          .then((res) => res.json())
          .then((venues) => {
            setVenues(venues);
            fetch(
              "https://oll-coding-exercise.s3-us-west-2.amazonaws.com/artists.json"
            )
              .then((res) => res.json())
              .then((artists) => {
                setArtists(artists);
              })
              .catch((error) => {
                throw new Error("something went wrong", error);
              });
          })
          .catch((error) => {
            throw new Error("something went wrong", error);
          });
      })
      .catch((error) => {
        throw new Error("something went wrong", error);
      });
  }, []);

  useEffect(() => {
    if (events) {
      let tableData = [];
      events.forEach((event) => {
        const venue = venues.find((venue) => venue.id === event.venue_id);
        const artist = artists.find((artist) => artist.id === event.artist_id);

        if (venue && artist) {
          tableData.push({
            eventId: `event_${event.id}`,
            eventDate: event.date,
            eventName: event.title,
            artistName: artist.name,
            artistGenre: artist.genre,
            venue: venue.name,
            ticketPrice: event.price,
            venueAddress: venue.address,
            venueIcon: venue.icon,
          });
        }
      });
      setTableData(tableData);
    }
  }, [events, venues, artists]);

  function handleLinkClick(row) {
    setShow(true);
    setCurrentRow(row);
  }

  const columns = [
    {
      field: "eventDate",
      headerAlign: "center",
      headerName: "Event Date",
      width: 200,
    },
    {
      field: "eventName",
      headerAlign: "center",
      headerName: "Event Name",
      width: 200,
    },
    {
      field: "artistName",
      headerAlign: "center",
      headerName: "Artist Name",
      width: 200,
    },
    {
      field: "artistGenre",
      headerAlign: "center",
      headerName: "Artist Genre",
      width: 200,
    },
    {
      field: "venue",
      headerAlign: "center",
      headerName: "Venue",
      width: 200,
      renderCell: (params) => {
        return (
          <Link onClick={() => handleLinkClick(params.row)}>
            {params.value}
          </Link>
        );
      },
    },
    {
      field: "ticketPrice",
      headerAlign: "center",
      headerName: "Ticket Price",
      width: 200,
    },
  ];

  const rows = tableData.map((item) => {
    return {
      id: item.eventId,
      eventDate: new Date(item.eventDate * 1000).toLocaleString(), // moment( dateTime, 'MM-DD-YYYY HH:mm:ss',true).format("YYYY-MM-DD HH:mm:ss");
      eventName: item.eventName,
      artistName: item.artistName,
      artistGenre: item.artistGenre,
      venue: item.venue,
      ticketPrice: item.ticketPrice,
      venueAddress: item.venueAddress,
      venueIcon: item.venueIcon,
    };
  });

  return (
    <div className="App">
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
        {currentRow && (
          <Modal show={show} onHide={() => setShow(false)} size="lg">
            <Modal.Header>
              <Modal.Title>{currentRow.id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {currentRow.venue} - {currentRow.venueAddress} -{" "}
              <img
                src={currentRow.venueIcon}
                alt="venue-address"
                style={{ height: 100, width: 100 }}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;
