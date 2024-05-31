import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import PageHeader from "../../components/Page-header";
import MainLayout from "../../layouts/main";
import TeamData from "../../data/team.json"; // Import team data from JSON file
import Link from "next/link";

const ProfileDetails = () => {
  const router = useRouter();
  const { name } = router.query;
  const [profile, setProfile] = useState(null);
  const [isSupportProfile, setIsSupportProfile] = useState(true);

  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const response = await axios.get(
          `https://1smtg.com:220/getUser/${name}`
        );
        const userData = response.data[0];
        setProfile(userData);
        setIsSupportProfile(userData.category === "support");
      } catch (error) {
        console.error("Error fetching profile details:", error);
      }
    };

    if (name) {
      fetchProfileDetails();
    }
  }, [name]);

  useEffect(() => {
    const fetchSupportProfileDetails = async () => {
      try {
        const selectedProfile = await TeamData.team.find(
          (item) => item.url.toLowerCase() === name.toLowerCase()
        );

        if (selectedProfile) {
          setProfile(selectedProfile);
        } else {
          console.warn("Profile not found for name:", name);
        }
      } catch (error) {
        console.error("Error fetching profile details:", error);
        // Handle the error, e.g., show a user-friendly message or redirect to an error page
      }
    };

    fetchSupportProfileDetails();
  }, [name]);

  if (!profile) {
    return <div>Profile Details not found</div>;
  }

  return (
    <>
      <PageHeader
        title={`About ${profile.name}`}
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Our Team", url: "/team" },
          { id: 3, name: "Profile Details", url: `/profile/${name}` },
        ]}
      />
      <div className="profile-details mt-10 mb-30">
        <section className="container portfolio section-padding">
          <div className="row">
            <div className="col-sm-3">
              <div className="card mt-10">
                {profile.picture ? (
                  <img
                    src={`https://1smtg.com/picture.php?name=${profile.picture}`}
                    className="card-img-top"
                    alt="member"
                  />
                ) : (
                  <img
                    src={profile.image}
                    className="card-img-top"
                    alt="member"
                    loading=""
                  />
                )}
                <div className="card-body">
                  <h6>{profile.name}</h6>
                  {!isSupportProfile ? (
                    <>
                      <p className="card-text">{profile.title}</p>
                      <p className="card-text">NMLS#: {profile.nmls_id}</p>
                      <p className="card-text">Cell: {profile.phone}</p>
                      <p className="card-text">State: {profile.state}</p>
                    </>
                  ) : (
                    <>
                      <p className="card-text">{profile.title}</p>
                      <p className="card-text">{profile.cel}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col-sm-9 mt-5">

              <h4>{profile.hed}{profile.name}</h4>
              <p>{profile.aboutme}</p>
              <p className="mt-10">{profile.aboutus}</p>
              <p className="mt-10">{profile.emp_des}</p>
              <p className="mt-10">{profile.emp_des1}</p>
              <br />
              {!isSupportProfile && (
                <>
                  <a
                    href={`${profile.link_ecard}`} // Apply Now link with specific name
                    className="team-pro"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Apply Now</span>
                  </a>

                  <a
                    href={`${profile.link_get_quote}`} // Get Quote link with dynamic userId
                    className="team-pro"
                    target="_blank"
                    rel="noreferrer"
                  >
                   <span>Get Quote</span> 
                  </a>
                  
                </>
              )}
               <Link href="/team">
              <a className="team-pro">
                <span>Return</span>
              </a>
            </Link>
              <div className="social-media">
                <a
                  href={`https://wa.me/${profile.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=Subject%20Here&body=Your%20message%20here`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                </a>
                {!isSupportProfile && (
                  <>
                <a
                  href={`https://facebook.com/${profile.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href={`https://twitter.com/${profile.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href={`https://instagram.com/${profile.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                </>
              )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <MainLayout />
    </>
  );
};

export default ProfileDetails;
