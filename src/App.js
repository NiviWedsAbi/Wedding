import { Grid } from "@mui/material";
import React, { useState } from "react";
import Location from "./Location";
import { Navbar, Content } from "./components";

const allCategories = ["Save the date", "Invitation", "Location"];

function App() {
  const [category, setCategory] = useState("Save the date");

  const filterItems = (category_) => {
    setCategory(category_);
  };
  return (
    <Grid container className="backgroundImageWrapper">
      {/* content area */}
      <Grid
        item
        style={{
          height: "90vh",
          width: "90vw",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: "0",
        }}
      >
        {["Save the date", "Invitation"].includes(category) && (
          <Content category={category} />
        )}
        {category === "Location" && <Location />}
      </Grid>

      {/* navigation component */}
      <Grid item className="navbarWrapperStyle">
        <Navbar
          categories={allCategories}
          filterItems={filterItems}
          selectedCategory={category}
        />
      </Grid>
    </Grid >
  )
}

export default App;
