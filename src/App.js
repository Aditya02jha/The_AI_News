// import logo from './logo.svg';
import "./App.css";
import React, { useState, useEffect } from "react";
// n;
import Banner from "./images/Logo.ico";
import NewCards from "./components/NewCards/NewCards";
import alanBtn from "@alan-ai/alan-sdk-web";
import { Toolbar, AppBar, Box, Typography } from "@material-ui/core";
//copy alanApi key.
const alanKey =
  "60f28f55f1edd718116a162288f152ca2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [newsArticles, setnewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "NewHeadLines") {
          setnewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box
            component="img"
            sx={{
              height: 64,
            }}
            alt="Your logo."
            src={Banner}
            
          />
          <div>
            <Typography variant ="h1">THE AI NEWS </Typography>
          <br />
            <Typography variant = "subtitle">Click on Mic Icon To Turn On Mic</Typography>
            </div>
        </Toolbar>
      </AppBar>
      <NewCards articles={newsArticles} />
    </div>
  );
}

export default App;
