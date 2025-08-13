import { ArrowUp } from 'lucide-react';
import React from 'react'

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex 
    flex-wrap justify-center items-center gap-2 md:gap-6 lg:gap-6">
      
      <p className="text-sm text-muted-foreground">
        Made with ❤️ by Mohamed Abdelbaset.
        &copy; {new Date().getFullYear()} 
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
}
