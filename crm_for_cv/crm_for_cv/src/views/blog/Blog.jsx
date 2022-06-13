import React, { Component, lazy } from "react";
import { Link } from "react-router-dom";
import { data } from "../../data";
import { ReactComponent as IconChevronRight } from "bootstrap-icons/icons/chevron-right.svg";
const Banner = lazy(() => import("../../components/carousel/Banner"));
const CardList = lazy(() => import("../../components/blog/CardList"));
const Widgets = lazy(() => import("../../components/blog/Widgets"));

class BlogView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container my-12">
        {/* <Banner
          className="mb-3"
          id="carouselBlogBanner"
          data={data.blogBanner}
        /> */}

        <div className="row mb-6">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col-auto d-none d-lg-block">
              <img src="./../images/blog/ctc.jpg" alt="..." />
              </div>
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                 City
                </strong>
                <h4 className="mb-0">Faisalabad</h4>
                <div className="mb-1 text-muted small"></div>
                <Link to="/account/notification" className="stretched-link btn btn-sm btn-primary" style={{marginTop:10}}>
                  Get Bundles
                  <IconChevronRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
           
              <div className="col-auto d-none d-lg-block">
                <img src="./../images/blog/lhr2.jpg" alt="..." />
              </div>
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                  City
                </strong>
                <h4 className="mb-0">Lahore</h4>
                <div className="mb-1 text-muted small"></div>
              
                <Link to="/" className="stretched-link btn btn-sm btn-primary" style={{marginTop:10}}>
                 Get Bundles
                  <IconChevronRight />
                </Link>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    );
  }
}

export default BlogView;
