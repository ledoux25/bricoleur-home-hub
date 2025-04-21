
import { Wrench, BarChart, Calendar, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Smart Scheduling",
    description: "Manage your bookings and availability in one place. No more double-bookings or scheduling conflicts."
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Local Visibility",
    description: "Get discovered by clients in your service area looking for your specific skills."
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Grow Your Business",
    description: "Build your reputation with verified reviews and expand your client base."
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Transparent Earnings",
    description: "Set your own rates and receive secure, on-time payments through our platform."
  }
];

const ForTechnicians = () => {
  return (
    <section id="for-technicians" className="section bg-bricoleur-light">
      <div className="bricoleur-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-bricoleur-primary w-32 h-32 rounded-bl-full opacity-10"></div>
              
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-bricoleur-primary flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <h3 className="ml-4 text-xl font-semibold">Technician Dashboard</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Today's Appointments</h4>
                  <div className="space-y-3">
                    {[
                      { time: '09:00 AM', job: 'Plumbing Repair', location: '123 Maple St' },
                      { time: '02:00 PM', job: 'Electrical Installation', location: '456 Oak Ave' }
                    ].map((appointment, index) => (
                      <div key={index} className="flex items-center p-3 bg-white rounded-md shadow-sm">
                        <div className="w-14 text-sm font-medium text-bricoleur-primary">
                          {appointment.time}
                        </div>
                        <div className="ml-3">
                          <p className="font-medium">{appointment.job}</p>
                          <p className="text-sm text-gray-500">{appointment.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Weekly Earnings</h4>
                  <div className="grid grid-cols-7 gap-1">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xs text-gray-500">{day}</div>
                        <div className="h-20 bg-white rounded-md mt-1 relative">
                          <div 
                            className="absolute bottom-0 left-0 right-0 bg-bricoleur-primary rounded-b-md"
                            style={{ height: `${Math.floor(Math.random() * 70) + 20}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-right font-medium">
                    Total: €875
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Become a Bricoleur Technician
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Join our network of trusted professionals and take your service business to the next level. We connect you with clients looking for your exact skills.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-5 rounded-xl shadow-md flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-bricoleur-primary/10 flex-shrink-0 flex items-center justify-center text-bricoleur-primary">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="btn-primary">
              Join as Technician
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForTechnicians;
