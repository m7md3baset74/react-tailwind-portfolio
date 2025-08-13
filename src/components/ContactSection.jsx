import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '../lip/utils'
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export default function ContactSection() {

    const [formData, setFormData] = useState ({
        name: '',
        email: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState ({
        submitting: false,
        success: false,
        error: false,
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const {toast} = useToast();
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        
        setFormStatus({
            submitting: true,
            success: false,
            error: false,
            message: '',
        });
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }
            );

            setFormStatus({
                submitting: false,
                success: true,
                error: false,
                message: 'Message sent successfully!',
            });

            setTimeout(() => {
            toast({
            title: 'Message Sent ✅',
            description: 'Thank you for reaching out! I will get back to you soon.',})
              }, 1000);

            setFormData({
                name: '',
                email: '',
                message: '',
            });
        }catch (error){
            setFormStatus({
                submitting: false,
                success: false,
                error: true,
                message: 'Failed to send message. Please try again.',
            });
            setTimeout(() => {
        toast({
            title: 'Message Failed ❌',
            description: 'Something went worng. Please try again.',})
    }, 1000);
        }


};

  return <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
    <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Get In 
        <span className='text-primary'> Touch</span></h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Have a job opportunity or project in mind and want to collaborate? Feel to reach out.
            I'm always open to discussing new opportunities.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='space-y-8'>
                <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
                <div className='space-y-6 justify-center'>
                    <div className='flex items-start space-x-4'>
                        <div className='p-3 rounded-full bg-primary/10'><Mail 
                        className='h-6 w-6 text-primary'/></div>
                        <div>
                            <h4 className='font-medium'>Email</h4>
                            <a className='text-muted-foreground hover:text-primary transition-colors' 
                            href="mailto:mohamedabdelbasset265@gmail.com">mohamedabdelbasset265@gmail.com</a>
                        </div>
                    </div>

                    <div className='flex items-start space-x-4'>
                        <div className='p-3 rounded-full bg-primary/10'><Phone 
                        className='h-6 w-6 text-primary'/></div>
                        <div>
                            <h4 className='font-medium'>Phone</h4>
                            <a className='text-muted-foreground hover:text-primary transition-colors' 
                            href="tel:+201064047214">+20 106 404 7214</a>
                        </div>
                    </div>

                    <div className='flex items-start space-x-4'>
                        <div className='p-3 rounded-full bg-primary/10'><MapPin 
                        className='h-6 w-6 text-primary'/></div>
                        <div>
                            <h4 className='font-medium'>Location</h4>
                            <a className='text-muted-foreground hover:text-primary transition-colors' 
                            >Nasr City, Cairo, Egypt</a>
                        </div>
                    </div>
                </div>

                <div className='pt-8'>
                    <h4 className='font-medium mb-4'>Connect With Me</h4>
                    <div className='flex space-x-4 justify-center'>
                        <a className='hover:text-primary' href="https://www.linkedin.com/in/mohamed-abd-elbaset-033644213" target='_blank'>
                            <Linkedin/>
                        </a>
                        <a className='hover:text-pink-500' href="https://www.instagram.com/3baset_74?igsh=MWk0YzA3ODdxaHNqYw==" target='_blank'>
                            <Instagram/>
                        </a>
                        <a className='hover:text-blue-600' href="https://www.facebook.com/share/16UaYr1GJC/" target='_blank'>
                            <Facebook/>
                        </a>
                    </div>
            </div>
         </div>
         <div className='bg-card p-8 rounded-lg shadow-xs'>
            <h3 className='text-2xl font-semibold mb-6'>Send Me a Message</h3>
            <form action="" onSubmit={handleSubmit} className='space-y-6 '>
                <div>
                    <label className='block text-sm font-medium mb-2' htmlFor="name">Your Name</label>
                    <input type="text" id='name' name='name' value={formData.name} required onChange={handleInputChange}
                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus-outline-hidden focus:ring-2 focus:ring-primary'
                    placeholder='Mohamed...' />
                </div>

                <div>
                    <label className='block text-sm font-medium mb-2' htmlFor="email">Your Email</label>
                    <input type="email" id='email' name='email' value={formData.email} required onChange={handleInputChange}
                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus-outline-hidden focus:ring-2 focus:ring-primary'
                    placeholder='Mohamed@gmail.com' />
                </div>

                <div>
                    <label className='block text-sm font-medium mb-2' htmlFor="message">Your Message</label>
                    <textarea  type="text" id='message' name='message' value={formData.message} required onChange={handleInputChange}
                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus-outline-hidden focus:ring-2 focus:ring-primary resize-none'
                    placeholder="Hello, I'd like to talk about..." />
                </div>

                <button type='submit' disabled={formStatus.submitting} 
                className={cn('cosmic-button w-full flex items-center justify-center gap-2',

                )}>{formStatus.submitting ? "Sending..." : "Send Message"} 
                <Send size={16}/>
                </button>
            </form>
         </div>
        </div>
    </div>
  </section>
}
