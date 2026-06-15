import { MapPin, Route, Phone, Clock, ShieldCheck, Navigation } from "lucide-react";
import { GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_LOCATION_URL, DIRECT_DIAL_PHONE } from "../data";

export default function Location() {
  return (
    <section id="location" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Visual Separation Border */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-slate-200/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-edu-accent font-mono text-xs uppercase tracking-widest font-extrabold block">
            SAFE STUDY LOCATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-edu-indigo tracking-tight">
            Our Tuition Center Location
          </h2>
          <p className="text-slate-500 font-light text-sm leading-relaxed">
            Conveniently situated in a quiet, premier, and exceptionally secure residential pocket of Shyam Nagar. Easily accessible by local transport lines.
          </p>
          <div className="w-16 h-1.5 bg-edu-accent mx-auto rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Address, Guidelines & Amenities Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6 flex-grow">
              
              {/* Proximity / Accessibility Banner */}
              <div className="flex items-center gap-3 bg-edu-indigo/5 border border-edu-indigo/10 p-3.5 rounded-xl text-xs text-edu-indigo font-medium">
                <ShieldCheck className="w-4 h-4 text-edu-accent flex-shrink-0" />
                <span>Premier residential security, safe for female students in evening hours.</span>
              </div>

              {/* Physical Address Details */}
              <div className="space-y-4">
                <h3 className="font-display font-extrabold text-[#0F2942] text-lg leading-tight flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-edu-accent flex-shrink-0" />
                  <span>Tuition Study Headquarters</span>
                </h3>
                <div className="space-y-1 pl-7 text-xs sm:text-sm text-slate-600 font-light">
                  <p className="font-semibold text-slate-800">D-102, Siddharth Path</p>
                  <p>Shyam Nagar, Jaipur</p>
                  <p>Rajasthan, India - 302019</p>
                </div>
              </div>

              {/* Transit & Accessibility Guide */}
              <div className="border-t border-slate-50 pt-5 space-y-4">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-700 flex items-center gap-2">
                  <Route className="w-4 h-4 text-edu-accent" />
                  <span>Local Accessibility Guide</span>
                </h4>
                <ul className="space-y-3 pl-7 list-disc list-outside text-xs text-slate-500 leading-relaxed font-light">
                  <li><span className="font-semibold text-slate-700">Metro Station Proximity:</span> Just 5 minutes walking distance (under 400m) from Shyam Nagar Metro station gate.</li>
                  <li><span className="font-semibold text-slate-700">Neighborhood:</span> Highly residential, safe, illuminated streets with minimal vehicular noise ensuring undisturbed study concentration.</li>
                  <li><span className="font-semibold text-slate-700">Bicycle Bays:</span> Dedicated parking yard compound inside the building walls for students riding bicycles.</li>
                </ul>
              </div>

              {/* Opening Hours & Timing */}
              <div className="border-t border-slate-50 pt-5 space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-700 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-edu-accent" />
                  <span>Timings & Counseling Hours</span>
                </h4>
                <div className="pl-7 text-xs text-slate-500 space-y-1">
                  <p><span className="font-semibold text-slate-700">Class Hours:</span> Mon - Sat: 3:30 PM - 8:30 PM</p>
                  <p><span className="font-semibold text-slate-700">Parent Counseling:</span> Wed & Sat: 4:00 PM - 6:00 PM (Prior Slot Booking Required)</p>
                  <p><span className="font-semibold text-slate-700">Sunday Sessions:</span> 9:00 AM - 1:00 PM (Mock exams starting November)</p>
                </div>
              </div>

            </div>

            {/* Quick Map Action Call To Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={GOOGLE_MAPS_LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0F2942] hover:bg-edu-royal text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-xl flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all"
              >
                <Navigation className="w-4 h-4 text-edu-accent animate-bounce" />
                <span>Get Directions</span>
              </a>
              <a
                href={`tel:${DIRECT_DIAL_PHONE}`}
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-xl flex items-center justify-center gap-2.5 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-edu-indigo" />
                <span>Call Center Now</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Iframe */}
          <div className="lg:col-span-7 relative h-[380px] lg:h-auto rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-300">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anju Ma'am CBSE Tuition Shyam Nagar Center Location Map Address"
              className="absolute inset-0 w-full h-full grayscale-[10%] hover:grayscale-0 transition-all duration-300"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
