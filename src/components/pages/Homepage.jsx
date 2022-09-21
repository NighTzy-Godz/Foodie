import React from "react";

import { Link } from "react-router-dom";

import "../../static/css/homepage.css";

import landing_png from "../../static/images/home_png.png";

import work_delivery from "../../static/images/works_delivery.png";
import work_ordering from "../../static/images/works_ordering.png";
import work_quality from "../../static/images/works_quality.png";

import burger from "../../static/images/burger.jpg";
import carbonara from "../../static/images/carbonara.jpg";
import chicken from "../../static/images/chicken.jpg";
import pizza from "../../static/images/pizza.jpg";

import ReasonBox from "../common/reasonbox";
import HomePageText from "../common/home_page_text";
import PopularMenu from "../common/popular_menu";

const HomePage = () => {
  return (
    <main>
      <section className="landing">
        <div className="container">
          <div className="content">
            <div className="landing_text">
              <h2>
                Experience Food <br />
                <span>Delivery</span> Like No Other
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                dignissimos ratione doloremque illo veritatis ut consequuntur
                reprehenderit ipsa ex repudiandae!
              </p>
              <Link className="land_btn navBtn ">Get Started</Link>
            </div>
            <div className="imgBox">
              <img src={landing_png} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="how_it_works">
        <div className="container">
          <HomePageText
            miniText="How it Works"
            title="What We Serve"
            desc="product quality is our priority, and always guarantees halal and
              safety until it is in your hands."
          />

          <div className="reasons">
            <ReasonBox
              img={work_ordering}
              title="Easy to Order"
              desc="Only Order Here In Our Website."
            />
            <ReasonBox
              img={work_delivery}
              title="Fast to Deliver"
              desc="Delivery will be on time."
            />
            <ReasonBox
              img={work_quality}
              title="Best Quality"
              desc="The best quality of food for you."
            />
          </div>
        </div>
      </section>
      <section className="pop_menu">
        <div className="container">
          <HomePageText
            miniText="Our Menu"
            title="Our Popular Menu"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              pariatur?"
          />
          <div className="dish">
            <PopularMenu
              img={burger}
              name="Burger"
              price="250"
              creator="John Doe"
            />
            <PopularMenu
              img={carbonara}
              name="Carbonara"
              price="266"
              creator="Marky Cannera"
            />
            <PopularMenu
              img={chicken}
              name="Chicken"
              price="310"
              creator="Aser James"
            />
            <PopularMenu
              img={pizza}
              name="Pizza"
              price="399"
              creator="Chou Tzuyu"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
