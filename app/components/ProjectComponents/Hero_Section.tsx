'use client'
import { AnimatedGradientText } from "../animated-gradient-text"

export default function HeroSection(){
    return(
    <section className="relative z-10 pt-32 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedGradientText 
            as="h1" 
            className="text-5xl sm:text-6xl md:text-7xl bg-gradient-to-r font-bold mb-6 from-emerald-400 via-cyan-400 to-purple-400 text-transparent"
          >
            My Projects
          </AnimatedGradientText>
          <p className="text-xl sm:text-2xl text-slate-300 mb-4">
            A showcase of my work in Full Stack Development, Data Science & Machine Learning
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Click on any project card below to dive deep into the technical details, challenges, and solutions.
          </p>
        </div>
      </section>
    )
}
