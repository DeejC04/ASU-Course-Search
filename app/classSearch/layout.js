import NewClassSearch from "@/app/components/newClassSearch";
import { Suspense } from "react";

export default function Layout({ children }) {
    return (
        <main>
            <div>
                <NewClassSearch></NewClassSearch>
            </div>
            <div>{children}</div>
        </main>
    )
}