"use client";

import Link from 'next/link';
import { Mountain, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import React from 'react';

export function Header() {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);


  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/livestock', label: 'Livestock' },
    { href: '/meats', label: 'Meats' },
    { href: '/gallery', label: 'Gallery' },
    // { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

   const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm shadow-sm">
         <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-headline text-foreground">Golden Rogers Ranch</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-base font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetHeader>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            </SheetHeader>
          <SheetContent side="right">
            <div className="grid gap-4 py-6">
              <Link href="/" className="flex items-center gap-2 mb-4" onClick={handleLinkClick}>
                 <Mountain className="h-6 w-6 text-primary" />
                 <span className="text-xl font-bold font-headline text-foreground">Golden Rogers Ranch</span>
              </Link>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={handleLinkClick} className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </div>
            </SheetContent>
          </Sheet>
        </div>
    </header>
  );
}