import React from 'react';

const TeamMember = ({ name, title, imageUrl, socialLinks }) => {
  const pictureStyle = {
    position: 'relative',
    display: 'inline-block',
    marginBottom: '50px',
  };

  const imageStyle = {
    width: '130px',
    height: '130px',
    borderRadius: '50%',
  };

  const pictureBeforeStyle = {
    content: '""',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: '#1369ce',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '-1',
    opacity: '0.9',
    transition: 'all 0.3s linear 0s',
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="our-team">
        <div className="picture" style={pictureStyle}>
          <div style={pictureBeforeStyle}></div>
          <img className="img-fluid" src={imageUrl} alt={`${name} Avatar`} style={imageStyle} />
        </div>
        <div className="team-content">
          <h3 className="name">{name}</h3>
          <h4 className="title">{title}</h4>
        </div>
        <ul className="social">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} className={`fa ${link.icon}`} aria-hidden="true"></a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamMember;
