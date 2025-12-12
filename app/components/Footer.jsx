// app/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/60">
      <div className="mx-auto max-w-6xl px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>© 2025 神羅万象グリッド Fourier Oracle</p>
        <div className="flex gap-4">
          <a href="#about" className="hover:text-slate-300 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-slate-300 transition-colors">
            プライバシー
          </a>
          <a href="#" className="hover:text-slate-300 transition-colors">
            利用規約
          </a>
        </div>
      </div>
    </footer>
  );
}
