import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-red-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter uppercase">
            <span className="text-red-500">Muscle</span> WOD
          </Link>
          <Link 
            href="https://apps.apple.com/us/app/muscle-wod-workout-generator/id6753089071"
            className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
          >
            Download App
          </Link>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-white">
            Contact Us
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            We'd love to hear from you. Whether you have a question about features, feedback on the app, or need to report a bug, we're here to help.
          </p>

          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-12">
            <svg className="w-12 h-12 text-red-500 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h2 className="text-2xl font-bold mb-4 text-white">Get in Touch</h2>
            <p className="text-gray-400 mb-6">
              Send us an email directly and we'll get back to you as soon as possible.
            </p>
            <a 
              href="mailto:linguico.app@gmail.com" 
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors"
            >
              linguico.app@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full border-t border-gray-800 py-8 bg-gray-950 text-center">
        <div className="container mx-auto px-6">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Muscle WOD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
