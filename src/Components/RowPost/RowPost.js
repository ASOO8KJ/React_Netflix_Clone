import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constants";
import Youtube from "react-youtube";
import instance from "../../axios";


function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = async (id) => {
    console.log(id);
    // let response = await axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
//https://api.themoviedb.org/3/movie/868759/videos?api_key=9cc751602988ce471a8a32bf6c65536e&language=en-US
    let response = await instance.get(
      `movie/${id}/videos?api_key=9cc751602988ce471a8a32bf6c65536e&language=en-US`
    );
    console.log(response.data);
    if (response.data.results.length !== 0) {
      setUrlId(response.data.results[0]);
    } else {
      console.log("array empty");
    }
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt=""
          ></img>
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
