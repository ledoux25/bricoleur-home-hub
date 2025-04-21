import LocationMap from "./LocationMap";
import { Rocket, ShieldCheck, Users2 } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="section">
      <div className="bricoleur-container">
        <div className="text-center mb-16">
          <h2 className="section-title">How it Works</h2>
          <p className="section-subtitle">
            Get connected with reliable technicians in just a few simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-hover p-6 rounded-xl shadow-md bg-white">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-bricoleur-primary/20 text-bricoleur-primary mb-4 mx-auto">
              <Rocket className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Instant Booking
            </h3>
            <p className="text-gray-700 text-center">
              Find available technicians and book appointments instantly.
              No waiting, no hassle.
            </p>
          </div>

          <div className="card-hover p-6 rounded-xl shadow-md bg-white">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-bricoleur-primary/20 text-bricoleur-primary mb-4 mx-auto">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Verified Professionals
            </h3>
            <p className="text-gray-700 text-center">
              Our technicians are background-checked and verified for your
              peace of mind.
            </p>
          </div>

          <div className="card-hover p-6 rounded-xl shadow-md bg-white">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-bricoleur-primary/20 text-bricoleur-primary mb-4 mx-auto">
              <Users2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Real-time Support
            </h3>
            <p className="text-gray-700 text-center">
              Get real-time support and communicate directly with your
              technician.
            </p>
          </div>
        </div>

        {/* Insert the map AFTER main content; adjust position as needed */}
        <div className="mt-8 mb-4 flex justify-center">
          <LocationMap />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
