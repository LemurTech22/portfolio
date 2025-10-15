import React from "react";
import { User } from "lucide-react";


export default function AboutMe(){

    interface SkillGroup{
        category: string;
        items: string[]
    }

    const skills: SkillGroup[] = [
        { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
        { category: "Backend", items: ["Python", "SQL", "FastAPI", "Node.JS"] },    
        { category: "Data Science", items: ["Python", "Pandas", "Scikit-Learn", "PySpark", "TensorFlow", "PyCaret", "Tableau", "Power BI", "Excel", "Julia"] },    
        { category: "Tools", items: ["Git", "Docker", "AWS", "Jenkins", "VS Code", "Postman", "Jupyter Notebook", "Google Colab"] },
  ];
    
    return(
        <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <User className="text-emerald-300" size={32} />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Passionate developer with experience in web development and machine learning, committed to creating innovative, real-world solutions.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                When I am not coding, you will find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-accent">Skills & Technologies</h3>
              <div className="space-y-4">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="font-semibold text-slate-300 mb-2">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="bg-slate-900 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-accent hover:text-white transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}