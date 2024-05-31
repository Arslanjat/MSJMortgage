import React from 'react';
import portfolio1Data from "../../data/team.json";
import initIsotope from "../../common/initIsotope";
import Link from 'next/link';

const Portfolio1 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);

  return (
    <>
    
      <section className="portfolio section-padding">
        <div className="container-fluid">
          <div
            className="filtering text-center col-sm-12 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div
              className="filter bg-img bg-repeat"
              style={{ backgroundImage: "url(/assets/img/line-pattern1.png)" }}
            >
              <span data-filter="*" className="active">
                All
              </span>
              {portfolio1Data.filtersName.map((filter) => (
                <span data-filter={filter.filterClass} key={filter.id}>
                  {filter.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="twisty gallery">
      <div className="row">
        {portfolio1Data.portfolio.map((item) => (
          <div
            key={item.id}
            className={`items ${item.filterClass} col-sm-3`}
            data-wow-delay=".3s"
          >
            {/* Create a link to the profile page with the person's name as the dynamic parameter */}
            <Link href={`/profile/${encodeURIComponent(item.name)}`}>
              <a>
                    <div className="card mt-10">
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt="member"
                      />
                      <div className="card-body">
                        <h6>{item.name}</h6>
                        <p className="card-text">{item.title}</p>
                        <p className="card-text">{item.nmls}</p>
                        <p className="card-text">{item.cell}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio1;
