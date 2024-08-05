import React, { useState } from "react";
import "../dept_notice_gcek/style.css";
import Civil from "../../assets/images/civil.jpg";
import Mech from "../../assets/images/mech.jpg";
import Elect from "../../assets/images/elect.jpg";
import Entc from "../../assets/images/entc.jpg";
import IT from "../../assets/images/it.jpg";
import mca from "../../assets/images/mca.jpg";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import GCEK from "../../assets/images/GCEK.jpg";
import Libray from "../../assets/images/Libray.jpg";
import Vision from "../../assets/images/vision.png";
import Student from "../../assets/images/student.jpg";
import Gov from "../../assets/images/slider1.jpg";

const notices = [
  "Notice Regarding Leaving Certificate",
  "Call for Walk in Interview for Electrical Engineering Department",
  "AY 2024-25 Branch Change Notice",
  "Branch Change Form",
  "Revised Provisional Results of Summer-2024 B.Tech. Sem-II will be displayed soon.",
  "AY2024-25 Admission Notice for B.Tech Second to Final Year Students",
  "Makeup Summer-2024 Exam Registration for B.Tech.,M.Tech. & MCA Sem-II(Backlog Non NEP), Sem-IV, VI & VIII",
  "Notice Regarding commencement of classes",
  "Call for walk in interview 2024-25",
  "Summer-2024 Gradecard Notice for Final Year B.Tech., M.Tech & MCA Students",
  "Gradecard/LC/CMD No dues application form",
  "Scholarship No Dues form",
  "Results of Summer-2024 for B.Tech.,M.Tech. & MCA (Non-NEP students) are published in student's MIS login.",
  "Summer-2024 NEP-2020 B.Tech, M.Tech, & MCA Sem-II ESE Revaluation Marks",
  "Notice for Photocopy and Revaluation for Summer 2024 B.Tech. M.Tech. & MCA sem-II (NEP-2020)",
  "Last date for revaluation registration in MIS is extended to 18th June 2024 5:00 PM",
  "Notice for Photocopy and Revaluation for Summer 2024 B.Tech. M.Tech. and MCA sem-II (Backlog), Sem-IV, VI & VIII (Non NEP)",
  "Last date for revaluation registration in MIS is extended to 18th June 2024 5:00 PM",
  "Multi-disciplinary Minor and Open Elective selection option form",
  "Notice for NEP-2020 First Year B.Tech. Orientation about MDM & Open Elective Course Buckets Selection",
  "June 1 12:00 PM – 3:00 PM Download Microsoft Teams App to Join the meeting Meeting Link: https://shorturl.at/GWED8",
  "Corrigendum Summer 2024 Exam Notice",
  "Final Timetable of Summer -2024 Exam of B.Tech.,M.Tech. & MCA Semester-II, IV, VI & VIII Students",
  "Revaluation and Photocopy notice of Makeup Winter 2023 Exam for First Year to Final Year B.Tech.,M.Tech. & MCA Students (Non NEP) Click here",
  "Photocopy form",
  "Revaluation registration is extended till 02nd April 2024",
  "Revaluation and Photocopy notice of Makeup Winter 2023 Exam for First Year B.Tech.,M.Tech. & MCA Students (NEP-2020) Click Here",
  "Revaluation form",
  "Photocopy form",
  "Revaluation registration is extended till 02nd April 2024",
  "MahaDBT Notice for Scholarship/Freeship",
  "Notice regarding ABC ID",
  "MahaDBT Notice for EBC/Hostel Allowance/Scholarship/Freeship",
  "SC Postmatrix Scholarship Notice",
  "Revaluation and Photocopy notice of Winter 2023 Exam for First Year to Final Year B.Tech.,M.Tech. & MCA Students",
  "Invictus'24",
  "MahaDBT Notice for Scholarship/Freeship",
  "ADVERTISEMENT FOR ADJUNCT FACULTY Notice",
  '"Nominations - COEK Alumni Association Executive Board Elections till 12 December midnight"',
  "Central Government Scholarship Notice",
  "Scholarship/Freeship Notice for SC, ST, VJNT, OBC and SBC Students",
  "Scholarship/Freeship Notice for ST Students",
  "AY2023-24 Visiting Faculty advertisement for Mathematics department",
  "Postponement of Class test-II and Mid Semester Exam All programs Class Test II (TY, Final Year) and Mid Semester Examination (First Year) is postponed and will be scheduled on 16, 17 and 18 October 2023.",
  "Notice cum Instructions for Boys Hostel",
  "Counselling (SPOT) round for Direct Second Year B.Tech. AY2023-24 Dated 25-09-2023 Google Form",
  "Admission Notice for AY 2023-24 for B.Tech. Second Year",
  "Additional Counselling round for First Year B.Tech. AY2023-24 Dated 15-09-2023 Google Form",
  "Final Time Table Makeup Summer - 2023 Examination for B.Tech / M.Tech / MCA Semester - II",
  "INVITATION APPLICATIONS FOR THE POST OF “Principal,” Government Engineering College Karad Click Here for advertisement Corrigendum (English) Corrigendum (Marathi)",
  "Institute Level Counseling (Spot) Round AY2023-24",
  "NCC Notice to students",
  "Provisional BOYS Hostel Merit list for First Year UG / First Year PG / FYMCA AY2023-24",
  "Revaluation and Photocopy of Answer Book of S-2023 Exam for M.Tech and MCA Sem-II",
  "First Year B.Tech. Sem-I AY2023-24 Time Table",
  "Schedule of First Year B.Tech. Induction Programme",
  "Notice for auction (Terms and Conditions)",
  "Public Grievance System",
  "Circular Regarding Guidelines for Issue of Advance",
  "Improvement in College Rank",
  "Affiliation Certificate-17",
  "Affiliation Certificate-2020-2021",
];

const Dept_notice = () => {
  const [activeTab, setActiveTab] = useState("notices");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    <div className="all_annocement"><div className="container">
        <div className="right">
          <div className="departments">
            <div className="dept">
              <div className="img-container">
                <img src={Civil} alt="Civil Engineering" className="img" />
              </div>
              <h3>Civil Engineering</h3>
            </div>
            <div className="dept">
              <div className="img-container">
                <img src={Mech} alt="Mechanical Engineering" className="img"/>
              </div>
              <h3>Mechanical Engineering</h3>
            </div>
            <div className="dept">
              <div className="img-container">
                <img src={Elect} alt="Electrical Engineering" className="img"/>
              </div>
              <h3>Electrical Engineering</h3>
            </div>
            <div className="dept">
              <div className="img-container">
                <img src={Entc} alt="Electronics & Telecommunication" className="img"/>
              </div>
              <h3>Electronics & Telecommunication</h3>
            </div>
            <div className="dept">
              <div className="img-container">
                <img src={IT} alt="Information Technology" className="img"/>
              </div>
              <h3>Information Technology</h3>
            </div>
            <div className="dept">
              <div className="img-container">
                <img src={mca} alt="MCA" className="img"/>
              </div>
              <h3>MCA</h3>
            </div>
          </div>
        </div>
        <div className="left">
          <div className="categories" style={{marginLeft:"0",fontSize:"13px",fontWeight:"550",opacity:"0.8"}}>
            <ul className="controls">
              {["notices", "procurement"].map((tab) => (
                <li 
                  key={tab}
                  className={`button ${
                    activeTab === tab ? "active" : "noties"
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab === "notices" && (
                    <PublicOutlinedIcon className="notices-icon" />
                  )}
                  {tab === "procurement" && (
                    <InsertPhotoOutlinedIcon className="announcement-icon" />
                  )}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </li>
              ))}
            </ul>
          </div>
          <div className="content-area">
            {activeTab === "notices" && (
              <div className="notices-content">
                {notices.slice(0, 20).map((notice, index) => (
                  <p key={index}>
                    <a href="#">{notice}</a>
                  </p>
                ))}
              </div>
            )}
            {activeTab === "procurement" && (
              <div className="procurement-content">
                {notices.slice(30).map((notice, index) => (
                  <p key={index}>
                    <a href="#">{notice}</a>
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="btn">
            <button>Read More</button>
          </div>
        </div>
      </div></div>
      <div className="grid-container">
        <div className="box">
          <div className="image-container">
            <img src={GCEK} alt="" className="image" />
            <div className="overlay">
              <div className="text">We have the expertise to provide better education.</div>
            </div>
          </div>
          <h3>GCEK</h3>
        </div>
        <div className="box">
          <div className="image-container">
            <img src={Libray} alt="" className="image" />
            <div className="overlay">
              <div className="text">We have the expertise to provide better education.</div>
            </div>
          </div>
          <h3>Libray</h3>
        </div>
        <div className="box">
          <div className="image-container">
            <img src={Vision} alt="" className="image" />
            <div className="overlay">
              <div className="text">We have the expertise to provide better education.</div>
            </div>
          </div>
          <h3>Vision</h3>
        </div>
        <div className="box">
          <div className="image-container">
            <img src={Student} alt="" className="image" />
            <div className="overlay">
              <div className="text">We have the expertise to provide better education.</div>
            </div>
          </div>
          <h3>Student</h3>
        </div>
      </div>
      <div className="video" style={{
      height:"100%",width:"100%",backgroundColor:" rgb(241, 241, 241)"
      }}>
        <img src={Gov} alt="" style={{height:"100%",width:"100%"}}/>
      </div>
    </>
  );
};
export default Dept_notice;
