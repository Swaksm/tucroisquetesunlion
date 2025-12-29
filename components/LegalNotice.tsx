
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
          Lion Meme Generator
        </p>
        <p>
          Ce site est un projet de démonstration et n'a pas de statut d'entreprise.
        </p>

        <h2 className="text-2xl font-bold mt-6 text-white">Hébergement</h2>
        <p>
          Ce site est hébergé par Netlify, Inc., situé à 2325 3rd Street, Suite 215, San Francisco, CA 94107, USA.
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
