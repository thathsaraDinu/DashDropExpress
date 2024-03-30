import "./AppMain.css";
import "./components/DeliveryManagement/Appdelivery.css"
import MainMenu from "./MainMenu";
import "./index.css";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function App() {
  ////////import this to append the login section
  const [usersname, setUsersName] = useState("");
  const [usertypetoken, setUserTypeToken] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token); // Corrected function call
      setUsersName(decodedToken.username);
      setUserTypeToken(decodedToken.usertypetoken);
    }
  }, [token]);
  //////////////////////////////////////////

  const scrollToSection = () => {
    // Replace 'sectionId' with the ID of the section you want to scroll to
    const section = document.getElementById("sectionId");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  console.log(usersname);

  // Initialize state for storing the usersname

  return (
    <div>
      <div>
        <MainMenu />
        <div className="App">
          {token && usertypetoken === "Admin" ? (
            <img src="/stanley-dai-73OZYNjVoNI-unsplash.jpg" alt="Background" />
          ) : token && usertypetoken === "Customer" ? (
            <img src="/pexels-mikhail-nilov-6613916.jpg" alt="Background" />
          ) : token && usertypetoken === "Driver" ? (
            <img
              src="/pexels-rdne-stock-project-7363190.jpg"
              alt="Background"
            />
          ) : (
            <img
              src="/pexels-tima-miroshnichenko-6169137.jpg"
              alt="Background"
            />
          )}

          {token ? (
            <header className="App-headermain1">
              <h1
                style={{ fontFamily: "Georgia, serif" }}
                className="text-shadow-lg text-7xl text-blue-300"
              >
                DashDrop Express
              </h1>
              <br></br>
              <br></br>
              <h1 className="text-4xl flex ">Welcome back {usersname}!</h1>
              {usertypetoken ? (
                <span className="text-2xl text-green-500">
                  {usertypetoken} Account
                </span>
              ) : (
                ""
              )}{" "}
              <br></br>
              <div
                style={{
                  zIndex: "10",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              ></div>
            </header>
          ) : (
            <header className="App-headermain2">
              <h1
                style={{ fontFamily: "Georgia, serif" }}
                className="text-shadow-lg text-7xl text-blue-300"
              >
                DashDrop Express
              </h1>
              <br></br>
              <br></br>
              <br></br>
              <p className="descriptionhome">
                Welcome to DashDrop Courier Service, your premier choice for
                reliable and efficient parcel delivery. Our dedicated team is
                committed to ensuring your packages reach their destination
                swiftly and securely. With advanced tracking technology and a
                focus on customer satisfaction, we guarantee a seamless delivery
                experience every time.
              </p>

              <br></br>
              <div
                style={{
                  zIndex: "10",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              ></div>
            </header>
          )}
          <br></br>
          <div
            className="arrowdown z=100 flex flex-row justify-center"
            onClick={scrollToSection}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </div>
        </div>
        <div id="sectionId" className="App-body-1">
          <div className="text-center App-body-1-text">
            <h2 className="text-3xl">
              Trusted, Swift, and Efficient Delivery, Respecting Your Time
            </h2>
            <br></br>
            <h5>
              As the premier and most reliable courier service in the region, we
              manage your delivery needs with the highest level of commitment
              and professionalism
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
              <img src="/icons8-hamburger-100.png" alt="section3img"></img>
              <div>Food Items</div>
            </div>
            <div className="App-body-3-section">
              <img src="icons8-furniture-100.png" alt="section3img"></img>
              <div>Furniture</div>
            </div>
            <div className="App-body-3-section">
              <img src="icons8-smartphones-100.png" alt="section3img"></img>
              <div>Electric Items</div>
            </div>

            <div className="App-body-3-section">
              <img src="icons8-giveaway-100.png" alt="section3img"></img>
              <div>Gift Items</div>
            </div>
            <div className="App-body-3-section">
              <img src="icons8-medicine-100.png" alt="section3img"></img>
              <div>Medical Items</div>
            </div>
          </div>
        </div>
        <div className="App-body-4">
          <div className="App-body-4-topic text-3xl">Our services</div>
          <div className="App-body-4-main">
            <div className="App-body-4-section">
              <img
                src="/pexels-kampus-production-7844012.jpg"
                alt="section4img"
              ></img>
              <div className="text-2xl">Timely and Reliable Deliveries</div>
              <div>
                We understand the importance of prompt delivery. With our
                efficient logistics network and dedicated team, we guarantee
                timely dispatch and arrival of your packages, ensuring your
                deadlines are met with precision and reliability
              </div>
            </div>
            <div className="App-body-4-section">
              <img
                src="/pexels-tima-miroshnichenko-6169043.jpg"
                alt="section4img"
              ></img>
              <div className="text-2xl">Tailored Care for Every Shipment</div>
              <div>
                At our courier service, we go above and beyond by meticulously
                handling every type of package with utmost care and attention.
                Rest assured that your parcels are in the hands of experts
                dedicated to their safe and secure delivery
              </div>
            </div>
            <div className="App-body-4-section">
              <img
                src="/pexels-rdne-stock-project-7363196.jpg"
                alt="section4img"
              ></img>
              <div className="text-2xl">Modern Technology usage</div>
              <div>
                Utilizing cutting-edge technology, our courier system employs
                state-of-the-art package tracking to provide you with real-time
                updates, ensuring your valuable shipments reach their
                destination seamlessly
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
