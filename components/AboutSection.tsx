import React from 'react';
import { LANG } from '../i18n';

// Texte lu par les moteurs de recherche : le principe, la méthode, des idées et la FAQ.
// La FAQ doit rester identique à celle du JSON-LD de index.html (fr) et en/index.html (en).
const Fr: React.FC = () => (
  <section className="w-full mt-20 text-zinc-500 text-left leading-relaxed">
    <h2 className="text-2xl font-bold text-zinc-300 mb-4">Le meme « Tu crois que t'es un lion mais t'es un… »</h2>
    <p className="mb-4">
      Le principe tient en deux images. En haut, un lion majestueux : ce que tu crois être. En dessous, une photo qui montre ce que tu es vraiment : un chaton mouillé, un pigeon, ou toi un lundi matin. La phrase fait le lien, « Tu crois que t'es un lion mais t'es un… », et c'est le décalage entre les deux qui fait rire.
    </p>
    <p className="mb-4">
      Il marche pour se moquer gentiment d'un ami qui se la raconte, mais encore mieux en autodérision : ta photo de vacances ratée, ton chat, ton bureau en désordre.
    </p>

    <h3 className="text-xl font-bold text-zinc-400 mt-8 mb-2">Faire ton meme en 5 étapes</h3>
    <ol className="list-decimal pl-6 space-y-1">
      <li><strong>Le format</strong> : carré pour Instagram ou WhatsApp, rectangle pour X ou Discord.</li>
      <li><strong>Le lion</strong> : choisis le lion « Alpha » ou le lion « avec des bras », ou importe ta propre image.</li>
      <li><strong>Ta vraie nature</strong> : ajoute la photo qui ira en dessous.</li>
      <li><strong>Le texte</strong> : écris la fin de la phrase, 30 caractères maximum.</li>
      <li><strong>Générer</strong>, puis télécharge le meme en PNG ou partage-le directement depuis ton téléphone.</li>
    </ol>

    <h3 className="text-xl font-bold text-zinc-400 mt-8 mb-2">Idées de chutes</h3>
    <p className="mb-2">Tu crois que t'es un lion mais t'es…</p>
    <ul className="list-disc pl-6 space-y-1">
      <li>un chaton mouillé</li>
      <li>un pigeon qui vole des frites</li>
      <li>un hamster dans sa roue</li>
      <li>un paresseux le lundi</li>
      <li>un caniche avec un nœud</li>
    </ul>

    <h3 className="text-xl font-bold text-zinc-400 mt-8 mb-2">Questions fréquentes</h3>
    <h4 className="font-bold text-zinc-400 mt-4">Comment faire un meme « Tu crois que t'es un lion » ?</h4>
    <p>Choisis le format, un lion (ou le tien), ajoute la photo de ta « vraie nature » et le texte, puis clique sur « Générer le mème ». Tu peux ensuite le télécharger en PNG ou le partager.</p>
    <h4 className="font-bold text-zinc-400 mt-4">Le générateur de meme lion est-il gratuit ?</h4>
    <p>Oui, il est entièrement gratuit et sans inscription.</p>
    <h4 className="font-bold text-zinc-400 mt-4">Je peux utiliser ma propre image de lion ?</h4>
    <p>Oui : dans l'étape « Choisis ton Lion », importe n'importe quelle image depuis ton appareil.</p>
    <h4 className="font-bold text-zinc-400 mt-4">Mes photos sont-elles envoyées sur un serveur ?</h4>
    <p>Non. Le meme est assemblé directement dans ton navigateur : tes images ne quittent jamais ton appareil.</p>
  </section>
);

const En: React.FC = () => (
  <section className="w-full mt-20 text-zinc-500 text-left leading-relaxed">
    <h2 className="text-2xl font-bold text-zinc-300 mb-4">The "You think you're a lion but you're a…" meme</h2>
    <p className="mb-4">
      It takes two pictures. On top, a majestic lion: what you think you are. Below, a picture of what you really are: a wet kitten, a pigeon, or you on a Monday morning. The caption ties them together, "You think you're a lion but you're a…", and the gap between the two is the joke.
    </p>
    <p className="mb-4">
      It works to gently tease a friend who shows off, and even better on yourself: your failed holiday photo, your cat, your messy desk.
    </p>

    <h3 className="text-xl font-bold text-zinc-400 mt-8 mb-2">Make your meme in 5 steps</h3>
    <ol className="list-decimal pl-6 space-y-1">
      <li><strong>The format</strong>: square for Instagram or WhatsApp, rectangle for X or Discord.</li>
      <li><strong>The lion</strong>: pick the "Alpha" lion or the lion "with arms", or upload your own picture.</li>
      <li><strong>Your real nature</strong>: add the picture that goes underneath.</li>
      <li><strong>The text</strong>: write the end of the sentence, 30 characters max.</li>
      <li><strong>Generate</strong>, then download the meme as a PNG or share it straight from your phone.</li>
    </ol>

    <h3 className="text-xl font-bold text-zinc-400 mt-8 mb-2">Punchline ideas</h3>
    <p className="mb-2">You think you're a lion but you're…</p>
    <ul className="list-disc pl-6 space-y-1">
      <li>a wet kitten</li>
      <li>a pigeon stealing fries</li>
      <li>a hamster in its wheel</li>
      <li>a sloth on a Monday</li>
      <li>a poodle with a bow</li>
    </ul>

    <h3 className="text-xl font-bold text-zinc-400 mt-8 mb-2">Questions</h3>
    <h4 className="font-bold text-zinc-400 mt-4">How do I make a "You think you're a lion" meme?</h4>
    <p>Pick the format, a lion (or your own), add the picture of your "real nature" and the text, then click "Generate the meme". You can then download it as a PNG or share it.</p>
    <h4 className="font-bold text-zinc-400 mt-4">Is the lion meme generator free?</h4>
    <p>Yes, it is completely free, with no sign-up.</p>
    <h4 className="font-bold text-zinc-400 mt-4">Can I use my own lion picture?</h4>
    <p>Yes: in the "Pick your lion" step, upload any picture from your device.</p>
    <h4 className="font-bold text-zinc-400 mt-4">Are my pictures sent to a server?</h4>
    <p>No. The meme is put together right in your browser: your pictures never leave your device.</p>
  </section>
);

const AboutSection: React.FC = () => (LANG === 'en' ? <En /> : <Fr />);

export default AboutSection;
