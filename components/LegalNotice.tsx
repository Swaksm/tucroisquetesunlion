
import React from 'react';

const LegalNotice: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="text-zinc-300 max-w-3xl mx-auto p-4 md:p-8">
      <button onClick={onBack} className="mb-8 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-lg">
        &larr; Retour
      </button>
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
    </div>
  );
};

export default LegalNotice;
