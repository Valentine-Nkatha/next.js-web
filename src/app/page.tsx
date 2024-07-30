import Navbar from "./navbar/page";

import Foods from "./foods/page";
import Footer from "./foods/footer/page";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="landing mx-10 text-3xl my-5 flex gap-52 mt-36">
        <div>
          <h1 className="title text-6xl">
            <strong>Enjoy Delicious <br />
            Food in</strong>
            <span className="sub-title text-yellow-500">Healthy Life</span>
          </h1>
          <p className="body my-5 mt-24 text-[40px]">
            Tandoori masala is an Indian spice blend consisting of a <br />
            variety of spices Tandoori masala is an Indian spice blend
            <br />
            consisting of a variety of spices
          </p>

          <button className="buttons border-yellow-500 bg-yellow-500 p-3 rounded text-white my-3 mt-10">
            Order Now
          </button>
        </div>
        <div>
          <img src="/images/chickens.jpeg" alt="chicken" className="chicken-image h-96 w-96"/>
        </div>
        
        
       
      </div>
      <Foods />
      <Footer/>
    </main>
  );
}
//