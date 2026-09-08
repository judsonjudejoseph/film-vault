import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({handleAddToWatchList, handleRemoveFromWatchList, watchList}) {

    const [movies, setMovies]=useState([])
    const [pageNo, setPageNo]=useState(1)

    const handlePrev=()    =>{
      if(pageNo==1){
        setPageNo(pageNo)
      }
      else
      {
      setPageNo(pageNo-1)
      }
    }

    function handleNext()
    {
      setPageNo(pageNo+1)
    }
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=${pageNo}`
        
      )
      .then(function (res) {
        setMovies(res.data.results);
        console.log(res.data.results);
      });
  }, [pageNo]);
  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center ">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movieObj)=>{
            return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.name} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchList={watchList}/>
        })}
      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
}

export default Movies;

