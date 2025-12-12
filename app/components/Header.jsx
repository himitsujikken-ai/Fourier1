// app/components/Header.jsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        {/* ロゴ */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full border border-yellow-400/60 flex items-center justify-center text-xs tracking-widest">
            波
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold tracking-[0.18em] text-xs uppercase text-yellow-300/90">
              Shinra Bansho
            </span>
            <span className="font-semibold text-slate-50 text-lg">
              神羅万象 Fourier
            </span>
          </div>
        </div>

        {/* ナビゲーション */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className="hover:text-yellow-300 transition-colors">
            Home
          </Link>
          <a href="#about" className="hover:text-yellow-300 transition-colors">
            About
          </a>
          <a href="#how" className="hover:text-yellow-300 transition-colors">
            How it works
          </a>
        </nav>

        {/* モバイルメニュー（ダミー） */}
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-slate-600/60">
          <span className="sr-only">メニューを開く</span>
          <div className="space-y-1.5">
            <span className="block w-5 h-[2px] bg-slate-200" />
            <span className="block w-5 h-[2px] bg-slate-200" />
            <span className="block w-5 h-[2px] bg-slate-200" />
          </div>
        </button>
      </div>
    </header>
  );
}
