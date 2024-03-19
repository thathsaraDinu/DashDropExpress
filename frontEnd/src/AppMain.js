import "./AppMain.css";
import MainMenu from "./MainMenu";
import "./index.css";
import "./components/DeliveryManagement/Appdelivery.css"

function App() {
  const scrollToSection = () => {
    // Replace 'sectionId' with the ID of the section you want to scroll to
    const section = document.getElementById("sectionId");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <MainMenu />
      <div className="App">
        <img src="/pexels-tima-miroshnichenko-6169865.jpg" alt="Background" />
        <header className="App-header">
          <h1
            style={{ fontFamily: "Georgia, serif" }}
            className="text-shadow-lg text-5xl text-color6"
          >
            DashDrop Express
          </h1>
          <br></br>
          <h1 className="text-3xl ">Welcome Admin</h1>

          <br></br>
          <button onClick={scrollToSection} className="bttn1">
            See more
          </button>
        </header>
      </div>
      <div id="sectionId" className="App-body-1">
        <div className="text-center App-body-1-text">
          <h2 className="text-3xl">
            Trusted, Swift, and Efficient Delivery, Respecting Your Time
          </h2>
          <br></br>
          <h5>
            As the premier and most reliable courier service in the region, we
            manage your delivery needs with the highest level of commitment and
            professionalism
          </h5>
        </div>
        <div className="App-body-1-img">
          <img alt="courier1" src="/pexels-mizuno-k-13456097.jpg"></img>
        </div>
      </div>
      <div className="App-body-2">
        <div className="App-body-2-img">
          <img
            alt="courier2"
            src="/pexels-tima-miroshnichenko-6170158.jpg"
          ></img>
        </div>
        <div className="text-center App-body-2-text">
          <h2 className="text-3xl">
            Dedicated to Your Deliveries, Valuing Your Health and Safety
          </h2>
          <br></br>
          <h5>
            We handle your deliveries with the utmost commitment,
            professionalism, and stringent adherence to health protocols for a
            safe and secure experience
          </h5>
        </div>
      </div>
      <div className="App-body-3">
        <div className="App-body-3-main">
          <div className="App-body-3-section">
            <img src="/icons8-hamburger-100.png"></img>
            <div>Food Items</div>
          </div>
          <div className="App-body-3-section">
            <img src="icons8-furniture-100.png"></img>
            <div>Furniture</div>
          </div>
          <div className="App-body-3-section">
            <img src="icons8-smartphones-100.png"></img>
            <div>Electric Items</div>
          </div>

          <div className="App-body-3-section">
            <img src="icons8-giveaway-100.png"></img>
            <div>Gift Items</div>
          </div>
          <div className="App-body-3-section">
            <img src="icons8-medicine-100.png"></img>
            <div>Medical Items</div>
          </div>
        </div>
      </div>
      <div className="App-body-4">
        <div className="App-body-4-topic text-3xl">Our services</div>
        <div className="App-body-4-main">
          <div className="App-body-4-section">
            <img src="/pexels-kampus-production-7844012.jpg"></img>
            <div className="text-2xl">Timely and Reliable Deliveries</div>
            <div>
              We understand the importance of prompt delivery. With our
              efficient logistics network and dedicated team, we guarantee
              timely dispatch and arrival of your packages, ensuring your
              deadlines are met with precision and reliability
            </div>
          </div>
          <div className="App-body-4-section">
            <img src="/pexels-tima-miroshnichenko-6169043.jpg"></img>
            <div className="text-2xl">Tailored Care for Every Shipment</div>
            <div>
              At our courier service, we go above and beyond by meticulously
              handling every type of package with utmost care and attention.
              Rest assured that your parcels are in the hands of experts
              dedicated to their safe and secure delivery
            </div>
          </div>
          <div className="App-body-4-section">
            <img src="/pexels-rdne-stock-project-7363196.jpg"></img>
            <div className="text-2xl">Modern Technology usage</div>
            <div>
              Utilizing cutting-edge technology, our courier system employs
              state-of-the-art package tracking to provide you with real-time
              updates, ensuring your valuable shipments reach their destination
              seamlessly
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
