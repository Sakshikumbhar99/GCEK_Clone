import React from "react";
import "../header/style.css";
import Nav from "../header/nav/index.jsx";
import ClgLogo from "../../assets/images/clgLogo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonIcon from "@mui/icons-material/Person";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import ViewComfyAltRoundedIcon from "@mui/icons-material/ViewComfyAltRounded";

const Header = () => {
  return (
    <>
      <div className="row1 justify-content-between d-flex">
        <div className="left">
          <ul>
            <li>
              <b>A+</b>
            </li>
            <li>
              <b>A-</b>
            </li>
            <li>
              <InsertDriveFileOutlinedIcon className="icon" />
              Marathi
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <ViewComfyAltRoundedIcon className="icon" />
              Online Pay
            </li>
            <li>
              <InsertDriveFileOutlinedIcon className="icon" />
              MIS
            </li>
            <li>
              <InsertDriveFileOutlinedIcon className="icon" />
              Faculty
            </li>
            <li>
              <InsertDriveFileOutlinedIcon className="icon" />
              Other Login
            </li>
            <li>
              <PersonIcon className="icon" />
              Alumni
            </li>
            <li>
              <PersonIcon className="icon" />
              Moodle
            </li>
            <li>
              <FileDownloadRoundedIcon className="icon" />
              Download
            </li>
            <li>
              <ViewComfyAltRoundedIcon className="icon" />
              Give
            </li>
            <li>
              <ViewComfyAltRoundedIcon className="icon" />
              Innovation
            </li>
            <li>
              <ViewComfyAltRoundedIcon className="icon" />
              CIIS
            </li>
          </ul>
        </div>
      </div>
      <div className="mainbar">
        <div className="row2">
          <div className="left">
            <img src={ClgLogo} alt="clgLogo" />
          </div>
          <div className="right">
            <input
              type="search"
              placeholder="search"
              style={{ padding: "15px" }}
            />
            <div className="content">
              <SearchOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
      <Nav/>
    </>
  );
};
export default Header;
