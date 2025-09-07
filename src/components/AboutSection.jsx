import React from 'react'
import myCV from '../../public/Mohamed_Abdelbaset_CV.pdf'
import { Briefcase, Code, User } from 'lucide-react'

export default function AboutSection() {
  return <section id='about' className='py-24 px-4 relative'>
    <div className='container max-w-5xl mx-auto '>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
            About <span className='text-primary'>Me</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
                <h3 className='text-2xl font-semibold'>Professional frontend developer specializing in building catchy and responsive websites.
                </h3>

                <p className='text-muted-foreground '>I have more than one year of experience in Frontend development, during which I worked on multiple 
                    diverse projects using modern technologies. I also collaborated closely with team members,
                     contributing effectively to shared goals and delivering high-quality results.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                    <a href="#contact" className='cosmic-button'>Get In Touch</a>
                    <a href={myCV} download={myCV} className='px-6 py-2 font-semibold rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                    Download CV</a>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-6'>
                <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <Code className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>Web Development</h4>
                            <p className='text-muted-foreground'>Creating responsive websites and web applications with modern frameworks.</p>
                        </div>
                    </div>
                </div>
                <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <User className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>React Developer</h4>
                            <p className='text-muted-foreground'>Developed several web projects using React.js and Next.js, including a full E-commerce website and Contributed to AutoMechanic’s official platform, implementing scalable and maintainable solutions.</p>
                        </div>
                    </div>
                </div>
                <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <Briefcase className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>Project Management</h4>
                            <p className='text-muted-foreground'>Leading projects from conception to complete with agile methodologies.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  </section>
}
