import React, {useState } from 'react'
import { cn } from '../lip/utils';
const skills = [{name: 'HTML/CSS/Bootstrap' , level: 95 , category: 'frontend'},
    {name: 'JaveScript' , level: 90 , category: 'frontend'},
    {name: 'React' , level: 90 , category: 'frontend'},
    {name: 'TypeScript' , level: 85 , category: 'frontend'},
    {name: 'TailwindCss/Sass' , level: 90 , category: 'frontend'},
    {name: 'Next.js' , level: 90 , category: 'frontend'},
    {name: 'Vue.js' , level: 80 , category: 'frontend'},

    // Tools
    {name: 'Git/Github' , level: 90 , category: 'tools'},
    {name: 'Postman' , level: 95 , category: 'tools'},
];

const categories = ['all', ...new Set(skills.map(skill => skill.category))];



export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState('all')
    const filteredSkills = activeCategory === 'all' ?
     skills : skills.filter(skill => skill.category === activeCategory);

  return <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
    <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
            My <span className='text-primary'>Skills</span>
        </h2>

        <div className='flex flex-wrap justify-center gap-4 mb-12'>
            {categories.map((category, key) => (
                <button key={key} onClick={() => setActiveCategory(category)}
                 className={cn('px-5 py-2 rounded-full bg-card text-sm font-semibold text-foreground/80 transition-colors duration-300 capitalize',
                    activeCategory === category ? 'bg-primary text-background' : 'bg-card hover:text-primary'
                 )}>
                    {category}
                </button>
                ))}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredSkills.map((skill, key) => (
                <div key={key} 
                className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                    <div className='text-left mb-4 '>
                        <h3 className='font-semibold text-lg'>{skill.name} </h3>
                    </div>
                    <div className='w-full bg-secondary/50 rounded-full h-2 overflow-hidden animate-bounce'>
                    <div className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]' 
                    style={{width: `${skill.level}%`}}/>

                    </div>
                    <div className='text-right mt-1'>
                        <span className='text-sm text-muted-foreground'>{skill.level}% </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  </section>
}
