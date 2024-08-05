import React from "react";
import "../footer/style.css";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <>
      <div className="all_footer">
        <div className="container_footer">
          <div className="right_part">
            <h2>Quick Link</h2>
            <table className="quick">
              <tbody>
                <tr>
                  <td>
                    <ul>
                      <li>
                        <ChevronRightRoundedIcon
                          style={{ fontSize: "20px", color: "#fff" }}
                        />
                        <a href="">Citizens Charter</a>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        {" "}
                        <ChevronRightRoundedIcon
                          style={{ fontSize: "20px", color: "#fff" }}
                        />
                        <a href="">R And D Policies</a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>
                        <ChevronRightRoundedIcon
                          style={{ fontSize: "20px", color: "#fff" }}
                        />
                        <a href="">Mandatory Disclosures</a>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <ChevronRightRoundedIcon
                          style={{ fontSize: "20px", color: "#fff" }}
                        />
                        <a href="">Internship Policy</a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>
                        <ChevronRightRoundedIcon
                          style={{ fontSize: "20px", color: "#fff" }}
                        />
                        <a href="">Right To Information</a>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        {" "}
                        <ChevronRightRoundedIcon
                          style={{ fontSize: "20px", color: "#fff" }}
                        />
                        <a href="">DTE</a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>
                        <ChevronRightRoundedIcon
                          style={{ fontSize: "20px", color: "#fff" }}
                        />
                        <a href="">Staff Contact</a>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        {" "}
                        <ChevronRightRoundedIcon
                          style={{ fontSize: "20px", color: "#fff" }}
                        />
                        <a href="">AICTE</a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>
                        <ChevronRightRoundedIcon
                          style={{ fontSize: "20px", color: "#fff" }}
                        />
                        <a href="">Site Map</a>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        {" "}
                        <ChevronRightRoundedIcon
                          style={{ fontSize: "20px", color: "#fff" }}
                        />
                        <a href="">Shivaji University</a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>
                        <ChevronRightRoundedIcon
                          style={{ fontSize: "20px", color: "#fff" }}
                        />
                        <a href="">Unnat Bharat Abhiyan</a>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        {" "}
                        <ChevronRightRoundedIcon
                          style={{ fontSize: "20px", color: "#fff" }}
                        />
                        <a href="">Recruitment</a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>
                        <ChevronRightRoundedIcon
                          style={{ fontSize: "20px", color: "#fff" }}
                        />
                        <a href="">Policies</a>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        {" "}
                        <ChevronRightRoundedIcon
                          style={{ fontSize: "20px", color: "#fff" }}
                        />
                        <a href="">NIRF</a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>
                        <ChevronRightRoundedIcon
                          style={{ fontSize: "20px", color: "#fff" }}
                        />
                        <a href="">Cyber Policy</a>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        {" "}
                        <ChevronRightRoundedIcon
                          style={{ fontSize: "20px", color: "#fff"}}
                        />
                        <a href="">NSS</a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>
                        <ChevronRightRoundedIcon
                          style={{ fontSize: "20px", color: "#fff" }}
                        />
                        <a href="">Hostel Admission Policy</a>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <ChevronRightRoundedIcon
                          style={{ fontSize: "20px", color: "#fff" }}
                        />
                        <a href="">NCC</a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="left_part">
            <h2>Contact Us</h2>
            <div className="contact">
              <div className="items">
                <div className="icons_box">
                  <LocationOnIcon className="icon" />
                </div>
                <div className="item">
                  <h3>Address</h3>
                  <p>
                    Vidyanagar, Karad, Dist. Satara, Maharashtra (India) -
                    415124
                  </p>
                </div>
              </div>
              <div className="items">
                <div className="icons_box">
                  <LocalPhoneIcon className="icon" />
                </div>
                <div className="item">
                  <h3>Phone</h3>
                  <p>+91-2164- 272414, 8275706613</p>
                </div>
              </div>
              <div className="items">
                <div className="icons_box">
                  <EmailIcon className="icon" />
                </div>
                <div className="item">
                  <h3>Email</h3>
                  <p>principal@gcekarad.ac.in</p>
                </div>
              </div>
            </div>
            <div className="social_media">
              <div className="media_box" style={{ backgroundColor: "#4867AA" }}>
                <FacebookIcon className="icons" />
              </div>
              <div className="media_box" style={{ backgroundColor: "#1DA1F2" }}>
                <TwitterIcon className="icons" />
              </div>
              <div className="media_box" style={{ backgroundColor: "#0274B3" }}>
                <LinkedInIcon className="icons" />
              </div>
              <div className="media_box" style={{ backgroundColor: "#cc2127" }}>
                <PinterestIcon className="icons" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="line"
          style={{ height: "5px", width: "auto", backgroundColor: "red" }}
        ></div>
        <div className="footer">
          <p>&copy; 2024 Designed by Sakshi Kumbhar.</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
