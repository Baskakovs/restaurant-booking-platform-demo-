
import './App.css';
import Feed from "./components/Feed"
import Restaurant from "./components/Restaurant.js"
import {Switch, Route, Link} from "react-router-dom"
import React, {useEffect, useState} from 'react';

function App() {
  const [feed, setFeed] = useState([])
  useEffect(()=>{
  fetch(`http://localhost:3000/restaurants`)
  .then(res=>res.json())
  .then(obj=>setFeed(obj))
  },[])

  
  return (
    <>
    <Switch>
      <Route exact path="/">
        <Feed feed={feed}/>
      </Route>
      <Route path="/restaurant">
          <Restaurant feed={feed}/>
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
