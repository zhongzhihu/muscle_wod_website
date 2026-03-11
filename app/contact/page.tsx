import Image from "next/image";
import Link from "next/link";
import squareIcon from "../_assets/square-icon_transparent.png";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-gray-700 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src={squareIcon} 
              alt="Muscle WOD Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8"
            />
            <div className="text-xl font-bold tracking-tighter uppercase">
                 <span style={{ color: '#fff', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 900 }}>Muscle WOD</span>
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Contact Us
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
            <p className="text-lg text-gray-300 mb-6">
              You can reach us via email at:
            </p>
            <a 
              href="mailto:linguico.app@gmail.com" 
              className="text-2xl md:text-3xl font-bold text-white hover:text-gray-300 transition-colors"
            >
              linguico.app@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 bg-gray-950 text-center">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-6 mb-8 text-sm font-medium">
             <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
               Privacy Policy
             </Link>
          </div>
          <p className="text-gray-500 mb-4">&copy; {new Date().getFullYear()} Muscle WOD. All rights reserved.</p>
          <p className="text-gray-600 text-sm">
            Not affiliated with CrossFit, Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}