"use client";

import { useMemo, useState } from "react";

const products: { name: string; category: string; size: string; price: string; note?: string; image?: string }[] = [
 {
    name: "Tirzepatide 15 mg",
    category: "Weight Management",
    size: "15 mg vial",
    price: "1399",
    image: "/tirzepatide-15mg.png"
  },
   {
  name: "Tirzepatide 30 mg",
  category: "Weight Management",
  size: "30 mg vial",
  price: "1899",
  image: "/tirzepatide-30mg.png"
},
   {
  name: "Retatrutide 10 mg",
  category: "Weight Management",
  size: "10 mg vial",
  price: "1699",
  image: "/retatrutide-10mg.png"
},
  {
  name: "Cagrilintide 5 mg",
  category: "Weight Management",
  size: "5 mg vial",
  price: "1499",
  image: "/cagrilintide-5mg.png"
},
   {
  name: "AOD 9604 5 mg",
  category: "Fat Burn",
  size: "5 mg vial",
  price: "1649",
  image: "/aod9604-5mg.png"
},
  {
  name: "5-Amino-1 MQ 10 mg",
  category: "Fat Burn",
  size: "10 mg vial",
  price: "999",
  image: "/5amino1mq-10mg.png"
},
   {
  name: "5-Amino-1 MQ 50 mg",
  category: "Fat Burn",
  size: "50 mg vial",
  price: "1349",
  image: "/5amino1mq-50mg.png"
},
  {
  name: "Lipo C with B12 10 ml",
  category: "Fat Burn",
  size: "10 ml vial",
  price: "1199",
  image: "/lipocwithB12-10ml.png"
},
   {
  name: "SS-31 10 mg",
  category: "Energy",
  size: "10 mg vial",
  price: "1459",
  image: "/ss31-10mg.png"
},
   {
  name: "NAD+ 500 mg",
  category: "Energy",
  size: "500 mg vial",
  price: "1399",
  image: "/nad+-500mg.png"
},
  {
  name: "BPC 157 10 MG",
  category: "Recovery & Repair",
  size: "10 mg vial",
  price: "1299",
  image: "/bpc157-10mg.png"
},
   {
  name: "ARA 290 10 MG",
  category: "Recovery & Repair",
  size: "10 mg vial",
  price: "1329",
  image: "/ara290-10mg.png"
},
  {
  name: "KPV 10 MG",
  category: "Recovery & Repair",
  size: "10 mg vial",
  price: "999",
     image: "/kpv-10mg.png"
},
   {
  name: "GHK-CU 50 MG",
  category: "Beauty & Anti-Aging",
  size: "50 mg vial",
  price: "899",
      image: "/ghkcu-50mg.png"
},
   {
  name: "GHK-CU 100 MG",
  category: "Beauty & Anti-Aging",
  size: "100 mg vial",
  price: "1099",
      image: "/ghkcu-100mg.png"
},
   { name: "GHK-CU 1 G", category: "Topicals", size: "1 g vial", price: "799", image: "/ghkcu-1g.png" },
   {
  name: "Epithalon 10 MG",
  category: "Beauty & Anti-Aging",
  size: "10 mg vial",
  price: "949",
      image: "/epithalon-10mg.png"
},
    {
  name: "Semax 10 MG",
  category: "Nootropics",
  size: "10 mg vial",
  price: "999",
       image: "/semax-10mg.png"
},
  {
  name: "Selank 10 MG",
  category: "Nootropics",
  size: "10 mg vial",
  price: "999",
     image: "/selank-10mg.png"
},
  {
  name: "Lipovela 10 ml",
  category: "Fat Melters",
  size: "10 ml vial",
  price: "649",
     image: "/lipovela-10ml.png"
},
  {
  name: "Lemon Bottle Ch 10 ml",
  category: "Fat Melters",
  size: "10 ml vial",
  price: "749",
     image: "/lemonbottlech-10ml.png"
},
   {
  name: "Lemon Bottle Ch 50 ml",
  category: "Fat Melters",
  size: "50 ml vial",
  price: "2699",
      image: "/lemonbottlech-50ml.png"
},
   {
  name: "FUAN 1500 MG",
  category: "Glutathione",
  size: "1500 mg vial",
  price: "1299",
      image: "/fuan-1500mg.png"
},
  {
  name: "KR GLUTAONE 1200 MG",
  category: "Glutathione",
  size: "1200 mg vial",
  price: "999",
     image: "/krglutaone-1200mg.png"
},
  {
  name: "KR GUTHIONE 1200 MG",
  category: "Glutathione",
  size: "1200 mg vial",
  price: "989",
     image: "/krguthione-1200mg.png"
},
  {
  name: "SNAP-8 10 MG",
  category: "Topicals",
  size: "10 mg vial",
  price: "849",
     image: "/snap8-10mg.png"
},
];

const protocols: { name: string; url: string }[] = [
  { name: "All Product Protocols", url: "https://drive.google.com/drive/u/0/folders/1gBWsj0R6bkgxnxxLYpoKscv77Hha4SmQ" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const categories = ["All", "Weight Management", "Fat Burn", "Energy", "Recovery & Repair", "Beauty & Anti-Aging", "Nootropics", "Fat Melters", "Glutathione", "Topicals"];
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

      <section className="hero hero-banner" id="top" aria-label="SKY GLOW price list and protocols">
        <img className="hero-banner-image" src="/sky-glow-hero-v2.png" alt="SKY GLOW — Where transformation begins. Peptide vials and lavender teddy bears in a luminous boutique." />
      </section>

      <section className="story section" id="story">
        <div><p className="eyebrow">WELCOME TO OUR WORLD</p><h2>Beauty rituals,<br/><em>elevated.</em></h2></div>
        <div className="story-copy"><p>SKY GLOW is a dreamy destination for thoughtfully curated beauty. Explore products, pricing, and professional protocols in one luminous, easy-to-use catalog.</p><div className="promise"><span>✦</span><p><b>THE SKY GLOW PROMISE</b><br/>Clear details. Beautiful presentation. A glow journey that feels personal.</p></div></div>
      </section>

      <section className="catalog section" id="prices">
        <div className="section-head"><div><p className="eyebrow">SHOP THE COLLECTION</p><h2>The Price <em>List</em></h2></div><p>Explore available products by category. Product details and pricing can be updated at any time.</p></div>
        <div className="catalog-tools"><div className="filters">{categories.map((c) => <button key={c} className={category === c ? "active" : ""} onClick={() => setCategory(c)}>{c}</button>)}</div><label className="search">⌕<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products" aria-label="Search products"/></label></div>
        <div className="product-grid">{visible.map((p, i) => <article className="product" key={p.category + "-" + i}><div className={"product-visual visual-" + (i % 4)}><span>{p.category}</span>{p.image ? <img className="product-photo" src={p.image} alt={p.name}/> : <div className="jar"><b>SG</b><i>✦</i></div>}</div><div className="product-info"><div><small>{p.category} • {p.size}</small><h3>{p.name}</h3></div><strong>{p.price}</strong>{"note" in p && p.note ? <p>{p.note}</p> : null}<button>Product details <span>↗</span></button></div></article>)}</div>
        {visible.length === 0 && <p className="empty">No products match that search yet.</p>}
        <div className="edit-note"><span>✎</span><p><b>Easy to update</b><br/>Product names, sizes, descriptions, prices, and images can be updated in the product list.</p></div>
      </section>

            <section className="protocol-section section" id="protocols">
        <div className="section-head"><div><p className="eyebrow">PROVIDER-DIRECTED INFORMATION</p><h2>Product <em>Protocols</em></h2></div><p>Use only prescription and dispensing information approved for the exact product supplied.</p></div>
        <div className="protocol-layout"><aside><span className="constellation">✦ · ✧<br/> ✧ · ✦</span><h3>Protocol library,<br/><em>one click away.</em></h3><p>Select a product to open its protocol.</p></aside><div className="protocols">{protocols.map((p) => <article className="protocol" key={p.name}><button onClick={() => window.open(p.url, "_blank", "noopener,noreferrer")}><span><b>{p.name}</b></span></button></article>)}</div></div>
      </section>

      <section className="contact section" id="contact"><div><p className="eyebrow">LET’S STAY GLOWING</p><h2>Questions about<br/><em>the collection?</em></h2></div><div><p>Add your preferred contact details and social channels here, so customers know exactly where to reach SKY GLOW.</p><a className="button light" href="mailto:hello@example.com">[Add email address] <span>↗</span></a><small>Replace this placeholder before launch.</small></div></section>
      <footer><a className="footer-brand" href="#top"><b>Sky Glow</b><span>Where transformation begins</span></a><div><a href="#prices">Price List</a><a href="#protocols">Protocols</a><a href="#story">Our World</a></div><p>© 2026 SKY GLOW • Made with a little stardust ✦</p></footer>
    </main>
  );
}
