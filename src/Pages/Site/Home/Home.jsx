import React, { useContext } from "react";
import Cards from "../../../Components/Site/Cards/Cards";
import MainContext from "../../../Context/Context";

const Home = () => {
  const { data } = useContext(MainContext);
  return (
    <main>
      <section id="men">
        <div className="men__div mt-5">
        <h1>New realeased Products for Men</h1>
        <p>Who are in extremely love with eco friendly system.</p>

        {<Cards data={data.slice(0,4)} />}
        </div>
      </section>
      <section id="women">
        <div className="women__div mt-5">
          <h1>New realeased Products for Women</h1>
          <p>Who are in extremely love with eco friendly system.</p>
          {
            <Cards data={data.slice(4)}/>
          }
        </div>
      </section>
    </main>
  );
};

export default Home;
