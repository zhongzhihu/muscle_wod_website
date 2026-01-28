import Link from "next/link";

export default function PrivacyPolicy() {
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
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Privacy Policy
            </h1>
            <p className="text-gray-400">
              Effective Date: November 1, 2025
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12 space-y-10">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Muscle WOD ("we," "our," "us") values your privacy. This Privacy Policy explains that our app does not collect, store, use, or share any personal data.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                We do <strong className="text-red-400">not</strong> collect any personal information or usage data. This means:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>No account or registration is required.</li>
                <li>No personal data is stored on our servers.</li>
                <li>No analytics or tracking data is collected.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Third-Party Services</h2>
              <p className="text-gray-400 leading-relaxed">
                Muscle WOD does not use any external analytics, advertising, or user tracking services. No data is shared with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Children's Privacy</h2>
              <p className="text-gray-400 leading-relaxed">
                Since we do not collect any personal data from users of any age, Muscle WOD is safe for use by individuals including children. However, the app is intended for general audiences and is not specifically designed for children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Changes to This Privacy Policy</h2>
              <p className="text-gray-400 leading-relaxed">
                We may update this Privacy Policy in the future. If changes occur, we will update this page with the new Effective Date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                If you have any questions about this Privacy Policy, you may contact us at:
              </p>
              <a 
                href="mailto:linguico.app@gmail.com" 
                className="text-red-500 hover:text-red-400 transition-colors font-medium"
              >
                linguico.app@gmail.com
              </a>
            </section>

            <div className="pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-500">
                By using Muscle WOD, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 bg-gray-950 text-center">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-6 mb-8 text-sm font-medium">
             <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
               Contact Us
             </Link>
             <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
               Privacy Policy
             </Link>
          </div>
          <p className="text-gray-500 mb-4">&copy; {new Date().getFullYear()} Muscle WOD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
