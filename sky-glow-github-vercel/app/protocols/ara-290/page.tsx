import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ARA-290 Protocol | SKY GLOW",
  description: "View the SKY GLOW ARA-290 protocol for the 10 mg vial.",
  openGraph: {
    title: "ARA-290 Protocol | SKY GLOW",
    description: "SKY GLOW ARA-290 protocol information.",
    images: [{ url: "/protocols/ara-290-protocol-hd.png", alt: "SKY GLOW ARA-290 protocol" }],
  },
  twitter: { card: "summary_large_image", images: ["/protocols/ara-290-protocol-hd.png"] },
};

export default function Ara290ProtocolPage() {
  return (
    <main className="protocol-page">
      <nav className="protocol-page-nav" aria-label="Protocol navigation">
        <Link href="/#protocols">← All Product Protocols</Link>
        <Link href="/">SKY GLOW</Link>
      </nav>
      <section className="protocol-page-content">
        <p className="eyebrow">PRODUCT PROTOCOL</p>
        <h1>ARA-290</h1>
        <p className="protocol-page-dose">For the 10 mg vial</p>
        <a href="/protocols/ara-290-protocol-hd.png" target="_blank" rel="noopener noreferrer" aria-label="Open the ARA-290 protocol at full resolution">
          <img className="protocol-document" src="/protocols/ara-290-protocol-hd.png" alt="ARA-290 protocol for the 10 mg vial" />
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
