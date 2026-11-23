import React from 'react';
import { LANG, T } from '../i18n';

const Fr: React.FC = () => (
  <>
    <h1 className="text-3xl font-bold mb-6 text-white">Mentions Légales</h1>
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mt-6 text-white">Éditeur du site</h2>
      <p>
        Lion Meme Generator, projet personnel de Matthieu Izac, sans statut d'entreprise. Contact : swks.pro@gmail.com.
      </p>
      <p>
        Mentions légales complètes du site : <a href="https://swaks.org/mentions-legales.html" className="underline">swaks.org/mentions-legales.html</a>.
      </p>

      <h2 className="text-2xl font-bold mt-6 text-white">Hébergement</h2>
      <p>
        Ce site est hébergé par OVH SAS, 2 rue Kellermann, 59100 Roubaix, France.
      </p>

      <h2 className="text-2xl font-bold mt-6 text-white">Propriété intellectuelle</h2>
      <p>
        Le code source de l'application est la propriété de son créateur. Les images de lions prédéfinies sont utilisées à des fins de démonstration. Les images téléchargées par les utilisateurs restent leur propriété et ne sont pas stockées sur nos serveurs.
      </p>
    </div>
  </>
);

const En: React.FC = () => (
  <>
    <h1 className="text-3xl font-bold mb-6 text-white">Legal notice</h1>
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mt-6 text-white">Publisher</h2>
      <p>
        Lion Meme Generator, a personal project by Matthieu Izac, private individual. Contact: swks.pro@gmail.com.
      </p>
      <p>
        Full legal notice of the site: <a href="https://swaks.org/mentions-legales.html" className="underline">swaks.org/mentions-legales.html</a>.
      </p>

      <h2 className="text-2xl font-bold mt-6 text-white">Hosting</h2>
      <p>
        This site is hosted by OVH SAS, 2 rue Kellermann, 59100 Roubaix, France.
      </p>

      <h2 className="text-2xl font-bold mt-6 text-white">Intellectual property</h2>
      <p>
        The source code of the app belongs to its creator. The predefined lion pictures are used for demonstration. Pictures uploaded by users remain their property and are not stored on our servers.
      </p>
    </div>
  </>
);

const LegalNotice: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="text-zinc-300 max-w-3xl mx-auto p-4 md:p-8">
      <button onClick={onBack} className="mb-8 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-lg">
        {T.back}
      </button>
      {LANG === 'en' ? <En /> : <Fr />}
    </div>
  );
};

export default LegalNotice;
