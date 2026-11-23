import React from 'react';
import { LANG, T } from '../i18n';

const Fr: React.FC = () => (
  <>
    <h1 className="text-3xl font-bold mb-6 text-white">Politique de Confidentialité</h1>
    <div className="space-y-4">
      <p>
        Cette politique de confidentialité régit la manière dont Lion Meme Generator collecte, utilise, maintient et divulgue les informations collectées auprès des utilisateurs (chacun, un "Utilisateur") du site web Lion Meme Generator ("Site").
      </p>
      <h2 className="text-2xl font-bold mt-6 text-white">Informations que nous collectons</h2>
      <p>
        Nous ne collectons aucune information d'identification personnelle sur nos utilisateurs. Les images que vous téléchargez sont traitées dans votre navigateur et ne sont jamais envoyées ou stockées sur nos serveurs.
      </p>
      <p>
        Une mesure d'audience anonyme est faite avec Umami : sans cookie, sans donnée personnelle, uniquement des statistiques globales de visite.
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
      <p>Dernière mise à jour : 30 octobre 2026</p>
    </div>
  </>
);

const En: React.FC = () => (
  <>
    <h1 className="text-3xl font-bold mb-6 text-white">Privacy policy</h1>
    <div className="space-y-4">
      <p>
        This privacy policy explains how Lion Meme Generator ("the Site") handles information about its users.
      </p>
      <h2 className="text-2xl font-bold mt-6 text-white">Information we collect</h2>
      <p>
        We collect no personally identifying information. The pictures you upload are processed in your browser and are never sent to or stored on our servers.
      </p>
      <p>
        Anonymous audience measurement is done with Umami: no cookies, no personal data, only overall visit statistics.
      </p>
      <h2 className="text-2xl font-bold mt-6 text-white">How we use information</h2>
      <p>
        Since we collect no information, we do not use any.
      </p>
      <h2 className="text-2xl font-bold mt-6 text-white">Sharing your personal information</h2>
      <p>
        We do not sell, trade or rent users' personal information to anyone.
      </p>
      <h2 className="text-2xl font-bold mt-6 text-white">Changes to this policy</h2>
      <p>
        Lion Meme Generator may update this privacy policy at any time. When we do, we will change the date at the bottom of this page.
      </p>
      <p>Last updated: October 30, 2026</p>
    </div>
  </>
);

const PrivacyPolicy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="text-zinc-300 max-w-3xl mx-auto p-4 md:p-8">
      <button onClick={onBack} className="mb-8 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-lg">
        {T.back}
      </button>
      {LANG === 'en' ? <En /> : <Fr />}
    </div>
  );
};

export default PrivacyPolicy;
