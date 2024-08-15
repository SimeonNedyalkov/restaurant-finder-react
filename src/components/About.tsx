export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Welcome to Varna Restaurant Finder</h1>
      <p className="about-description">
        Discover the best places to eat in Varna, Bulgaria. Whether you're looking for a cozy café,
        a traditional Bulgarian restaurant, or an exotic cuisine, we've got you covered.
      </p>
      <p className="about-description">
        Our mission is to connect food lovers with the finest dining experiences Varna has to offer.
        Explore reviews, menus, and more to make your next meal memorable.
      </p>
      <div className="about-image-container">
        <img
          src="https://example.com/varna-sunset.jpg"
          alt="Varna Sunset"
          className="about-image"
        />
      </div>
    </div>
  );
}
