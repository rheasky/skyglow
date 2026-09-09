import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cagrilintide Protocol | SKY GLOW",
  description: "View the SKY GLOW Cagrilintide protocol.",
  openGraph: { title: "Cagrilintide Protocol | SKY GLOW", description: "SKY GLOW Cagrilintide protocol information.", images: [{ url: "/cagrilintide-protocol-hd.png", alt: "SKY GLOW Cagrilintide protocol" }] },
  twitter: { card: "summary_large_image", images: ["/cagrilintide-protocol-hd.png"] },
};

export default function CagrilintideProtocolPage() {
  return (
    <main className="protocol-page">
      <nav className="protocol-page-nav" aria-label="Protocol navigation"><Link href="/#protocols">← All Product Protocols</Link><Link href="/">SKY GLOW</Link></nav>
      <section className="protocol-page-content">
        <p className="eyebrow">PRODUCT PROTOCOL</p><h1>Cagrilintide</h1><p className="protocol-page-dose">Protocol information</p>
        <a href="/cagrilintide-protocol-hd.png" target="_blank" rel="noopener noreferrer" aria-label="Open the Cagrilintide protocol at full resolution"><img className="protocol-document" src="/cagrilintide-protocol-hd.png" alt="Cagrilintide protocol" /></a>
        <p className="protocol-zoom-note">Tap the protocol to open the full-resolution copy.</p>
        <div className="protocol-disclaimer"><strong>Important information</strong><p>This material is provided for general educational purposes only and is not medical advice. Follow the instructions supplied with the exact product and consult a qualified healthcare professional.</p></div>
        <Link className="protocol-back" href="/#protocols">← Back to Product Protocols</Link>
      </section>
    </main>
  );
}
