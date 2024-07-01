import React from "react";
import services1Data from "../../data/services1.json";
import Link from "next/link";

const Services1 = () => {
  return (
    <section className="services section-padding bg-gray">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Our Product
              </h4>
            </div>
          </div>
        </div>
        <div
          className="row bord-box bg-img wow fadeInUp"
          data-wow-delay=".3s"
          style={{ backgroundImage: `url(${services1Data.image}` }}
        >
          {services1Data.services.map((item) => (
            <a
              href={item.link}
              className=" col-lg-3 col-md-6 item-bx"
              key={item.id}
            >
              <div className="">
                <h6 className="mb-20">{item.title}</h6>
                <p>{item.content}</p>
                <span className="more mt-20">Read More</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services1;
