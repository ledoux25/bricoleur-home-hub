
import technicians from '../data/technicians';
import { Technician } from '../types/technician';

export interface TechnicianFilters {
  specialty?: string;
  location?: string;
  minRating?: number;
  maxPrice?: number;
  maxDistance?: number;
  sortBy?: 'price' | 'rating' | 'distance';
  sortOrder?: 'asc' | 'desc';
  search?: string;
}

export const getTechnicians = (filters: TechnicianFilters = {}, page: number = 1, limit: number = 10): { technicians: Technician[], total: number } => {
  let filteredTechnicians = [...technicians];

  // Apply filters
  if (filters.specialty) {
    filteredTechnicians = filteredTechnicians.filter(tech => 
      tech.specialties.some(spec => spec.toLowerCase().includes(filters.specialty!.toLowerCase()))
    );
  }

  if (filters.location) {
    filteredTechnicians = filteredTechnicians.filter(tech => 
      tech.location.toLowerCase().includes(filters.location!.toLowerCase())
    );
  }

  if (filters.minRating) {
    filteredTechnicians = filteredTechnicians.filter(tech => tech.rating >= filters.minRating!);
  }

  if (filters.maxPrice) {
    filteredTechnicians = filteredTechnicians.filter(tech => tech.price <= filters.maxPrice!);
  }

  if (filters.maxDistance) {
    filteredTechnicians = filteredTechnicians.filter(tech => tech.distance <= filters.maxDistance!);
  }

  if (filters.search) {
    const searchTerm = filters.search.toLowerCase();
    filteredTechnicians = filteredTechnicians.filter(tech => 
      tech.name.toLowerCase().includes(searchTerm) ||
      tech.specialties.some(spec => spec.toLowerCase().includes(searchTerm)) ||
      tech.location.toLowerCase().includes(searchTerm)
    );
  }

  // Apply sorting
  if (filters.sortBy) {
    filteredTechnicians = filteredTechnicians.sort((a, b) => {
      const sortOrder = filters.sortOrder === 'desc' ? -1 : 1;
      
      switch (filters.sortBy) {
        case 'price':
          return (a.price - b.price) * sortOrder;
        case 'rating':
          return (a.rating - b.rating) * sortOrder;
        case 'distance':
          return (a.distance - b.distance) * sortOrder;
        default:
          return 0;
      }
    });
  }

  // Calculate pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedTechnicians = filteredTechnicians.slice(startIndex, endIndex);
  
  return { 
    technicians: paginatedTechnicians, 
    total: filteredTechnicians.length 
  };
};

export const getTechnicianById = (id: string): Technician | undefined => {
  return technicians.find(tech => tech.id === id);
};

export const getSimilarTechnicians = (id: string, count: number = 3): Technician[] => {
  const technician = getTechnicianById(id);
  
  if (!technician) {
    return [];
  }
  
  // Find technicians with similar specialties or location
  return technicians
    .filter(tech => tech.id !== id)
    .sort((a, b) => {
      // Score based on shared specialties and proximity
      const aSpecialtyMatch = a.specialties.filter(spec => technician.specialties.includes(spec)).length;
      const bSpecialtyMatch = b.specialties.filter(spec => technician.specialties.includes(spec)).length;
      
      // Location match (simplistic - just check if in same area)
      const aLocationMatch = a.location.split(',')[1] === technician.location.split(',')[1] ? 1 : 0;
      const bLocationMatch = b.location.split(',')[1] === technician.location.split(',')[1] ? 1 : 0;
      
      const aScore = aSpecialtyMatch * 2 + aLocationMatch * 3;
      const bScore = bSpecialtyMatch * 2 + bLocationMatch * 3;
      
      return bScore - aScore;
    })
    .slice(0, count);
};

// Get unique specialties from all technicians
export const getUniqueSpecialties = (): string[] => {
  const specialtiesSet = new Set<string>();
  
  technicians.forEach(tech => {
    tech.specialties.forEach(specialty => {
      specialtiesSet.add(specialty);
    });
  });
  
  return Array.from(specialtiesSet).sort();
};

// Get unique locations from all technicians
export const getUniqueLocations = (): string[] => {
  const locationsSet = new Set<string>();
  
  technicians.forEach(tech => {
    // Extract district from location (after comma)
    const district = tech.location.split(',')[1]?.trim();
    if (district) {
      locationsSet.add(district);
    }
  });
  
  return Array.from(locationsSet).sort();
};
