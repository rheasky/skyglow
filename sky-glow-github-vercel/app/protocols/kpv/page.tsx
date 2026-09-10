import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KPV Protocol | SKY GLOW",
  description: "View the SKY GLOW KPV protocol covering 5 mg and 10 mg vials.",
  openGraph: {
    title: "KPV Protocol | SKY GLOW",
    description: "SKY GLOW KPV protocol information.",
    images: [{ url: "/protocols/kpv-protocol-hd.png", alt: "SKY GLOW KPV protocol" }],
  },
  twitter: { card: "summary_large_image", images: ["/protocols/kpv-protocol-hd.png"] },
};

export default function KpvProtocolPage() {
  return (
    <main className="protocol-page">
      <nav className="protocol-page-nav" aria-label="Protocol navigation">
        <Link href="/#protocols">← All Product Protocols</Link>
        <Link href="/">SKY GLOW</Link>
      </nav>
      <section className="protocol-page-content">
        <p className="eyebrow">PRODUCT PROTOCOL</p>
        <h1>KPV</h1>
        <p className="protocol-page-dose">For 5 mg and 10 mg vials</p>
        <a href="/protocols/kpv-protocol-hd.png" target="_blank" rel="noopener noreferrer" aria-label="Open the KPV protocol at full resolution">
          <img className="protocol-document" src="/protocols/kpv-protocol-hd.png" alt="KPV protocol for 5 mg and 10 mg vials" />
        </a>
        <p className="protocol-zoom-note">Tap the protocol to open the full-resolution copy.</p>
        <div className="protocol-disclaimer">
          <strong>Important information</strong>
          <p>This material is provided for general educational purposes only and is not medical advice. Follow the instructions supplied with the exact product and consult a qualified healthcare professional.</p>
        </div>
        <Link className="protocol-back" href="/#protocols">← Back to Product Protocols</Link>
      </section>
    </main>
  );
}
