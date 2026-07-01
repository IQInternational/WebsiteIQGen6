import { useEffect, useState } from 'react';
import InvitationCard from './components/InvitationCard';

export default function App() {
  const [grow, setGrow] = useState(false);
  const [hasRSVP, setHasRSVP] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGrow(true), 200);
    return () => clearTimeout(t);
  }, []);

  const handleRSVP = () => {
    if (hasRSVP) return;
    setHasRSVP(true);
  };

  return (
    <div className="min-h-screen bg-[#b89053] relative overflow-hidden flex flex-col justify-between">

      {/* BACKGROUND EFFECTS */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% 45%, #dfbe8c 0%, #a47b3e 60%, #4a3311 120%)',
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.12] z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.75) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.75) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,11,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,255,255,0.06)_50%,rgba(0,0,0,0.1)_50%)] [background-size:4px_4px] z-0" />

      {/* Main content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8 sm:py-16">
        <div className="flex flex-col items-center gap-4 w-full max-w-[360px] md:max-w-[400px]">

          {/* Banner image */}
          <div className="w-full rounded-2xl overflow-hidden border-[3px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]" style={{ borderImage: 'linear-gradient(135deg, #d4a853 0%, #c9953a 30%, #b8860b 50%, #c9953a 70%, #d4a853 100%) 1' }}>
            <img src="/banner.png" alt="Banner" className="w-full h-auto block" />
          </div>

          <InvitationCard
            grow={grow}
            onRSVP={handleRSVP}
            hasRSVP={hasRSVP}
          />
        </div>
      </main>

      <footer className="relative z-10 text-center pb-6 pointer-events-none select-none">
        <div className="w-12 h-px bg-amber-950/20 mx-auto" />
      </footer>
    </div>
  );
}
