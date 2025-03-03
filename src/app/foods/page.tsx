const Foods = () => {
  return (
    <div>
      <div className="online text-center mt-40">
        <h3 className="online italic text-[25px]">
          <strong>Online Store</strong>
        </h3>
        <h2 className="popular text-[40px]">
          <strong>Popular Foods</strong>
        </h2>
      </div>
      <div className="popular-foods flex justify-around my-8 text-lg">
        <img
          src="/images/fruitdish.jpeg"
          alt="fruitdish"
          className="food rounded-full border-stone-300 border-2 h-72 w-72"
        />
        <img
          src="/images/fruits.jpeg"
          alt="fruitdishes"
          className="food rounded-full border-stone-300 border-2 h-72 w-72"
        />
        <img
          src="/images/pizza.jpeg"
          alt="pizza"
          className="food rounded-full border-stone-300 border-2 h-72 w-72"
        />
        <img
          src="/images/seafood.jpeg"
          alt="pizza"
          className="food rounded-full border-stone-300 border-2 h-72 w-72"
        />
      </div>
      <div className="fruits popular-foods flex justify-around my-8 text-lg">
        <div>
          <h4 className="fruits mt-6 text-[34px] text-center">
            <strong>Fruit dish</strong>
          </h4>
          <p className="dinko ml-30 text-center">Dinko Food</p>
          <button className="button rounded-full bg-yellow-500 text-white p-6 text-base w-[250px]">
            Add to Cart $696
          </button>
        </div>
        <div>
          <h4 className="fruit mt-6 text-[34px] text-center">
            <strong>Fruit dish</strong>
          </h4>
          <p className="food-dinko text-center">Dinko Food</p>
          <button className="button rounded-full bg-yellow-500 text-white p-6 text-base w-[250px]">
            Add to Cart $696
          </button>
        </div>
        <div>
          <h4 className="sea mt-6 text-[34px] text-center">
            <strong>Sea fish dish</strong>
          </h4>
          <p className="dinko-food text-center">Dinko Food</p>
          <button className="button rounded-full bg-yellow-500 text-white p-6 text-base w-[250px]">
            Add to Cart $696
          </button>
        </div>
        <div>
          <h4 className="fish mt-6 text-[34px] text-center">
            <strong>Sea fish dish</strong>
          </h4>
          <p className="dinko text-center">Dinko Food</p>
          <button className="button rounded-full bg-yellow-500 text-white p-6 text-base w-[250px]">
            Add to Cart $696
          </button>
        </div>
      </div>

      <div className="special-offer flex gap-20  mr-80 ml-80 mt-40">
        <div>
          <button className="button border-yellow-600 bg-yellow-600 text-white rounded-none p-2">
            -50%
          </button>
          <h1 className="offer text-[60px]">
            <strong>Our Special Offer</strong>
          </h1>
          <p className="best-cooks text-[25px]">
            Best cooks and best delivery guys all at your
            <br />
            service. Hot tasty will reach you in 60 minutes
          </p>
          <button className="buttons border-yellow-500 bg-yellow-500 text-white rounded-none p-6">
            See All Menu
          </button>
        </div>
        <div>
          <img
            src="/images/specialoffer.jpeg"
            alt="special"
            className="special-offer h-96 w-96"
          />
        </div>
      </div>
      <div>
        <p className="quality text-center mt-40">Quality Food</p>
        <h1 className="get text-center text-[45px]">
          <strong>Get The Best Offers</strong>
        </h1>
        <p className="doorstep text-center">
          The food at your doorstep. Why starve when you have us. You hunger
          <br />
          partner. Straight out of the oven to your doorstep.
        </p>
      </div>
      <div className="offers flex mt-10 justify-around">
        <div>
          <h3 className="day-offers text-[30px]">
            <strong>Any day offers</strong>
          </h3>
          <p>New phenomenon</p>
          <h6>$12.90</h6>
        </div>
        <div>
          <img src="images/burger.jpeg" alt="burger" className="foods" />
        </div>

        <div>
          <h3 className="other-day text-[30px]">
            <strong>Other flavors</strong>
          </h3>
          <p>
            Save room. We <br />
            made salats
          </p>
          <h6>$12.90</h6>
        </div>
        <div>
          <img
            src="images/otherflavour.png"
            alt="otherflavours"
            className="other-flavours"
          />
        </div>

        <div>
          <h3 className="poco text-[30px]">
            <strong>
              Find a poco
              <br />
              store near
              <br /> you
            </strong>
          </h3>
        </div>
        <div>
          <img src="images/find.jpeg" alt="poco store" className="find" />
        </div>
      </div>
      <h1 className="our-services text-center text-[34px] mt-40">
        Our Services
      </h1>
      <div className="service flex justify-around">
        <img src="/images/restaurants.jpeg" />
        <img src="/images/quality.png" />
        <img src="/images/discount.jpeg" />
        <img src="/images/fast.jpeg" />
      </div>

      <div className="services flex justify-around">
        <p>Good Quality</p>
        <p>55+ Restaurants</p>
        <p>Discount System</p>
        <p>Fast Delivery</p>
      </div>
      <div>
        <h6 className="testimonial text-center mt-40">
          <strong>Testimonial</strong>
        </h6>
        <h2 className="clients text-center text-[40px]">
          <strong>What Our Clients Say</strong>
        </h2>
        <img src="/images/comma.png" className="comma mr-auto ml-auto" />
        <p className="testimonials text-center">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmond tempor incididunt
          <br />
          ut labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation
          <br />
          uliamco laboris nisi ut aliquip ex ea commodo
        </p>
        <img src="images/face images.png" alt="team" className="image mr-auto ml-auto"/>
      </div>
      <div className="download flex justify-center mr-40 ml-40 mt-20 gap-20">
        <div>
          <img src="/images/phone.jpeg" />
        </div>
        <div>
          <h6 className="download text-[20px] text-yellow-600 ">
            Download Our App
          </h6>
          <h2 className="here text-[34px] mb-8">
            <strong>
              It's all here.
              <br />
              All in one app.
            </strong>
          </h2>
          <p>
            Discover local, on-demand delivery or Pickup from
            <br />
            resytaurants, nearby grocery and convennience stores
            <br />
            and more
          </p>
          <div className="icons flex mt-9 mb-7">
            <img src="/images/app.jpeg" className="img-app h-[50px]" />
            <img src="/images/google.jpeg" className="images h-[50px]" />
          </div>
        </div>
      </div>
      <div className="Subscribe flex gap-10 justify-around mt-8 mb-8">
        <div>
          <h3 className="Subscribe text-[25px] mb-4"><strong>Subscribe Our Newsletter</strong></h3>
          <p>
            Subscribe on our newsletter to get our
            <br />
            news
          </p>
        </div>
        <div>
          <input type="text" name="email address" id="email-address"placeholder="Your Email Address"/>
          <button className="button bg-yellow-400 p-8 text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default Foods;
