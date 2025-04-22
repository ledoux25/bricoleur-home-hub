
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-20 px-4">
        <div className="bricoleur-container max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité – Le Bricoleur</h1>
          <p className="text-gray-600 mb-6">Dernière mise à jour : 4/21/2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-700">
              Le Bricoleur ("nous", "notre plateforme") s'engage à protéger vos données
              personnelles. Cette politique explique comment nous collectons, utilisons et sécurisons
              vos informations lorsque vous utilisez notre service de mise en relation entre clients et
              techniciens.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Données Collectées</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Pour les Clients :</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Nom, prénom, numéro de téléphone, adresse email.</li>
                  <li>Localisation (pour trouver des techniciens près de chez vous).</li>
                  <li>Historique des demandes (prestations sollicitées).</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Pour les Techniciens :</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Informations professionnelles (métier, expérience, certifications).</li>
                  <li>Disponibilités et tarifs.</li>
                  <li>Photos de profil et preuves de compétence (diplômes, si partagés).</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Automatiquement :</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Données techniques (adresse IP, type d'appareil, cookies pour améliorer l'expérience utilisateur, position).</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Utilisation des Données</h2>
            <p className="text-gray-700 mb-4">Vos informations servent à :</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Vous connecter avec des clients/techniciens.</li>
              <li>Améliorer nos services (analyse des besoins).</li>
              <li>Envoyer des notifications utiles (confirmations de rendez-vous, alertes).</li>
              <li>Respecter nos obligations légales.</li>
              <li>Nous ne vendons pas vos données à des tiers.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Partage des Données</h2>
            <p className="text-gray-700 mb-4">Vos données sont partagées uniquement dans ces cas :</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Techniciens/Clients : Pour faciliter la prise de rendez-vous (ex : un client voit votre profil et vos compétences).</li>
              <li>Prestataires techniques : Hébergeurs sécurisés (avec clauses de confidentialité).</li>
              <li>Obligation légale : Si requis par les autorités camerounaises.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Sécurité</h2>
            <p className="text-gray-700 mb-4">Nous protégeons vos données via :</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Chiffrement des échanges (HTTPS).</li>
              <li>Accès restreint aux données sensibles.</li>
              <li>Mots de passe sécurisés (hashés).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Vos Droits</h2>
            <p className="text-gray-700 mb-4">Vous pouvez :</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Accéder à vos données ou les corriger.</li>
              <li>Supprimer votre compte (cela met fin aux services).</li>
              <li>Refuser les emails promotionnels.</li>
            </ul>
            <p className="text-gray-700">Pour exercer ces droits, contactez : contact@lebricoleur.cm</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
            <p className="text-gray-700 mb-4">Nous utilisons des cookies pour :</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Faciliter la connexion.</li>
              <li>Analyser l'usage de la plateforme (via Google Analytics).</li>
              <li>Vous pouvez les désactiver dans les paramètres de votre navigateur.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Modifications</h2>
            <p className="text-gray-700">
              Nous mettrons à jour cette politique si nécessaire. Les utilisateurs en seront informés
              par email ou via la plateforme.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
            <p className="text-gray-700">Pour toute question :</p>
            <ul className="list-none text-gray-700">
              <li>Email : contact@lebricoleur.cm</li>
              <li>Adresse : Douala, Bonamoussadi</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
