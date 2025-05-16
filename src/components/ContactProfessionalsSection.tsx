import React from 'react';

const ContactProfessionalsSection: React.FC = () => {
  return (
    <section id="contact-pro" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contacter un Professionnel</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Si vous ressentez le besoin d'un accompagnement plus personnalisé, n'hésitez pas à contacter un professionnel de la santé mentale. 
            Vous trouverez ci-dessous des pistes pour vous orienter.
          </p>
        </div>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl">
          <p className="text-gray-700 mb-4">
            Bien que Bilan Mental Express vise à vous fournir des outils pour un suivi quotidien, il ne remplace en aucun cas l'avis ou le suivi d'un professionnel qualifié (psychologue, psychiatre, thérapeute).
          </p>
          <p className="text-gray-700 mb-6">
            Pour trouver un professionnel près de chez vous ou pour une téléconsultation, vous pouvez consulter des annuaires spécialisés ou vous rapprocher de votre médecin traitant qui pourra vous orienter.
          </p>
          <div className="text-center">
            <a 
              href="mailto:aide-professionnelle@example.com?subject=Demande d'orientation - Bilan Mental Express"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Demander une Orientation (Email)
            </a>
            <p className="text-xs text-gray-500 mt-3">
              (Note: Ce lien ouvrira votre client de messagerie. Remplacez l'adresse email par une adresse de contact réelle pour une version en production.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactProfessionalsSection;

