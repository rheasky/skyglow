import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Retatrutide Protocol | SKY GLOW",
  description: "View the SKY GLOW Retatrutide dosing and reconstitution protocol.",
  openGraph: { title: "Retatrutide Protocol | SKY GLOW", description: "SKY GLOW Retatrutide dosing and reconstitution protocol.", images: [{ url: "/retatrutide-protocol-hd.jpg", alt: "SKY GLOW Retatrutide protocol" }] },
  twitter: { card: "summary_large_image", images: ["/retatrutide-protocol-hd.jpg"] },
};

export default function RetatrutideProtocolPage() {
  return (
    <main className="protocol-page">
      <nav className="protocol-page-nav" aria-label="Protocol navigation"><Link href="/#protocols">← All Product Protocols</Link><Link href="/">SKY GLOW</Link></nav>
      <section className="protocol-page-content">
        <p className="eyebrow">PRODUCT PROTOCOL</p><h1>Retatrutide</h1><p className="protocol-page-dose">Dosing &amp; reconstitution</p>
        <a href="/retatrutide-protocol-hd.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the Retatrutide protocol at full resolution"><img className="protocol-document" src="/retatrutide-protocol-hd.jpg" alt="Retatrutide dosing and reconstitution protocol" /></a>
        <p className="protocol-zoom-note">Tap the protocol to open the full-resolution copy.</p>
        <div className="protocol-disclaimer"><strong>Important information</strong><p>This material is provided for general educational purposes only and is not medical advice. Follow the instructions supplied with the exact product and consult a qualified healthcare professional.</p></div>
        <Link className="protocol-back" href="/#protocols">← Back to Product Protocols</Link>
      </section>
    </main>
  );
}
