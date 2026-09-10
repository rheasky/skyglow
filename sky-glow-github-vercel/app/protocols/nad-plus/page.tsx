import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NAD+ Protocol | SKY GLOW",
  description: "View the SKY GLOW NAD+ protocol covering 100 mg, 500 mg, 700 mg, and 1000 mg vials.",
  openGraph: {
    title: "NAD+ Protocol | SKY GLOW",
    description: "SKY GLOW NAD+ protocol information.",
    images: [{ url: "/protocols/nad-plus-protocol-hd.png", alt: "SKY GLOW NAD+ protocol" }],
  },
  twitter: { card: "summary_large_image", images: ["/protocols/nad-plus-protocol-hd.png"] },
};

export default function NadPlusProtocolPage() {
  return (
    <main className="protocol-page">
      <nav className="protocol-page-nav" aria-label="Protocol navigation">
        <Link href="/#protocols">← All Product Protocols</Link>
        <Link href="/">SKY GLOW</Link>
      </nav>
      <section className="protocol-page-content">
        <p className="eyebrow">PRODUCT PROTOCOL</p>
        <h1>NAD+</h1>
        <p className="protocol-page-dose">For 100 mg, 500 mg, 700 mg, and 1000 mg vials</p>
        <a href="/protocols/nad-plus-protocol-hd.png" target="_blank" rel="noopener noreferrer" aria-label="Open the NAD+ protocol at full resolution">
          <img className="protocol-document" src="/protocols/nad-plus-protocol-hd.png" alt="NAD+ protocol for 100 mg, 500 mg, 700 mg, and 1000 mg vials" />
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
