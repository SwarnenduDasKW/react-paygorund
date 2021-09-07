import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import BackNext from "../BackNext";
import Employment from "./Employment";
import {
    Link,
    useHistory,
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";

function Demographic() {
    let match = useRouteMatch();
    const history = useHistory();
    const [value, setValue] = useState("female");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleNext = () => {
        console.log("Demographic -> handleNext");
        history.push(`${match.url}/employment`);
    };

    const handlePrev = () => {
        console.log("Demographic -> handlePrev");
        history.push(`${match.url}/demohome`);
    };

    return (
        <div>
            <h1>Demographic Data</h1>
            <div>
                <TextField
                    id="firstName"
                    label="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <TextField id="lastName" label="Last Name" />

                <TextField id="email" label="Email" />

                <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                    />
                    <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                    />
                </RadioGroup>
                <Switch>
                    <Route path={`${match.path}/demohome`}>
                        <Demographic />
                    </Route>
                    <Route path={`${match.path}/employment`}>
                        <Employment />
                    </Route>
                </Switch>
            </div>
            <BackNext next={handleNext} prev={handlePrev} />
        </div>
    );
}

export default Demographic;
