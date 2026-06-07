import Navbar from "@/components/restaurant/Navbar";
import Footer from "@/components/restaurant/Footer";

const Reservations = () => (
  <main>
    <Navbar />
    <section id="reservations" className="py-24 px-6 min-h-screen pt-32">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-display text-5xl font-bold mb-4">Make a Reservation</h2>
        <p className="text-muted-foreground mb-8">
          Secure your table at Olive &amp; Ember for an unforgettable dining experience.
        </p>
        <form
          className="space-y-6 text-left p-8 bg-card rounded-lg shadow-lg"
          action="#"
          method="post"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-md border border-border bg-background px-4 py-3 placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              placeholder="Your Full Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-md border border-border bg-background px-4 py-3 placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                required
                className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">Number of Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              required
              className="w-full rounded-md border border-border bg-background px-4 py-3 placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              placeholder="e.g., 2"
            />
          </div>
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-2">Special Requests</label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              className="w-full rounded-md border border-border bg-background px-4 py-3 placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              placeholder="Allergies, seating preferences, etc."
            ></textarea>
          </div>
          <button type="submit" className="w-full rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition-opacity">
            Confirm Reservation
          </button>
        </form>
        <p className="text-muted-foreground text-sm mt-8">For parties larger than 8, please call us directly at <a href="tel:+19452470511" className="text-primary hover:underline">+1 (945) 247-0511</a>.</p>
      </div>
    </section>
    <Footer />
  </main>
);

export default Reservations;