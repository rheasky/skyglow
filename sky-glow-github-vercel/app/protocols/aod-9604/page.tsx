import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AOD 9604 Protocol | SKY GLOW",
  description: "View the SKY GLOW AOD 9604 5 mg protocol.",
  openGraph: {
    title: "AOD 9604 Protocol | SKY GLOW",
    description: "SKY GLOW AOD 9604 5 mg protocol information.",
    images: [{ url: "/protocols/aod-9604-protocol-hd.png", alt: "SKY GLOW AOD 9604 protocol" }],
  },
  twitter: { card: "summary_large_image", images: ["/protocols/aod-9604-protocol-hd.png"] },
};

export default function Aod9604ProtocolPage() {
  return (
    <main className="protocol-page">
      <nav className="protocol-page-nav" aria-label="Protocol navigation">
        <Link href="/#protocols">← All Product Protocols</Link>
        <Link href="/">SKY GLOW</Link>
      </nav>
      <section className="protocol-page-content">
        <p className="eyebrow">PRODUCT PROTOCOL</p>
        <h1>AOD 9604</h1>
        <p className="protocol-page-dose">For 5 mg vials</p>
        <a href="/protocols/aod-9604-protocol-hd.png" target="_blank" rel="noopener noreferrer" aria-label="Open the AOD 9604 protocol at full resolution">
          <img className="protocol-document" src="/protocols/aod-9604-protocol-hd.png" alt="AOD 9604 protocol for 5 mg vials" />
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
