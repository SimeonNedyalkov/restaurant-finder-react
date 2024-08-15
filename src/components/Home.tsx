export default function Home(){
    return(
        <div>
            <header>
        <div className="container">
            <h1>Find the Best Restaurants Near You</h1>
            <p>Discover delicious experiences tailored just for you.</p>
            <form className="search-bar">
                <input type="text" placeholder="Enter your location or cuisine..."/>
                <button className="bg-red-400" type="submit">Search Now</button>
            </form>
        </div>
    </header>

    <section className="featured-restaurants">
        <div className="container">
            <h2>Popular Picks</h2>
            <div className="restaurant-grid">
                <div className="restaurant-item">
                    <img src="restaurant1.jpg" alt="Restaurant 1"/>
                    <h3>Restaurant 1</h3>
                    <p>Italian • 4.5 stars</p>
                </div>
                <div className="restaurant-item">
                    <img src="restaurant2.jpg" alt="Restaurant 2"/>
                    <h3>Restaurant 2</h3>
                    <p>Vegan • 4.7 stars</p>
                </div>
                <div className="restaurant-item">
                    <img src="restaurant3.jpg" alt="Restaurant 3"/>
                    <h3>Restaurant 3</h3>
                    <p>Seafood • 4.6 stars</p>
                </div>
            </div>
        </div>
    </section>

    <section className="app-promotion">
        <div className="container">
            <h2>Download Our App</h2>
            <p>Get personalized recommendations and exclusive deals straight to your phone.</p>
            <a href="#" className="app-button">Download on the App Store</a>
            <a href="#" className="app-button">Get it on Google Play</a>
        </div>
    </section>
        </div>
    )
}