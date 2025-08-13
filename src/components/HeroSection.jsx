import { ArrowDown } from 'lucide-react'
import React from 'react'

export default function HeroSection() {
  return <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
    <div className='container max-w-4xl mx-auto text-center z-10'>
        <div className='space-y-6'>
            <h1 className='text-4xl md:text-5xl font-bold tracking-tight'>
                <span className='opacity-0 animate-fade-in'> Hi, I'm</span>
                <span className='opacity-0 text-primary animate-fade-in-delay-1'> Mohamed</span>
                <span className='opacity-0 text-gradiant ml-2 animate-fade-in-delay-2'> Abdelbaset</span>
            </h1>
            <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                Frontend Developer | React & Next.js | Passionate about building modern web interfaces.
            </p>
            <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                <a href="#projects" className='cosmic-button'>
                    View My Works
                </a>
            </div>
        </div>
    </div>

    <div className='absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center animate-bounce'>
        <span className='text-sm text-muted-foreground'>Scroll</span>
        <ArrowDown className='h-5 text-primary'/>
    </div>
  </section>
}
