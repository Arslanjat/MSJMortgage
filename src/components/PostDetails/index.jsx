import React, { useEffect } from "react";
import thumparallaxUp from "../../common/thumparallaxUp";
import { useRouter } from "next/router";
import Blogdetails from "../../data/blogs-details.json";

const PostDetails = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);

  const { id } = router.query;
  const numericId = parseInt(id, 10); // Convert id to number

  const item = Blogdetails.find((item) => item.id === numericId);

  if (!item) {
    return <p>Blog post not found</p>;
  }

  return (
    <section className="blog-pg single section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="title-head">
                <h4>Exploring The Diffrence: Fannie Mae VS Freddie MAC</h4>
                <div className="info"></div>
              </div>
              <div className="img main-img">
        <img
          src="/assets/img/blog/blogback.jpeg"
          alt=""
          className="thumparallax img-fluid" // Adding "img-fluid" class for responsiveness
        />
      </div>
              <div className="content pt-20">
                <div className="">
                  <div className="col-lg-12">
                    <div className="">
                      <h6>{item.h1}</h6>
                      <p>{item.p1}</p>

                      <h6>{item.h2}</h6>
                      <p>{item.p2}</p>

                      <p>{item.p3}</p>
                      <p>{item.p4}</p>
                      <p>{item.p5}</p>
                      <p>{item.p6}</p>
                      <p>{item.p7}</p>
                      <p>{item.p8}</p>
                      <p>{item.p9}</p>
                      <p>{item.p10}</p>
                      <p>{item.p11}</p>
                      <h6>{item.h3}</h6>

                      <p>{item.p12}</p>
                      <p>{item.p13}</p>
                      
                      <p>{item.li1}</p>
                      <p>{item.li2}</p>
                      <p>{item.li3}</p>
                      <p>{item.li4}</p>
                      <p>{item.li5}</p>

                      <h6>{item.h4}</h6>
                      <p>{item.p14}</p>
                      <h6>{item.h15}</h6>
                      <p>{item.p16}</p>
                      <p>{item.p17}</p>
                      <p>{item.p18}</p>
                      <p>{item.p19}</p>
                      <p>{item.p20}</p>
                      <p>{item.p21}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
