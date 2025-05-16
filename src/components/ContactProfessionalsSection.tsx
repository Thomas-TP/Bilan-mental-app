import React, { useEffect, useRef, useState } from "react";

// Mockup d\"une fonction pour récupérer les professionnels (à remplacer par une vraie API)
const fetchProfessionals = async (location: string | null) => {
  console.log("Recherche de professionnels pour :", location);
  // Simuler un appel API
  await new Promise(resolve => setTimeout(resolve, 1500));
  // La logique de fetchProfessionals reste basée sur un nom de ville pour la démo
  if (location && location.toLowerCase().includes("paris")) {
    return [
      { id: 1, name: "Dr. Alice Dupont", specialty: "Psychologue Clinicienne", address: "12 Rue de la Paix, Paris", phone: "01 23 45 67 89", website: "alicedupont-psy.fr" },
      { id: 2, name: "M. Bruno Petit", specialty: "Thérapeute Comportemental", address: "45 Avenue des Champs-Élysées, Paris", phone: "01 98 76 54 32", website: "brunopetit-therapie.com" },
      { id: 3, name: "Mme. Chloé Durand", specialty: "Sophrologue", address: "8 Boulevard Saint-Germain, Paris", phone: "01 12 23 34 45", website: "chloedurand-sophro.net" },
    ];
  } else if (location && location.length > 0 && !location.startsWith("Coords:")) { // Ne pas chercher si ce sont des coordonnées
     return [
      { id: 4, name: "Dr. Martin Lefevre", specialty: "Psychiatre", address: "1 Place de la Comédie, AutreVille", phone: "04 00 00 00 00", website: "martinlefevre-psy.fr" },
    ];
  }
  return [];
};

interface Professional {
  id: number;
  name: string;
  specialty: string;
  address: string;
  phone: string;
  website?: string;
}

const ContactProfessionalsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [locationInput, setLocationInput] = useState("");
  const [searchAttempted, setSearchAttempted] = useState(false);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.querySelectorAll(".animate-on-scroll-child").forEach((el, index) => {
              (el as HTMLElement).style.transitionDelay = `${index * 0.2}s`;
              el.classList.add("is-visible");
            });
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const handleGeolocate = () => {
    setIsLoading(true);
    setError(null);
    setSearchAttempted(true);
    setProfessionals([]); // Vider les résultats précédents
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const locationString = `Coords: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
          setUserLocation(locationString);
          setLocationInput(locationString); 
          // Note: fetchProfessionals est un mock basé sur un nom de ville.
          // Pour une vraie application, il faudrait une API de reverse geocoding ici
          // pour convertir les coordonnées en nom de ville avant d'appeler fetchProfessionals,
          // ou modifier fetchProfessionals pour accepter des coordonnées.
          // Pour l'instant, nous n'appellerons pas fetchProfessionals avec des coordonnées.
          // setProfessionals([]); // On ne cherche pas avec les coordonnées pour l'instant
          setError("Localisation par coordonnées réussie. Pour afficher les professionnels, une recherche par nom de ville est nécessaire ou une API de géocodage inversé pour traduire ces coordonnées en nom de ville.");
          setIsLoading(false);
        },
        (err) => {
          let errorMessage = "Impossible d\"obtenir la localisation. Veuillez l\"entrer manuellement ou vérifier les permissions.";
          if (err.code === 1) { // PERMISSION_DENIED
            errorMessage = "La permission de géolocalisation a été refusée. Veuillez l'autoriser dans les paramètres de votre navigateur.";
          } else if (err.code === 2) { // POSITION_UNAVAILABLE
            errorMessage = "La position n'a pas pu être déterminée.";
          } else if (err.code === 3) { // TIMEOUT
            errorMessage = "La demande de géolocalisation a expiré.";
          }
          setError(errorMessage);
          console.error(err);
          setUserLocation(null);
          setIsLoading(false);
        },
        { timeout: 10000 } // Ajout d'un timeout
      );
    } else {
      setError("La géolocalisation n\"est pas supportée par votre navigateur.");
      setIsLoading(false);
    }
  };

  const handleManualSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!locationInput.trim() || locationInput.startsWith("Coords:")) {
      setError("Veuillez entrer un nom de ville valide pour la recherche.");
      setProfessionals([]);
      return;
    }
    setIsLoading(true);
    setError(null);
    setSearchAttempted(true);
    setUserLocation(locationInput);
    const fetchedProfessionals = await fetchProfessionals(locationInput);
    setProfessionals(fetchedProfessionals);
    setIsLoading(false);
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-16 md:py-24 bg-nuit-sereine text-craie-douce animate-on-scroll slide-in-up-on-scroll"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-vert-accent mb-4 animate-on-scroll-child slide-in-up-on-scroll">Trouver un Soutien Professionnel</h2>
          <p className="text-lg md:text-xl text-craie-douce/80 max-w-3xl mx-auto animate-on-scroll-child slide-in-up-on-scroll">
            Si vous ressentez le besoin de parler à un professionnel, nous pouvons vous aider à trouver des contacts qualifiés (recherche par ville).
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-fond-element/30 p-6 md:p-10 rounded-xl shadow-2xl mb-12 animate-on-scroll-child slide-in-up-on-scroll">
          <form onSubmit={handleManualSearch} className="space-y-4 mb-6">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-craie-douce/80 mb-1">Votre ville (ou coordonnées après géolocalisation) :</label>
              <input 
                type="text" 
                id="location" 
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                placeholder="Ex: Paris, Lyon... ou utilisez la géolocalisation"
                className="w-full bg-nuit-sereine/60 text-craie-douce p-3 rounded-md focus:ring-2 focus:ring-vert-accent focus:border-vert-accent outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <button 
                    type="submit" 
                    className="w-full sm:w-auto flex-grow bg-vert-accent hover:bg-opacity-80 text-nuit-sereine font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-vert-accent/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading || locationInput.startsWith("Coords:")}
                >
                    {isLoading && !userLocation ? "Recherche..." : "Rechercher Manuellement"}
                </button>
                <button 
                    type="button" 
                    onClick={handleGeolocate} 
                    className="w-full sm:w-auto flex-grow bg-bleu-lien hover:bg-opacity-80 text-nuit-sereine font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-bleu-lien/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    disabled={isLoading}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {isLoading && userLocation && userLocation.startsWith("Coords:") ? "Localisation..." : "Me Géolocaliser"}
                </button>
            </div>
          </form>
          {error && <p className={`${error.includes("réussie") ? "text-green-400" : "text-red-400"} text-sm text-center py-2 px-4 rounded-md bg-nuit-sereine/70`}>{error}</p>}
        </div>

        {isLoading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-vert-accent mx-auto"></div>
            <p className="mt-4 text-craie-douce/80">Chargement...</p>
          </div>
        )}

        {!isLoading && searchAttempted && professionals.length === 0 && !error && (
          <div className="text-center py-8 bg-fond-element/20 p-6 rounded-lg animate-fade-in">
            <p className="text-xl text-craie-douce/90 mb-2">Aucun professionnel trouvé pour "{userLocation || locationInput}".</p>
            <p className="text-craie-douce/70">Veuillez essayer une autre ville ou vérifier l\"orthographe.</p>
          </div>
        )}

        {!isLoading && professionals.length > 0 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-center text-craie-douce mb-6">Professionnels suggérés {userLocation && !userLocation.startsWith("Coords:") ? `autour de ${userLocation}` : ""} :</h3>
            {professionals.map((pro) => (
              <div key={pro.id} className="bg-nuit-sereine/50 p-6 rounded-xl shadow-lg hover:shadow-vert-accent/10 transition-shadow duration-300">
                <h4 className="text-xl font-bold text-vert-accent mb-1">{pro.name}</h4>
                <p className="text-md text-craie-douce/90 mb-1">{pro.specialty}</p>
                <p className="text-sm text-craie-douce/70 mb-1">{pro.address}</p>
                <p className="text-sm text-craie-douce/70">{pro.phone}</p>
                {pro.website && 
                  <a href={`http://${pro.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-bleu-lien hover:underline mt-1 inline-block">
                    Visiter le site web
                  </a>
                }
              </div>
            ))}
          </div>
        )}
         <p className="text-center text-xs text-craie-douce/50 mt-12 animate-on-scroll-child slide-in-up-on-scroll">
            Note : Cette liste est fournie à titre indicatif et est basée sur une simulation. Pour une recherche exhaustive, veuillez consulter des annuaires professionnels spécialisés.
          </p>
      </div>
    </section>
  );
};

export default ContactProfessionalsSection;

