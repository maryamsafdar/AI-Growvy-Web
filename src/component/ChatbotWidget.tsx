'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
      setShowWelcome(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowWelcome(false);
  };

  return (
    <div>
      {/* Floating Button */}
    <button
  onClick={toggleChat}
  className={`fixed bottom-6 right-6 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full shadow-[0_0_20px_rgba(34,197,94,0.6)] 
    border-[3px] border-white z-50 flex items-center justify-center transition-all duration-300 ease-in-out 
    hover:rotate-6 hover:scale-110 hover:shadow-green-400/50 ${!isOpen ? 'animate-softPulse' : ''}`}
  style={{ fontSize: '2.2rem' }}
  aria-label="Open Chatbot"
>
  <span className="animate-bounce-slow">🤖</span>
</button>




      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-[90vw] max-w-md h-[75vh] bg-white shadow-2xl rounded-3xl overflow-hidden z-50 border border-gray-300 animate-slide-up">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-t-3xl shadow-sm">
            <div className="flex items-center gap-2">
              <Image src="/growvy_logo.png" alt="Growvy Logo" width={30} height={30} />
              <span className="font-semibold text-sm sm:text-base">Growvy AI Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-xl font-bold hover:text-red-200 transition"
              aria-label="Close Chatbot"
            >
              ×
            </button>
          </div>

          {/* Embedded Chat */}
          <iframe
            src="http://localhost:8501/" // replace with live URL
            title="Growvy Chatbot"
            width="100%"
            height="100%"
            className="border-none"
          ></iframe>
        </div>
      )}

      {/* Welcome Bubble */}
      {showWelcome && (
        <div className="fixed bottom-28 right-6 bg-white border border-gray-300 shadow-xl p-3 px-4 rounded-xl z-40 animate-bubble-slide flex items-center gap-2 max-w-xs">
          <span className="text-xl">🤖</span>
          <p className="text-gray-700 text-sm font-medium">Hi there! How can I help you today?</p>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes bubbleSlide {
          from {
            transform: translateY(10px);
            opacity: 0;
          }
          to {
            transform: translateY(0px);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slideUp 0.4s ease-out;
        }

        .animate-bubble-slide {
          animation: bubbleSlide 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
