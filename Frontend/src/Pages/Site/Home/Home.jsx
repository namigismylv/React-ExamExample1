import React, { useContext } from "react";
import Cards from "../../../Components/Site/Cards/Cards";
import MainContext from "../../../Context/Context";
import { Helmet } from "react-helmet";
import HeroSection from "../../../Components/Site/Home.Sections/Hero.Section/HeroSection";
import "./Home.css";

const Home = () => {
  const { data, input,sort,setSort } = useContext(MainContext);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <main>
        <HeroSection />
        <section id="men">
          <div className="men__div" style={{ marginTop: "50px" }}>
            <div className="men__div__overlay"></div>
            <div className="men__div__main">
              <div className="men__div__main__title">
                <h1>New realeased Products for Men</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
            
              {
                <Cards
                  data={data
                    .slice(0, 4)
                    .filter((x) =>
                      x.title.toLowerCase().includes(input.toLowerCase())
                    )}
                />
              }
            </div>
          </div>
        </section>
        <section id="women">
          <div className="women__div">
            <div className="women__div__title">
              <h1>New realeased Products for Women</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className="women__div__main">
              {
                <Cards
                  data={data
                    .slice(4)
                    .filter((x) =>
                      x.title.toLowerCase().includes(input.toLowerCase())
                    )}
                />
              }
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
