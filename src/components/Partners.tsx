const partners = [
  { name: "IIT Delhi", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/180px-Indian_Institute_of_Technology_Delhi_Logo.svg.png" },
  { name: "IIT Bombay", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/180px-Indian_Institute_of_Technology_Bombay_Logo.svg.png" },
  { name: "IIM Ahmedabad", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Indian_Institute_of_Management_Ahmedabad_Logo.svg/180px-Indian_Institute_of_Management_Ahmedabad_Logo.svg.png" },
  { name: "BITS Pilani", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/180px-BITS_Pilani-Logo.svg.png" },
];

const Partners = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground font-medium">
            Trusted by <span className="text-primary font-bold">200+</span> colleges and organizations
          </p>
        </div>

        {/* Infinite scroll effect */}
        <div className="flex items-center justify-center gap-12 flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-16 hover:opacity-100 transition-opacity"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
          {partners.map((partner) => (
            <div
              key={`${partner.name}-2`}
              className="flex items-center justify-center h-16 hover:opacity-100 transition-opacity hidden md:flex"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
