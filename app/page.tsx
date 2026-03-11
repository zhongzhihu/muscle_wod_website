import Image from "next/image";
import Link from "next/link";
import squareIcon from "./_assets/square-icon_transparent.png";
import appStoreBadge from "./_assets/appstore_badge_en.svg";
import playStoreBadge from "./_assets/playstore_badge.png";
import wodsDemo from "./_assets/3000 WODs with demonstration videos.png";
import timer from "./_assets/Built-in WOD workout timer.png";
import filters from "./_assets/Filter WODs by Equipment.png";
import progress from "./_assets/Track Progress & PR.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-gray-700 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
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
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Features Grid */}
      <section className="pt-40 pb-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Stronger, Faster and Healthier!</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Whether you have access to a full gym or no equipment at all, Muscle WOD generates the most effective workouts to build muscle and burn fat efficiently. 
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link 
                href="https://apps.apple.com/us/app/muscle-wod-workout-generator/id6753089071"
                className="group hover:scale-105 transition-transform duration-200"
              >
                <div className="w-[140px] h-[45px] sm:w-[190px] sm:h-[60px] relative">
                    <Image 
                      src={appStoreBadge} 
                      alt="Download on the App Store" 
                      fill
                      className="object-contain"
                    />
                </div>
              </Link>
              
              <Link
                href="https://play.google.com/store/apps/details?id=com.linguistic.wodbuilder"
                className="group hover:scale-105 transition-transform duration-200"
              >
                <div className="w-[140px] h-[45px] sm:w-[190px] sm:h-[60px] relative">
                  {/* New Tag */}
                  <div className="absolute -top-3 -right-2 bg-gray-700 border border-gray-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10 tracking-wide uppercase shadow-lg">
                    New
                  </div>
                  <Image
                    src={playStoreBadge}
                    alt="Get it on Google Play"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>

              <div className="relative group">
                <div className="absolute -top-3 -right-2 bg-gray-700 border border-gray-600 text-gray-300 text-[10px] font-bold px-2 py-0.5 rounded-full z-10 tracking-wide uppercase">
                  Coming Soon
                </div>
                <button disabled className="flex items-center justify-center gap-2 sm:gap-3 bg-gray-800/50 text-gray-400 w-[140px] h-[45px] sm:w-[190px] sm:h-[60px] rounded-xl font-bold text-sm sm:text-lg border border-gray-700/50 cursor-not-allowed">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>Web App</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-6xl mx-auto">
            <div className="relative">
              <Image
                src={wodsDemo}
                alt="3000 WODs with demonstration videos"
                className="rounded-2xl border border-gray-800 shadow-2xl w-full h-auto"
              />
            </div>
            <div className="relative">
              <Image
                src={timer}
                alt="Built-in WOD workout timer"
                className="rounded-2xl border border-gray-800 shadow-2xl w-full h-auto"
              />
            </div>
            <div className="relative">
              <Image
                src={filters}
                alt="Filter WODs by Equipment"
                className="rounded-2xl border border-gray-800 shadow-2xl w-full h-auto"
              />
            </div>
            <div className="relative">
              <Image
                src={progress}
                alt="Track Progress & PR"
                className="rounded-2xl border border-gray-800 shadow-2xl w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="3000+ Real WODs"
              description="Access a massive library of real WODs sourced from CrossFit.com. Never get bored with your routine again."
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />}
            />
            <FeatureCard 
              title="Smart Filters"
              description="Filter by equipment (barbell, dumbbell, etc.), target muscle groups, or workout types like AMRAP and EMOM."
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />}
            />
            <FeatureCard 
              title="Video Demos"
              description="Clear demonstration videos for every exercise ensure you maintain proper form and technique safely."
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
            />
            <FeatureCard 
              title="Built-in Timer"
              description="Integrated workout timer tracks your rounds, reps, and total time so you can focus on the work."
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
            />
            <FeatureCard 
              title="Progress Tracking"
              description="Log your workouts and visualize your personal records (PRs) over time to see your improvement."
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />}
            />
            <FeatureCard 
              title="Scaling Options"
              description="Beginner, Intermediate, or Rx. Adapt every WOD to your current fitness level."
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
            />
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

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800 transition-colors">
      <div className="w-12 h-12 rounded-lg bg-gray-200/10 flex items-center justify-center text-gray-200 mb-4">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {icon}
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
