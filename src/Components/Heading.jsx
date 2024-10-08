import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
} from "@mui/material";

export const Heading = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginY: 4, color: "#FF5733" }}
      >
        TODO
      </Typography>
    </>
  );
};
