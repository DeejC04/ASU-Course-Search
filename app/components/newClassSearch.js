export default function NewClassSearch() {
    return (
        <div className="md:w-1/2 h-32 border-gray-300 rounded-xl border-solid border flex flex-col justify-around p-2">
            <div>
                ASU Class Search
            </div>
            <div className="flex h-1/3 justify-around">
                <input type="text" className="w-2/3 border-gray-300 rounded-xl border-solid border hover:border-red-500"/>
                <button type="submit" className="w-1/4 border-gray-300 rounded-xl border-solid border bg-red-500"/>
            </div>
        </div>
    )
}