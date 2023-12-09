"use client"

import Image from "next/image";
import magnifyingGlass from "@/public/magnifying-glass-svgrepo-com.svg";
import { useState } from "react";
import isEmpty from "lodash.isempty";
import queryString from 'query-string';
import { useRouter } from "next/navigation";
import Link from "next/link";

const getQueryStringFromState = (data) => {
    const params = {
        term: isEmpty(data.term) ? "2191" : data.term,
        subject: isEmpty(data.subject) ? undefined : data.subject,
        catalogNbr: isEmpty(data.catalogNbr) ? undefined : data.catalogNbr,
        keywords: isEmpty(data.keywords) ? undefined : data.keywords
    }
    return queryString.stringify(params)
}

export default function NewClassSearch() {
    const router = useRouter()

    const [classState, setClassState] = useState({
        term: "",
        subject: "",
        catalogNbr: "",
        keywords: ""
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const val = event.target.value;

        setClassState(prevState => ({
            ...prevState,
            [name]: val
        }));
    };

    console.log('Updated State:', classState)

    return (
        <div className="md:w-1/2 border-gray-300 rounded-xl border-solid border flex flex-col items-center p-2 focus:border-red-500">
            <Link href="/classSearch"><div className="text-2xl">Course Search</div></Link>
            <div className="flex h-1/3 w-full justify-center m-6">
                <div className="w-2/3 rounded-xl border-solid border transition-all hover:border-red-500 flex justify-between focus-within:border-red-500">
                    <input
                        type="text"
                        name="subject"
                        onChange={handleChange}
                        className="rounded-xl p-2 w-11/12 outline-0 border-none"
                        placeholder="Search for classes. Either by name, number, or keywords"
                    />
                    <button className="flex justify-center items-center">
                        <Image src={magnifyingGlass} width={25} height={25} className="m-2" />
                    </button>
                </div>
            </div>
            <div className="text-xl p-2 w-1/2 flex justify-around">
                <button onClick={() => router.push("/classSearch/classList?" + getQueryStringFromState(classState))} className="w-32 border-gray-300 rounded-md border-solid border bg-red-500 text-white">
                    Search
                </button>
                <button className="text-xl p-2 w-32 border-gray-300 rounded-md border-solid border bg-red-500 text-white">
                    Filters
                </button>
            </div>
        </div>
    );
}
