import Navbar from '@/components/restaurant/Navbar';
import Footer from '@/components/restaurant/Footer';

interface Event {
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    title: "Mediterranean Wine Tasting",
    date: "Every First Friday",
    time: "7:00 PM - 9:00 PM",
    description: "Explore a curated selection of wines from Greece, Italy, and Spain, paired with small bites.",
    image: "https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/8e417d05-e91c-483c-8f0d-7d5a37bb5987/assets/mediterranean-wine-tasting.png",
  },
  {
    title: "Live Acoustic Nights",
    date: "Every Saturday",
    time: "8:00 PM - 10:00 PM",
    description: "Enjoy your dinner with soothing live acoustic music, featuring local artists.",
    image: "https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/8e417d05-e91c-483c-8f0d-7d5a37bb5987/assets/live-acoustic-night.png", 
  },
  {
    title: "Seasonal Cooking Class",
    date: "Monthly - Check Schedule",
    time: "11:00 AM - 1:00 PM",
    description: "Learn to prepare classic Mediterranean dishes using fresh, seasonal ingredients from our chefs.",
    image: "https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/8e417d05-e91c-483c-8f0d-7d5a37bb5987/assets/seasonal-cooking-class.png", 
  },
];

const fallbackImage = "https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/8e417d05-e91c-483c-8f0d-7d5a37bb5987/assets/image-fallback.png"; 

const Events = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackImage;
    // Prevents an infinite loop if the fallback image also fails to load
    e.currentTarget.onerror = null;
  };

  return (
    <main>
      <Navbar />
      <section id="events" className="py-24 px-6 min-h-screen pt-32 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-5xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {events.map((event) => (
              <div key={event.title} className="bg-card rounded-lg shadow-lg overflow-hidden">
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-56 object-cover" 
                    loading="lazy"
                    onError={handleImageError}
                  />
                )}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold mb-2 text-primary">{event.title}</h3>
                  <p className="text-accent text-sm mb-2">{event.date} &bull; {event.time}</p>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <button className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Events;