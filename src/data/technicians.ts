import { Technician } from "../types/technician";

// Mock data for 20 technicians
const technicians: Technician[] = [
  {
    id: "1",
    name: "Jean Dupont",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.8,
    jobsCompleted: 124,
    location: "Douala, Bonanjo",
    distance: 2.5,
    price: 5000,
    specialties: ["Plomberie", "Électricité"],
    description: "Plombier professionnel avec plus de 10 ans d'expérience dans l'installation et la réparation de systèmes de plomberie résidentiels et commerciaux. Spécialiste en dépannage urgent et rénovation de salles de bain.",
    images: [
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1588814173427-cf3bb77b816f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521207418485-99c705420785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [true, true, false, true, true, false, false, true],
      "2025-05-02": [false, true, true, true, false, false, true, true],
      "2025-05-03": [true, false, false, true, true, true, false, false]
    },
    coordinates: {
      lat: 4.0429,
      lng: 9.7062
    }
  },
  {
    id: "2",
    name: "Marie Kamga",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.9,
    jobsCompleted: 87,
    location: "Douala, Bonapriso",
    distance: 3.2,
    price: 4500,
    specialties: ["Électricité", "Installation TV"],
    description: "Électricienne certifiée avec une expertise dans les installations domestiques et dépannages d'urgence. Je propose des services de qualité pour tous vos besoins en électricité.",
    images: [
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558538337-aae544263b99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [false, false, true, true, true, true, false, false],
      "2025-05-02": [true, true, true, false, false, true, true, true],
      "2025-05-03": [false, false, false, true, true, true, true, false]
    },
    coordinates: {
      lat: 4.0529,
      lng: 9.6962
    }
  },
  {
    id: "3",
    name: "Ahmed Bello",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.7,
    jobsCompleted: 56,
    location: "Douala, Akwa",
    distance: 1.8,
    price: 6000,
    specialties: ["Menuiserie", "Rénovation"],
    description: "Menuisier expérimenté spécialisé dans la fabrication et réparation de meubles sur mesure. Je travaille avec différents types de bois pour créer des pièces uniques et durables.",
    images: [
      "https://images.unsplash.com/photo-1577083552431-6e5fd01511c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620735692151-63ad89dd2972?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [true, true, true, false, false, false, true, true],
      "2025-05-02": [false, false, true, true, true, true, false, false],
      "2025-05-03": [true, true, false, false, true, true, true, true]
    },
    coordinates: {
      lat: 4.0500,
      lng: 9.7000
    }
  },
  {
    id: "4",
    name: "Pierre Ngom",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.5,
    jobsCompleted: 42,
    location: "Douala, Bonaberi",
    distance: 5.7,
    price: 3500,
    specialties: ["Peinture", "Plâtrerie"],
    description: "Peintre professionnel avec une expertise en décoration intérieure et extérieure. Je propose des services de qualité pour tous types de surfaces et finitions.",
    images: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558383817-6a5d2aab2d6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [false, false, false, true, true, true, true, false],
      "2025-05-02": [true, true, false, false, true, true, false, false],
      "2025-05-03": [false, true, true, true, false, false, true, true]
    },
    coordinates: {
      lat: 4.0829,
      lng: 9.6762
    }
  },
  {
    id: "5",
    name: "Sophie Mbala",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.9,
    jobsCompleted: 113,
    location: "Douala, Bepanda",
    distance: 4.1,
    price: 5500,
    specialties: ["Jardinage", "Aménagement extérieur"],
    description: "Paysagiste passionnée offrant des services d'entretien de jardin, création d'espaces verts et aménagement paysager pour embellir votre extérieur.",
    images: [
      "https://images.unsplash.com/photo-1558449028-b53a39d35a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [true, true, false, false, true, true, true, false],
      "2025-05-02": [false, false, true, true, true, false, false, true],
      "2025-05-03": [true, true, true, false, false, false, true, true]
    },
    coordinates: {
      lat: 4.0629,
      lng: 9.7262
    }
  },
  {
    id: "6",
    name: "Emmanuel Talla",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.6,
    jobsCompleted: 78,
    location: "Douala, Logpom",
    distance: 6.3,
    price: 4800,
    specialties: ["Climatisation", "Réfrigération"],
    description: "Technicien spécialisé en installation et maintenance de systèmes de climatisation et réfrigération. Service rapide et efficace pour particuliers et professionnels.",
    images: [
      "https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581847707363-68fab4a0e59a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [false, true, true, true, false, false, true, true],
      "2025-05-02": [true, false, false, true, true, true, false, false],
      "2025-05-03": [false, false, true, true, false, false, true, true]
    },
    coordinates: {
      lat: 4.1029,
      lng: 9.7162
    }
  },
  {
    id: "7",
    name: "Alice Nkeng",
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.8,
    jobsCompleted: 65,
    location: "Douala, Makepe",
    distance: 3.8,
    price: 5200,
    specialties: ["Décoration intérieure", "Montage de meubles"],
    description: "Décoratrice d'intérieur professionnelle proposant des services de conseil en décoration, agencement d'espaces et montage de meubles pour transformer votre intérieur.",
    images: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [true, false, false, true, true, false, false, true],
      "2025-05-02": [false, true, true, false, false, true, true, false],
      "2025-05-03": [true, true, false, false, true, true, false, false]
    },
    coordinates: {
      lat: 4.0729,
      lng: 9.7262
    }
  },
  {
    id: "8",
    name: "Thomas Eyong",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.7,
    jobsCompleted: 94,
    location: "Douala, PK14",
    distance: 8.5,
    price: 4000,
    specialties: ["Maçonnerie", "Carrelage"],
    description: "Maçon expérimenté spécialisé dans la construction et rénovation. Expert en pose de carrelage et travaux de finition pour tous vos projets de construction.",
    images: [
      "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [false, false, true, true, false, false, true, true],
      "2025-05-02": [true, true, false, false, true, true, false, false],
      "2025-05-03": [false, false, true, true, true, false, false, true]
    },
    coordinates: {
      lat: 4.1129,
      lng: 9.6862
    }
  },
  {
    id: "9",
    name: "Fatima Zongo",
    avatar: "https://images.unsplash.com/photo-1522938974444-f12497b69347?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.9,
    jobsCompleted: 137,
    location: "Douala, Yassa",
    distance: 9.2,
    price: 6500,
    specialties: ["Serrurerie", "Sécurité"],
    description: "Serrurier professionnel spécialisé dans l'installation et dépannage de systèmes de sécurité, ouverture de portes et remplacement de serrures.",
    images: [
      "https://images.unsplash.com/photo-1556911073-38141963c9e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [true, true, false, false, true, true, false, false],
      "2025-05-02": [false, false, true, true, false, false, true, true],
      "2025-05-03": [true, false, false, true, true, false, false, true]
    },
    coordinates: {
      lat: 4.0000,
      lng: 9.8000
    }
  },
  {
    id: "10",
    name: "Michel Kenmogne",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.6,
    jobsCompleted: 52,
    location: "Douala, Kotto",
    distance: 4.8,
    price: 4300,
    specialties: ["Informatique", "Électronique"],
    description: "Technicien informatique certifié offrant des services de dépannage, maintenance et installation de matériel informatique et électronique pour particuliers et entreprises.",
    images: [
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [false, true, true, false, false, true, true, false],
      "2025-05-02": [true, false, false, true, true, false, false, true],
      "2025-05-03": [false, true, true, true, false, false, true, false]
    },
    coordinates: {
      lat: 4.0929,
      lng: 9.7562
    }
  },
  {
    id: "11",
    name: "Paul Essama",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.5,
    jobsCompleted: 48,
    location: "Douala, Ndogbong",
    distance: 5.3,
    price: 3800,
    specialties: ["Déménagement", "Montage de meubles"],
    description: "Professionnel du déménagement et montage de meubles. Service rapide, soigné et efficace pour déplacer vos biens ou monter vos meubles en kit.",
    images: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [true, false, false, true, true, true, false, false],
      "2025-05-02": [false, true, true, false, false, true, true, true],
      "2025-05-03": [true, true, false, false, true, true, false, false]
    },
    coordinates: {
      lat: 4.0829,
      lng: 9.7362
    }
  },
  {
    id: "12",
    name: "Claire Moussa",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.8,
    jobsCompleted: 92,
    location: "Douala, Bonamoussadi",
    distance: 3.1,
    price: 5200,
    specialties: ["Nettoyage", "Entretien ménager"],
    description: "Spécialiste en nettoyage et entretien ménager offrant des services complets pour particuliers et bureaux. Matériel professionnel et produits écologiques.",
    images: [
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [false, false, true, true, false, false, true, true],
      "2025-05-02": [true, true, false, false, true, true, false, false],
      "2025-05-03": [false, true, true, true, false, false, true, true]
    },
    coordinates: {
      lat: 4.0729,
      lng: 9.7562
    }
  },
  {
    id: "13",
    name: "Daniel Manga",
    avatar: "https://images.unsplash.com/photo-1566492088823-10f054b45155?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.7,
    jobsCompleted: 83,
    location: "Douala, Deido",
    distance: 2.7,
    price: 4700,
    specialties: ["Plomberie", "Sanitaire"],
    description: "Plombier expérimenté spécialisé dans l'installation et réparation de systèmes sanitaires. Service rapide et professionnel pour tous vos problèmes de plomberie.",
    images: [
      "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [true, true, false, false, true, true, false, false],
      "2025-05-02": [false, false, true, true, false, false, true, true],
      "2025-05-03": [true, true, false, false, true, true, false, false]
    },
    coordinates: {
      lat: 4.0679,
      lng: 9.6962
    }
  },
  {
    id: "14",
    name: "Sarah Ntolo",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.9,
    jobsCompleted: 104,
    location: "Douala, Village",
    distance: 6.2,
    price: 5800,
    specialties: ["Électricité", "Domotique"],
    description: "Électricienne certifiée spécialisée dans l'installation électrique et solutions domotiques. Services professionnels pour rendre votre maison plus intelligente et sécurisée.",
    images: [
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f21d84c112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [false, true, true, true, false, false, true, false],
      "2025-05-02": [true, false, false, true, true, true, false, false],
      "2025-05-03": [false, false, true, true, false, false, true, true]
    },
    coordinates: {
      lat: 4.1129,
      lng: 9.7762
    }
  },
  {
    id: "15",
    name: "Robert Fotso",
    avatar: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.6,
    jobsCompleted: 71,
    location: "Douala, Beedi",
    distance: 7.4,
    price: 4100,
    specialties: ["Soudure", "Ferronnerie"],
    description: "Ferronnier d'art spécialisé en soudure et fabrication de structures métalliques. Création sur mesure de portails, grilles et éléments décoratifs en métal.",
    images: [
      "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [true, false, false, true, true, false, false, true],
      "2025-05-02": [false, true, true, false, false, true, true, false],
      "2025-05-03": [true, false, false, true, true, false, false, true]
    },
    coordinates: {
      lat: 4.1229,
      lng: 9.7362
    }
  },
  {
    id: "16",
    name: "Isabelle Ngo",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.8,
    jobsCompleted: 59,
    location: "Douala, Denver",
    distance: 3.9,
    price: 5500,
    specialties: ["Coiffure", "Esthétique"],
    description: "Coiffeuse et esthéticienne à domicile offrant des services complets de beauté. Coupes, colorations, soins du visage et manucure dans le confort de votre maison.",
    images: [
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595476108010-b4d1db79ace1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [false, false, true, true, false, false, true, true],
      "2025-05-02": [true, true, false, false, true, true, false, false],
      "2025-05-03": [false, true, true, false, false, true, true, false]
    },
    coordinates: {
      lat: 4.0829,
      lng: 9.7462
    }
  },
  {
    id: "17",
    name: "Georges Mbarga",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.7,
    jobsCompleted: 88,
    location: "Douala, Nyalla",
    distance: 5.8,
    price: 4600,
    specialties: ["Vitrerie", "Miroiterie"],
    description: "Vitrier professionnel spécialisé dans l'installation et remplacement de vitres, miroirs et parois en verre. Intervention rapide en cas de bris de glace.",
    images: [
      "https://images.unsplash.com/photo-1575117542299-de236307fb8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [true, true, false, false, true, true, false, false],
      "2025-05-02": [false, false, true, true, false, false, true, true],
      "2025-05-03": [true, false, false, true, true, false, false, true]
    },
    coordinates: {
      lat: 4.0929,
      lng: 9.7762
    }
  },
  {
    id: "18",
    name: "Yvonne Biwole",
    avatar: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.9,
    jobsCompleted: 117,
    location: "Douala, New Bell",
    distance: 2.1,
    price: 5300,
    specialties: ["Couture", "Retouche"],
    description: "Couturière professionnelle spécialisée dans la création sur mesure et retouche de vêtements. Service personnalisé pour donner vie à vos projets textiles.",
    images: [
      "https://images.unsplash.com/photo-1590335652069-bc7d0626d6e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [false, true, true, false, false, true, true, false],
      "2025-05-02": [true, false, false, true, true, false, false, true],
      "2025-05-03": [false, false, true, true, false, false, true, true]
    },
    coordinates: {
      lat: 4.0429,
      lng: 9.7162
    }
  },
  {
    id: "19",
    name: "Joseph Ebongue",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.5,
    jobsCompleted: 46,
    location: "Douala, Ndokoti",
    distance: 4.3,
    price: 3900,
    specialties: ["Antenne", "Parabole"],
    description: "Technicien spécialisé dans l'installation et dépannage d'antennes TV et paraboles. Service professionnel pour une réception optimale sur tous vos écrans.",
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586614940065-4a717117fe71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [true, false, false, true, true, false, false, true],
      "2025-05-02": [false, true, true, false, false, true, true, false],
      "2025-05-03": [true, true, false, false, true, true, false, false]
    },
    coordinates: {
      lat: 4.0629,
      lng: 9.7362
    }
  },
  {
    id: "20",
    name: "Aline Tchoupo",
    avatar: "https://images.unsplash.com/photo-1584361853901-dd1904bb7987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.8,
    jobsCompleted: 75,
    location: "Douala, Cité SIC",
    distance: 3.6,
    price: 5000,
    specialties: ["Cuisine", "Pâtisserie"],
    description: "Chef cuisinière et pâtissière à domicile proposant des services de traiteur pour vos événements ou des cours de cuisine personnalisés à votre domicile.",
    images: [
      "https://images.unsplash.com/photo-1614436162961-23633bcb2656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    availability: {
      "2025-05-01": [false, false, true, true, false, false, true, true],
      "2025-05-02": [true, true, false, false, true, true, false, false],
      "2025-05-03": [false, true, true, false, false, true, true, false]
    },
    coordinates: {
      lat: 4.0729,
      lng: 9.7362
    }
  }
];

export default technicians;
