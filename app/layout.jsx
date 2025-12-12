// app/layout.jsx
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: '神羅万象 Fourier | 宇宙の波形を読み解くフーリエ占い',
  description: '人生の出来事をフーリエ変換し、宇宙の周期と照合する新しい占い体験。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="min-h-screen text-slate-100">
        <div className="min-h-screen flex flex-col"
          style={{
            background:
              'radial-gradient(circle at top, #1b2340 0, #050816 45%, #02010d 100%)',
          }}
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
