
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Star, Phone, Calendar, ArrowLeft } from "lucide-react";
import { formatDistance, addDays } from "date-fns";
import { fr } from "date-fns/locale";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { 
  getTechnicianById, 
  getSimilarTechnicians 
} from "@/services/technicianService";
import { Technician } from "@/types/technician";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Layout from "@/components/Layout";

const TechnicianDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [technician, setTechnician] = useState<Technician | null>(null);
  const [similarTechnicians, setSimilarTechnicians] = useState<Technician[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [availableTimes, setAvailableTimes] = useState<boolean[]>([]);
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const timeSlots = ["8:00", "9:30", "11:00", "12:30", "14:00", "15:30", "17:00", "18:30"];

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    const tech = getTechnicianById(id);
    if (tech) {
      setTechnician(tech);
      setSimilarTechnicians(getSimilarTechnicians(id, 4));
      
      // Set initial availability for today
      const today = new Date();
      const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      setAvailableTimes(tech.availability[formattedDate] || Array(8).fill(false));
    }
    setLoading(false);
  }, [id]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    
    // Format date to match the availability data format (YYYY-MM-DD)
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    
    // For demo purposes, generate random availability if not in our test data
    if (technician && technician.availability[formattedDate]) {
      setAvailableTimes(technician.availability[formattedDate]);
    } else {
      // Generate random availability for dates not in our mock data
      setAvailableTimes(Array(8).fill(null).map(() => Math.random() > 0.3));
    }
  };

  const handleBooking = () => {
    if (selectedTime === null) return;
    
    // In a real app, this would call an API to book the appointment
    alert(`Réservation effectuée avec ${technician?.name} pour le ${selectedDate.toLocaleDateString('fr-FR')} à ${timeSlots[selectedTime]}`);
  };

  if (loading) {
    return (
      <Layout>
        <div className="bricoleur-container pt-24 pb-16 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bricoleur-primary"></div>
        </div>
      </Layout>
    );
  }
  
  if (!technician) {
    return (
      <Layout>
        <div className="bricoleur-container pt-24 pb-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Technicien non trouvé</h2>
            <p className="text-gray-600 mb-6">Le technicien que vous recherchez n'existe pas ou a été supprimé.</p>
            <Link to="/technicians">
              <Button>Retour à la liste des techniciens</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bricoleur-container pt-24 pb-16">
        <Link to="/technicians" className="inline-flex items-center mb-6 text-bricoleur-primary hover:underline">
          <ArrowLeft size={16} className="mr-2" />
          Retour à la liste
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column: Main info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Header section with cover image */}
              <div className="relative h-64 bg-gradient-to-r from-bricoleur-primary/80 to-purple-600/80">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-start">
                    <img 
                      src={technician.avatar} 
                      alt={technician.name} 
                      className="w-24 h-24 rounded-full border-4 border-white object-cover mr-4"
                    />
                    <div>
                      <h1 className="text-3xl font-bold">{technician.name}</h1>
                      <div className="flex items-center my-1">
                        <Star className="fill-yellow-400 stroke-yellow-400 mr-1" size={16} />
                        <span className="font-medium">{technician.rating.toFixed(1)}</span>
                        <span className="mx-1 text-sm">({technician.jobsCompleted} missions)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin size={14} className="mr-1" />
                        {technician.location}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {technician.specialties.map(specialty => (
                          <span 
                            key={specialty} 
                            className="text-xs bg-white bg-opacity-20 rounded-full px-3 py-1"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Body content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">À propos</h2>
                <p className="text-gray-700 mb-8">{technician.description}</p>
                
                <h2 className="text-xl font-semibold mb-4">Galerie</h2>
                <Carousel className="w-full">
                  <CarouselContent>
                    {technician.images.map((image, index) => (
                      <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3">
                        <div className="p-1">
                          <div className="aspect-square overflow-hidden rounded-lg">
                            <img
                              src={image}
                              alt={`Photo ${index + 1} de ${technician.name}`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">Zone d'intervention</h2>
                <div className="h-64 rounded-lg overflow-hidden mb-8">
                  <MapContainer 
                    center={[technician.coordinates.lat, technician.coordinates.lng]} 
                    zoom={13} 
                    className="h-full w-full"
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[technician.coordinates.lat, technician.coordinates.lng]}>
                      <Popup>{technician.name}<br/>{technician.location}</Popup>
                    </Marker>
                  </MapContainer>
                </div>
                
                <div className="border-t pt-6">
                  <h2 className="text-xl font-semibold mb-4">Techniciens similaires</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {similarTechnicians.map(tech => (
                      <Link to={`/technicians/${tech.id}`} key={tech.id} className="block">
                        <Card className="hover:shadow-md transition-shadow overflow-hidden">
                          <img 
                            src={tech.avatar} 
                            alt={tech.name} 
                            className="w-full h-32 object-cover"
                          />
                          <CardContent className="p-3">
                            <h3 className="font-medium">{tech.name}</h3>
                            <div className="flex items-center text-sm">
                              <Star className="fill-yellow-400 stroke-yellow-400" size={12} />
                              <span className="ml-1">{tech.rating.toFixed(1)}</span>
                            </div>
                            <div className="text-xs text-gray-600 mt-1 line-clamp-1">
                              {tech.specialties.join(", ")}
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column: Booking */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Réserver une prestation</h2>
              
              <div className="text-2xl font-bold text-bricoleur-primary mb-4">
                {technician.price.toLocaleString()} FCFA
                <span className="text-sm font-normal text-gray-500 ml-1">/ heure</span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-base font-medium mb-2">Choisir une date</h3>
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && handleDateSelect(date)}
                  disabled={[
                    { before: new Date() },
                    { after: addDays(new Date(), 30) }
                  ]}
                  className="border rounded-md pointer-events-auto"
                />
              </div>
              
              <div className="mb-6">
                <h3 className="text-base font-medium mb-2">Horaires disponibles</h3>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((time, index) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(index)}
                      disabled={!availableTimes[index]}
                      className={`p-2 text-center rounded-md transition-colors ${
                        selectedTime === index
                          ? 'bg-bricoleur-primary text-white'
                          : availableTimes[index]
                            ? 'bg-gray-100 hover:bg-gray-200'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              
              <Button 
                className="w-full"
                disabled={selectedTime === null}
                onClick={handleBooking}
              >
                Réserver maintenant
              </Button>
              
              <div className="mt-4 flex items-center text-sm text-gray-600">
                <Calendar size={16} className="mr-2" />
                <span>
                  {selectedDate && formatDistance(selectedDate, new Date(), { 
                    addSuffix: true, 
                    locale: fr 
                  })}
                </span>
              </div>
              
              <div className="mt-6 border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Tarif horaire</span>
                  <span>{technician.price.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Frais de service</span>
                  <span>{Math.round(technician.price * 0.05).toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between items-center font-bold mt-4 pt-4 border-t">
                  <span>Total</span>
                  <span>{Math.round(technician.price * 1.05).toLocaleString()} FCFA</span>
                </div>
              </div>
              
              <div className="mt-6 flex items-center">
                <div className="flex-1">
                  <div className="text-gray-600">Besoin d'assistance ?</div>
                  <div className="font-medium">Contactez-nous</div>
                </div>
                <Button variant="outline" className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  Appeler
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TechnicianDetails;
