
import React from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { 
  Sidebar,
  SidebarContent,
  SidebarHeader, 
  SidebarProvider,
} from "@/components/ui/sidebar";
import { TechnicianFilters } from "@/services/technicianService";

interface TechnicianFilterSidebarProps {
  filters: TechnicianFilters;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  handleFilterChange: (filterKey: keyof TechnicianFilters, value: any) => void;
  handleSearchSubmit: (e: React.FormEvent) => void;
  clearFilters: () => void;
  specialties: string[];
  locations: string[];
}

const TechnicianFilterSidebar = ({
  filters,
  searchTerm,
  setSearchTerm,
  handleFilterChange,
  handleSearchSubmit,
  clearFilters,
  specialties,
  locations,
}: TechnicianFilterSidebarProps) => {
  return (
    <Sidebar className="bg-white border-r" collapsible="icon">
      <SidebarHeader>
        <h3 className="text-lg font-bold px-4 py-2">Filtres</h3>
        <div className="px-4">
          <form onSubmit={handleSearchSubmit} className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <Input
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button type="submit" className="w-full mt-2">
              Rechercher
            </Button>
          </form>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4">
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Trier par</h4>
            <RadioGroup 
              value={`${filters.sortBy}-${filters.sortOrder}`}
              onValueChange={(value) => {
                const [sortBy, sortOrder] = value.split('-');
                handleFilterChange('sortBy', sortBy as 'price' | 'rating' | 'distance');
                handleFilterChange('sortOrder', sortOrder as 'asc' | 'desc');
              }}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="rating-desc" id="rating-desc" />
                <label htmlFor="rating-desc" className="cursor-pointer text-sm">Note (élevée à faible)</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="rating-asc" id="rating-asc" />
                <label htmlFor="rating-asc" className="cursor-pointer text-sm">Note (faible à élevée)</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="price-asc" id="price-asc" />
                <label htmlFor="price-asc" className="cursor-pointer text-sm">Prix (bas à élevé)</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="price-desc" id="price-desc" />
                <label htmlFor="price-desc" className="cursor-pointer text-sm">Prix (élevé à bas)</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="distance-asc" id="distance-asc" />
                <label htmlFor="distance-asc" className="cursor-pointer text-sm">Distance (proche à loin)</label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Spécialité</h4>
            <Select 
              value={filters.specialty || ""} 
              onValueChange={(value) => handleFilterChange('specialty', value || undefined)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Toutes les spécialités" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Toutes les spécialités</SelectItem>
                {specialties.map(specialty => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Quartier</h4>
            <Select 
              value={filters.location || ""} 
              onValueChange={(value) => handleFilterChange('location', value || undefined)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Tous les quartiers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Tous les quartiers</SelectItem>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">
              Note minimum: {filters.minRating}/5
            </h4>
            <Slider
              value={[filters.minRating || 0]}
              min={0}
              max={5}
              step={0.1}
              onValueChange={([value]) => handleFilterChange('minRating', value)}
              className="my-3"
            />
          </div>
          
          <div>
            <h4 className="font-medium mb-1">
              Prix maximum: {filters.maxPrice?.toLocaleString()} FCFA/h
            </h4>
            <Slider
              value={[filters.maxPrice || 10000]}
              min={1000}
              max={10000}
              step={500}
              onValueChange={([value]) => handleFilterChange('maxPrice', value)}
              className="my-3"
            />
          </div>
          
          <div>
            <h4 className="font-medium mb-1">
              Distance maximum: {filters.maxDistance} km
            </h4>
            <Slider
              value={[filters.maxDistance || 10]}
              min={1}
              max={10}
              step={0.5}
              onValueChange={([value]) => handleFilterChange('maxDistance', value)}
              className="my-3"
            />
          </div>
          
          <Button 
            variant="outline" 
            className="w-full mt-4"
            onClick={clearFilters}
          >
            Réinitialiser les filtres
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default TechnicianFilterSidebar;
