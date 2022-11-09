import { useState, useEffect } from "react";

function App() {
  const [modal, setmodal] = useState("");
  const [navbar, setnavbar] = useState("");
  const [backdrop, setbackdrop] = useState("");
  const [dropdownDesktop, setdropdownDesktop] = useState("");
  const [mobileDrop, setmobileDrop] = useState("");
  const [dropdownMobile, setdropdownMobile] = useState("");
  
  let openModal = () => {
    setmodal("flex");
    document.body.style.overflow = "hidden";
  };

  let closeModal = () => {
    setmodal("none");
    document.body.style.overflow = "";
  };

  const handleScroll = () => {
    if (window.pageYOffset < 20) {
      setnavbar("");
      setdropdownMobile("");
    }

    if (window.pageYOffset > 20) {
      setnavbar("shrink");
      setdropdownMobile("topSpace");

    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className={`navbar ${navbar}`}>
        <div className="col-nav">
          <a href="/">
            <img
              id="logo"
              className={`logo ${navbar}`}
              src="/images/logo.png"
              alt="logo"
            />
          </a>
        </div>
        <div className="col-nav right text-right">
          {/* <!-- Desktop Navigation --> */}
          <div id="desktop-nav">
            <button
              onClick={() => {
                setbackdrop("showBackdrop");
                setdropdownDesktop("showSideBar");
              }}
              id="dropdown-button-desktop"
            >
              <svg
                width="41"
                height="30"
                viewBox="0 0 41 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.52734 8.33138C7.52734 7.595 8.1243 6.99805 8.86068 6.99805H32.8607C33.5971 6.99805 34.194 7.595 34.194 8.33138C34.194 9.06776 33.5971 9.66471 32.8607 9.66471H8.86068C8.1243 9.66471 7.52734 9.06776 7.52734 8.33138Z"
                  fill="#333333"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.52734 14.998C7.52734 14.2617 8.1243 13.6647 8.86068 13.6647H32.8607C33.5971 13.6647 34.194 14.2617 34.194 14.998C34.194 15.7344 33.5971 16.3314 32.8607 16.3314H8.86068C8.1243 16.3314 7.52734 15.7344 7.52734 14.998Z"
                  fill="#333333"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.52734 21.6647C7.52734 20.9283 8.1243 20.3314 8.86068 20.3314H32.8607C33.5971 20.3314 34.194 20.9283 34.194 21.6647C34.194 22.4011 33.5971 22.998 32.8607 22.998H8.86068C8.1243 22.998 7.52734 22.4011 7.52734 21.6647Z"
                  fill="#333333"
                ></path>
              </svg>
            </button>
            <div
              id="desktopDrop"
              className={`backdrop ${backdrop}`}
              role="presentation"
              onClick={() => {
                setbackdrop("");
                setdropdownDesktop("");
              }}
            ></div>
            <div
              id="dropdown-desktop"
              className={`dropdown-desktop exit ${dropdownDesktop}`}
            >
              <button
                onClick={() => {
                  setbackdrop("");
                  setdropdownDesktop("");
                }}
                className="close-icon"
              >
                <svg
                  width="41"
                  height="30"
                  viewBox="0 0 41 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6075 22.5408C10.0868 23.0615 10.0868 23.9057 10.6075 24.4264C11.1282 24.9471 11.9724 24.9471 12.4931 24.4264L20.0355 16.8841L27.5779 24.4265C28.0986 24.9471 28.9428 24.9471 29.4635 24.4265C29.9842 23.9058 29.9842 23.0615 29.4635 22.5408L21.9211 14.9984L29.4637 7.45583C29.9844 6.93513 29.9844 6.09091 29.4637 5.57021C28.943 5.04951 28.0988 5.04951 27.5781 5.57021L20.0355 13.1128L12.4929 5.57027C11.9722 5.04957 11.128 5.04957 10.6073 5.57027C10.0866 6.09097 10.0866 6.93519 10.6073 7.45589L18.1499 14.9984L10.6075 22.5408Z"
                    fill="#333333"
                  ></path>
                </svg>
              </button>
              <div className="sections">
                <div className="features-section-desktop">
                  <a href="/cash/">Technology</a>
                  <a href="/cash/">Technology</a>
                  <a href="#">Biometric Verification</a>
                  <a href="#">Location Identification</a>
                  <a href="#">Background Checks</a>
                  <a href="#">Cognitive Video</a>
                  <a href="/instant/">Security</a>
                  <a href="/saving/">Integration</a>
                  <a href="/investing/">About</a>
                </div>
                <div className="company-info-section-desktop">
                  <a href="/about/">About</a>
                  <a href="/careers/">Careers</a>
                </div>
                <div className="app-links-section-desktop">
                  <a href="/" target="_blank" rel="noopener">
                    <img src="/images/app-store.png" alt="App Store" />
                  </a>
                  <a href="/" target="_blank" rel="noopener">
                    <img src="/images/play-store.png" alt="Play Store" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Mobile Navigation --> */}
          <div id="mobile-nav">
            <button
              onClick={() => {
                mobileDrop === "" ? setmobileDrop("show") : setmobileDrop("");
              }}
              id="mobile-hamburger-icon"
            >
              <svg
                width="41"
                height="30"
                viewBox="0 0 41 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.52734 8.33138C7.52734 7.595 8.1243 6.99805 8.86068 6.99805H32.8607C33.5971 6.99805 34.194 7.595 34.194 8.33138C34.194 9.06776 33.5971 9.66471 32.8607 9.66471H8.86068C8.1243 9.66471 7.52734 9.06776 7.52734 8.33138Z"
                  fill="#333333"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.52734 14.998C7.52734 14.2617 8.1243 13.6647 8.86068 13.6647H32.8607C33.5971 13.6647 34.194 14.2617 34.194 14.998C34.194 15.7344 33.5971 16.3314 32.8607 16.3314H8.86068C8.1243 16.3314 7.52734 15.7344 7.52734 14.998Z"
                  fill="#333333"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.52734 21.6647C7.52734 20.9283 8.1243 20.3314 8.86068 20.3314H32.8607C33.5971 20.3314 34.194 20.9283 34.194 21.6647C34.194 22.4011 33.5971 22.998 32.8607 22.998H8.86068C8.1243 22.998 7.52734 22.4011 7.52734 21.6647Z"
                  fill="#333333"
                ></path>
              </svg>
            </button>
            <button id="mobile-close-icon" className="close-button hide">
              <svg
                width="41"
                height="30"
                viewBox="0 0 41 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6075 22.5408C10.0868 23.0615 10.0868 23.9057 10.6075 24.4264C11.1282 24.9471 11.9724 24.9471 12.4931 24.4264L20.0355 16.8841L27.5779 24.4265C28.0986 24.9471 28.9428 24.9471 29.4635 24.4265C29.9842 23.9058 29.9842 23.0615 29.4635 22.5408L21.9211 14.9984L29.4637 7.45583C29.9844 6.93513 29.9844 6.09091 29.4637 5.57021C28.943 5.04951 28.0988 5.04951 27.5781 5.57021L20.0355 13.1128L12.4929 5.57027C11.9722 5.04957 11.128 5.04957 10.6073 5.57027C10.0866 6.09097 10.0866 6.93519 10.6073 7.45589L18.1499 14.9984L10.6075 22.5408Z"
                  fill="#333333"
                ></path>
              </svg>
            </button>
            <div id="mobileDrop" className={`dropdown-mobile ${dropdownMobile} ${mobileDrop}`}>
              <div id="features-mobile" className="features-section-mobile">
                <a href="/cash/">Technology</a>
                <a href="#">Biometric Verification</a>
                <a href="#">Location Identification</a>
                <a href="#">Background Checks</a>
                <a href="#">Cognitive Video</a>
                <a href="/instant/">Security</a>
                <a href="/saving/">Integration</a>
                <a href="/investing/">About</a>
              </div>
              <div className="company-info-section-mobile">
                <a href="/about/">About</a>
                <a href="/careers/">Careers</a>
              </div>

              <a
                href="https://app.albrt.co/download"
                className="get-app-btn text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Content --> */}
      <div id="notice-wrap" className="wrap" style={{ overflowX: "hidden" }}>


     <div className="heroCont">
     <iframe aria-label="Hero background video of taffy" data-src="//play.vidyard.com/9vUaEyfLLaEGaAqVGihCHs/type/background?preview=1" scrolling="no" frameBorder="0" allowtransparency="false" allowFullScreen={true} src="//play.vidyard.com/9vUaEyfLLaEGaAqVGihCHs/type/background?preview=1" className="vyLoad"></iframe>

      <div className="heroChild">
      <div className="text-mainHero">
        <h1>Trust-first<br/>Digital<br/>Validation</h1>
        <div className="heroDes">Real-time identity verification & onboarding.</div>
              <a href="https://verify.validentry.com/" target="_blank">
                Get started
              </a>
      </div>

      <img src="/images/img_cashhome.webp" className="heroImageMainText" alt="" />
      </div>

     </div>

     <div className="secondPartCont">
        <div>
        Digital identity solutions that enable pinpointed entry into your products and services. Build trust, stop fraud, and automate KYC life-cycles while controlling digital interactions safely.
        </div>
     </div>
        

        <div className="main-container main-containerBanking">
          {/* <!-- Section: Banking --> */}
          <section className="main-section">
            <div className="round-card reveal-on">
              <div className="round-card-inner reveal-delay round-card-innerBanking">
                <div className="round-card-content">
                  <div className="bankingSmallText">KYC FOR YOUR BUSINESS</div>
                  <div className="bankingHeading bankingHeading1">Solutions for everyone, anywhere, <span className="gradient">on any device</span></div>
                  <div className="bankingDesc">With AI-driven automation, intelligent customer insights, and compliance standards build to scale and streamline the know your customer process, digital identification is made simple. Intuitive, accurate data points stop fraud in its tracks, providing immediate decisions and industry leading matching thresholds.</div>
                  <div className="bankingFlex">
                    <a href="#">Explore KYC <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></a>
                  </div>
                </div>
                <div className="round-card-img-container cash">
                  <picture className="center-margin">
                    <source
                      srcSet="/images/img_cardstack.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="/images/img_cardstack.webp"
                      type="image/webp"
                    />
                    <img
                      className="splash-app-feature img-scale"
                      src="/images/img_cardstack.webp"
                      alt=""
                    />
                  </picture>
                </div>
              </div>
              <div className="circle-plus reveal-standard">
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.1096 16.3242C31.1096 24.5407 24.4489 31.2014 16.2324 31.2014C8.01597 31.2014 1.35523 24.5407 1.35523 16.3242C1.35523 8.10777 8.01597 1.44703 16.2324 1.44703C24.4489 1.44703 31.1096 8.10777 31.1096 16.3242Z"
                    stroke="#333333"
                    strokeWidth="2.24561"
                  ></path>
                  <line
                    x1="16.5017"
                    y1="9.27124"
                    x2="16.5017"
                    y2="24.0923"
                    stroke="#333333"
                    strokeWidth="2.24561"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="9.17749"
                    y1="16.6233"
                    x2="23.9985"
                    y2="16.6233"
                    stroke="#333333"
                    strokeWidth="2.24561"
                    strokeLinecap="round"
                  ></line>
                </svg>
              </div>
            </div>
          </section>




          <section className="main-section">
            <div className="round-card reveal-on">
              <div className="round-card-inner reveal-delay round-card-innerBanking">
                <div className="round-card-content">
                  <div className="bankingSmallText">TRUST-FIRST SECURITY</div>
                  <div className="bankingHeading bankingHeading2">Designed to exceed <span className="gradient">accepted standards</span></div>
                  <div className="bankingDesc">Verify identities with confidence without sacrificing customer experience. Designed to meet the highest security standards, ensuring enterprise grade data protection and ensuring the integrity of digital transactions. Protect your brand and engage your customers authentically.</div>
                  <div className="bankingFlex">
                    <a href="#">Learn about trust-first security <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></a>
                  </div>
                </div>
                <div className="round-card-img-container cash">
                  <picture className="center-margin">
                    <source
                      srcSet="/images/img_cardstack.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="/images/img_cardstack.webp"
                      type="image/webp"
                    />
                    <img
                      className="splash-app-feature img-scale"
                      src="/images/img_cardstack.webp"
                      alt=""
                    />
                  </picture>
                </div>
              </div>
              <div className="circle-plus reveal-standard">
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.1096 16.3242C31.1096 24.5407 24.4489 31.2014 16.2324 31.2014C8.01597 31.2014 1.35523 24.5407 1.35523 16.3242C1.35523 8.10777 8.01597 1.44703 16.2324 1.44703C24.4489 1.44703 31.1096 8.10777 31.1096 16.3242Z"
                    stroke="#333333"
                    strokeWidth="2.24561"
                  ></path>
                  <line
                    x1="16.5017"
                    y1="9.27124"
                    x2="16.5017"
                    y2="24.0923"
                    stroke="#333333"
                    strokeWidth="2.24561"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="9.17749"
                    y1="16.6233"
                    x2="23.9985"
                    y2="16.6233"
                    stroke="#333333"
                    strokeWidth="2.24561"
                    strokeLinecap="round"
                  ></line>
                </svg>
              </div>
            </div>
          </section>







          <section className="main-section">
            <div className="round-card reveal-on">
              <div className="round-card-inner reveal-delay round-card-innerBanking">
                <div className="round-card-content">
                  <div className="bankingSmallText">EASY CODE INTEGRATION</div>
                  <div className="bankingHeading bankingHeading3">Providing all-inclusive <span className="gradient">digital identity management</span></div>
                  <div className="bankingDesc">With just a few lines of code, you can secure authentication and identification. We'll handle the compatibility nuances while developers focus on building your products. Gain deeper, accurate insights to make better, risk-based decisions.</div>
                  <div className="bankingFlex">
                    <a href="#">Flexible options <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></a>
                  </div>
                </div>
                <div className="round-card-img-container cash">
                  <picture className="center-margin">
                    <source
                      srcSet="/images/img_cardstack.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="/images/img_cardstack.webp"
                      type="image/webp"
                    />
                    <img
                      className="splash-app-feature img-scale"
                      src="/images/img_cardstack.webp"
                      alt=""
                    />
                  </picture>
                </div>
              </div>
              <div className="circle-plus reveal-standard">
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.1096 16.3242C31.1096 24.5407 24.4489 31.2014 16.2324 31.2014C8.01597 31.2014 1.35523 24.5407 1.35523 16.3242C1.35523 8.10777 8.01597 1.44703 16.2324 1.44703C24.4489 1.44703 31.1096 8.10777 31.1096 16.3242Z"
                    stroke="#333333"
                    strokeWidth="2.24561"
                  ></path>
                  <line
                    x1="16.5017"
                    y1="9.27124"
                    x2="16.5017"
                    y2="24.0923"
                    stroke="#333333"
                    strokeWidth="2.24561"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="9.17749"
                    y1="16.6233"
                    x2="23.9985"
                    y2="16.6233"
                    stroke="#333333"
                    strokeWidth="2.24561"
                    strokeLinecap="round"
                  ></line>
                </svg>
              </div>
            </div>
          </section>




          

          {/* <!-- Section: Saving --> */}
          <section className="main-section flex">
           
            <div
              
              className="round-card round-card-yellow yellow square reveal-on card-hover"
            >
              <div className="round-card-inner round-card-inner-yellow saving-m reveal-delay">
                
                <div className="yellow-content">
                  <h2>Execute At Scale</h2>
                  <p>
                    AI and ML capabilities eliminate manual processes while driving highly accurate results.
                  </p>
                </div>
              </div>
              
            </div>



            <div
              
              className="round-card round-card-yellow yellow square reveal-on card-hover"
            >
              <div className="round-card-inner round-card-inner-yellow saving-m reveal-delay">
                
                <div className="yellow-content">
                  <h2>Instant Verifications</h2>
                  <p>
                  Lightning-quick identity verification with instant results taking just a few seconds to complete.
                  </p>
                </div>
              </div>
              
            </div>



            <div
              
              className="round-card round-card-yellow yellow square reveal-on card-hover"
            >
              <div className="round-card-inner round-card-inner-yellow saving-m reveal-delay">
                
                <div className="yellow-content">
                  <h2>Omni-Channel Solutions</h2>
                  <p>
                  Onboarding across web, mobile, apps, and cross-device and browsers.
                  </p>
                </div>
              </div>
              
            </div>



          </section>


          
          {/* <!-- Section: Investing --> */}
          <section className="main-section">
            <a
              href="/investing/"
              className="round-card green reveal-on card-hover"
            >
              <div className="round-card-inner reveal-delay">
                <div className="round-card-content">
                  <h2>Passwordless Authentication</h2>
                  <p>Powerful Web3 authentication, eliminate the need to sign up and ditch the password.</p>
                </div>
                <div className="round-card-img-container">
                  <picture className="center-margin">
                    <source
                      srcSet="/images/img_investinghome.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="/images/img_investinghome.webp"
                      type="image/webp"
                    />
                    <img
                      className="splash-app-feature short investing-img img-scale"
                      src="/images/img_investinghome.webp"
                      alt=""
                    />
                  </picture>
                </div>
              </div>
              <div className="circle-plus reveal-standard">
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.1096 16.3242C31.1096 24.5407 24.4489 31.2014 16.2324 31.2014C8.01597 31.2014 1.35523 24.5407 1.35523 16.3242C1.35523 8.10777 8.01597 1.44703 16.2324 1.44703C24.4489 1.44703 31.1096 8.10777 31.1096 16.3242Z"
                    stroke="#333333"
                    strokeWidth="2.24561"
                  ></path>
                  <line
                    x1="16.5017"
                    y1="9.27124"
                    x2="16.5017"
                    y2="24.0923"
                    stroke="#333333"
                    strokeWidth="2.24561"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="9.17749"
                    y1="16.6233"
                    x2="23.9985"
                    y2="16.6233"
                    stroke="#333333"
                    strokeWidth="2.24561"
                    strokeLinecap="round"
                  ></line>
                </svg>
              </div>
            </a>
          </section>

          

          {/* <!-- Section: Budgeting --> */}
          <section className="main-section">
            <a
              href="/budgeting/"
              className="round-card blue reveal-on card-hover"
            >
              <div className="round-card-inner reveal-delay">
                <div className="round-card-content">
                  <h2>Global Compliance Protection</h2>
                  <p>Intelligent compliance solutions including AML, PEP, OFAC, Global Sanctions, AUSTRAC, OSFI, DFAT & more.</p>
                </div>
                <div className="round-card-img-container">
                  <picture className="center-margin budget-pic">
                    <source
                      srcSet="/images/img_billstracking.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="/images/img_billstracking.webp"
                      type="image/webp"
                    />
                    <img
                      className="splash-app-feature img-scale"
                      src="/images/img_billstracking.webp"
                      alt=""
                    />
                  </picture>
                </div>
              </div>
              <div className="circle-plus reveal-standard">
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.1096 16.3242C31.1096 24.5407 24.4489 31.2014 16.2324 31.2014C8.01597 31.2014 1.35523 24.5407 1.35523 16.3242C1.35523 8.10777 8.01597 1.44703 16.2324 1.44703C24.4489 1.44703 31.1096 8.10777 31.1096 16.3242Z"
                    stroke="#333333"
                    strokeWidth="2.24561"
                  ></path>
                  <line
                    x1="16.5017"
                    y1="9.27124"
                    x2="16.5017"
                    y2="24.0923"
                    stroke="#333333"
                    strokeWidth="2.24561"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="9.17749"
                    y1="16.6233"
                    x2="23.9985"
                    y2="16.6233"
                    stroke="#333333"
                    strokeWidth="2.24561"
                    strokeLinecap="round"
                  ></line>
                </svg>
              </div>
            </a>
          </section>

          {/* <!-- Section: Serious Security --> */}
          <section className="main-section">
            <div className="round-card black reveal-on">
              <div className="serious-security reveal-delay">
                <div className="serious-security-header">
                  <img
                    className="serious-security-icon"
                    src="/images/ic_security_white.svg"
                    alt=""
                  />
                  <h2>Serious security</h2>
                </div>
                <div className="serious-security-table flex flex-stack-small flex-start-h">
                  <div className="col-3-full-small">
                    <div className="serious-security-item">
                      <h4>
                        Powerful <span>protection</span>
                      </h4>
                      <p>
                      Advanced security features protecting millions of people across the globe.
                      </p>
                    </div>
                  </div>
                  <div className="col-3-full-small">
                    <div className="serious-security-item">
                      <h4>
                      Framework
                      </h4>
                      <p>
                      Designed to ensure enterprise level data security standards.
                      </p>
                    </div>
                  </div>
                  <div className="col-3-full-small">
                    <div className="serious-security-item">
                      <h4>
                      Security Criteria
                      </h4>
                      <p>
                       Aligned to meet AICP criteria, ISO/IEC, GDPR and CCPA standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Section: We've helped members --> */}
          <section className="helped-members reveal-on">
            <div className="splash-center-img reveal-standard">
              <picture>
                <source
                  srcSet="/images/img_profileicons.webp"
                  type="image/webp"
                />
                <source
                  srcSet="/images/img_profileicons.webp"
                  type="image/webp"
                />
                <img
                  className="large"
                  src="/images/img_profileicons.webp"
                  alt="Member icons"
                />
              </picture>
              <div className="spacer-tiny"></div>
              <h2 className="col-1-center">
                Authentic user journeys solidify consumer confidence. 
              </h2>
              <div className="spacer-small"></div>
              
              
              <div className="main-button-wrapper" style={{ display: "block" }}>
              <a href="#" target="_blank" className="button">
              Learn how
              </a>
              </div>
            </div>
          </section>
        </div>

        <div className="sms-modal" style={{ display: modal }}>
          <div onClick={closeModal} className="sms-modal-overlay"></div>
          <div id="open-modal" className="sms-modal-window">
            <div className="sms-modal-close">
              <svg
                width="15"
                height="15"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.7792 1.28033C12.0721 0.987434 12.0721 0.51256 11.7792 0.219668C11.4863 -0.0732242 11.0115 -0.0732224 10.7186 0.219672L5.99968 4.93859L1.2813 0.220183C0.988409 -0.072711 0.513535 -0.0727128 0.22064 0.220179C-0.0722532 0.513071 -0.0722552 0.987945 0.220636 1.28084L4.93902 5.99926L0.219668 10.7186C-0.0732242 11.0115 -0.0732224 11.4864 0.219672 11.7793C0.512566 12.0722 0.98744 12.0722 1.28033 11.7793L5.99968 7.05992L10.7195 11.7798C11.0124 12.0727 11.4873 12.0727 11.7802 11.7798C12.0731 11.4869 12.0731 11.0121 11.7802 10.7192L7.06033 5.99926L11.7792 1.28033Z"
                  fill="#333"
                />
              </svg>
            </div>
            <div className="sms-modal-content-container">
              <div className="sms-modal-content">
                <img
                  className="sms-modal-qr"
                  src="/images/img_qr_download_app.png"
                  alt="Download the app QR code"
                />
                <h1>Scan to download Albert.</h1>
              </div>
              <hr />
            </div>

            <div className="sms-modal-app-buttons">
              <a href="/" target="_blank" rel="noopener">
                <img src="/images/app-store.png" alt="App Store" />
              </a>
              <a href="/" target="_blank" rel="noopener">
                <img src="/images/play-store.png" alt="Play Store" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Section: Footer --> */}
      <footer style={{position: "relative"}}>
        <div className="content-full text-left">
          <a href="/">
            <img
              className="footer-logo"
              src="/images/logo.png"
              alt="logo"
            />
          </a>
        </div>
        <div className="clear spacer-small"></div>

        <div className="col-4">
          <span className="bold">Company</span>
          <br />
          <a href="/about/" rel="noopener">
            About
          </a>
          <br />
          <a href="/careers/" rel="noopener">
            Careers
          </a>
          
        </div>
        <div className="col-4">
          <span className="bold">Support</span>
          <br />
          <a href="mailto:support@validentry.com" target="_blank">
            support@validentry.com
          </a>
        </div>
        <div className="col-4">
          <span className="bold">Legal</span>
          <br />
          <a href="/terms/" target="_blank">
            Terms of Use
          </a>
          <br />
          <a href="/privacy/" target="_blank">
            Privacy Policy
          </a>
        </div>
        <div className="col-4 col-last">
          <span className="bold">Coming Soon</span>
          <br />
          <div className="app-buttons">
            <a href="/" target="_blank" rel="noopener">
              <img src="/images/app-store.png" alt="App Store" />
            </a>
            <a href="/" target="_blank" rel="noopener">
              <img src="/images/play-store.png" alt="Play Store" />
            </a>
          </div>
        </div>

        <div style={{position: "absolute" , bottom: "30px", left: "0px", marginRight: "auto", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", width: "100%"}}> <span style={{textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center"}}>2023 AnonyDoxx, LLC All Rights Reserved.</span> </div>

        <div className="clear spacer-medium-large"></div>

       
       

      </footer>

      {/* // <!-- Mobile smart banner ("Get the app") --> */}
      <div className="smart-banner-wrapper" id="smart-banner">
        <a className="smart-banner" href="/">
          <div className="flex">
            <div className="smart-banner-text">
              <p className="smart-banner-text-header">ValidEntry</p>
              <p className="disclosures">Bank. Save. Invest.</p>
            </div>
          </div>
          <div className="smart-banner-button">
            <div className="button">Coming Soon</div>
          </div>
        </a>
      </div>
    </>
  );
}

export default App;
