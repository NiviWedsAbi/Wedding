import { Box } from "@mui/material";
import React from "react";

const Content = (props) => {
  const { category } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        sx={{
          width: "100%",
          maxWidth: "55ch",
          height: "100%",
          maxHeight: "80vh",
          padding: "2ch 0",
        }}
        alt={category}
        src={category === "Save the date" ? "assets/12.png" : "assets/21.png"}
      />
    </div>
  );
};

export default Content;
