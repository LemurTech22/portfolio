"use client"
import {Link} from "@/app/resources_index"

export default function MoreProjects(){
    return(
        <section className="py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-purple-300 bg-clip-text text-transparent">
            Interested in seeing my previous projects?
        </h1>
            <Link href="/pages/project">
            <button className="border-2 border-purple-700 text-emerald-500 hover:bg-purple-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105">
                View My Work
            </button>
            </Link>
        </section>
    )
}
