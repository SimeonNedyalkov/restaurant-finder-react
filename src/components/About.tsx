import sunsetImage from '../assets/about/0955556f6a7758813966092a6f561c08.jpg'

export default function About() {
  return (
    <div className='aboutBackground'>
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
          src={sunsetImage}
          alt="Varna Sunset"
          className="about-image"
        />
      </div>
      <h2 className="about-title">How It Works</h2>
      <p className="about-description">
        Our app uses Google Maps to locate restaurants near you. Simply allow location access, and we'll show you a curated list of nearby dining spots. 
        You can also filter results based on your preferences, such as cuisine type, price range, and more.
      </p>
      <h2 className="about-title">Why We Built This</h2>
      <p className="about-description">
        We believe that finding great food should be easy and accessible to everyone. Whether you're a local or a traveler, our app helps you make 
        informed decisions about where to eat, so you can enjoy the best culinary experiences without the hassle.
      </p>
      <p className="about-description">
        Thank you for choosing Restaurant Finder. We hope you enjoy using our app as much as we enjoyed building it.
      </p>
    </div>
    </div>
  );
}
