// app/start/page.jsx
import Link from 'next/link';

export default function StartPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs tracking-[0.35em] uppercase text-yellow-200/80 mb-3">
          Step 1 / Basic Info
        </p>

        <h1 className="text-2xl md:text-3xl font-semibold mb-3">
          あなたの「波形」のベースとなる
          <br className="hidden md:inline" />
          情報を教えてください。
        </h1>

        <p className="text-sm md:text-base text-slate-300/90 mb-8 leading-relaxed">
          生年月日などの基本情報から、あなた固有の
          <span className="text-slate-50 font-medium">基音（ベース周波数）</span>
          を抽出していきます。
          <br />
          出生時間や出生地は、宇宙周期との照合精度を高めるために使いますが、
          未入力でも解析は可能です。
        </p>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/40 p-6 md:p-8 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="birthdate"
                className="block text-sm font-medium text-slate-100 mb-2"
              >
                生年月日{' '}
                <span className="text-xs text-red-400 align-middle">※必須</span>
              </label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-300/70 focus:border-yellow-300/70"
              />
              <p className="mt-1.5 text-xs text-slate-400">例：1990-08-24</p>
            </div>

            <div>
              <label
                htmlFor="birthtime"
                className="block text-sm font-medium text-slate-100 mb-2"
              >
                出生時間（わかる範囲で）
              </label>
              <select
                id="birthtime"
                name="birthtime"
                className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-yellow-300/70 focus:border-yellow-300/70"
              >
                <option value="">未選択（不明）</option>
                <option value="early-morning">早朝（4:00〜7:00）</option>
                <option value="morning">朝（7:00〜11:00）</option>
                <option value="noon">昼（11:00〜15:00）</option>
                <option value="evening">夕方（15:00〜19:00）</option>
                <option value="night">夜（19:00〜24:00）</option>
                <option value="midnight">深夜（0:00〜4:00）</option>
              </select>
              <p className="mt-1.5 text-xs text-slate-400">
                正確な時間がわからない場合は、おおよその時間帯を選んでください。
              </p>
            </div>

            <div>
              <label
                htmlFor="birthplace"
                className="block text-sm font-medium text-slate-100 mb-2"
              >
                出生地（市区町村まででOK）
              </label>
              <input
                type="text"
                id="birthplace"
                name="birthplace"
                placeholder="例：京都府京都市 / 東京都世田谷区"
                className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-300/70 focus:border-yellow-300/70"
              />
              <p className="mt-1.5 text-xs text-slate-400">
                宇宙周期との照合に用いますが、空欄でも解析は可能です。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 px-4 py-3 text-xs text-slate-400 leading-relaxed">
              <p className="mb-1">
                入力いただいた情報は、波形解析とレポート生成のみに使用されます。
              </p>
              <p>
                保存の有無や匿名性など、詳細な取り扱いはのちほど設定画面から選択できます。
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/events"
                className="inline-flex flex-1 items-center justify-center px-6 py-3 rounded-full bg-yellow-300 text-slate-900 text-sm font-semibold shadow-lg shadow-yellow-300/20 hover:bg-yellow-200 transition-colors"
              >
                次へ進む（波の記憶を入力）
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-slate-600 text-sm text-slate-200 hover:border-yellow-300/70 hover:text-yellow-200 transition-colors"
              >
                TOPに戻る
              </Link>
            </div>
          </form>
        </div>

        <p className="mt-6 text-xs text-slate-400 leading-relaxed">
          ※ ここで入力するのは、いわば「あなたという楽器」の基本設定です。
          <br />
          次のステップで、どんなタイミングでその楽器が鳴りやすかったのか（好調・停滞の波）を一緒に見ていきます。
        </p>
      </div>
    </section>
  );
}
