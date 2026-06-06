const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday - Thursday", time: "5:00 PM - 10:00 PM" },
  { day: "Friday - Saturday", time: "5:00 PM - 11:30 PM" },
  { day: "Sunday", time: "4:00 PM - 9:00 PM" },
];

const Hours = () => (
  <section id="hours" className="py-24 px-6">
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="font-display text-4xl font-bold mb-8">Opening Hours</h2>
        <ul className="divide-y divide-border">
          {hours.map((h) => (
            <li key={h.day} className="flex justify-between py-3">
              <span className="text-muted-foreground">{h.day}</span>
              <span className="font-medium">{h.time}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg bg-secondary text-secondary-foreground p-8">
        <h3 className="font-display text-2xl mb-4">Find Us</h3>
        <p className="mb-2">128 Harbor Street</p>
        <p className="mb-6">Seaside, CA 90210</p>
        <p className="text-sm opacity-90">Street parking available. Valet on weekends.</p>
      </div>
    </div>
  </section>
);

export default Hours;
