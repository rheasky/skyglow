"use client";

import { useMemo, useState } from "react";

const products = [
  {
  name: "Tirzepatide 15 mg",
  category: "Weight Management",
  size: "15 mg vial",
  price: "1399",
},
   {
  name: "Tirzepatide 30 mg",
  category: "Weight Management",
  size: "30 mg vial",
  price: "1899",
},
   {
  name: "Retatrutide 10 mg",
  category: "Weight Management",
  size: "10 mg vial",
  price: "1699",
},
  { name: "[Product name]", category: "Glow", size: "[Size / variant]", price: "[Add price]", note: "[One-line product benefit or detail]" },
  { name: "[Product name]", category: "Bundles", size: "[What’s included]", price: "[Add price]", note: "[One-line bundle benefit or detail]" },
];

const protocols = [
  { number: "01", name: "[Protocol name]", purpose: "[Short description of who or what this protocol is for]", time: "[Duration]", steps: "[Add verified step-by-step instructions here]" },
  { number: "02", name: "[Protocol name]", purpose: "[Short description of who or what this protocol is for]", time: "[Duration]", steps: "[Add verified step-by-step instructions here]" },
  { number: "03", name: "[Protocol name]", purpose: "[Short description of who or what this protocol is for]", time: "[Duration]", steps: "[Add verified step-by-step instructions here]" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [openProtocol, setOpenProtocol] = useState<number | null>(0);
  const categories = ["Weight Management", "Skin", "Body", "Glow", "Bundles"];
  const visible = useMemo(() => products.filter((p) => (category === "All" || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase())), [category, query]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="nav-wrap">
        <a className="mini-brand" href="#top" aria-label="Sky Glow home"><span>SG</span><b>SKY GLOW</b></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          <a href="#story" onClick={closeMenu}>Our World</a><a href="#prices" onClick={closeMenu}>Price List</a><a href="#protocols" onClick={closeMenu}>Protocols</a><a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="nav-cta" href="#prices">View Catalog <span>↗</span></a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">{menuOpen ? "×" : "☰"}</button>
      </header>

      <section className="hero" id="top">
        <div className="stars" aria-hidden="true">✦　·　✧　　　　　·　✦　　　·　✧</div>
        <div className="hero-copy">
          <p className="eyebrow">THE SKY GLOW COLLECTION • 2026</p>
          <h1><span>Sky</span><span>Glow</span></h1>
          <p className="tagline">Where transformation begins</p>
          <p className="intro">Discover a curated world of glow essentials and signature care rituals—created to make every transformation feel a little more magical.</p>
          <div className="hero-actions"><a className="button primary" href="#prices">Explore Price List <span>↓</span></a><a className="text-link" href="#protocols">View protocols <span>↗</span></a></div>
        </div>
        <div className="hero-display" aria-label="Decorative luxury product display">
          <div className="moon">✦</div><div className="orb orb-a"/><div className="orb orb-b"/>
          <div className="bottle bottle-back"><i>SG</i><b>GLOW</b><small>beauty ritual</small></div>
          <div className="bottle bottle-front"><i>SG</i><b>SKY GLOW</b><small>luminous care</small></div>
          <div className="bear" aria-label="Blushy, the Sky Glow bear mascot"><span className="ear left"/><span className="ear right"/><span className="face">• ᴗ •</span><span className="bow">⋈</span><b>SG</b></div>
          <div className="marble"/><p className="display-note">Glow, bottled<br/><span>just for you</span></p>
        </div>
      </section>

      <section className="story section" id="story">
        <div><p className="eyebrow">WELCOME TO OUR WORLD</p><h2>Beauty rituals,<br/><em>elevated.</em></h2></div>
        <div className="story-copy"><p>SKY GLOW is a dreamy destination for thoughtfully curated beauty. Explore products, pricing, and professional protocols in one luminous, easy-to-use catalog.</p><div className="promise"><span>✦</span><p><b>THE SKY GLOW PROMISE</b><br/>Clear details. Beautiful presentation. A glow journey that feels personal.</p></div></div>
      </section>

      <section className="catalog section" id="prices">
        <div className="section-head"><div><p className="eyebrow">SHOP THE COLLECTION</p><h2>The Price <em>List</em></h2></div><p>Prices are intentionally left as editable placeholders until your confirmed product list is added.</p></div>
        <div className="catalog-tools"><div className="filters">{categories.map((c) => <button key={c} className={category === c ? "active" : ""} onClick={() => setCategory(c)}>{c}</button>)}</div><label className="search">⌕<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products" aria-label="Search products"/></label></div>
        <div className="product-grid">{visible.map((p, i) => <article className="product" key={`${p.category}-${i}`}><div className={`product-visual visual-${i % 4}`}><span>{p.category}</span><div className="jar"><b>SG</b><i>✦</i></div></div><div className="product-info"><div><small>{p.category} • {p.size}</small><h3>{p.name}</h3></div><strong>{p.price}</strong><p>{p.note}</p><button>Product details <span>↗</span></button></div></article>)}</div>
        {visible.length === 0 && <p className="empty">No products match that search yet.</p>}
        <div className="edit-note"><span>✎</span><p><b>Easy to update</b><br/>Replace the bracketed text with your confirmed product names, sizes, descriptions, and prices before publishing.</p></div>
      </section>

      <section className="protocol-section section" id="protocols">
        <div className="section-head"><div><p className="eyebrow">SIGNATURE RITUALS</p><h2>Glow <em>Protocols</em></h2></div><p>Organized, client-friendly protocol cards with space for your approved professional instructions.</p></div>
        <div className="protocol-layout"><aside><span className="constellation">✦ · ✧<br/>　✧ ·　✦</span><h3>A ritual for<br/><em>every glow.</em></h3><p>Please add only verified, brand-approved instructions. Include safety notes and professional-use guidance where appropriate.</p></aside><div className="protocols">{protocols.map((p, i) => <article className={openProtocol === i ? "protocol open" : "protocol"} key={p.number}><button onClick={() => setOpenProtocol(openProtocol === i ? null : i)} aria-expanded={openProtocol === i}><span className="num">{p.number}</span><span><small>{p.time}</small><b>{p.name}</b><em>{p.purpose}</em></span><i>{openProtocol === i ? "−" : "+"}</i></button>{openProtocol === i && <div className="protocol-body"><small>EDITABLE INSTRUCTIONS</small><p>{p.steps}</p><div className="caution">♡ Add preparation, application order, timing, aftercare, cautions, and contraindications supplied by your qualified professional.</div></div>}</article>)}</div></div>
      </section>

      <section className="contact section" id="contact"><div><p className="eyebrow">LET’S STAY GLOWING</p><h2>Questions about<br/><em>the collection?</em></h2></div><div><p>Add your preferred contact details and social channels here, so customers know exactly where to reach SKY GLOW.</p><a className="button light" href="mailto:hello@example.com">[Add email address] <span>↗</span></a><small>Replace this placeholder before launch.</small></div></section>
      <footer><a className="footer-brand" href="#top"><b>Sky Glow</b><span>Where transformation begins</span></a><div><a href="#prices">Price List</a><a href="#protocols">Protocols</a><a href="#story">Our World</a></div><p>© 2026 SKY GLOW • Made with a little stardust ✦</p></footer>
    </main>
  );
}
