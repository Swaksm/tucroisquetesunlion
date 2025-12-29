
import React from 'react';

const PrivacyPolicy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="text-zinc-300 max-w-3xl mx-auto p-4 md:p-8">
      <button onClick={onBack} className="mb-8 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-lg">
        &larr; Retour
      </button>
      <h1 className="text-3xl font-bold mb-6 text-white">Politique de Confidentialité</h1>
      <div className="space-y-4">
        <p>
          Cette politique de confidentialité régit la manière dont Lion Meme Generator collecte, utilise, maintient et divulgue les informations collectées auprès des utilisateurs (chacun, un "Utilisateur") du site web Lion Meme Generator ("Site").
        </p>
        <h2 className="text-2xl font-bold mt-6 text-white">Informations que nous collectons</h2>
        <p>
          Nous ne collectons aucune information d'identification personnelle sur nos utilisateurs. Les images que vous téléchargez sont traitées dans votre navigateur et ne sont jamais envoyées ou stockées sur nos serveurs.
        </p>
        <h2 className="text-2xl font-bold mt-6 text-white">Comment nous utilisons les informations collectées</h2>
        <p>
          Comme nous ne collectons aucune information, nous ne les utilisons d'aucune manière. Votre vie privée est entièrement respectée.
        </p>
        <h2 className="text-2xl font-bold mt-6 text-white">Partage de vos informations personnelles</h2>
        <p>
          Nous ne vendons, n'échangeons ni ne louons les informations d'identification personnelle des utilisateurs à des tiers.
        </p>
        <h2 className="text-2xl font-bold mt-6 text-white">Modifications de cette politique de confidentialité</h2>
        <p>
          Lion Meme Generator a la discrétion de mettre à jour cette politique de confidentialité à tout moment. Lorsque nous le ferons, nous réviserons la date de mise à jour au bas de cette page. Nous encourageons les utilisateurs à consulter fréquemment cette page pour toute modification afin de rester informés de la manière dont nous aidons à protéger les informations personnelles que nous collectons.
        </p>
        <p>Dernière mise à jour : 29 décembre 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
