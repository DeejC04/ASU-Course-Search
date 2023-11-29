import Image from "next/image";
import magnifyingGlass from "@/public/magnifying-glass-svgrepo-com.svg";

export default function NewClassSearch() {
    return (
            <div className="md:w-1/2 border-gray-300 rounded-xl border-solid border flex flex-col items-center p-2 focus:border-red-500">
                <div className="text-2xl">Course Search</div>
                <div className="flex h-1/3 w-full justify-center m-6">
                    <div className="w-2/3 rounded-xl border-solid border transition-all hover:border-red-500 flex justify-between focus-within:border-red-500">
                        <input
                            type="text"
                            className="rounded-xl p-2 w-11/12 outline-0 border-none"
                            placeholder="Search for classes. Either by name, number, or keywords"
                        />
                        <button className="flex justify-center items-center">
                            <Image src={magnifyingGlass} width={25} height={25} className="m-2" />
                        </button>
                    </div>
                </div>
                <div className="text-xl p-2 w-1/2 flex justify-around">
                    <button type="submit" className="w-32 border-gray-300 rounded-md border-solid border bg-red-500 text-white">
                        Search
                    </button>
                    <button className="text-xl p-2 w-32 border-gray-300 rounded-md border-solid border bg-red-500 text-white">
                        Filters
                    </button>
                </div>
            </div>
    );
}
