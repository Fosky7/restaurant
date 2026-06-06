const Footer = () => (
  <footer className="bg-foreground text-background py-12 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-xl">Olive &amp; Ember</p>
      <p className="text-sm opacity-70">&copy; {new Date().getFullYear()} Olive &amp; Ember. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
