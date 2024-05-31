/* eslint-disable @next/next/no-img-element */
import React from "react";
import Blog1Data from "../../data/blogs1.json";
import Link from "next/link";
import Image from 'next/image';

const Blogs2 = () => {
  return (
    <section className="blog-grid center bg-gray section-padding">
      <div className="container">
        <div className="row">
          {Blog1Data.slice(0, 2).map((blog, index) => (
            <div className="col-lg-6" key={blog.id}>
              <div
                className="item wow fadeInUp md-mb50"
                data-wow-delay={index == 0 ? ".3s" : index == 1 ? ".1s" : ".5s"}
              >
                <div className="post-img">
                  <div className="img">
                    <Image src={blog.image} alt="member" />
                  </div>
                </div>
                <Link href={"/blog-details/${blog.id}"}>
                <div className="cont">
                  <div className="info">
                    {blog.by}
                    {blog.date}
                  </div>
                  <h5 className="playfont">
                    {blog.title}
                  </h5>
                  <a className="more">
                    <span className="custom-font">Read More</span>
                  </a>
              </div>
                </Link>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs2;
