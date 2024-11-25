import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/LandingPage.css"; // Ensure the correct path to your CSS file

const Intro = () => {
  const navigate = useNavigate();

  const toLogin = useCallback(() => {
    navigate("/authentication");
  }, [navigate]);

  const toPostPicture = useCallback(() => {
    navigate("/without-signup");
  }, [navigate]);

  return (
    <div className="intro">
      <section className="imageContainer">
        <nav className="safeSnap" >
          <ul>
            <li onClick={toLogin}><i className="bi bi-person-fill mr-2"></i>Login</li>
            <li onClick={toPostPicture}><i className="bi bi-camera mr-2"></i>Let's Post</li>
          </ul>
        </nav>
      </section>
      <div className="content">
        <h3 className="title">Dream Waterloo city</h3>
        <img className="image" loading="lazy" alt="Image 7" src="/image-7@2x.png" />
        <div className="textContainer">
          <p>United Nations Sustainable Development Goals</p>
          <p>Goal 9 - Industry, Innovation And Infrastructure</p>
          <p className="link">Goal 9 | Department of Economic and Social Affairs (un.org)</p>
          <p>Goal 11 - Sustainable cities and communities</p>
          <p className="link">Goal 11 | Department of Economic and Social Affairs (un.org)</p>
          <p>Amruthan Manjula Anandan | Kiranpreet Kaur | Anjena Manjula Anandan</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
