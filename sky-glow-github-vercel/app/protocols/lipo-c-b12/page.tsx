import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lipo-C with B12 Protocol | SKY GLOW",
  description: "View the SKY GLOW Lipo-C with Vitamin B12 protocol for the 10 ml vial.",
  openGraph: {
    title: "Lipo-C with B12 Protocol | SKY GLOW",
    description: "SKY GLOW Lipo-C with Vitamin B12 protocol information.",
    images: [{ url: "/protocols/lipo-c-b12-protocol-hd.png", alt: "SKY GLOW Lipo-C with Vitamin B12 protocol" }],
  },
  twitter: { card: "summary_large_image", images: ["/protocols/lipo-c-b12-protocol-hd.png"] },
};

export default function LipoCWithB12ProtocolPage() {
  return (
    <main className="protocol-page">
      <nav className="protocol-page-nav" aria-label="Protocol navigation">
        <Link href="/#protocols">← All Product Protocols</Link>
        <Link href="/">SKY GLOW</Link>
      </nav>
      <section className="protocol-page-content">
        <p className="eyebrow">PRODUCT PROTOCOL</p>
        <h1>Lipo-C with Vitamin B12</h1>
        <p className="protocol-page-dose">For the 10 ml vial</p>
        <a href="/protocols/lipo-c-b12-protocol-hd.png" target="_blank" rel="noopener noreferrer" aria-label="Open the Lipo-C with Vitamin B12 protocol at full resolution">
          <img className="protocol-document" src="/protocols/lipo-c-b12-protocol-hd.png" alt="Lipo-C with Vitamin B12 protocol for the 10 ml vial" />
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
