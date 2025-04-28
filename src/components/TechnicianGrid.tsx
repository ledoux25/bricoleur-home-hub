
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import { 
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Technician } from "@/types/technician";

interface TechnicianGridProps {
  technicians: Technician[];
  loading: boolean;
}

const TechnicianGrid = ({ technicians, loading }: TechnicianGridProps) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bricoleur-primary"></div>
      </div>
    );
  }

  if (technicians.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">Aucun technicien trouvé</h3>
        <p className="text-gray-500 mb-4">Essayez d'ajuster vos filtres ou votre recherche</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technicians.map(technician => (
        <Link to={`/technicians/${technician.id}`} key={technician.id} className="block transition-transform hover:scale-105">
          <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={technician.avatar} 
                alt={technician.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                <h3 className="font-semibold text-lg">{technician.name}</h3>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="fill-yellow-400 stroke-yellow-400" size={14} />
                  <span>{technician.rating.toFixed(1)}</span>
                  <span className="text-gray-300">({technician.jobsCompleted} jobs)</span>
                </div>
              </div>
            </div>
            
            <CardContent className="p-4">
              <div className="flex items-center gap-1 text-gray-600 mb-2">
                <MapPin size={16} />
                <span className="text-sm">{technician.location} ({technician.distance} km)</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {technician.specialties.map(specialty => (
                  <span 
                    key={specialty} 
                    className="text-xs bg-gray-100 rounded-full px-2 py-1"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="p-4 pt-0 flex justify-between items-center border-t">
              <span className="font-bold text-bricoleur-primary">
                {technician.price.toLocaleString()} FCFA<span className="text-sm font-normal text-gray-500">/h</span>
              </span>
              <Button variant="outline" size="sm">Voir profil</Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default TechnicianGrid;
