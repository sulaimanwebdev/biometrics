import { useState, useEffect } from "react";

function App() {
  const [modal, setmodal] = useState("");
  const [navbar, setnavbar] = useState("");
  const [backdrop, setbackdrop] = useState("");
  const [dropdownDesktop, setdropdownDesktop] = useState("");
  const [mobileDrop, setmobileDrop] = useState("");

  let openModal = () => {
    setmodal("flex");
    document.body.style.overflow = "hidden";
  };

  let closeModal = () => {
    setmodal("none");
    document.body.style.overflow = "";
  };

  const handleScroll = () => {
    if (window.pageYOffset < 170) {
      setnavbar("");
    }

    if (window.pageYOffset > 170) {
      setnavbar("shrink");
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
              src="/images/albert-logo.svg"
              alt="Albert"
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
                  <a href="/cash/">Cash</a>
                  <a href="/instant/">Instant</a>
                  <a href="/saving/">Saving</a>
                  <a href="/investing/">Investing</a>
                  <a href="/budgeting/">Budgeting</a>
                  <a href="/genius/">Genius</a>
                </div>
                <div className="company-info-section-desktop">
                  <a href="/about/">About</a>
                  <a href="/careers/">Careers</a>
                  <a href="/">Help</a>
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
            <div id="mobileDrop" className={`dropdown-mobile ${mobileDrop}`}>
              <div id="features-mobile" className="features-section-mobile">
                <a href="/cash/">Cash</a>
                <a href="/instant/">Instant</a>
                <a href="/saving/">Saving</a>
                <a href="/investing/">Investing</a>
                <a href="/budgeting/">Budgeting</a>
                <a href="/genius/">Genius</a>
              </div>
              <div className="company-info-section-mobile">
                <a href="/about/">About</a>
                <a href="/careers/">Careers</a>
                <a href="/">Help</a>
              </div>

              <a
                href="https://app.albrt.co/download"
                className="get-app-btn text-center"
              >
                Get the app
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Content --> */}
      <div id="notice-wrap" className="wrap" style={{ overflowX: "hidden" }}>
      <iframe aria-label="Hero background video of taffy" data-src="//play.vidyard.com/9vUaEyfLLaEGaAqVGihCHs/type/background?preview=1" scrolling="no" frameBorder="0" allowtransparency="false" allowFullScreen="true" src="//play.vidyard.com/9vUaEyfLLaEGaAqVGihCHs/type/background?preview=1" className="vyLoad"></iframe>

        <div className="navbar-offset"></div>
        {/* <!-- Section: Main header --> */}
        <section className="main-hero main-section">
          <div className="main-hero-top">
            <h1 className="main-hero-header">
            Trust-first, digital identity validation.
            </h1>
          </div>
          <div id="lottie" className="main-hero-center main-hero-lottie">
            <svg
              style={{ width: "100%", height: "100%" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 580 680"
              width="580"
              height="680"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <clipPath id="__lottie_element_2">
                  <rect width="580" height="680" x="0" y="0"></rect>
                </clipPath>
                <image xlinkHref="/images/img_0.webp"></image>
                <image xlinkHref="/images/splash/hero_lottie/images/img_1.webp"></image>
                <image xlinkHref="/images/img_0.webp"></image>
                <image xlinkHref="/images/img_0.webp"></image>
                <image xlinkHref="/images/img_0.webp"></image>
              </defs>
              <g clipPath="url(#__lottie_element_2)">
                <g
                  className="png"
                  transform="matrix(0.5199999809265137,0,0,0.5199999809265137,-57,6.3800048828125)"
                  opacity="1"
                  style={{ display: "block" }}
                >
                  <image
                    width="1300px"
                    height="1387px"
                    preserveAspectRatio="xMidYMid slice"
                    xlinkHref="/images/img_4.webp"
                  ></image>
                </g>
                <g
                  className="png"
                  transform="matrix(0.5199999809265137,0,0,0.5199999809265137,33.39500427246094,51.295989990234375)"
                  opacity="1"
                  style={{ display: "block" }}
                >
                  <image
                    width="595px"
                    height="1100px"
                    preserveAspectRatio="xMidYMid slice"
                    xlinkHref="/images/img_0.webp"
                  ></image>
                </g>
              </g>
            </svg>
          </div>
          <div className="main-hero-bottom">
            <div className="main-button-wrapper main-get-app-button">
              <a className="button" href="https://app.albrt.co/download">
                Download app
              </a>
            </div>
            <div className="main-button-wrapper main-sign-up-button">
              <button onClick={openModal} className="button">
                Get started
              </button>
            </div>
            <div className="main-button-wrapper" style={{ display: "block" }}>
              <button onClick={openModal} className="button">
                Get started
              </button>
            </div>
          </div>
          <div className="main-disclaimer">
            Albert is not a bank. Banking services provided by Sutton Bank,
            Member FDIC.
          </div>
        </section>

        <div className="main-container">
          {/* <!-- Section: Banking --> */}
          <section className="main-section">
            <a href="/cash/" className="round-card reveal-on card-hover">
              <div className="round-card-inner reveal-delay">
                <div className="round-card-content">
                  <h2>Banking</h2>
                  <p>
                    Get paid early. Advance up to $250. No minimums. No
                    overdrafts.
                  </p>
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
            </a>
          </section>

          {/* <!-- Section: Saving --> */}
          <section className="main-section flex">
            <div className="round-card yellow-gradient square desktop-only reveal-on">
              <div className="round-card-inner saving reveal-delay">
                <div className="round-card-content">
                  <picture className="center-margin">
                    <source
                      srcSet="/images/img_home_saving.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="/images/img_home_saving.webp"
                      type="image/webp"
                    />
                    <img
                      className="splash-app-feature img-scale"
                      src="/images/img_home_saving.webp"
                      alt=""
                    />
                  </picture>
                </div>
              </div>
            </div>
            <a
              href="/saving/"
              className="round-card yellow square reveal-on card-hover"
            >
              <div className="round-card-inner saving-m reveal-delay">
                <div className="mobile-only text-center">
                  <picture className="center-margin">
                    <source
                      srcSet="/images/img_home_saving.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="/images/img_home_saving.webp"
                      type="image/webp"
                    />
                    <img
                      className="splash-app-feature img-scale"
                      src="/images/img_home_saving.webp"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="round-card-content bottom-p">
                  <h2>Saving</h2>
                  <p>
                    Automatic saving based on your income, spending, and bills.
                  </p>
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

          {/* <!-- Section: Investing --> */}
          <section className="main-section">
            <a
              href="/investing/"
              className="round-card green reveal-on card-hover"
            >
              <div className="round-card-inner reveal-delay">
                <div className="round-card-content">
                  <h2>Investing</h2>
                  <p>Start building your portfolio with&nbsp;just&nbsp;$1.</p>
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

          {/* <!-- Section: Genius --> */}
          <section className="main-section flex">
            <div className="img-card desktop-only reveal-on">
              <div className="reveal-standard">
                <picture>
                  <source
                    srcSet="/images/img_geniuschatsmall.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="/images/img_geniuschatsmall.webp"
                    type="image/webp"
                  />
                  <img
                    className="img-scale"
                    src="/images/img_geniuschatsmall.webp"
                    alt=""
                  />
                </picture>
              </div>
            </div>
            <a
              href="/genius/"
              className="round-card black square reveal-on card-hover"
            >
              <div className="round-card-inner genius reveal-delay">
                <div className="round-card-content">
                  <div className="mobile-only text-center">
                    <picture className="center-margin">
                      <source
                        srcSet="/images/img_geniuschatsmall.webp"
                        type="image/webp"
                      />
                      <source
                        srcSet="/images/img_geniuschatsmall.webp"
                        type="image/webp"
                      />
                      <img
                        className="splash-app-feature full img-scale"
                        src="/images/img_geniuschatsmall.webp"
                        alt=""
                      />
                    </picture>
                    <div className="spacer-x-small"></div>
                  </div>
                  <div className="round-card-gold-gradient-text bottom-p">
                    <h2>Advice from real people</h2>
                    <p>Ask our Geniuses anything money.</p>
                  </div>
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
                  <h2>Budgeting</h2>
                  <p>Track bills and spending. Uncover hidden savings.</p>
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
                        Albert uses advanced security features to protect
                        millions of people.
                      </p>
                    </div>
                  </div>
                  <div className="col-3-full-small">
                    <div className="serious-security-item">
                      <h4>
                        FDIC <span>insured</span>
                      </h4>
                      <p>
                        Albert Cash and Albert Savings are
                        <a href="/" target="_blank">
                          FDIC-insured
                        </a>
                        through our partner banks.
                      </p>
                    </div>
                  </div>
                  <div className="col-3-full-small">
                    <div className="serious-security-item">
                      <h4>
                        SIPC <span>protected</span>
                      </h4>
                      <p>
                        Albert Investing securities are
                        <a href="/" target="_blank">
                          SIPC-protected
                        </a>
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
                We’ve helped members save and invest over $1&nbsp;billion.
              </h2>
              <div className="spacer-small"></div>
              <div className="main-button-wrapper main-get-app-button">
                <a className="button" href="https://app.albrt.co/download">
                  Download app
                </a>
              </div>
              <div className="main-button-wrapper main-sign-up-button">
                <button onClick={openModal} className="button">
                  Get started
                </button>
              </div>
              <div className="main-button-wrapper" style={{ display: "block" }}>
                <button onClick={openModal} className="button">
                  Get started
                </button>
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
      <footer>
        <div className="content-full text-left">
          <a href="/">
            <img
              className="logo"
              src="https://cdn.albert.com/static/img/splash/splash-2020-11/brand/albert-logo-mark.svg?v=d7b7ddce7e8aedd935574aa4e2a1b5964d6d0596"
              alt="Albert"
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
          <br />
          <a href="mailto:hello@example.com" target="_blank">
            example@example.com
          </a>
          <div className="social-icons">
            <a
              style={{ marginRight: "5px" }}
              href="/"
              target="_blank"
              rel="noopener"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              style={{ marginRight: "5px" }}
              href="/"
              target="_blank"
              rel="noopener"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              style={{ marginRight: "5px" }}
              href="/"
              target="_blank"
              rel="noopener"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="col-4">
          <span className="bold">Support</span>
          <br />
          <a href="/" target="_blank" rel="noopener">
            Help
          </a>
          <br />
          <a href="mailto:hello@example.com" target="_blank">
            example@example.com
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
          <span className="bold">App</span>
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

        <div className="clear spacer-medium-large"></div>

        <div className="spacer-small"></div>

        <a href="/">
          <span className="disclosures-header">
            View important investing disclosures{" "}
            <span className="forward-icon">➜</span>
          </span>
        </a>

        <p className="disclosures">
          <b>
            Albert is not a bank. Banking services provided by Sutton Bank,
            Member FDIC. Albert Savings accounts are held for your benefit at
            FDIC-insured banks, including Coastal Community Bank, Axos Bank, and
            Wells Fargo, N.A.
          </b>
          The Albert Mastercard® debit card is issued by Sutton Bank, Member
          FDIC, pursuant to a license by Mastercard International Incorporated.
          Mastercard and the circles design are registered trademarks of
          Mastercard International Incorporated. Early access to direct deposit
          funds depends on the timing of the payer's submission of deposits. We
          generally post such deposits to Albert Cash accounts on the day they
          are received which may be up to 2 days earlier than the payer's
          scheduled payment date. To be eligible for a direct deposit bonus, you
          need to receive a qualifying direct deposit and meet the spend
          requirements. Cash back terms apply. See app for details. Savings
          bonus may vary. Download to see if you qualify for Albert Instant.
          Repay the advance with your next paycheck. Fees may apply. When you
          join Albert, you’ll set up an Albert Cash account and a 30-day trial
          for Albert Genius as part of the sign-up process. If you cancel within
          30 days of signing up, you will not be charged for your subscription.
          Your subscription will auto-renew until canceled. Even if you cancel,
          you can continue to access Albert Cash and Instant. If you cancel, you
          will lose certain benefits associated with your Genius subscription,
          such as Investing, access to Albert’s financial experts, free
          in-network ATM withdrawals, and more.
        </p>

        <p className="disclosures">
          All investments involve risk and the past performance does not
          guarantee future returns. Consider the investment objectives, risks,
          fees, and expenses of a fund before investing. Online trading has
          risks associated with system response times market conditions and
          other factors. Services offered through our mobile application are
          offered only in jurisdictions where it is legal to do so and we
          reserve the right to limit the availability of services to any persons
          or jurisdictions in our sole discretion. See our Terms of Use for more
          information. Albert Investments, LLC is an SEC Registered Investment
          Advisor. Investment advisory services are only offered to clients
          where Albert and its representatives are properly licensed or exempt
          from licensure.
        </p>

        <p className="disclosures">
          Securities products and services offered to self-directed investors
          through Albert Securities, LLC Member{" "}
          <u>
            <a href="https://www.finra.org/">FINRA</a>
          </u>{" "}
          /{" "}
          <u>
            <a href="https://www.sipc.org/">SIPC</a>
          </u>
          . Albert Securities, LLC, Albert Investments, LLC and Albert
          Corporation are separate but affiliated companies. For more
          information about Albert Securities, LLC, see{" "}
          <u>
            <a href="https://brokercheck.finra.org/" target="_blank">
              FINRA Broker Check
            </a>
          </u>
          . Securities products are not FDIC insured or bank guaranteed, and may
          lose value.
        </p>

        <p className="disclosures">
          All corporate logos and trademarks are for illustrative purposes only
          and are not a recommendation, an offer to sell, or a solicitation of
          an offer to buy any security. Trademarks and logos are the property of
          their respective owners and do not represent endorsements of any kind.
          Examples, logos and/or pictures are for illustrative purposes only and
          are not representative of real customers or investment
          recommendations.
        </p>

        <p className="disclosures">Copyright © 2022, Albert Corporation</p>
      </footer>

      {/* // <!-- Mobile smart banner ("Get the app") --> */}
      <div className="smart-banner-wrapper" id="smart-banner">
        <a className="smart-banner" href="https://app.albrt.co/download">
          <div className="flex">
            <div className="smart-banner-text">
              <p className="smart-banner-text-header">Albert</p>
              <p className="disclosures">Bank. Save. Invest.</p>
            </div>
          </div>
          <div className="smart-banner-button">
            <div className="button">Get the app</div>
          </div>
        </a>
      </div>
    </>
  );
}

export default App;
