const images = [
  { src: "https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/8e417d05-e91c-483c-8f0d-7d5a37bb5987/assets/dining-room-interior.png", alt: "Dining room interior" },
  { src: "https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/8e417d05-e91c-483c-8f0d-7d5a37bb5987/assets/chef-plating-dish.png", alt: "Chef plating a dish" },
  { src: "https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/8e417d05-e91c-483c-8f0d-7d5a37bb5987/assets/wood-fired-pizza.png", alt: "Wood-fired pizza" },
  { src: "https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/8e417d05-e91c-483c-8f0d-7d5a37bb5987/assets/grilled-main-course.png", alt: "Grilled main course" },
  { src: "https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/8e417d05-e91c-483c-8f0d-7d5a37bb5987/assets/fresh-seafood-platter.png", alt: "Fresh seafood platter" },
  { src: "https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/8e417d05-e91c-483c-8f0d-7d5a37bb5987/assets/seasonal-dessert.png", alt: "Seasonal dessert" },
];

const Gallery = () => (
  <section id="gallery" className="py-24 px-6 bg-muted">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-display text-4xl font-bold text-center mb-12">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="aspect-square w-full object-cover rounded-lg hover:scale-[1.02] transition-transform"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;