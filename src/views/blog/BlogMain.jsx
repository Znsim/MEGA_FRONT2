import React from "react";
import { RecipeReviewCard } from "./RecipeReviewCard";
import { RadioButtons } from "./RadioButtons";
import { CustomBreadcrumbs } from "./CustomBreadcrumbs";
import { Box } from "@mui/material";
import { Fab } from "@mui/material";
// import { AddIcon } from "@mui/icons-material";

import "./BlogMain.css";

// import { BrowserRouter as Router, Route } from "react-router-dom";

export const BlogMain = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <div>
        <div className = "App">
          <RadioButtons />

          {/* CustomBreadcrumbs 컴포넌트를 사용 */}
          <CustomBreadcrumbs />
          {/* RecipeReviewCard 컴포넌트를 사용 */}
          <RecipeReviewCard />
        
        <Box
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            "& > :not(style)": { m: 1 },
          }}
        >
          <Fab color="primary" aria-label="add">
            {/* <AddIcon /> */}
          </Fab>
        </Box>
        </div>
      </div>
    </>
  );
};
