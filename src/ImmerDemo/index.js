import React, { useState, useEffect, memo } from "react";
// import { person } from "../data/Person";
import deepCopy from "deepcopy";
import produce from "immer";

const person = {
    personal: {
        firstName: "",
        lastName: "",
        age: "",
        address: {
            street: "",
            city: "",
            state: "",
        },
    },
    employment: {
        companyName: "Manulife",
        startDate: "",
        department: "",
    },
};

const Employment = memo((props) => {
    console.log("Rendering Employment");
    return (
        <div>
            <h1>This is Employment section</h1>
            <h2>{props.employment.companyName}</h2>
        </div>
    );
});

function Index() {
    //console.log("Person: ", person);
    const [shawn, setShawn] = useState(person);

    // useEffect(() => {
    //     uglyChange();
    // }, []);

    function uglyChange() {
        //const shawnCopy = { ...shawn };
        //shawnCopy.personal.firstName = "Shawn";
        //setShawn(shawnCopy);
        // person.personal.firstName = "Swarn";
        // person.personal.lastName = "Das";
        // person.personal.age = 40;
        // person.personal.address.street = "King St";
        // person.personal.address.city = "Kitchener";
        // person.personal.address.state = "Ontario";
        // setShawn(person);
        //let newPerson = objectCopyUsingSpreadOperator(person);
        //console.log("objectCopyUsingSpreadOperator --> newPerson", newPerson);
        //console.log("Original shawn data", shawn);
        // SHALLOW COPY
        // let personCopy = {
        //     ...person,
        // };
        // let personCopy = Object.assign({}, person);
        // DEEP COPY
        //let personCopy = JSON.parse(JSON.stringify(person));
        // console.log("CopyUsingSpreadOperator --> personCopy", personCopy);
        // console.log("updating the person age");
        // personCopy.personal.age = 50;
        // console.log(
        //     "CopyUsingSpreadOperator --> After update --> personCopy",
        //     personCopy
        // );
        // console.log("Original --> person", person);
        // const personCopy = { ...shawn };
        // console.log("Original --> personCopy", personCopy);
        // const address = { ...personCopy.personal.address };
        // address.street = "Queen St N";
        // personCopy.personal.address = address;
        // setShawn(personCopy);
        // console.log("Original --> personCopy after update", personCopy);
        // console.log("Original --> shawn", shawn);
    }

    function objectCopyUsingSpreadOperator(newPerson) {
        let personCopy = {
            ...newPerson,
        };
        return personCopy;
    }

    const handleChange = () => {
        console.log(shawn);
    };

    function shallowCopy(e) {
        const personCopy = { ...shawn };
        const address = { ...personCopy.personal.address };
        address.street = e.target.value;
        personCopy.personal.address = address;
        setShawn(personCopy);
    }

    function deeeeeepCopy(e) {
        const copy = deepCopy(shawn);
        copy.personal.address.street = e.target.value;
        setShawn(copy);
    }

    function immerCopy(e) {
        console.log("immerCopy --> e", e);
        const copy = produce(shawn, (draft) => {
            draft.personal.address.street = e.target.value;
        });
        setShawn(copy);
    }

    return (
        <div>
            <h1>This is IMMER demo</h1>

            <input
                type="text"
                name="street"
                value={shawn.personal.address.street}
                onChange={immerCopy}
            />
            <button onClick={handleChange}>See Personal Data</button>
            <Employment employment={shawn.employment} />
            <pre style={{ border: "2px solid red" }}>
                {JSON.stringify(shawn, null, 4)}
            </pre>
        </div>
    );
}

export default Index;
