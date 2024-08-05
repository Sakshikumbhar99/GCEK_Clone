import React, { useState, useRef, useEffect } from "react";
import "../nav/style.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const submenuRef = useRef([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    submenuRef.current.forEach((submenu, index) => {
      if (submenu) {
        submenu.style.maxHeight =
          hoveredIndex === index ? `${submenu.scrollHeight}px` : "0px";
      }
    });
  }, [hoveredIndex]);

  useEffect(() => {
    submenuRef.current.forEach((submenu, index) => {
      if (submenu) {
        submenu.style.maxHeight =
          hoveredIndex === index ? `${submenu.scrollHeight}px` : "0px";
      }
    });
  }, [hoveredIndex]);

  return (
    <>
      <nav className="navbar">
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? (
            <CloseIcon
              className="closeicon"
              style={{
                margin: "5px 0px",
                fontSize: "30px",
                backgroundColor: "navy",
                border: "1px solid #fff",
              }}
            />
          ) : (
            <MenuIcon
              className="openicon"
              style={{
                margin: "5px 0px",
                fontSize: "30px",
                backgroundColor: "navy",
                border: "1px solid #fff",
              }}
            />
          )}
        </div>

        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="/" style={{ color: "#fff" }}>
              Home
            </a>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            About
            <ul className="submenu" ref={(el) => (submenuRef.current[1] = el)}>
              <li>
                <a href="/">History and Journey So Far</a>
              </li>
              <li>
                <a href="/">Vision and Mission</a>
              </li>
              <li>
                <a href="/">Infrastructure</a>
              </li>
              <li>
                <a href="/">Achievements</a>
              </li>
              <li>
                <a href="/">AICTE Apporvals</a>
              </li>
              <li>
                <a href="/">Institute Ranking</a>
              </li>
              <li>
                <a href="/">Location and Map</a>
              </li>
              <li>
                <a href="/">Photo Gallery</a>
              </li>
              <li>
                <a href="/">About Karad</a>
              </li>
              <li>
                <a href="/">Sitemap</a>
              </li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            Administration
            <ul className="submenu" ref={(el) => (submenuRef.current[2] = el)}>
              <li>
                <a href="#">Board of Governance</a>
              </li>
              <li>
                <a href="#">Governance Structure</a>
              </li>
              <li>
                <a href="#">Board Proceeding</a>
              </li>
              <li>
                <a href="#">Chairman's Desk</a>
              </li>
              <li>
                <a href="#">Principal's Desk</a>
              </li>
              <li>
                <a href="#">Deans</a>
              </li>
              <li>
                <a href="#">Statutory Committees</a>
              </li>
              <li>
                <a href="#">Administrative Office</a>
              </li>
              <li>
                <a href="#">Finance Committee</a>
              </li>
              <li>
                <a href="#">Building Works Committee</a>
              </li>
              <li>
                <a href="#">Building Works Proceedings</a>
              </li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            Academics
            <ul className="submenu" ref={(el) => (submenuRef.current[3] = el)}>
              <li>
                <a href="#">Dean Academics</a>
              </li>
              <li>
                <a href="#">Dean Office</a>
              </li>
              <li>
                <a href="#">Academic Council</a>
              </li>
              <li>
                <a href="#">Programmes Officers</a>
              </li>
              <li>
                <a href="#">Admission Procedure</a>
              </li>
              <li>
                <a href="#">Fee Structure</a>
              </li>
              <li>
                <a href="#">Autonomy Rules</a>
              </li>
              <li>
                <a href="#">Academic Calender</a>
              </li>
              <li>
                <a href="#">Curriculum</a>
              </li>
              <li>
                <a href="#">Institute Rankers</a>
              </li>
              <li>
                <a href="#">Scholarships</a>
              </li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            Examinations
            <ul className="submenu" ref={(el) => (submenuRef.current[4] = el)}>
              <li>
                <a href="#">About Examination Cell</a>
              </li>
              <li>
                <a href="#">Examination Committee</a>
              </li>
              <li>
                <a href="#">CoE and Staff</a>
              </li>
              <li>
                <a href="#">Examination Rules</a>
              </li>
              <li>
                <a href="#">Examination Time Table</a>
              </li>
              <li>
                <a href="#">Assessment Flowchart</a>
              </li>
              <li>
                <a href="#">Grade Conversion Formula</a>
              </li>
              <li>
                <a href="#">Exam Forms/Formats</a>
              </li>
              <li>
                <a href="#">Result</a>
              </li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          >
            Departments
            <ul className="submenu" ref={(el) => (submenuRef.current[5] = el)}>
              <li>
                <a href="#">Civil Engineering</a>
              </li>
              <li>
                <a href="#">Mechanical Engineering</a>
              </li>
              <li>
                <a href="#">Electrical Engineering</a>
              </li>
              <li>
                <a href="#">Information Technology</a>
              </li>
              <li>
                <a href="#">Electronics and Telecommunication</a>
              </li>
              <li>
                <a href="#">Basic Sciences and Humanities</a>
              </li>
              <li>
                <a href="#">Master of Computer Applications</a>
              </li>
              <li>
                <a href="#">Applied Mechanics</a>
              </li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={handleMouseLeave}
          >
            Placements
            <ul className="submenu" ref={(el) => (submenuRef.current[6] = el)}>
              <li>
                <a href="#">Placement Cell</a>
              </li>
              <li>
                <a href="#">Placement Training</a>
              </li>
              <li>
                <a href="#">Our Prestigeous Recruiters</a>
              </li>
              <li>
                <a href="#">Placement Statistics</a>
              </li>
              <li>
                <a href="#">Memorandum of Understanding (MOU)</a>
              </li>
              <li>
                <a href="#">Step Into Corporate</a>
              </li>
              <li>
                <a href="#">Value Added Programmes</a>
              </li>
              <li>
                <a href="#">Career Guidance</a>
              </li>
              <li>
                <a href="#">Placement Gallery</a>
              </li>
              <li>
                <a href="#">Industry Institute Interaction Cell</a>
              </li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(7)}
            onMouseLeave={handleMouseLeave}
          >
            Facillites
            <ul className="submenu" ref={(el) => (submenuRef.current[7] = el)}>
              <li>
                <a href="#">Workshop</a>
              </li>
              <li>
                <a href="#">Central Library</a>
              </li>
              <li>
                <a href="#">Hostel</a>
              </li>
              <li>
                <a href="#">Gymkhana</a>
              </li>
              <li>
                <a href="#">Computer Center</a>
              </li>
              <li>
                <a href="#">Data Center</a>
              </li>
              <li>
                <a href="#">Centre of Excellence</a>
              </li>
              <li>
                <a href="#">Gym</a>
              </li>
              <li>
                <a href="#">Canteen</a>
              </li>
              <li>
                <a href="#">Guest House</a>
              </li>
              <li>
                <a href="#">Dispensary</a>
              </li>
              <li>
                <a href="#">Campus Wide Network</a>
              </li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(8)}
            onMouseLeave={handleMouseLeave}
          >
            IQAC
            <ul className="submenu" ref={(el) => (submenuRef.current[8] = el)}>
              <li>
                <a href="#">IQAC Desk</a>
              </li>
              <li>
                <a href="#">IQAC Constitution</a>
              </li>
              <li>
                <a href="#">IQAC Proceedings</a>
              </li>
              <li>
                <a href="#">Goal and Functions</a>
              </li>
              <li>
                <a href="#">AQAR</a>
              </li>
              <li>
                <a href="#">Best Practices</a>
              </li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(9)}
            onMouseLeave={handleMouseLeave}
          >
            Student Corner
            <ul className="submenu" ref={(el) => (submenuRef.current[9] = el)}>
              <li>
                <a href="#">Avishkar</a>
              </li>
              <li>
                <a href="#">Students Clubs</a>
              </li>
              <li>
                <a href="#">Student Verification</a>
              </li>
              <li>
                <a href="#">Grievance Portal</a>
              </li>
              <li>
                <a href="#">Transcripts</a>
              </li>
              <li>
                <a href="#">NSS</a>
              </li>
              <li>
                <a href="#">Gymkhana</a>
              </li>
              <li>
                <a href="#">Alumni Portal</a>
              </li>
              <li>
                <a href="#">Induction Program</a>
              </li>
              <li>
                <a href="#">Skill Development Bureau</a>
              </li>
              <li>
                <a href="#">Graduation Ceremony</a>
              </li>
              <li>
                <a href="#">Student Verification</a>
              </li>
              <li>
                <a href="#">Transcripts</a>
              </li>
              <li>
                <a href="#">TPO Cell</a>
              </li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(10)}
            onMouseLeave={handleMouseLeave}
          >
            Campus
            <ul className="submenu" ref={(el) => (submenuRef.current[10] = el)}>
              <li>
                <a href="#">Hostel</a>
              </li>
              <li>
                <a href="#">Health Center</a>
              </li>
              <li>
                <a href="#">Location Map</a>
              </li>
            </ul>
          </li>
          <li>NAAC</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
