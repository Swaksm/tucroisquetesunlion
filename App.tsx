
import React, { useState, useRef } from 'react';
import { PREDEFINED_LIONS } from './constants';
import MemeCanvas from './components/MemeCanvas';
import { Upload, Download, Check, Image as ImageIcon, Type, Rocket, RefreshCw, Plus } from 'lucide-react';

const App: React.FC = () => {
  const [selectedLion, setSelectedLion] = useState(PREDEFINED_LIONS[0].url);
  const [customLionUrl, setCustomLionUrl] = useState<string | null>(null);
  const [userImageUrl, setUserImageUrl] = useState<string | null>(null);
  const [memeText, setMemeText] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lionInputRef = useRef<HTMLInputElement>(null);

  const handleUserImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserImageUrl(event.target?.result as string);
        setIsGenerated(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCustomLionUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const url = event.target?.result as string;
        setCustomLionUrl(url);
        setSelectedLion(url);
        setIsGenerated(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemeText(e.target.value);
    setIsGenerated(false);
  };

  const generateMeme = () => {
    if (userImageUrl && memeText) {
      setIsGenerated(true);
      const previewElement = document.getElementById('preview-section');
      if (previewElement && window.innerWidth < 1024) {
        previewElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const downloadMeme = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = `lion-meme-${Date.now()}.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  const canGenerate = userImageUrl && memeText.trim().length > 0;

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center max-w-5xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2 italic text-zinc-100">
          Lion Meme <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200">Generator</span>
        </h1>
        <p className="text-zinc-400 text-lg">"Tu crois que t'es un lion mais t'es un..."</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* Left Column: Controls */}
        <div className="space-y-8">
          
          {/* Step 1: Choose Lion */}
          <section className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-zinc-100 text-zinc-950 w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
              <h2 className="text-xl font-bold uppercase tracking-tight">Choisis ton Lion</h2>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {/* The two predefined lions */}
              {PREDEFINED_LIONS.map((lion) => (
                <button
                  key={lion.id}
                  onClick={() => { setSelectedLion(lion.url); setIsGenerated(false); }}
                  className={`relative group rounded-lg overflow-hidden border-2 transition-all aspect-square ${
                    selectedLion === lion.url && selectedLion !== customLionUrl ? 'border-orange-500 scale-105 shadow-lg' : 'border-transparent grayscale hover:grayscale-0'
                  }`}
                >
                  <img src={lion.url} alt={lion.name} className="w-full h-full object-cover" />
                  {selectedLion === lion.url && selectedLion !== customLionUrl && (
                    <div className="absolute top-1 right-1 bg-orange-500 rounded-full p-1">
                      <Check size={12} className="text-white" />
                    </div>
                  )}
                </button>
              ))}

              {/* Custom Lion Button */}
              <button
                onClick={() => lionInputRef.current?.click()}
                className={`relative group rounded-lg overflow-hidden border-2 border-dashed transition-all aspect-square flex flex-col items-center justify-center gap-1 ${
                  selectedLion === customLionUrl ? 'border-orange-500 bg-orange-500/10' : 'border-zinc-700 bg-zinc-800/30 hover:border-zinc-500'
                }`}
              >
                {customLionUrl ? (
                  <>
                    <img src={customLionUrl} className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Custom Lion" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Plus className="text-white" size={24} />
                    </div>
                    {selectedLion === customLionUrl && (
                      <div className="absolute top-1 right-1 bg-orange-500 rounded-full p-1">
                        <Check size={12} className="text-white" />
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <Plus className="text-zinc-500 group-hover:text-zinc-300" size={24} />
                    <span className="text-[9px] uppercase font-bold text-zinc-500 group-hover:text-zinc-300">Custom</span>
                  </>
                )}
                <input 
                  type="file" 
                  ref={lionInputRef} 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleCustomLionUpload} 
                />
              </button>
            </div>
          </section>

          {/* Step 2: Upload User Image */}
          <section className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-zinc-100 text-zinc-950 w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
              <h2 className="text-xl font-bold uppercase tracking-tight">Ta "vraie" nature</h2>
            </div>
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-zinc-700 rounded-xl cursor-pointer hover:border-zinc-500 hover:bg-zinc-800/50 transition-all overflow-hidden relative">
              {userImageUrl ? (
                <img src={userImageUrl} className="w-full h-full object-cover opacity-40" alt="Preview" />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-3 text-zinc-500" />
                  <p className="mb-2 text-sm text-zinc-400">Upload ton image ici</p>
                </div>
              )}
              <div className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity ${userImageUrl ? 'opacity-100' : 'opacity-0'}`}>
                <span className="bg-zinc-100 text-zinc-950 px-4 py-2 rounded-lg font-bold text-sm uppercase">Changer l'image</span>
              </div>
              <input type="file" className="hidden" accept="image/*" onChange={handleUserImageUpload} />
            </label>
          </section>

          {/* Step 3: Text input & Action */}
          <section className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-zinc-100 text-zinc-950 w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
              <h2 className="text-xl font-bold uppercase tracking-tight">L'élément textuel</h2>
            </div>
            <input
              type="text"
              placeholder="Ex: UN CHATON"
              maxLength={30}
              value={memeText}
              onChange={handleTextChange}
              className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-4 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-mono mb-6 text-lg"
            />
            
            <button
              onClick={generateMeme}
              disabled={!canGenerate}
              className={`w-full py-4 rounded-xl font-black text-xl uppercase tracking-widest transition-all transform active:scale-95 flex items-center justify-center gap-3 ${
                canGenerate 
                ? 'bg-gradient-to-r from-orange-600 to-orange-400 text-white shadow-lg shadow-orange-900/20 hover:from-orange-500 hover:to-orange-300' 
                : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
              }`}
            >
              <Rocket size={24} />
              Générer le mème
            </button>
          </section>
        </div>

        {/* Right Column: Preview */}
        <div id="preview-section" className="lg:sticky lg:top-8 self-start">
          <section className={`bg-zinc-900 p-6 rounded-2xl border transition-all duration-500 ${isGenerated ? 'border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.1)]' : 'border-zinc-800 opacity-60'}`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-zinc-100 text-zinc-950 w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span>
                <h2 className="text-xl font-bold uppercase tracking-tight">Aperçu</h2>
              </div>
              {isGenerated && (
                <span className="flex items-center gap-1 text-green-500 text-xs font-bold uppercase animate-pulse">
                   Prêt <Check size={12}/>
                </span>
              )}
            </div>
            
            <div className="relative">
              <MemeCanvas 
                lionUrl={selectedLion}
                userImageUrl={userImageUrl}
                text={isGenerated ? memeText : "..."}
                onCanvasRef={(c) => canvasRef.current = c}
              />
              {!isGenerated && (
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] rounded-xl flex items-center justify-center text-center p-6 border border-zinc-800">
                  <div className="flex flex-col items-center gap-4">
                    <RefreshCw className="text-orange-500 opacity-50" size={32} />
                    <p className="text-zinc-400 font-bold uppercase text-sm tracking-widest">
                      Clique sur "Générer" pour voir le mème
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8">
              <button
                disabled={!isGenerated}
                onClick={downloadMeme}
                className={`w-full font-black text-xl py-4 rounded-xl flex items-center justify-center gap-3 transition-all transform active:scale-95 uppercase tracking-wider ${
                  isGenerated 
                  ? 'bg-zinc-100 text-zinc-950 hover:bg-white shadow-xl' 
                  : 'bg-zinc-800 text-zinc-600 cursor-not-allowed border border-zinc-700 opacity-50'
                }`}
              >
                <Download size={24} />
                Télécharger .png
              </button>
            </div>
          </section>

          <div className="mt-8 flex flex-wrap gap-4 opacity-30 justify-center">
            <div className="flex items-center gap-2"><ImageIcon size={14}/> <span className="text-[10px] uppercase font-bold tracking-widest">HQ Canvas</span></div>
            <div className="flex items-center gap-2"><Type size={14}/> <span className="text-[10px] uppercase font-bold tracking-widest">Impact Layer</span></div>
            <div className="flex items-center gap-2"><Rocket size={14}/> <span className="text-[10px] uppercase font-bold tracking-widest">Instant Render</span></div>
          </div>
        </div>
      </div>

      <footer className="mt-20 py-8 border-t border-zinc-800 w-full text-center">
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-medium opacity-50">
          Lion Meme Generator — © 2025
        </p>
      </footer>
    </div>
  );
};

export default App;
