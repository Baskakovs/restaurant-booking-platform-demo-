
import './App.css';
import Feed from "./components/Feed"
import Restaurant from "./components/Restaurant.js"
import Home from './components/Home';
import {Switch, Route} from "react-router-dom"
import React, {useEffect, useState} from 'react';
import "./components/css/google.css"


function App() {

  return (
    <>
    
    <Switch>
      <Route  exact path="/">
        <Home/>
      </Route>
      <Route  exact path="/feed">
        <Feed/>
      </Route>
      <Route path="/restaurant">
          <Restaurant/>
      </Route>
    </Switch>
    </>
  )
}

export default App;

/* Components:
    App
    |_Feed
        |_Restaurant Card
            |_Image
            |_Info
    |_OverviewPage
        |_ImageGallery
        |_Description
        |_Map
        |_Booking
*/
