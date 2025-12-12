// app/page.jsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-16 lg:pt-16 lg:pb-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* 左カラム */}
        <div className="flex-1">
          <p className="text-xs tracking-[0.45em] uppercase text-yellow-200/75 mb-3">
            四季 × 宇宙 × 周期
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-5">
            宇宙の波形を読み解く、
            <br />
            <span className="text-yellow-300">あなた専用のフーリエ占い。</span>
          </h1>
          <p className="text-sm md:text-base text-slate-300/90 max-w-xl mb-8 leading-relaxed">
            過去の出来事とリズムから、あなたの「人生の周波数」を解析し、
            <br className="hidden md:inline" />
            次の飛躍のタイミングを可視化します。
            <br />
            スピリチュアルでも、単なる統計でもない、
            <br className="hidden md:inline" />
            <span className="text-slate-100">
              科学と哲理が交差する新しい占い体験
            </span>
            です。
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4" id="start">
            <Link
              href="/start"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-yellow-300 text-slate-900 text-sm font-semibold shadow-lg shadow-yellow-300/20 hover:bg-yellow-200 transition-colors"
            >
              波形を解析する
            </Link>
            <a
              href="#how"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-slate-500/70 text-sm text-slate-200 hover:border-yellow-300/70 hover:text-yellow-200 transition-colors"
            >
              まずは仕組みを知る
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            ※ 生年月日などの基本情報だけで、カンタンに体験できます。
          </p>
        </div>

        {/* 右カラム：波形ビジュアル */}
        <div className="flex-1 w-full">
          <div className="relative w-full aspect-[4/3] rounded-3xl border border-slate-700/80 bg-gradient-to-br from-indigo-900/60 via-slate-900/80 to-fuchsia-900/60 overflow-hidden shadow-[0_0_60px_rgba(15,23,42,0.9)]">
            {/* 後で Three.js に差し替え予定のプレースホルダ */}
            <div className="absolute inset-0 opacity-60 pointer-events-none">
              <div className="absolute -left-10 top-1/3 w-[140%] h-40 bg-gradient-to-r from-sky-300/60 via-purple-400/80 to-pink-300/70 blur-3xl" />
              <div className="absolute left-1/4 top-10 w-40 h-40 rounded-full border border-sky-200/20" />
              <div className="absolute right-10 bottom-12 w-28 h-28 rounded-full border border-purple-200/20" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 400 240" className="w-[90%]" aria-hidden="true">
                <g
                  stroke="rgba(148,163,184,0.25)"
                  strokeWidth="0.4"
                >
                  <path d="M20 20 V220" />
                  <path d="M80 20 V220" />
                  <path d="M140 20 V220" />
                  <path d="M200 20 V220" />
                  <path d="M260 20 V220" />
                  <path d="M320 20 V220" />
                  <path d="M380 20 V220" />
                  <path d="M20 40 H380" />
                  <path d="M20 80 H380" />
                  <path d="M20 120 H380" />
                  <path d="M20 160 H380" />
                  <path d="M20 200 H380" />
                </g>
                <polyline
                  fill="none"
                  stroke="url(#waveGrad)"
                  strokeWidth="2.2"
                  points="20,140 40,120 60,135 80,100 100,120 120,80 140,110 160,70
                    180,90 200,60 220,85 240,70 260,95 280,120 300,110 320,140 340,135 360,160 380,150"
                />
                <defs>
                  <linearGradient id="waveGrad" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#7dd3fc" />
                    <stop offset="50%" stopColor="#c4b5fd" />
                    <stop offset="100%" stopColor="#fb7185" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="absolute left-4 top-4 space-y-1 text-[10px] leading-tight">
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-900/70 border border-slate-600/70">
                <span className="w-2 h-2 rounded-full bg-sky-300" />
                <span className="uppercase tracking-[0.18em] text-[9px] text-slate-300">
                  Base Frequency
                </span>
                <span className="text-slate-100 font-semibold">11ヶ月周期</span>
              </div>
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-900/60 border border-purple-500/50 mt-1">
                <span className="w-2 h-2 rounded-full bg-purple-300" />
                <span className="text-[9px] text-slate-200">2.4年周期の共鳴</span>
              </div>
            </div>

            <div className="absolute right-4 bottom-4 text-right text-[10px] text-slate-300/80">
              <p>「今、波のどこにいるのか？」</p>
              <p>その問いに、フーリエ変換で答えます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3カラム説明 */}
      <section id="how" className="border-t border-slate-800/80 bg-slate-950/40">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <h2 className="text-center text-xl md:text-2xl font-semibold mb-8 text-slate-50">
            神羅万象フーリエ占いの 3 つのステップ
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-xs text-slate-200">
                1
              </div>
              <h3 className="font-semibold text-slate-100 text-base">波で読む</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                過去の「好調だった時期」「重かった時期」を入力し、
                人生の出来事を <span className="text-slate-50 font-medium">時間の波</span> として捉えます。
                そのデータをもとに、フーリエ変換で周期を抽出します。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-xs text-slate-200">
                2
              </div>
              <h3 className="font-semibold text-slate-100 text-base">宇宙と照合する</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                抽出した周期を、木星や土星などの
                <span className="text-slate-50 font-medium">天体周期</span>、そして
                あなたの哲理に基づく
                <span className="text-slate-50 font-medium">陰陽・渦のサイクル</span>
                と照合し、どのリズムと共鳴しているかを解析します。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-xs text-slate-200">
                3
              </div>
              <h3 className="font-semibold text-slate-100 text-base">行動に変える</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                「いつ動くか」「いつ整えるか」。<br />
                ただ当てるのではなく、
                <span className="text-slate-50 font-medium">波に乗るための行動タイミング</span>
                として、未来のピーク・谷をカレンダー感覚でお返しします。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
