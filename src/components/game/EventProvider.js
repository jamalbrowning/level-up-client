import React, { useState } from "react"

export const EventContext = React.createContext()

export const EventProvider = (props) => {
    const [ events, setEvents ] = useState([])

    const getEvents = () => {
        return fetch("http://localhost:8000/events", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setEvents)
    }
    const createEvent = (event) => {
      return fetch("http://localhost:8000/events", {
        method: "POST",
        headers:{
          "Authorization": `Token ${localStorage.getItem("lu_token")}`,
          "Content-type": "application/json"
        },
        body: JSON.stringify(event)
       })
          .then(res => res.json())
          .then(() => {

          })
  }

    return (
        <EventContext.Provider value={{ events, getEvents, createEvent }} >
            { props.children }
        </EventContext.Provider>
    )
}