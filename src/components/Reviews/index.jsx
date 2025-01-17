/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviewsdata from "../../data/reviews.json";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      !this.props.bigTitle && (
        <div className="navs mt-30">
          <span className="prev" onClick={() => this.slider.slickPrev()}>
            <i className="fas fa-long-arrow-alt-left"></i>
          </span>
          <span className="next" onClick={() => this.slider.slickNext()}>
            <i className="fas fa-long-arrow-alt-right"></i>
          </span>
        </div>
      )
    );
  };
  render() {
    return (
      <>
        <section
          className={`testimonials grid section-padding ${
            this.props.withBg ? "bg-img parallaxie" : ""
          }`}
          style={{
            backgroundImage: this.props.withBg
              ? `url(/assets/img/001.jpg)`
              : "none",
          }}
          data-overlay-dark={this.props.withBg ? 9 : null}
        >
          <div className="">
            {!this.props.bigTitle && (
              <div className="section-head text-center">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-8 col-sm-10">
                    
                    <h4 className="playfont wow flipInX mt-10" data-wow-delay=".3s">
                      What People Says?
                    </h4>
                  </div>
                </div>
              </div>
            )}

            <div className="row">
              <div className="col-lg-12">
                <Slider
                  className="testim"
                  {...{
                    ref: (c) => (this.slider = c),
                    dots: false,
                    arrows: true,
                    autoplay: true,
                    rows: 1,
                    slidesToScroll: 2,
                    slidesToShow: 2,
                    responsive: [
                      {
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: 2,
                        },
                      },
                      {
                        breakpoint: 767,
                        settings: {
                          slidesToShow: 2,
                        },
                      },
                      {
                        breakpoint: 480,
                        settings: {
                          slidesToShow: 1,
                        },
                      },
                    ],
                  }}
                >
                  {reviewsdata.map((item) => (
                    <div
                      className="item wow fadeInUp"
                      data-wow-delay=".3s"
                      key={item.id}
                    >
                      <span className="quote-icon">
                        <img src="/assets/img/clients/quote.svg" alt="" />
                      </span>
                      <div className="cont">
                        <p className="">&quot;{item.content}&quot;</p>
                      </div>
                      <div className="info">
                        <div className="author">
                          <img src={item.image} alt="" />
                        </div>
                        <h6>
                          {item.username}
                        </h6>
                      </div>
                    </div>
                  ))}
                </Slider>
                {this.renderArrows()}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Reviews;
