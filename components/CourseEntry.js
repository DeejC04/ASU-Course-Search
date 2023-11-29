export default function CourseEntry({ courseSubject, courseName, courseNumber, courseDescription }) {
    return (
        <main>
            <div className="border-white border-solid border-2 w-1/3">
                <div className="bg-gray-800 text-2xl font-bold p-2">
                    {courseSubject} {courseNumber}: {courseName}
                </div>
                    <div className="p-2">
                        {courseDescription}
                    </div>
                </div>
        </main>
    )
}