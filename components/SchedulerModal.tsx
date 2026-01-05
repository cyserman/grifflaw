'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';

interface SchedulerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SchedulerModal({ isOpen, onClose }: SchedulerModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-75"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[#1a1a1a] rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-[#FFD700]">
            Schedule Your Free Consultation
          </h2>
          <button
            onClick={onClose}
            className="text-[#F3F4F6] hover:text-[#FFD700] transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Scheduler Embed */}
        <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 100px)' }}>
          {/* Cal.com Embed - Replace with your actual Cal.com link */}
          <div className="bg-[#111111] rounded-lg p-8 text-center border border-gray-700">
            <p className="text-[#F3F4F6] mb-4">
              To complete the integration, add your Cal.com embed code here:
            </p>
            <ol className="text-left text-[#F3F4F6] space-y-2 max-w-2xl mx-auto">
              <li>1. Sign up at <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:underline">Cal.com</a></li>
              <li>2. Create your event type (e.g., "Free Consultation - 30 min")</li>
              <li>3. Copy the embed code from Cal.com dashboard</li>
              <li>4. Replace this placeholder in <code className="bg-gray-800 px-2 py-1 rounded">components/SchedulerModal.tsx</code></li>
              <li>5. Configure SMS notifications in Cal.com settings:
                <ul className="ml-6 mt-2 space-y-1 text-sm">
                  <li>• Go to Settings → Notifications</li>
                  <li>• Add your phone number for SMS alerts</li>
                  <li>• Enable "New Booking" notifications</li>
                  <li>• Customize message: "New Lead: [Name] booked a consult"</li>
                </ul>
              </li>
            </ol>
            
            {/* Placeholder for Cal.com embed */}
            <div className="mt-8 p-8 bg-gray-800 rounded border-2 border-dashed border-gray-600">
              <p className="text-gray-400">Cal.com Scheduler Embed Goes Here</p>
              <p className="text-sm text-gray-500 mt-2">
                Example: &lt;Cal calLink="your-username/consultation" /&gt;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
