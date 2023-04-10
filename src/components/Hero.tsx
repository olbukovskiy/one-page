import Button from "./Button";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero__thumb">
          <h1 className="hero__heading">
            Test assignment for front-end developer
          </h1>
          <p className="hero__content">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <Button type="button" variant="button__signup">
            <span>Sign up</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
