import { Link } from "react-router-dom";

const Contact = () => (
  <section id="contact" className="py-24 px-6 bg-muted">
    <div className="max-w-xl mx-auto text-center">
      <h2 className="font-display text-4xl font-bold mb-4">Reserve a Table</h2>
      <p className="text-muted-foreground mb-8">
        Call us or send a reservation request and we will confirm by email. Or, use our new{' '}
        <Link to="/reservations" className="text-primary hover:underline font-medium">
          online reservation form
        </Link>.
      </p>
      <div className="flex flex-col items-center gap-2 mb-8">
        <a href="tel:+19452470511" className="text-lg font-medium text-primary">+1 (945) 247-0511</a>
        <a href="mailto:hello@oliveandember.com" className="text-muted-foreground">hello@oliveandember.com</a>
      </div>
      <form
        className="space-y-4 text-left"
        action="mailto:hello@oliveandember.com"
        method="post"
        encType="text/plain"
      >
        <input required name="name" placeholder="Name" className="w-full rounded-md border border-border bg-card px-4 py-3" />
        <input required name="email" type="email" placeholder="Email" className="w-full rounded-md border border-border bg-card px-4 py-3" />
        <input required name="party" placeholder="Party size & preferred time" className="w-full rounded-md border border-border bg-card px-4 py-3" />
        <button type="submit" className="w-full rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition-opacity">
          Request Reservation
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
