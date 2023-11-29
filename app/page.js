import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex h-full justify-center items-center">
        <h1 className="text-9xl">College<span className="text-red-600 font-bold">Spark</span></h1>
        <p className="text-xl m-8">Get what <span className="text-red-600 font-bold">you</span> want out of college</p>
        <div className="w-96 flex justify-between">
          <Link href={"@/app/login/page.js"} className="flex justify-center p-2 text-xl bg-red-600 text-white rounded-md w-32 hover:bg-red-700 transition-all ease-in-out delay-75">Get Started</Link>
          <Link href={"@/app/about/page.js"} className="flex justify-center p-2 text-xl bg-white border border-black border-solid text-black rounded-md w-32 hover:bg-gray-100 transition-all ease-in-out delay-75">More Info</Link>
        </div>
      </div>
    </main>
  )
}