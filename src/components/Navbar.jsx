import { Menu, X, Layers } from "lucide-react";
import { useState } from "react";

export default function Navbar({ scrolled }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled 
            ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800"
            : "bg-slate-950/20 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <Layers className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Nexa</span>
              <span className="text-blue-400">Flow</span>
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Testimonials
            </a>
          </div>

          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>

          {/* {mobileMenuIsOpen && <p>Hello</p>} */}
        </div>
      </div>

      {mobileMenuIsOpen &&
        <div className="md:hidden bg-slate-900/95  backdrop-blur-lg border-t border-gray-800 animate-in slide-in-from-top duration-300">
            <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                <a
                  href="#features"
                  onClick={() => setMobileMenuIsOpen(false)}
                  className="block text-gray-300 hover:text-white text-sm lg:text-base"
                >
                    Features
                </a>
                <a
                  href="#pricing"
                  onClick={() => setMobileMenuIsOpen(false)}
                  className="block text-gray-300 hover:text-white text-sm lg:text-base"
                >
                    Pricing
                </a>
                <a
                  href="#testimonials"
                  onClick={() => setMobileMenuIsOpen(false)}
                  className="block text-gray-300 hover:text-white text-sm lg:text-base"
                >
                    Testimonials
                </a>
            </div>
        </div>
      }
    </nav>
  );
}
