function HeroSection() {
  return (
    <section className="bg-light py-5 text-center w-100">
      <div className="container">
        <h1 className="display-4 fw-bold">Hi, I’m a Web Developer</h1>
        <p className="lead mt-3">
          I build modern, responsive web applications using React.
        </p>
        <a href="/projects" className="btn btn-primary btn-lg mt-3">
          View Projects
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
