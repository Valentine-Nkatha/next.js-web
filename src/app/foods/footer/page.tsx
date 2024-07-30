const Footer = ()=>{
    return(
        <footer>
            <div className="footer bg-black text-white flex justify-around text-start p-12">
        <div>
            <h2>FoodHouse</h2>
            <p>Best cooks and best delivery guys all<br/>
            at your service. Hot tasty food will<br/>
            reach you in 60 minutes.</p>
        </div>
        <div>
            <h2>Company</h2>
            <p>Career</p>
            <p>About Us</p>
            <p>Blog</p>
            <p>Press info</p>
            <p>Features</p>
        </div>
        <div>
            <h2>Fudo</h2>
            <p>Why Fudo</p>
            <p>How it Works</p>
            <p>Why Choose Us</p>
            <p>Client Stores</p>
            <p>Gallery</p>
        </div>
        <div>
            <h2>Menu</h2>
            <p>Breakfast</p>
            <p>Lunch</p>
            <p>Dinner</p>
            <p>Fast Foods</p>
            <p>Drinks</p>
        </div>
        </div>
        <div className="foter-section bg-yellow-500 text-white flex justify-end gap-8 p-4">
            <p className="copyright mr-18">Copyrigt 2021 Besnik All Rights Reserved</p> 
            <p>Terms</p>
            <p>Privacy</p>
            <p className="security pr-14">Security</p>
        </div>
        </footer>
    )
}
export default Footer