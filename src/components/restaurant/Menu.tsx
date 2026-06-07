const menu = [
  {
    category: "Starters",
    items: [
      { name: "Whipped Feta", desc: "Honey, chili, warm pita", price: 12 },
      { name: "Charred Octopus", desc: "Smoked paprika, lemon", price: 18 },
      { name: "Heirloom Tomato", desc: "Burrata, basil oil", price: 14 },
    ],
  },
  {
    category: "Mains",
    items: [
      { name: "Wood-Fired Branzino", desc: "Fennel, citrus, herbs", price: 32 },
      { name: "Lamb Kofta", desc: "Tahini, pickled onion", price: 28 },
      { name: "Saffron Risotto", desc: "Spring peas, parmesan", price: 24 },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Pistachio Baklava", desc: "Orange blossom honey", price: 10 },
      { name: "Olive Oil Cake", desc: "Mascarpone, citrus", price: 11 },
    ],
  },
];

const USD_TO_NAIRA_RATE = 1400;

const Menu = () => (
  <section id="menu" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-display text-4xl font-bold text-center mb-12">Our Menu</h2>
      <div className="space-y-12">
        {menu.map((group) => (
          <div key={group.category}>
            <h3 className="text-2xl font-display text-primary mb-6">{group.category}</h3>
            <ul className="divide-y divide-border">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between py-4 gap-4">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="font-display text-lg text-accent">
                    ₦{(parseFloat(item.price as any) * USD_TO_NAIRA_RATE).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Menu;