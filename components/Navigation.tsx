'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import SchedulerModal from './SchedulerModal';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScheduler, setShowScheduler] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/attorney', label: 'The Attorney' },
    { href: '/war-room', label: 'The War Room' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#FFD700]">
                GRIFFITHS LAW
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#F3F4F6] hover:text-[#FFD700] transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => setShowScheduler(true)}
                className="bg-[#FFD700] text-[#111111] px-6 py-2 rounded-md font-bold hover:bg-[#FFC700] transition-colors duration-200"
              >
                SCHEDULE FREE CONSULTATION
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#F3F4F6]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#F3F4F6] hover:text-[#FFD700] transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setShowScheduler(true);
                    setIsOpen(false);
                  }}
                  className="bg-[#FFD700] text-[#111111] px-6 py-2 rounded-md font-bold hover:bg-[#FFC700] transition-colors duration-200 text-left"
                >
                  SCHEDULE FREE CONSULTATION
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <SchedulerModal 
        isOpen={showScheduler} 
        onClose={() => setShowScheduler(false)} 
      />
    </>
  );
}
