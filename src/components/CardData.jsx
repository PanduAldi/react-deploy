import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

const urlImage = "https://image.tmdb.org/t/p/w500";

export default function CardData({ data }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Card sx={{ display: "flex", marginBottom: "1em" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={`${urlImage}${data.poster_path}`}
          alt={data.original_title}
        />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {data.title}
            </Typography>
            <Rating
              name="half-rating-read"
              defaultValue={data.vote_average / 2}
              precision={0.1}
              readOnly
            />
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {data.overview}
            </Typography>
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
      </Card>
    </Box>
  );
}
