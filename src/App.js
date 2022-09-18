
import './App.css';
import Feed from "./components/Feed"
import Restaurant from "./components/Restaurant.js"
import {Switch, Route, Link} from "react-router-dom"
import React, {useEffect, useState} from 'react';

function App() {
  const [feed, setFeed] = useState([])
  const [data,setData] = useState([])
  useEffect(()=>{
  fetch(`http://localhost:3000/restaurants`)
  .then(res=>res.json())
  .then(obj=>setData(obj))
  },[])



  
  return (
    <>
    <Switch>
      <Route exact path="/">
        <Feed feed={data}/>
      </Route>
      <Route path="/restaurant">
          <Restaurant data={data}/>
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
