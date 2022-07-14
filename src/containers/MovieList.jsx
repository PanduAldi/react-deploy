import React, { useEffect, useState } from "react";
import { Box, Typography, Skeleton } from "@mui/material";
import axios from "axios";
import CardData from "../components/CardData";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataMovie = async () => {
      try {
        const respMovie = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=785bd717ec51c3db7448f2fb588f63eb"
        );

        setLoading(false);
        setMovies(respMovie.data.results);
      } catch (err) {
        console.log("Error ", err);
      }
    };

    fetchDataMovie();
  }, []);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5">+Movie List+</Typography>
        <section>
          {loading ? (
            <h3>Tunggu</h3>
          ) : (
            movies.map((movie) => {
              return <CardData key={movie.id} data={movie} />;
            })
          )}
        </section>
      </Box>
    </>
  );
};

export default MovieList;
