import { Container, Icon } from "@mui/material";
import React, { useContext, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./UserProfile.css";
import { AuthContext } from "../../store/FirebaseContext";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

function UserProfile() {
  const { user, userDetails } = useContext(AuthContext);
  const [viewProfile, setViewProfile] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [account, setAccount] = useState(true);
  return (
    <div className="pMain">
      {account && (
        <Container
          className="mainContainer"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
          }}
          maxWidth="xs"
        >
          <div className="up">
            <div className="dp">
              <img
                src="https://funnyness.com/sites/default/files/images/i/12-2015/2-dog-funny-animals.jpg"
                alt=""
              />
            </div>
            <p
              onClick={() => {
                setViewProfile(true);
                setAccount(false);
              }}
            >
              View Profile
            </p>
            <h2>{userDetails.username}</h2>
            <div className="line" />
          </div>

          <div className="down">
            <div className="options">
              <div className="leftIcon">
                <ManageAccountsIcon fontSize="large" color="secondary" />
              </div>
              <div className="centerPart">
                <span className="optionText">Manage Account</span>
              </div>
              <div className="RightArrow">
                <ArrowForwardIosRoundedIcon
                  fontSize="medium"
                  color="secondary"
                />
              </div>
            </div>
            <div className="options">
              <div className="leftIcon">
                <FormatListBulletedRoundedIcon
                  fontSize="large"
                  color="secondary"
                />
              </div>
              <div className="centerPart">
                <span className="optionText">Things ToDo</span>
              </div>
              <div className="RightArrow">
                <ArrowForwardIosRoundedIcon
                  fontSize="medium"
                  color="secondary"
                />
              </div>
            </div>
            <div className="options">
              <div className="leftIcon">
                <EventNoteRoundedIcon fontSize="large" color="secondary" />
              </div>
              <div className="centerPart">
                <span className="optionText">Events</span>
              </div>
              <div className="RightArrow">
                <ArrowForwardIosRoundedIcon
                  fontSize="medium"
                  color="secondary"
                />
              </div>
            </div>
          </div>
        </Container>
      )}
      {viewProfile && (
        <Container
          className="mainContainer"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
          }}
          maxWidth="xs"
        >
          <div className="viewProfile">
            <div className="backArrow">
              <ArrowBackRoundedIcon
                fontSize="large"
                color="secondary"
                onClick={() => {
                  setViewProfile(false);
                  setAccount(true);
                }}
              />
            </div>
            <div className="upper">
              <div className="dp">
                <img
                  src="https://funnyness.com/sites/default/files/images/i/12-2015/2-dog-funny-animals.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="lower">
              <div className="field">
                <div className="leftText">
                  <span className="optionText">Name</span>
                </div>
                <div className="collin">
                  <span className="optionText">:</span>
                </div>
                <div className="dbResult">
                  <span className="optionText">{userDetails.username}</span>
                </div>
              </div>
              <div className="field">
                <div className="leftText">
                  <span className="optionText">School</span>
                </div>
                <div className="collin">
                  <span className="optionText">:</span>
                </div>
                <div className="dbResult">
                  <span className="optionText">{userDetails.school}</span>
                </div>
              </div>
              <div className="field">
                <div className="leftText">
                  <span className="optionText">Course</span>
                </div>
                <div className="collin">
                  <span className="optionText">:</span>
                </div>
                <div className="dbResult">
                  <span className="optionText">{userDetails.course}</span>
                </div>
              </div>
              <div className="field">
                <div className="leftText">
                  <span className="optionText">Division</span>
                </div>
                <div className="collin">
                  <span className="optionText">:</span>
                </div>
                <div className="dbResult">
                  <span className="optionText">{userDetails.division}</span>
                </div>
              </div>
              <div className="field">
                <div className="leftText">
                  <span className="optionText">Email</span>
                </div>
                <div className="collin">
                  <span className="optionText">:</span>
                </div>
                <div className="dbResult">
                  <span className="optionText">{userDetails.email}</span>
                </div>
              </div>
              <div className="field">
                <div className="leftText">
                  <span className="optionText">Phone</span>
                </div>
                <div className="collin">
                  <span className="optionText">:</span>
                </div>
                <div className="dbResult">
                  <span className="optionText">
                    {userDetails.phone ? userDetails.phone : "not added"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
      <NavBar />
    </div>
  );
}

export default UserProfile;
