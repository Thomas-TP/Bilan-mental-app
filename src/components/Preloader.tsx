import { motion } from "framer-motion";
import React from "react";

// Assurez-vous que le chemin vers votre logo est correct
// Vous pouvez utiliser les logos déjà présents dans src/assets ou en ajouter un nouveau
// Par exemple : import logoUrl from "../assets/logo-dark-bg.jpg";

const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1a202c", // Couleur de fond Nuit Sereine (à ajuster si besoin)
        zIndex: 9999,
      }}
    >
      <motion.img
        // src={logoUrl} // Décommentez et ajustez le chemin si vous utilisez un fichier image
        // alt="Logo Bilan Mental"
        // Pour l'instant, utilisons un simple cercle animé comme placeholder
        // style={{ width: "100px", height: "100px" }}
        // Remplacé par un texte animé pour l'instant, le logo sera intégré ensuite
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        {/* Placeholder pour le logo - à remplacer par votre image/SVG de logo */}
        <svg width="100" height="100" viewBox="0 0 100 100">
          <motion.circle 
            cx="50" 
            cy="50" 
            r="40" 
            stroke="#68D391" // Vert Espoir
            strokeWidth="4"
            fill="transparent"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.text 
            x="50%" 
            y="50%" 
            textAnchor="middle" 
            dy=".3em" 
            fill="#E2E8F0" // Craie Douce
            fontSize="14"
            fontFamily="Arial, sans-serif"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ delay: 0.5, duration: 1}}
          >
            Chargement...
          </motion.text>
        </svg>
      </motion.img>
    </motion.div>
  );
};

export default Preloader;

