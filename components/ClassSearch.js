"use client"

import { useState } from "react";
import isEmpty from "lodash.isempty";
import queryString from 'query-string';

const getQueryStringFromState = (data) => {
    const params = {
        term: isEmpty(data.term) ? "2191" : data.term,
        subject: isEmpty(data.subject) ? undefined : data.subject,
        catalogNbr: isEmpty(data.catalogNbr) ? undefined : data.catalogNbr,
    }
    return queryString.stringify(params)
}

export default function ClassSearch() {
    const [classState, setClassState] = useState({
        term: "",
        subject: "",
        catalogNbr: "",
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const val = event.target.value;

        setClassState(prevState => ({
            ...prevState,
            [name]: val
        }));
    };

    const handleSearch = (event) => {
        event.preventDefault()
        const classSearchUrl = "https://eadvs-cscc-catalog-api.apps.asu.edu/catalog-microservices/api/v1/search/classes?&refine=Y&" + getQueryStringFromState(classState);

        // Perform the API request using classSearchUrl
        // You can use fetch or any other HTTP library to send the request
        fetch(classSearchUrl, {
            headers: {
                "Authorization": "Bearer null"
            }
        })
            .then(response => response.json())
            .then(data => {
                // Handle the API response data as needed
                console.log('API Response:', data);
            })
            .catch(error => {
                console.error('API Error:', error);
            });
    };

    console.log('Updated State:', classState)

    return (
        <div className="flex justify-center align-center">
            <main className="flex flex-col">
                <form className="flex flex-col m-4">
                    <label>term
                        <input className="m-2 text-black" type="text" name="term" onChange={handleChange} value={classState.term} />
                    </label>
                    <label>subject
                        <input className="m-2 text-black" type="text" name="subject" onChange={handleChange} value={classState.subject} />
                    </label>
                    <label>catalognbr
                        <input className="m-2 text-black" type="text" name="catalogNbr" onChange={handleChange} value={classState.catalogNbr} />
                    </label>
                    <button className="border-2 border-solid border-white m-4" type="submit" onClick={handleSearch}>Search</button>
                </form>
                <div>
                    <p>Term: {classState.term}</p>
                    <p>Subject: {classState.subject}</p>
                    <p>Catalog Number: {classState.catalogNbr}</p>
                </div>
            </main>
        </div>
    )
}