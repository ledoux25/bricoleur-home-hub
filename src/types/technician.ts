
export interface Technician {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  jobsCompleted: number;
  location: string;
  distance: number;
  price: number; // Price per hour in FCFA
  specialties: string[];
  description: string;
  images: string[];
  availability: {
    [key: string]: boolean[];
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}
