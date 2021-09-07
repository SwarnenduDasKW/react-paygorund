import React, { useState, useEffect } from "react";

function Index() {
    const data = {
        layout: "standard",
        bindingid: 0,
        policy: [
            {
                policynumber: 20001400,
                efileconversion: false,
                multiprov: "N",
            },
            {
                policynumber: 30001400,
                efileconversion: false,
                multiprov: "N",
            },
        ],
        fullfile: "Y",
        sftp: "Y",
        trdreported: "Y",
        employeeassoc: "2",
        autotermsupported: "N",
    };

    const [info, setInfo] = useState(data);

    useEffect(() => {
        data.policy = [];
    }, []);
    return (
        <div>
            <h1>Working with Nested Objects</h1>
            <p>Data</p>
            <pre>{JSON.stringify(data, null, 4)}</pre>
            <p>Info</p>
            <pre>{JSON.stringify(info, null, 4)}</pre>
        </div>
    );
}

export default Index;
