const Hero = () => (
  <section id="top" className="relative min-h-screen flex items-center justify-center text-center">
    <img
      src="https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/8e417d05-e91c-483c-8f0d-7d5a37bb5987/assets/plated-mediterranean-dishes.png"
      alt="Plated Mediterranean dishes on a rustic table"
      className="absolute inset-0 h-full w-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="relative z-10 max-w-2xl px-6 text-primary-foreground">
      <p className="uppercase tracking-[0.3em] text-sm text-accent mb-4">Seaside, California</p>
      <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">Olive &amp; Ember</h1>
      <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
        Seasonal Mediterranean plates, wood-fired and made to share.
      </p>
      <div className="flex items-center justify-center gap-4">
        <a href="#menu" className="rounded-md bg-accent px-6 py-3 font-medium text-accent-foreground hover:opacity-90 transition-opacity">
          View Menu
        </a>
        <a href="#contact" className="rounded-md border border-primary-foreground/40 px-6 py-3 font-medium hover:bg-primary-foreground/10 transition-colors">
          Book a Table
        </a>
      </div>
    </div>
  </section>
);

export default Hero;