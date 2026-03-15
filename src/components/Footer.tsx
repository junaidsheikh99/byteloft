const Footer = () => {
  return (
    <footer className="bg-hero text-hero-foreground py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display font-bold text-xl tracking-tight">Teamollo</span>
        <div className="flex items-center gap-8">
          <a href="#about" className="text-hero-foreground/60 hover:text-hero-foreground text-sm transition-colors">About</a>
          <a href="#services" className="text-hero-foreground/60 hover:text-hero-foreground text-sm transition-colors">Services</a>
          <a href="#work" className="text-hero-foreground/60 hover:text-hero-foreground text-sm transition-colors">Work</a>
          <a href="#contact" className="text-hero-foreground/60 hover:text-hero-foreground text-sm transition-colors">Contact</a>
        </div>
        <p className="text-hero-foreground/40 text-xs">© 2026 Teamollo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
