export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src="/background_video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-overlay"></div>
      <div className="container hero-inner">
        <h1>Full Body Checkup, Made Simple.</h1>
        <p>Accurate lab tests. Transparent pricing. Home sample collection.</p>
        <a href="#book" className="btn btn-primary">Book Your Test</a>
      </div>
    </section>
  );
}
