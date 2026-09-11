import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Semax 10 mg Protocol | SKY GLOW",
  description: "View the SKY GLOW Semax protocol for the 10 mg vial.",
  openGraph: {
    title: "Semax 10 mg Protocol | SKY GLOW",
    description: "SKY GLOW Semax 10 mg protocol information.",
    images: [{ url: "/protocols/semax-protocol-hd.png", alt: "SKY GLOW Semax 10 mg protocol" }],
  },
  twitter: { card: "summary_large_image", images: ["/protocols/semax-protocol-hd.png"] },
};

export default function SemaxProtocolPage() {
  return (
    <main className="protocol-page">
      <nav className="protocol-page-nav" aria-label="Protocol navigation">
        <Link href="/#protocols">← All Product Protocols</Link>
        <Link href="/">SKY GLOW</Link>
      </nav>
      <section className="protocol-page-content">
        <p className="eyebrow">PRODUCT PROTOCOL</p>
        <h1>Semax</h1>
        <p className="protocol-page-dose">For the 10 mg vial</p>
        <a href="/protocols/semax-protocol-hd.png" target="_blank" rel="noopener noreferrer" aria-label="Open the Semax 10 mg protocol at full resolution">
          <img className="protocol-document" src="/protocols/semax-protocol-hd.png" alt="Semax protocol for the 10 mg vial" />
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
