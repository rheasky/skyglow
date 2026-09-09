import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tirzepatide Protocol | SKY GLOW",
  description: "View the SKY GLOW Tirzepatide protocol for 15 mg and 30 mg vials.",
  openGraph: {
    title: "Tirzepatide Protocol | SKY GLOW",
    description: "Protocol information for SKY GLOW Tirzepatide 15 mg and 30 mg vials.",
    images: [{ url: "/protocols/tirzepatide-protocol-hd.png", alt: "SKY GLOW Tirzepatide protocol" }],
  },
  twitter: { card: "summary_large_image", images: ["/protocols/tirzepatide-protocol-hd.png"] },
};

export default function TirzepatideProtocolPage() {
  return (
    <main className="protocol-page">
      <nav className="protocol-page-nav" aria-label="Protocol navigation">
        <Link href="/#protocols">← All Product Protocols</Link>
        <Link href="/">SKY GLOW</Link>
      </nav>

      <section className="protocol-page-content">
        <p className="eyebrow">PRODUCT PROTOCOL</p>
        <h1>Tirzepatide</h1>
        <p className="protocol-page-dose">For 15 mg and 30 mg vials</p>
        <img
          className="protocol-document"
          src="/protocols/tirzepatide-protocol-hd.png"
          alt="Tirzepatide protocol for 15 mg and 30 mg vials"
        />
        <div className="protocol-disclaimer">
          <strong>Important information</strong>
          <p>This material is provided for general educational purposes only and is not medical advice. Follow the instructions supplied with the exact product and consult a qualified healthcare professional.</p>
        </div>
        <Link className="protocol-back" href="/#protocols">← Back to Product Protocols</Link>
      </section>
    </main>
  );
}
