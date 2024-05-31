import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import axios from "axios";

class Team1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loadedImages: 0,
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    axios
      .get("https://1smtg.com:220/getAllUsers/msjmortgage.com/mlo/0")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  handleImageLoad = () => {
    this.setState((prevState) => ({
      loadedImages: prevState.loadedImages + 1,
    }));
  };

  render() {
    const { users, loadedImages } = this.state;

    return (
      <section className="team section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="tit">
                <h3 className="playfont wow flipInX" data-wow-delay=".5s">
                  Our Team
                </h3>
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  Dream enablers, our mortgage officers turn keys into dreams.
                  Navigating mortgages with expertise, we unlock your path to
                  homeownership.
                </p>
                <div className="navs mt-20 wow fadeInUp" data-wow-delay=".3s">
                  <span
                    className="prev"
                    onClick={() => this.slider.slickPrev()}
                  >
                    <i className="fas fa-long-arrow-alt-left"></i>
                  </span>
                  <span
                    className="next"
                    onClick={() => this.slider.slickNext()}
                  >
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                  <Link href="/team">
                    <a className="btncru mt-20">
                      <span>Our Team</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <Slider
                className="team-container"
                ref={(c) => (this.slider = c)}
                slidesToShow={3}
                slidesToScroll={1}
                arrows={true}
                dots={false}
                autoplay={true}
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
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
                ]}
              >
                {users.map((user) => (
                  <div
                    className="item wow fadeInUp"
                    data-wow-delay=".3s"
                    key={user.id}
                  >
                    <Link href={`/profile/${encodeURIComponent(user.id)}`}>
                      <a>
                        <div className="img wow imago">
                          <img
                            className="home-team"
                            src={`https://1smtg.com/picture.php?name=${user.picture}`}
                            alt="member"
                            onLoad={this.handleImageLoad}
                          />
                          <div className="social">
                            <a href={user.facebook}>
                              <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href={user.twitter}>
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a href={user.instagram}>
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                        <div className="info">
                          <h5>{user.name}</h5>
                          <span>{user.title}</span>
                          <span>NMLS#: {user.nmls_id}</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
              </Slider>
             
            </div>
          </div>
        </div>
        <div
          className="dots-half bg-img bg-repeat"
          style={{ backgroundImage: "url(/assets/img/dots.png)" }}
        ></div>
      </section>
    );
  }
}

export default Team1;
