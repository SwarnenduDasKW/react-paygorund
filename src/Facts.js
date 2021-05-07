import React, { useState, useEffect } from "react";
import axios from "./api/axiosHelper";
import { RANDOM_FACTS } from "./constants";
import Chip from "@material-ui/core/Chip";
import PetsIcon from "@material-ui/icons/Pets";
import CachedIcon from "@material-ui/icons/Cached";

import Fab from "@material-ui/core/Fab";

import "./App.css";

function Facts() {
  const [fact, setFact] = useState("");
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    async function fetchRandomFact() {
      await axios.get(RANDOM_FACTS).then(
        (response) => {
          console.log("Data returned ", response.data);
          setFact(response.data.text);
        },
        (error) => {
          console.log(error);
        }
      );
    }

    fetchRandomFact();
  }, [timer]);

  const handleNewFacts = () => {
    setTimer((x) => x + 1);
  };

  return (
    <div className="facts">
      <h1>Random Facts About Cats</h1>
      {fact.length > 0 ? (
        <div>
          <Chip icon={<PetsIcon />} color="secondary" label={fact} />
          <br />
          <br />
          <Fab color="primary" aria-label="Cat" onClick={handleNewFacts}>
            <PetsIcon />
          </Fab>
        </div>
      ) : (
        <Chip icon={<CachedIcon />} color="primary" label="Loading..." />
      )}
    </div>
  );
}

export default Facts;
