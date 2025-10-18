"use client"
import {React, AnimatedGradientText} from "@/app/resources_index"

export default function HeroSection(){
    return(
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <AnimatedGradientText
            as='h1'
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-purple-300 bg-clip-text text-transparent">
            
              Hi, I am Jose Conde
            
            </AnimatedGradientText>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8">
              Full Stack Developer & Data Scientist
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            </p>
          </div>
        </div>
      </section>
    )
}