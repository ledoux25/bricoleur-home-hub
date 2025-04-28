
import { useState, useEffect } from "react";
import { Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { SidebarProvider } from "@/components/ui/sidebar";
import Layout from "@/components/Layout";
import TechnicianFilterSidebar from "@/components/TechnicianFilterSidebar";
import TechnicianGrid from "@/components/TechnicianGrid";
import { 
  getTechnicians, 
  getUniqueSpecialties, 
  getUniqueLocations, 
  TechnicianFilters 
} from "@/services/technicianService";

const TechnicianListings = () => {
  const [technicians, setTechnicians] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [specialties] = useState(getUniqueSpecialties());
  const [locations] = useState(getUniqueLocations());
  const itemsPerPage = 9;

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
      <div className="pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-6 text-bricoleur-primary px-4 md:px-8">Trouver un Technicien</h1>
        
        {/* Desktop layout with sidebar */}
        <div className="hidden md:flex w-full">
          <SidebarProvider defaultOpen={true}>
            <TechnicianFilterSidebar 
              filters={filters}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleFilterChange={handleFilterChange}
              handleSearchSubmit={handleSearchSubmit}
              clearFilters={clearFilters}
              specialties={specialties}
              locations={locations}
            />
            <div className="flex-1 px-8">
              {/* Results info */}
              <div className="mb-6">
                <p className="text-gray-600">
                  {total} technicien{total !== 1 ? 's' : ''} trouvé{total !== 1 ? 's' : ''}
                </p>
              </div>
              
              {/* Technicians grid */}
              <TechnicianGrid technicians={technicians} loading={loading} />
              
              {/* Pagination */}
              {technicians.length > 0 && renderPagination()}
            </div>
          </SidebarProvider>
        </div>
        
        {/* Mobile layout */}
        <div className="md:hidden px-4">
          {/* Mobile search and filter */}
          <div className="mb-6">
            <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-4">
              <Input 
                placeholder="Rechercher..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Button type="submit">Rechercher</Button>
            </form>
            
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Filter size={16} />
                  Filtres
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[80vh] overflow-y-auto">
                <div className="p-4 space-y-6">
                  <h3 className="text-xl font-bold">Filtres</h3>
                  {/* Mobile filter content */}
                  <TechnicianFilterSidebar 
                    filters={filters}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleFilterChange={handleFilterChange}
                    handleSearchSubmit={handleSearchSubmit}
                    clearFilters={clearFilters}
                    specialties={specialties}
                    locations={locations}
                  />
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          
          {/* Results info */}
          <div className="mb-6">
            <p className="text-gray-600">
              {total} technicien{total !== 1 ? 's' : ''} trouvé{total !== 1 ? 's' : ''}
            </p>
          </div>
          
          {/* Technicians grid */}
          <TechnicianGrid technicians={technicians} loading={loading} />
          
          {/* Pagination */}
          {technicians.length > 0 && renderPagination()}
        </div>
      </div>
    </Layout>
  );
};

export default TechnicianListings;
