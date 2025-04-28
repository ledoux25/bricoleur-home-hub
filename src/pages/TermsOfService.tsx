import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Layout from "@/components/Layout";

const TermsOfService = () => {
  return (
    <Layout>
      <div className="bricoleur-container pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-8 text-bricoleur-primary">Conditions Générales d'Utilisation</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Dernière mise à jour : 4/21/2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptation des CGU</h2>
            <p className="text-gray-700 mb-4">En utilisant la plateforme Le Bricoleur, vous acceptez :</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>D'avoir au moins 18 ans ou une autorisation parentale.</li>
              <li>De fournir des informations exactes (profil, compétences pour les techniciens).</li>
              <li>De respecter ces règles, sous peine de résiliation du compte.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Fonctionnement de la Plateforme</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Pour les Clients :</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Trouvez des techniciens vérifiés près de chez vous.</li>
                  <li>Payez via les méthodes sécurisées proposées (Mobile Money, carte bancaire, etc.).</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Pour les Techniciens :</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Créez un profil détaillé pour être visible.</li>
                  <li>Gérez vos rendez-vous et tarifs librement.</li>
                  <li>Interdiction de contacter les clients en dehors de la plateforme (sauf accord explicite).</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Responsabilités</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Le Bricoleur :</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Met en relation, mais n'est pas responsable de la qualité des prestations (évaluations clients disponibles).</li>
                  <li>Peut suspendre un compte en cas de comportement frauduleux.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Utilisateurs :</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Les techniciens garantissent posséder les compétences déclarées.</li>
                  <li>Les clients s'engagent à payer le service après réservation.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Paiements et Annulations</h2>
            <p className="text-gray-700 mb-4">Frais de service : Une commission est prélevée sur chaque transaction.</p>
            <div>
              <h3 className="text-xl font-medium mb-2">Annulation :</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Remboursement à 100% si annulé 24h avant.</li>
                <li>Des frais d'annulation tardive peuvent s'appliquer.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Propriété Intellectuelle</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Le contenu de la plateforme (logo, texte, design) appartient à Le Bricoleur.</li>
              <li>Interdiction de copier ou revendre les données des utilisateurs.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Résiliation</h2>
            <p className="text-gray-700 mb-4">Vous pouvez supprimer votre compte à tout moment.</p>
            <p className="text-gray-700 mb-2">Le Bricoleur peut bannir un utilisateur pour :</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Fausse identité.</li>
              <li>Non-respect des rendez-vous.</li>
              <li>Harcelement ou fraude.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Litiges et Droit Applicable</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>En cas de conflit, privilégiez le contact amiable via : contact@lebricoleur.cm</li>
              <li>Si échec, les tribunaux camerounais seront compétents.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Modifications des CGU</h2>
            <p className="text-gray-700">
              Les utilisateurs seront prévenus par email ou notification sur la plateforme en cas de changement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
            <ul className="list-none text-gray-700">
              <li>Email : contact@lebricoleur.cm</li>
              <li>Adresse : Bonamoussadi, Douala</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
