import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'
import image1 from '../../public/projects/1.jpg'
import image2 from '../../public/projects/2.jpg'
import image3 from '../../public/projects/3.jpg'
import image4 from '../../public/projects/4.png'
import image5 from '../../public/projects/5.png'
import image6 from '../../public/projects/6.png'
import image7 from '../../public/projects/7.png'
import image8 from '../../public/projects/8.png'
import image9 from '../../public/projects/9.png'

const projects = [
    {
        id: 7,
        title: 'FitElite Gym Website',
        description: 'A modern, responsive fitness website for FitElite, built to attract new customers and present services in a clean, professional.',
        image: [image7],
        tags: ['React.js', 'TailwindCSS', 'JavaScript'],
        demoUrl: 'https://fitelite-gym.vercel.app/',
        githubUrl: 'https://github.com/m7md3baset74/fitelite-gym',
    },

    {
        id: 4,
        title: 'Inventory Management',
        description: 'Full-stack inventory management app with secure auth and responsive dashboard.',
        image: [image4],
        tags: ['Next.js', 'TypeScript', 'Prisma', 'postgreSQL', 'TailwindCSS'],
        demoUrl: 'https://inventory-management-blue-rho.vercel.app/',
        githubUrl: 'https://github.com/m7md3baset74/inventory-management',
    },

    {
        id: 8,
        title: 'Edge AI Landing Page',
        description: 'Building a Beautiful, Modern Landing Page for Your AI SaaS.',
        image: [image8],
        tags: ['React.js', 'TailwindCSS', 'typeScript', 'Zustand'],
        demoUrl: 'https://edge-ai-one.vercel.app/',
        githubUrl: 'https://github.com/m7md3baset74/edge-ai',
    },

    {
        id: 9,
        title: 'Task Manager',
        description: 'A task management web application built with Vue 3, The app allows users to manage tasks, assign categories, edit tasks, mark as completed.',
        image: [image9],
        tags: ['Vue.js', 'TailwindCSS', 'JavaScript', 'Pinia'],
        demoUrl: 'https://task-manager-vue-js-three.vercel.app/',
        githubUrl: 'https://github.com/m7md3baset74/task-manager-vue.js',
    },

    {
        id: 1,
        title: 'E-Commerce Website',
        description: 'Full E-commerce web application using React.js and Tailwincss, with dynamic product listing.',
        image: [image1],
        tags: ['React.js', 'TailwindCSS', 'JavaScript'],
        demoUrl: 'https://e-commerce-react2.vercel.app/',
        githubUrl: 'https://github.com/m7md3baset74/e-commerce-react2',
    },
    
    {
        id: 2,
        title: 'Note App',
        description: 'A simple note-taking app with a different design that allows users to create, edit, and delete notes.',
        image: [image2],
        tags: ['React.js', 'TailwindCSS', 'JavaScript'],
        demoUrl: 'https://note-app-mu-dusky.vercel.app/',
        githubUrl: 'https://github.com/m7md3baset74/NoteApp',
    },

    {
        id: 3,
        title: 'Zain Construction Company',
        description: 'A professional website for Zain Construction Company, showcasing their projects and services.',
        image: [image3],
        tags: ['Next.js', 'TailwindCSS', 'JavaScript'],
        demoUrl: 'https://zain-task.vercel.app/',
        githubUrl: 'https://github.com/m7md3baset74/ZainTask',
    },

    {
        id: 6,
        title: '3Hand Dashboard',
        description: 'Laravel web app It includes a dark mode, user management (add, edit, delete), and responsive design for all devices.',
        image: [image6],
        tags: ['Laravel', 'TailwindCSS', 'JavaScript', 'Blade', 'Vite integration'],
        demoUrl: 'https://github.com/m7md3baset74/3Hand-Laravel',
        githubUrl: 'https://github.com/m7md3baset74/3Hand-Laravel',
    },

    {
        id: 5,
        title: 'Product Catalog',
        description: 'A responsive React web application that displays products fetched from a REST API, featuring a clean and modern UI, product details pages.',
        image: [image5],
        tags: ['React.js', 'TailwindCSS', 'JavaScript'],
        demoUrl: 'https://product-catalog-react-beta.vercel.app/',
        githubUrl: 'https://github.com/m7md3baset74/product-catalog-react',
    },
    
]

export default function ProjectsSection() {
  return <section id='projects' className='py-24 px-4 relative'>
    <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured 
            <span className='text-primary'> Projects</span></h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project, key) => (
                <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                    <div className='h-48 overflow-hidden'>
                        <img src={project.image} alt={project.title} className='w-full
                        h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                    </div>
                    <div className='p-5'>
                        <div className='flex flex-wrap mb-4 gap-2'>
                            {project.tags.map((tag) => (
                                <span className='py-1 px-2 text-xs font-medium border rounded-full 
                                bg-secondary text-primary'>{tag} </span>
                            ))}
                        </div>
                    

                    <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                    <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex space-x-3'>
                            <a href={project.demoUrl} target='_blank' 
                            className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                <ExternalLink size={22}/>
                            </a>
                            <a href={project.githubUrl} target='_blank'
                            className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                <Github size={22}/>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className='text-center mt-12 '>
            <a className='cosmic-button w-fit flex items-center mx-auto gap-2' target='_blank' 
            href="https://github.com/m7md3baset74">Check My Github <ArrowRight size={16}/></a>
        </div>
    </div>
  </section>
}
