import "./App.css";
import Movies from "./components/Movies";
import { Navbar } from "./components/Navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";


function App() {
let [watchList, setWatchList] = useState([])

let handleAddToWatchList=(movieObj)=>{
  let newWatchList=[...watchList, movieObj]
  localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
  setWatchList(newWatchList)
  console.log(newWatchList)
}



let handleRemoveFromWatchList=(movieObj)=>{
  let filteredWatchList=watchList.filter((movie)=>{
    return movie.id!=movieObj.id
  })
  setWatchList(filteredWatchList)
  localStorage.setItem('moviesApp', JSON.stringify(filteredWatchList))
  console.log(filteredWatchList)
}

useEffect(()=>{
  let moviesFromLocalStorage=localStorage.getItem('moviesApp')
  if(!moviesFromLocalStorage){
    return
  }
  setWatchList(JSON.parse(moviesFromLocalStorage))
}, [])

  return (
    <>
      <BrowserRouter basename="/film-vault">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                
                <Banner /> <Movies watchList={watchList} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} />
              </>
            }
          />
          <Route path="/WatchList" element={<WatchList watchList={watchList} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>} />
        </Routes>
      </BrowserRouter>
      <h1 className="text-xl font-bold underline"></h1>
    </>
  );
}

export default App;
