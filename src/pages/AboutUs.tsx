import Navbar from "@/components/restaurant/Navbar";
import Footer from "@/components/restaurant/Footer";

const AboutUs = () => (
  <main>
    <Navbar />
    <section id="about" className="py-24 px-6 min-h-screen pt-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-5xl font-bold text-center mb-12">About Olive &amp; Ember</h2>
        <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
          <p>
            Nestled in the heart of Seaside, California, Olive &amp; Ember is a culinary haven dedicated to the vibrant and wholesome flavors of the Mediterranean. Our restaurant is born from a passion for fresh, seasonal ingredients and the timeless tradition of bringing people together through exceptional food.
          </p>
          <p>
            Our journey began with a simple vision: to create a dining experience that transports our guests to the sun-drenched coasts of the Mediterranean. We believe in the power of simple, high-quality ingredients, expertly prepared to highlight their natural tastes. From the rich aroma of wood-fired specialties to the delicate zest of fresh herbs and citrus, every dish tells a story.
          </p>
          <p>
            At Olive &amp; Ember, we are proud to source many of our ingredients from local farms and artisans, ensuring freshness and supporting our community. Our menu evolves with the seasons, offering a dynamic selection that celebrates the best of what nature has to offer. Whether you&apos;re joining us for a casual meal or a special celebration, we promise an unforgettable culinary adventure.
          </p>
          <h3 className="font-display text-3xl font-bold mt-12 mb-6 text-primary">Our Philosophy</h3>
          <p>
            Our philosophy is rooted in authenticity, sustainability, and hospitality. We strive to create an ambiance that is both elegant and welcoming, where every guest feels at home. Our team, from our dedicated chefs to our attentive servers, shares a common goal: to provide an exceptional dining experience that delights all the senses.
          </p>
          <p>
            We invite you to savor the warmth of our hospitality, discover new flavors, and create lasting memories at Olive &amp; Ember. Welcome to our table.
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </main>
);

export default AboutUs;