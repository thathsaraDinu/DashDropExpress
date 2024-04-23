import "./AppMain.css";
import "./components/DeliveryManagement/Appdelivery.css";
import MainMenu from "./MainMenu";
import "./index.css";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import FooterMain from "./FooterMain";
import { Link } from "react-router-dom";

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

  //////a small function to scroll to a certain point of page
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
      <div className="mb-10">
        <MainMenu />
        <div className="Appmain relative pb-20">
          {token && usertypetoken === "Admin" ? (
            <img
              className=""
              src="/pexels-efecan-efe-7900689.jpg"
              alt="Background"
            />
          ) : token && usertypetoken === "Customer" ? (
            <img
              className=""
              src="/pexels-david-peterson-1076429.jpg"
              alt="Background"
            />
          ) : token && usertypetoken === "Driver" ? (
            <img
              className=""
              src="/pexels-rdne-stock-project-7363190.jpg"
              alt="Background"
            />
          ) : (
            <img
              src="/pexels-khwanchai-phanthong-4175032.jpg"
              alt="Background"
            />
          )}

          {token ? (
            <header className="App-headermain1">
              <div className="w-full flex flex-col justify-end items-end pr-5 ">
                <h1
                  style={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: "400",
                    fontStyle: "normal",
                  }}
                  className="text-2xl"
                >
                  <span
                    style={{
                      fontFamily: "Jost, sans-serif",
                      fontWeight: "500",
                      fontStyle: "italic",
                    }}
                  >
                    {usersname}
                  </span>
                </h1>{" "}
                {usertypetoken === "Admin" || usertypetoken === "Driver" ? (
                  <span
                    style={{
                      fontFamily: "Tajawal, sans-serif",
                      fontWeight: "500",
                    }}
                    className="text-2xl text-blue-200 pl-10"
                  >
                    {usertypetoken} Account
                  </span>
                ) : (
                  ""
                )}
              </div>
              <h1
                style={{
                  fontFamily: "Tajawal , serif",
                  fontWeight: "600",
                  paddingTop: "40px",
                }}
                className="text-shadow-lg text-7xl text-white pl-10 pb-10"
              >
                DashDrop Express
              </h1>

              <div
                style={{
                  zIndex: "10",
                  width: "100%",
                  fontFamily: "jost",
                }}
              >
                <div className="text-3xl text-left pl-10 pb-2">
                  Unlock Seamless Delivery Solutions
                </div>
                <div className="text-xl text-left pl-10">
                  Simplify Your Logistics with DashDrop Express
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl text-center pt-6 pb-5">
                    Welcome back{" "}
                    {usertypetoken === "Admin" ? (
                      usertypetoken
                    ) : (
                      <span>Our valued {usertypetoken}</span>
                    )}
                  </div>
                  <Link
                    to={
                      usertypetoken === "Customer"
                        ? "/orders"
                        : usertypetoken === "Admin"
                        ? "#"
                        : "#"
                    }
                    sx={{ fontFamily: "jost" }}
                    className="box-border mt-5 relative z-30 inline-flex items-center justify-center w-auto px-5 py-3 overflow-hidden text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
                  >
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span
                      style={{ fontFamily: "jost" }}
                      className="relative z-20 flex items-center"
                    >
                      <svg
                        className="relative w-5 h-5 mr-2 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                      {usertypetoken === "Customer"
                        ? "Place an Order"
                        : usertypetoken === "Admin"
                        ? "Get Started"
                        : "My Deliveries"}
                    </span>
                  </Link>
                </div>
              </div>
            </header>
          ) : (
            <header className="App-headermain2">
              <h1
                style={{
                  marginRight: "50px",
                  fontFamily: "tajawal, serif",
                  fontWeight: "600",
                }}
                className="text-shadow-lg text-7xl text-white"
              >
                DashDrop Express
              </h1>
              <br></br>
              <br></br>
              <br></br>
              <p
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontWeight: "400",
                  fontStyle: "italic",
                }}
                className="descriptionhome text-2xl"
              >
                Welcome to DashDrop Courier Service, your premier choice for
                reliable and efficient parcel delivery. With advanced tracking
                technology and a focus on customer satisfaction, we guarantee a
                seamless delivery experience every time.
              </p>

              <br></br>
              <div>
                <Link
                  to="/TheForm"
                  className="box-border  mt-5 relative z-30 inline-flex items-center justify-center w-auto px-5 py-3 overflow-hidden  text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span
                    style={{ fontFamily: "jost" }}
                    className="relative z-20 flex items-center "
                  >
                    <svg
                      className="relative w-5 h-5 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                    Get Started
                  </span>
                </Link>
              </div>
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
            className="  z-100 flex flex-row justify-center"
            onClick={scrollToSection}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="arrowdown w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </div>
        </div>
        <div
          style={{ fontFamily: "jost" }}
          id="sectionId"
          className="App-body-1"
        >
          <div className="text-right App-body-1-text">
            <h2 className="text-3xl font-medium">
              Trusted, Swift, and Efficient Delivery, Respecting Your Time
            </h2>
            <br></br>
            <h4 className="text-lg">
              As the premier and most reliable courier service in the region, we
              manage your delivery needs with the highest level of commitment
              and professionalism
            </h4>
          </div>
          <div className="App-body-1-img">
            <img alt="courier1" src="/pexels-mizuno-k-13456097.jpg"></img>
          </div>
        </div>
        <div style={{ fontFamily: "jost" }} className="App-body-2">
          <div className="App-body-2-img">
            <img
              alt="courier2"
              src="/pexels-tima-miroshnichenko-6170158.jpg"
            ></img>
          </div>
          <div className="text-left App-body-2-text">
            <h2 className="text-3xl font-medium">
              Dedicated to Your Deliveries, Valuing Your Health and Safety
            </h2>
            <br></br>
            <h4 className="text-lg">
              We handle your deliveries with the utmost commitment,
              professionalism, and stringent adherence to health protocols for a
              safe and secure experience
            </h4>
          </div>
        </div>
        <div
          className="relative mission pt-5 pb-10 "
          style={{
            minHeight: "550px",
            width: "100%",
            objectFit: "cover",
            zIndex: "-2",
          }}
        >
          <img
            src="/ian-schneider-TamMbr4okv4-unsplash.jpg"
            className="brightness-50 absolute  "
            style={{
              left: "0",
              height: "100%",
              width: "100%",
              objectFit: "cover",
              zIndex: "-2",
            }}
            alt="missionImg"
          ></img>
          <div className="z-10 text-primary flex flex-col justify-center  pt-10  ">
            <div
              style={{ maxWidth: "600px", fontFamily: "jost" }}
              className="text-5xl pt-10 pl-20 pr-10 text-left"
            >
              Our Mission
            </div>
            <div
              style={{ maxWidth: "600px", fontFamily: "jost" }}
              className="text-2xl text-left pt-10 pl-20 pr-10 "
            >
              Empowering seamless and efficient deliveries, DashDrop Courier
              Service is dedicated to simplifying logistics and enhancing
              customer satisfaction through reliable and swift transportation
              solutions
            </div>
          </div>
        </div>
        <div style={{ fontFamily: "jost" }} className="App-body-3 ">
          <div className="App-body-4-topic text-3xl">You Can Deliver</div>
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
            <div className="App-body-3-section">
              <img
                src="icons8-knife-and-spatchula-100.png"
                alt="section3img"
              ></img>
              <div>Kitchen Items</div>
            </div>
          </div>
        </div>
        <div style={{ fontFamily: "Jost" }} className="App-body-4">
          <div className="App-body-4-topic text-3xl">Our services</div>
          <div className="App-body-4-main">
            <div className="App-body-4-section">
              <img
                src="/pexels-kampus-production-7844012.jpg"
                alt="section4img"
              ></img>
              <div className="text-2xl">Timely Deliveries</div>
              <div className="text-lg">
                We understand the importance of prompt delivery. With our
                efficient logistics network and dedicated team, we guarantee
                timely dispatch and arrival of your packages, ensuring your
                deadlines are met with reliability
              </div>
            </div>
            <div className="App-body-4-section">
              <img
                src="/pexels-tima-miroshnichenko-6169043.jpg"
                alt="section4img"
              ></img>
              <div className="text-2xl">Tailored Care </div>
              <div className="text-lg">
                At our courier service, we go beyond by meticulously handling
                every type of package with utmost care and attention. Rest
                assured that your parcels are in the hands of experts dedicated
                to their safe and secure delivery
              </div>
            </div>
            <div className="App-body-4-section">
              <img
                src="/pexels-rdne-stock-project-7363196.jpg"
                alt="section4img"
              ></img>
              <div className="text-2xl">Modern Technology usage</div>
              <div className="text-lg">
                Utilizing cutting-edge technology, our courier system employs
                state-of-the-art package tracking to provide you with real-time
                updates, ensuring your valuable shipments reach their
                destination seamlessly
              </div>
            </div>

            <div className="App-body-4-section">
              <img src="/box-8598084_1280.jpg" alt="section4img"></img>
              <div className="text-2xl">Professional Delivery Team</div>
              <div className="text-lg">
                Our delivery personnel are highly trained professionals
                dedicated to providing exceptional service. With extensive
                experience, our team ensures that your packages are delivered
                promptly to their destination.
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterMain></FooterMain>
    </div>
  );
}

export default App;
