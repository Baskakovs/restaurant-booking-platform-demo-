
import './App.css';
import Feed from "./components/Feed"
import Restaurant from "./components/Restaurant.js"
import {Switch, Route} from "react-router-dom"
import React, {useEffect, useState} from 'react';

function App() {
  
  


  return (
    <>
    <Switch>
      <Route exact path="/">
        <Feed/>
      </Route>
      <Route path="/restaurant">
          <Restaurant />
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
