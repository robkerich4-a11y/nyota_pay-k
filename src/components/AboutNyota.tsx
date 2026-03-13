const AboutNyota = () => {
  return (
    <section className="py-16 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">About Nyota Pay</h2>

      <p className="text-muted-foreground mb-6">
        Nyota Pay is a digital financial service platform dedicated to providing
        fast, reliable, and accessible loans to individuals and small businesses.
        Our goal is to empower people with quick financial support that helps
        them meet urgent needs and grow their businesses.
      </p>

      <div className="grid md:grid-cols-2 gap-8 text-left mt-10">
        <div>
          <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
          <p className="text-muted-foreground">
            To provide fast, simple, and secure financial services that support
            personal growth, entrepreneurship, and economic development.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
          <p className="text-muted-foreground">
            To become a trusted digital financial service provider empowering
            individuals and businesses with accessible financial solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutNyota;
