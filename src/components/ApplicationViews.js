import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"
import { EventList } from './game/EventList'
import { EventProvider} from './game/EventProvider'
import { GameForm } from './game/GameForm'
import {EventForm } from './game/EventForm'


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}> 
            <GameProvider>
                <Route exact path="/games">
                    <GameList />
                </Route>
                <Route exact path="/games/new" render={props => <GameForm {...props} />} />
            </GameProvider>
            <EventProvider>
                <Route exact path="/events">
                    <EventList />
                </Route>
                <Route exact path="/events/new" render={props => <EventForm {...props} />} />
            </EventProvider>
        </main>
    </>
}
