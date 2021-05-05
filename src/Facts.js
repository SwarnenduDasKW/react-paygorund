import React, { useState, useEffect } from "react";
import axios from "./api/axiosHelper";
import { RANDOM_FACTS } from "./constants";
import Chip from "@material-ui/core/Chip";
import PetsIcon from "@material-ui/icons/Pets";
import CachedIcon from "@material-ui/icons/Cached";

function Facts() {
  const [fact, setFact] = useState("");

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
  }, []);

  return (
    <div className="facts">
      <h1>Random Facts About Cats</h1>
      {fact.length > 0 ? (
        <Chip icon={<PetsIcon />} color="primary" label={fact} />
      ) : (
        <Chip icon={<CachedIcon />} color="secondary" label="Loading..." />
      )}
    </div>
  );
}

export default Facts;
