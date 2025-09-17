import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  const reviews = [
    {
      id: 1,
      name: "Ramesh Kumar",
      review: "Fresh Mart always delivers the best quality. I love their veggies!",
      rating: 5,
      image: "/images/picks/user1.jpg",
    },
    {
      id: 2,
      name: "Anjali Sharma",
      review: "The meat is so fresh and clean. Highly recommend Fresh Mart.",
      rating: 4,
      image: "Images/picks/user2.jpg",
    },
    {
      id: 3,
      name: "Vikram Singh",
      review: "Amazing milkshakes and snacks! Perfect for my evening cravings.",
      rating: 5,
      image: "Images/picks/user3.jpg",
    },
  ];

  // ============ Countdown Timer Hook ============
  const useCountdown = (initialSeconds) => {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
      if (seconds <= 0) return;
      const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
      return () => clearInterval(timer);
    }, [seconds]);

    const formatTime = (s) => {
      const h = String(Math.floor(s / 3600)).padStart(2, "0");
      const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
      const sec = String(s % 60).padStart(2, "0");
      return `${h}:${m}:${sec}`;
    };

    return formatTime(seconds);
  };

  // Example: 2 hours for deals, 1 hour for picks
  const dealTimer = useCountdown(2 * 60 * 60);
  const pickTimer = useCountdown(60 * 60);

  return (
    <div className="home-page">
      {/* Search Bar */}
      <div className="search-bar-container">
        <input type="text" className="form-control" placeholder="Search..." />
      </div>

      {/* Top Chefs + Carousel */}
      <div className="chef-carousel-layout d-flex justify-content-center align-items-center my-5">
        <img
          src="/images/picks/download.jpg"
          alt="Chef Left"
          className="chef-img left-chef"
        />
        <div className="custom-carousel mx-3" style={{ width: "55%" }}>
          <Carousel fade interval={2000}>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src="/images/picks/vegetablecarsoulimge.jpg"
                alt="Fresh Veggies"
              />
              <Carousel.Caption>
                <h3>Fresh Vegetables</h3>
                <p>Organic & farm-fresh for your kitchen.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src="/images/picks/Charcoal Charm.jpg"
                alt="BBQ Special"
              />
              <Carousel.Caption>
                <h3>BBQ Special</h3>
                <p>Smoky grilled taste everyone loves.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src="/images/picks/milkshaaaaimage.jpg"
                alt="Milkshake"
              />
              <Carousel.Caption>
                <h3>Milkshakes</h3>
                <p>Creamy, fruity & refreshing.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src="/images/picks/chickenimagesaaa.jpg"
                alt="Crispy Chicken"
              />
              <Carousel.Caption>
                <h3>Crispy Chicken</h3>
                <p>Juicy, crunchy, full of flavor.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <img
          src="/images/picks/download (1).jpg"
          alt="Chef Right"
          className="chef-img right-chef"
        />
      </div>

      {/* Shop by Category */}
      <section className="category-section container my-5">
        <h2 className="text-center mb-4">🛍 Fresh Finds</h2>
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <NavLink to="/veg" className="text-decoration-none text-dark">
              <div className="card shadow-sm h-100">
                <img
                  src="/images/picks/Green Vegetables Photos - Download Free High-Quality Pictures _ Freepik.jpg"
                  className="card-img-top"
                  alt="Veg"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">🥘 Vegetables</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-3 mb-4">
            <NavLink to="/nonVeg" className="text-decoration-none text-dark">
              <div className="card shadow-sm h-100">
                <img
                  src="/images/picks/Noveg111.jpg"
                  className="card-img-top"
                  alt="Non-Veg"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">🍗 Meat</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-3 mb-4">
            <NavLink to="/milk" className="text-decoration-none text-dark">
              <div className="card shadow-sm h-100">
                <img
                  src="/images/picks/shake.jpg"
                  className="card-img-top"
                  alt="Milkshake/"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">🥤 Milkshakes/ Beverages</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-3 mb-4">
            <NavLink to="/desserts" className="text-decoration-none text-dark">
              <div className="card shadow-sm h-100">
                <img
                  src="/images/picks/Desserts%20img.jpg"
                  className="card-img-top"
                  alt="Desserts"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">🍰 Desserts</h5>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Today’s Deals Section */}
      <section className="deals-section container my-5">
        <h2 className="text-center mb-4" style={{ fontSize: "1.8rem" }}>
          🔥 Today’s Deals
        </h2>
        <div
          className="d-flex overflow-auto pb-3"
          style={{ gap: "130px", paddingLeft: "70px" }}
        >
          {[
            {
              title: "🥦 Fresh Broccoli",
              img: "/images/picks/🥦🍓 Boost Your Health with Colorful Vegetables and Fruits!.jpg",
              discount: "20% OFF",
              link: "/veg",
            },
            {
              title: "🍗 Chicken Drumsticks",
              img: "/images/picks/The Fragrant Curry Cascade.jpg",
              discount: "15% OFF",
              link: "/nonVeg",
            },
            {
              title: "🥤 SoftDrinks/ Beverages",
              img: "/images/picks/download (4).jpg",
              discount: "25% OFF",
              link: "/milk",
            },
            {
              title: "🍰 Choco Lava Cake",
              img: "/images/picks/Floating Chocolate Brownies with Walnuts and Splashing Melted Chocolate in MidAir _ Premium AI-generated image.jpg",
              discount: "30% OFF",
              link: "/desserts",
            },
          ].map((deal, index) => (
            <NavLink
              key={index}
              to={deal.link}
              className="text-decoration-none text-dark"
            >
              <div
                className="card shadow-sm"
                style={{
                  minWidth: "180px",
                  flex: "0 0 auto",
                  padding: "5px",
                  fontSize: "0.9rem",
                }}
              >
                <img
                  src={deal.img}
                  className="card-img-top rounded"
                  alt={deal.title}
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body p-2 text-center">
                  <h5 className="card-title" style={{ fontSize: "1rem" }}>
                    {deal.title}
                  </h5>
                  <p className="card-text text-success fw-bold" style={{ fontSize: "0.9rem" }}>
                    {deal.discount}
                  </p>
                  {/* Countdown Timer */}
                  <p className="text-danger fw-bold" style={{ fontSize: "0.9rem" }}>
                    ⏳ {dealTimer}
                  </p>
                  <button className="btn btn-warning w-100 py-1" style={{ fontSize: "0.9rem" }}>
                    Grab Deal
                  </button>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Festival Offer Section */}
      <section className="festival-offer-card my-5 container">
        <video autoPlay loop muted playsInline>
          <source src="/images/picks/Offer video.mp4" type="video/mp4" />
        </video>
        <div className="festival-offer-overlay"></div>
        <div className="festival-offer-content d-flex align-items-center justify-content-between px-3">
          <div className="text-start" style={{ maxWidth: "65%", color: "white" }}>
            <h3 className="mb-2">🎉 Festival Special Offer!</h3>
            <p className="mb-3">Flat 30% off on fresh Items this week only Grab the chance.</p>
            <button className="red-color-shop">Shop Now</button>
          </div>
          <div style={{ width: "30%" }}>
            <div id="offerCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/images/picks/veg1.jpg" className="d-block w-100" alt="Veg 1" />
                </div>
                <div className="carousel-item">
                  <img src="/images/picks/veg2.jpg" className="d-block w-100" alt="Veg 2" />
                </div>
                <div className="carousel-item">
                  <img src="/images/picks/veg3.jpg" className="d-block w-100" alt="Veg 3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#offerCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#offerCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* More Fresh Picks */}
      <section className="extra-cards-section">
        <h2>🍹 More Fresh Items</h2>
        <div className="extra-cards-grid">
          {[
            { title: "🥤 Drinks", img: "/images/picks/Drinksimgs.jpg", link: "/drinks" },
            { title: "🥗 Veggies", img: "/images/picks/🥦🍓 Boost Your Health with Colorful Vegetables and Fruits!.jpg" },
            { title: "🥛 Milk", img: "/images/picks/Milk.jpg", link: "/milk" },
            { title: "🍗 Nonveg", img: "/images/picks/Fishfingers.jpg", link: "/nonveg" },
            { title: "🍫 Chocolates", img: "/images/picks/Snickers.jpg", link: "/chocolates" },
            { title: "🍫 Chocolates", img: "/images/picks/Feastables Milk Chocolate 60g.jpg", link: "/chocolates" },
          ].map((pick, index) => (
            <NavLink key={index} to={pick.link} className="extra-card-link">
              <div className="extra-card">
                <img src={pick.img} alt={pick.title} />
                <div className="card-body text-center">
                  <h5>{pick.title}</h5>
                  {/* Countdown Timer */}
                  <p className="text-danger fw-bold" style={{ fontSize: "0.9rem" }}>
                    ⏳ {pickTimer}
                  </p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section container my-5">
        <h2 className="text-center mb-4">⭐ Customer Reviews</h2>
        <div className="row">
          {reviews.map((r) => (
            <div key={r.id} className="col-md-4 mb-3">
              <div className="card shadow-sm h-100 text-center p-3">
                <img src={r.image} alt={r.name} className="rounded-circle mb-2" width="80" />
                <h5 className="card-title">{r.name}</h5>
                <p className="card-text">"{r.review}"</p>
                <p className="text-warning">
                  {"⭐".repeat(r.rating)}
                  {"☆".repeat(5 - r.rating)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-5 mt-5 w-100">
        <div className="container">
          <div className="row">
            {/* About */}
            <div className="col-md-3 mb-4">
              <h5>🍴 Fresh Mart</h5>
              <p>
                Fresh veggies, meat, milkshakes & desserts delivered fresh to your
                door every day.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-3 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/aboutus" className="text-light text-decoration-none">About Us</a></li>
                <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
                <li><a href="/terms" className="text-light text-decoration-none">Terms & Conditions</a></li>
                <li><a href="/privacy" className="text-light text-decoration-none">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-md-3 mb-4">
              <h5>Subscribe</h5>
              <form>
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Enter your email"
                />
                <button className="btn btn-success w-100">Subscribe</button>
              </form>
            </div>

            {/* Socials */}
            <div className="col-md-3 mb-4">
              <h5>Follow Us</h5>
              <div className="d-flex gap-3 fs-4">
                <a href="#" className="text-light"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-light"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-light"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-light"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>

          <hr className="border-light" />

          {/* Bottom Bar */}
          <div className="text-center">
            <p className="mb-1">
              © {new Date().getFullYear()} Fresh Mart. All rights reserved.
            </p>
            <p className="mb-0">
              Developed by <strong>Manikanta</strong> | Contact: 
              <a href="mailto:manik@gmail.com" className="text-light"> mani@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
