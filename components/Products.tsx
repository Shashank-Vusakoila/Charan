const products = [
  {
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    alt: "Rice grains",
    tag: "Rice",
    title: "Rice for Export Markets",
    description:
      "Selected rice varieties prepared for buyers looking for dependable sourcing, clean documentation, and steady supply support.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    alt: "Turmeric roots and powder",
    tag: "Turmeric",
    title: "Turmeric & Value-Added Formats",
    description:
      "Whole turmeric, dried formats, and turmeric powder sourced with attention to quality, consistency, and buyer specifications.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=600&q=80",
    alt: "Assorted spices",
    tag: "Spices",
    title: "Spices & Blended Selections",
    description:
      "A focused spices portfolio including whole and ground options for importers, distributors, and growing food businesses.",
  },
];

export default function Products() {
  return (
    <section className="section" id="products">
      <div className="wrap">
        <div className="products-header sr">
          <div className="eyebrow eyebrow-c">What We Export</div>
          <h2 className="sec-title section-title-wide">
            Featured Product
            <br />
            <em>Categories</em>
          </h2>
          <p className="sec-body section-body-products">
            Our current export focus is built around rice, turmeric, and spices for buyers who value quality and
            reliable coordination.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div key={product.title} className={`product-card sr ${index > 0 ? `d${index}` : ""}`.trim()}>
              <div className="product-img">
                <img src={product.image} alt={product.alt} />
                <span className="product-tag">{product.tag}</span>
              </div>
              <div className="product-body">
                <div className="product-title">{product.title}</div>
                <div className="product-desc">{product.description}</div>
                <a href="#contact" className="readmore">
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
