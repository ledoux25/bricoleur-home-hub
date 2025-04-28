
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Search, Filter, MapPin, Star } from "lucide-react";
import { 
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Layout from "@/components/Layout";
import { 
  getTechnicians, 
  getUniqueSpecialties, 
  getUniqueLocations, 
  TechnicianFilters 
} from "@/services/technicianService";
import { Technician } from "@/types/technician";

const TechnicianListings = () => {
  const [technicians, setTechnicians] = useState<Technician[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [specialties] = useState<string[]>(getUniqueSpecialties());
  const [locations] = useState<string[]>(getUniqueLocations());
  const itemsPerPage = 8;

  // Filter states
  const [filters, setFilters] = useState<TechnicianFilters>({
    sortBy: 'rating',
    sortOrder: 'desc',
    minRating: 0,
    maxPrice: 10000,
    maxDistance: 10,
  });

  const loadTechnicians = () => {
    setLoading(true);
    // Include search term in filters
    const searchFilters = { ...filters, search: searchTerm };
    const { technicians: techList, total: totalCount } = getTechnicians(
      searchFilters, 
      currentPage, 
      itemsPerPage
    );
    setTechnicians(techList);
    setTotal(totalCount);
    setLoading(false);
  };

  useEffect(() => {
    loadTechnicians();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, filters, searchTerm]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page on new search
    loadTechnicians();
  };

  const handleFilterChange = (filterKey: keyof TechnicianFilters, value: any) => {
    setFilters(prev => ({ ...prev, [filterKey]: value }));
    setCurrentPage(1); // Reset to first page on filter change
  };

  const clearFilters = () => {
    setFilters({
      sortBy: 'rating',
      sortOrder: 'desc',
      minRating: 0,
      maxPrice: 10000,
      maxDistance: 10,
    });
    setSearchTerm("");
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(total / itemsPerPage);

  const renderPagination = () => {
    return (
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
            />
          </PaginationItem>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            // Show pages around current page
            let pageNumber;
            if (totalPages <= 5) {
              pageNumber = i + 1;
            } else if (currentPage <= 3) {
              pageNumber = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNumber = totalPages - 4 + i;
            } else {
              pageNumber = currentPage - 2 + i;
            }
            
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink 
                  isActive={currentPage === pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          
          {totalPages > 5 && currentPage < totalPages - 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          
          <PaginationItem>
            <PaginationNext 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  };

  return (
    <Layout>
      <div className="bricoleur-container pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-6 text-bricoleur-primary">Trouver un Technicien</h1>
        
        {/* Search and filter section */}
        <div className="mb-8">
          <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Rechercher par nom, spécialité ou localisation..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button type="submit">Rechercher</Button>
          </form>
          
          {/* Filter toggle button */}
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={16} />
            Filtres
            {isFilterOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Button>
          
          {/* Filter panel */}
          {isFilterOpen && (
            <div className="bg-white p-4 rounded-md shadow-md mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium mb-3">Trier par</h3>
                <RadioGroup 
                  value={`${filters.sortBy}-${filters.sortOrder}`}
                  onValueChange={(value) => {
                    const [sortBy, sortOrder] = value.split('-');
                    setFilters(prev => ({ 
                      ...prev, 
                      sortBy: sortBy as 'price' | 'rating' | 'distance',
                      sortOrder: sortOrder as 'asc' | 'desc' 
                    }));
                  }}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="rating-desc" id="rating-desc" />
                    <label htmlFor="rating-desc" className="cursor-pointer">Note (élevée à faible)</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="rating-asc" id="rating-asc" />
                    <label htmlFor="rating-asc" className="cursor-pointer">Note (faible à élevée)</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="price-asc" id="price-asc" />
                    <label htmlFor="price-asc" className="cursor-pointer">Prix (bas à élevé)</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="price-desc" id="price-desc" />
                    <label htmlFor="price-desc" className="cursor-pointer">Prix (élevé à bas)</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="distance-asc" id="distance-asc" />
                    <label htmlFor="distance-asc" className="cursor-pointer">Distance (proche à loin)</label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Filtres</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Spécialité</label>
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
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Quartier</label>
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
              </div>
              
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Note minimum: {filters.minRating}/5
                  </label>
                  <Slider
                    value={[filters.minRating || 0]}
                    min={0}
                    max={5}
                    step={0.1}
                    onValueChange={([value]) => handleFilterChange('minRating', value)}
                    className="my-4"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Prix maximum: {filters.maxPrice?.toLocaleString()} FCFA
                  </label>
                  <Slider
                    value={[filters.maxPrice || 10000]}
                    min={1000}
                    max={10000}
                    step={500}
                    onValueChange={([value]) => handleFilterChange('maxPrice', value)}
                    className="my-4"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Distance maximum: {filters.maxDistance} km
                  </label>
                  <Slider
                    value={[filters.maxDistance || 10]}
                    min={1}
                    max={10}
                    step={0.5}
                    onValueChange={([value]) => handleFilterChange('maxDistance', value)}
                    className="my-4"
                  />
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-2"
                  onClick={clearFilters}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Results info */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">
            {total} technicien{total !== 1 ? 's' : ''} trouvé{total !== 1 ? 's' : ''}
          </p>
        </div>
        
        {/* Technicians grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bricoleur-primary"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {technicians.length > 0 ? (
                technicians.map(technician => (
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
                          {technician.price.toLocaleString()} FCFA
                        </span>
                        <Button variant="outline" size="sm">Voir profil</Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))
              ) : (
                <div className="col-span-4 text-center py-12">
                  <h3 className="text-xl font-medium mb-2">Aucun technicien trouvé</h3>
                  <p className="text-gray-500 mb-4">Essayez d'ajuster vos filtres ou votre recherche</p>
                  <Button onClick={clearFilters}>Réinitialiser les filtres</Button>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            {technicians.length > 0 && renderPagination()}
          </>
        )}
      </div>
    </Layout>
  );
};

export default TechnicianListings;
