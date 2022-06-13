import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
import "../App.min.css";

// import { link45, file, check2all } from "../npm/icon";
import { data } from "../data";
import { ReactComponent as IconLaptop } from "bootstrap-icons/icons/laptop.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconTv } from "bootstrap-icons/icons/tv.svg";
import { ReactComponent as IconDisplay } from "bootstrap-icons/icons/display.svg";
import { ReactComponent as IconHdd } from "bootstrap-icons/icons/hdd.svg";
import { ReactComponent as IconUpcScan } from "bootstrap-icons/icons/upc-scan.svg";
import { ReactComponent as IconTools } from "bootstrap-icons/icons/tools.svg";
import AboutImg1 from "../assets/about-img3.png"

const Support = lazy(() => import("../components/Support"));

const Banner = lazy(() => import("../components/carousel/Banner"));
const Carousel = lazy(() => import("../components/carousel/Carousel"));
const CardIcon = lazy(() => import("../components/card/CardIcon"));
const CardLogin = lazy(() => import("../components/card/CardLogin"));
const CardImage = lazy(() => import("../components/card/CardImage"));
const CardDealsOfTheDay = lazy(() =>
  import("../components/card/CardDealsOfTheDay")
);

class HomeView extends Component {
  components = {
    IconLaptop: IconLaptop,
    IconHeadset: IconHeadset,
    IconPhone: IconPhone,
    IconTv: IconTv,
    IconDisplay: IconDisplay,
    IconHdd: IconHdd,
    IconUpcScan: IconUpcScan,
    IconTools: IconTools,
  };

  render() {
    const iconProducts = data.iconProducts;
    const rows = [...Array(Math.ceil(iconProducts.length / 4))];
    // chunk the products into the array of rows
    const productRows = rows.map((row, idx) =>
      iconProducts.slice(idx * 4, idx * 4 + 4)
    );
    // map the rows as div.row
    const carouselContent = productRows.map((row, idx) => (
      <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
        <div className="row g-3">
          {row.map((product, idx) => {
            const ProductImage = this.components[product.img];
            return (
              <div key={idx} className="col-lg-4">
                <CardIcon
                  title={product.title}
                  text={product.text}
                  tips={product.tips}
                  to={product.to}
                >
                  <ProductImage className={product.cssClass} />
                </CardIcon>
              </div>
            );
          })}
        </div>
      </div>
    ));

    return (
      <React.Fragment>
        <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />
        <div className="container-fluid bg-light mb-3">
          <div className="row g-3">
            <div className="col-md-12">
              <Carousel id="elect-product-category" className="mb-3">
                {carouselContent}
              </Carousel>
              <Support />
            </div>
            <div className="col-md-3">
              {/* <CardLogin className="mb-3" /> */}
              {/* <CardImage src="../../images/banner/Watches.webp" to="promo" /> */}
            </div>
          </div>
        </div>
        {/* <div className="container-fluid bg-light mb-3">
          <div className="row">
            <div className="col-md-12">
              <CardDealsOfTheDay
                endDate={Date.now() + 1000 * 60 * 60 * 14}
                title="Deals of the Day"
                to="/"
              >
                <Carousel id="elect-product-category1">
                  {carouselContent}
                </Carousel>
              </CardDealsOfTheDay>
            </div>
          </div>
        </div> */}

        <div className=" bg-gradient p-3 text-center mb-3" style={{backgroundColor:'#212529'}}>
          <h4 className="m-0" style={{color:'#fff'}}>Get Connected Stay Connected</h4>
        </div>






{/*        
       <div className="about-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={AboutImg1} alt="About" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">About Us</span>
                                <h2>SYMBOL OF QUALITY WORK</h2>
                                <p>With 20+ experts of various technologies, we use the best industry standards to cater to different business interests, needs, and challenges.</p>
                                <p>Our <b>web</b> gurus equipped with agile development expertise ensure timely deliverables with highest quality standards.</p>
                                <p>We offer secure and reliable <b>mobile</b> SaaS and BaaS solutions for corporates using cross-platform technologies.</p>

                                <ul className="funfacts-list">
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-menu-1"></i>
                                            <h3>10</h3>
                                            <p>Completed projects</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-web-settings"></i>
                                            <h3>1000</h3>
                                            <p>Working hours were spent</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-conversation"></i>
                                            <h3>20</h3>
                                            <p>Expert team members</p>
                                        </div>
                                    </li>
                                </ul>

                                <Link to="/about-us-1" className="default-btn">
                                    More About Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}








       





        
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Link to="/" className="text-decoration-none">
                <img
                  src="https://nayatel.com/wp-content/uploads/2020/07/nayatel-home-package.jpg"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">UNLIMITED DOWNLOADS</div>
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/checkout" className="text-decoration-none">
                <img
                  src="https://nayatel.com/wp-content/uploads/2020/07/nayatel-corporate-package.jpg"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">STATIC IP PACKAGES</div>
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/" className="text-decoration-none">
                <img
                  src="https://nayatel.com/wp-content/uploads/2020/07/nayatel-products-services.jpg"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">VALUE ADDED SERVICES</div>
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/" className="text-decoration-none">
                <img
                  src="https://nayatel.com/wp-content/uploads/2020/07/nayatel-payment.jpg"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">PAY ONLINE</div>
              </Link>
              
            </div>
          
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeView;
