import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SS-31 Protocol | SKY GLOW",
  description: "View the SKY GLOW SS-31 protocol covering 10 mg, 30 mg, and 50 mg vials.",
  openGraph: {
    title: "SS-31 Protocol | SKY GLOW",
    description: "SKY GLOW SS-31 protocol information.",
    images: [{ url: "/protocols/ss31-protocol-hd.png", alt: "SKY GLOW SS-31 protocol" }],
  },
  twitter: { card: "summary_large_image", images: ["/protocols/ss31-protocol-hd.png"] },
};

export default function Ss31ProtocolPage() {
  return (
    <main className="protocol-page">
      <nav className="protocol-page-nav" aria-label="Protocol navigation">
        <Link href="/#protocols">← All Product Protocols</Link>
        <Link href="/">SKY GLOW</Link>
      </nav>
      <section className="protocol-page-content">
        <p className="eyebrow">PRODUCT PROTOCOL</p>
        <h1>SS-31</h1>
        <p className="protocol-page-dose">For 10 mg, 30 mg, and 50 mg vials</p>
        <a href="/protocols/ss31-protocol-hd.png" target="_blank" rel="noopener noreferrer" aria-label="Open the SS-31 protocol at full resolution">
          <img className="protocol-document" src="/protocols/ss31-protocol-hd.png" alt="SS-31 protocol for 10 mg, 30 mg, and 50 mg vials" />
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
