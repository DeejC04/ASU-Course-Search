import queryString from "query-string";
import { getData } from "@/app/UtilFunctions";
import { Suspense } from "react";

export default async function Page({ searchParams }) {

    const data = await getData(searchParams)

    console.log(searchParams)
    // console.log(queryString.stringify(searchParams))
    // console.log(data)

    return (
    <div> 
       {data?.classes.map((classInfo, index) => (
        <div key={index}>
            <h3>{classInfo.CLAS.TITLE || 'No Title Available'}</h3>
        </div>
       ))}
    </div>
    )
}