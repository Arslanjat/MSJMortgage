import React, { useEffect, useState } from "react";
import axios from "axios";
import Team from "../../data/team.json";
import Link from "next/link";

const MloDetails = () => {
  const [activeFilter, setActiveFilter] = useState("mlos");
  const [searchQuery, setSearchQuery] = useState("");
  const [originalPortfolio, setOriginalPortfolio] = useState([]);
  const [filteredPortfolio, setFilteredPortfolio] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (activeFilter === "mlos") {
          const response = await axios.get(
            "https://1smtg.com:220/getAllUsers/msjmortgage.com/mlo/0"
          );
          setOriginalPortfolio(response.data);
          setFilteredPortfolio(response.data);
        } else {
          // Fetch user details from JSON file when "Support" filter is selected
          fetchUserDetailsFromJson();
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [activeFilter]);

  useEffect(() => {
    const handleSearch = () => {
      const filteredSearch = originalPortfolio.filter((item) => {
        const lowerCaseName = item.name ? item.name.toLowerCase() : "";
        const lowerCaseNmls = item.nmls_id ? item.nmls_id.toLowerCase() : "";
        const lowerCaseTitle = item.title ? item.title.toLowerCase() : "";

        return (
          lowerCaseName.includes(searchQuery.toLowerCase()) ||
          lowerCaseNmls.includes(searchQuery.toLowerCase()) ||
          lowerCaseTitle.includes(searchQuery.toLowerCase())
        );
      });

      setFilteredPortfolio(filteredSearch);
    };

    handleSearch();
  }, [searchQuery, originalPortfolio]);

  const handleFilterChange = async (filter) => {
    setActiveFilter(filter);
    setSearchQuery("");
  };

  const fetchUserDetailsFromJson = () => {
    // Simulate fetching user details from JSON file
    setOriginalPortfolio(Team.team); // Assuming Team.team contains the user details from the JSON file
    setFilteredPortfolio(Team.team);
  };

  const fetchUserDetails = async (id) => {
    try {
      const response = await axios.get(
        `https://1smtg.com:220/getUserById/${id}`
      );
      setSelectedUser(response.data[0]);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleUserSelect = (id) => {
    fetchUserDetails(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      if (offset > 500) {
        // Change this value as needed
        setTimeout(() => {
          setIsFilterVisible(true);
        }, 10); // 2 seconds delay
      } else {
        setIsFilterVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="portfolio section-padding">
      <div className={` ${isFilterVisible ? "sticky-filter" : ""}`}>
        <div
          className="filtering col-sm-12 fadeInUp"
          data-wow-delay=".3s"
          style={{ backgroundImage: "url(/assets/img/line-pattern1.png)" }}
        >
          <div className="row">
            <div className="filter text-center bg-img bg-repeat col-sm-10">
              <span
                onClick={() => handleFilterChange("mlos")}
                className={activeFilter === "mlos" ? "active" : ""}
              >
                MLO&lsquo;s
              </span>
              <span
                onClick={() => handleFilterChange("support")}
                className={activeFilter === "support" ? "active" : ""}
              >
                Support
              </span>
            </div>
            <div className="col-sm-2">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="row">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              className={`items ${item.filterClass} col-sm-3`}
              onClick={() => handleUserSelect(item.id)}
            >
              <a href={`/profile/${encodeURIComponent(item.id)}`}>
                <div className="card mt-10">
                  {item.picture ? (
                    <img
                      src={`https://1smtg.com/picture.php?name=${item.picture}`}
                      className="our-team-page"
                      alt="member"
                      loading="lazy"
                    />
                  ) : (
                    <Link href={`/profile/${encodeURIComponent(item.url)}`}>
                        <img
                          src={item.image}
                          className="our-team-page"
                          alt="member"
                          loading="lazy"
                        />
                    </Link>
                  )}

                  <div className="card-body">
                    <h6>{item.name}</h6>
                    <p className="card-text">{item.title}</p>

                    <p className="card-text">{item.cel}</p>

                    {activeFilter === "mlos" && (
                      <>
                        <p className="card-text">NMLS#: {item.nmls_id}</p>
                        <p className="card-text">Cell: {item.phone}</p>
                        <p className="card-text">State: {item.state}</p>
                      </>
                    )}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {selectedUser && (
        <div>
          <h2>User Details</h2>
          <p>User Name: {selectedUser.name}</p>
          <p>User Title: {selectedUser.title}</p>
          <p>Email: {selectedUser.cell}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </section>
  );
};

export default MloDetails;
