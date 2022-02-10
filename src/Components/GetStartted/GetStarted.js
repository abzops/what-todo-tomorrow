import React, { useContext, useEffect, useState } from "react";
import "./GetStarted.css";
import "./2nd.css";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Container, TextField } from "@mui/material";
import firebase from "firebase/compat/app";
import db from "../../Firebase/Config";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../store/FirebaseContext";
import { auth } from "../../Firebase/Config";
import { onAuthStateChanged } from "firebase/auth";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router";

function GetStarted() {
  const navigate = useNavigate();
  const { setStatus, userDetails, status } = useContext(AuthContext);

  const [uid, setUid] = useState("");
  const [showSchool, setShowSchool] = useState("");
  const [showCourse, setShowCourse] = useState("hide");
  const [showDivision, setShowDivision] = useState("hide");
  const [dot, setDot] = useState("");
  const [showWelcome, setShowWelcome] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [jump, setJump] = useState(true);
  const [classDetails, setClassDetails] = useState();
  const [courseDetails, setCourseDetails] = useState();
  const [divisionDetails, setDivisionDetails] = useState();
  const [course, setCourse] = useState("");
  const [division, setDivision] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [school, setSchool] = useState("");
  const [ac1, setAc1] = useState("active");
  const [ac2, setAc2] = useState("");
  const [ac3, setAc3] = useState("");
  const [add, setAdd] = useState();
  const [showLoading, setShowLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        setUid(result.user.uid);
        result.user
          .updateProfile({
            displayName: username,
          })
          .then(console.log("user authentication completed"));
      })
      .catch((error) => {
        alert(error.message);
      })
      .then(() => {
        setAdd("true");
      });

    setShowLoading(false);
  };
  const handleChange = (event) => {
    setSchool(event.target.value);
  };

  useEffect(() => {
    db.collection("schools")
      .doc("schools")
      .get()
      .then((res) => {
        setClassDetails(res.data().schools);
      });
  }, []);

  useEffect(() => {
    db.collection("schools")
      .doc("ZOfagZP0qBcxgXRMpM2p")
      .get()
      .then((data) => {
        setCourseDetails(data.data().courses);
      });
  }, []);

  useEffect(() => {
    db.collection("schools")
      .where("course", "==", course)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          setDivisionDetails(doc.data().div);
        });
      });
  }, [showDivision]);

  useEffect(() => {
    if (add == "true") {
      setShowLoading(true);
      db.collection("users").add({
        id: idCode,
        username,
        email,
        password,
        joined: date.toDateString(),
        school,
        course,
        division,
        uid,
        status: true,
      });
      setAdd("");
      setShowLoading(false);
      alert("All Done");
    }
   
  }, [add]);

  var idCode = school.concat(course, division);
  const date = new Date();
  // useEffect(() => {
  //   db.collection("schools")
  //     .where("school", "==", school)
  //     .get()
  //     .then((res) => {
  //       res.forEach((doc) => {
  //         console.log(doc.data().courses);
  //         setCourseDetails(doc.data().courses)
  //       });
  //     });
  // }, [showCourse]);
  // console.log(divisionDetails);

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Button clicked");
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        alert("Email or Password is not valid");
      });
  };
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        overflow: "hidden",
        height: "100vh",
      }}
    >
      {showLoading ? <Loading /> : null}
      {jump ? (
        <>
          <Container
            className={`mainContainer contain ${signUp ? "st1" : "st3"} `}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "20px",
            }}
            maxWidth="md"
          >
            <Typography sx={{ color: "white" }} variant="h2">
              Let's Start
            </Typography>
            <Typography sx={{ color: "white" }} variant="h6">
              SignUp to make your life punctual
            </Typography>
            <main>
              <figure style={{ backgroundColor: "#42506b" }}>
                <picture class="imagePic ">
                  <source
                    media="(min-width: 768px)"
                    srcset="https://truecopier.in/Images/login.png"
                    sizes="360px"
                  />
                  <source
                    srcset="https://truecopier.in/Images/login.png"
                    sizes="(min-width: 320px) 290px,
                      (min-width: 480px) 435px
                      (min-width: 640px) 580px"
                  />
                  <img
                    style={{ opacity: "1" }}
                    className="imagePicLogin"
                    src="https://truecopier.in/Images/login.png"
                    alt="Citymap illustration"
                  />
                </picture>
              </figure>

              <form
                className="form"
                onSubmit={() => {
                  setJump(false);
                }}
              >
                <TextField
                  required
                  id="standard-basic"
                  label="Username"
                  type="text"
                  variant="standard"
                  size="small"
                  color="primary"
                  fullWidth
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <TextField
                  required
                  id="standard"
                  label="Email"
                  variant="standard"
                  size="small"
                  color="primary"
                  type={"email"}
                  fullWidth
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <TextField
                  required
                  id="standard"
                  label="Password"
                  variant="standard"
                  size="small"
                  color="primary"
                  type={"password"}
                  fullWidth
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <div className="buttonDiv">
                  <input
                    class="text-small-uppercase"
                    id="submit"
                    type="submit"
                    value="SignUp"
                  />
                </div>
                <Typography
                  sx={{
                    color: "secondary.light",
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    marginTop: "10px",
                  }}
                >
                  I already have an account?{" "}
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      paddingLeft: "7px",
                      color: "primary.main",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setSignUp(!signUp);
                    }}
                  >
                    Login
                  </Typography>
                </Typography>
              </form>
            </main>
          </Container>
          <Container
            className={`mainContainer contain ${signUp ? "st3" : "st2"} `}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "20px",
            }}
            maxWidth="md"
          >
            <Typography sx={{ color: "white" }} variant="h2">
              Welcome Back
            </Typography>
            <Typography sx={{ color: "white" }} variant="h6">
              Sign in to continue your account
            </Typography>
            <main>
              <figure style={{ backgroundColor: "#42506b" }}>
                <picture class="imagePic ">
                  <source
                    media="(min-width: 768px)"
                    srcset="https://truecopier.in/Images/login.png"
                    sizes="360px"
                  />
                  <source
                    srcset="https://truecopier.in/Images/login.png"
                    sizes="(min-width: 320px) 290px,
                      (min-width: 480px) 435px
                      (min-width: 640px) 580px"
                  />
                  <img
                    style={{ opacity: "1" }}
                    className="imagePicLogin"
                    src="https://truecopier.in/Images/login.png"
                    alt="Citymap illustration"
                  />
                </picture>
              </figure>

              <form className="form">
                <TextField
                  required
                  id="standard"
                  label="Email"
                  variant="standard"
                  size="small"
                  color="primary"
                  type={"email"}
                  fullWidth
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <TextField
                  required
                  id="standard"
                  label="Password"
                  variant="standard"
                  size="small"
                  color="primary"
                  type={"password"}
                  fullWidth
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <div className="buttonDiv">
                  <input
                    class="text-small-uppercase"
                    id="submit"
                    type="submit"
                    value="Login"
                    onClick={handleSignIn}
                  />
                </div>
                <Typography
                  sx={{
                    color: "secondary.light",
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    marginTop: "10px",
                  }}
                >
                  Not a member yet?{" "}
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      paddingLeft: "7px",
                      color: "primary.main",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setSignUp(false);
                    }}
                  >
                    Signup.
                  </Typography>
                </Typography>
              </form>
            </main>
          </Container>
        </>
      ) : (
        <>
          <Container
            className={`mainContainer ${showSchool} `}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "20px",
              position: "absolute",
              minHeight: "0rem",
            }}
            maxWidth="md"
          >
            <Typography
              variant="h3"
              sx={{
                color: "secondary.contrastText",
                textShadow: " -3px 5px 5px black",
              }}
            >
              Where Do You Study?
            </Typography>
            <div className="schoolSelectFormDiv">
              <FormControl
                className="schoolSelectForm"
                sx={{
                  width: "100%",
                  maxWidth: "500px",
                  color: "#fff",
                }}
              >
                <TextField
                  required
                  fullWidth
                  size="medium"
                  id="standard-select-currency"
                  variant="standard"
                  select
                  label="School"
                  select
                  value={school}
                  sx={{ marginTop: "20px", textTransform: "uppercase" }}
                  onChange={handleChange}
                >
                  {classDetails &&
                    classDetails.map((scl) => {
                      return (
                        <MenuItem
                          key={scl}
                          value={scl}
                          sx={{ textTransform: "uppercase" }}
                        >
                          {scl}
                        </MenuItem>
                      );
                    })}
                </TextField>
              </FormControl>
              {school && (
                <ArrowCircleRightSharpIcon
                  className="next"
                  color="secondary"
                  sx={{ fontSize: "50px" }}
                  onClick={() => {
                    setShowSchool("hide");
                    setShowCourse("");
                    setAc1("");
                    setAc2("active");
                    setAc3("");
                  }}
                />
              )}
            </div>
          </Container>
          <Container
            className={`mainContainer ${showCourse} `}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "20px",
              minHeight: "0rem",
            }}
            maxWidth="md"
          >
            <Typography
              variant="h3"
              sx={{
                color: "secondary.contrastText",
                textShadow: " -3px 5px 5px black",
              }}
            >
              Which course have you selected
            </Typography>
            <div className="schoolSelectFormDiv">
              <FormControl
                className="schoolSelectForm"
                sx={{
                  width: "100%",
                  maxWidth: "500px",
                  color: "#fff",
                }}
              >
                <TextField
                  required
                  fullWidth
                  size="medium"
                  id="standard-select-currency"
                  variant="standard"
                  select
                  label="course"
                  select
                  value={course}
                  sx={{ marginTop: "20px", textTransform: "uppercase" }}
                  onChange={(e) => {
                    setCourse(e.target.value);
                  }}
                >
                  {courseDetails &&
                    courseDetails.map((scl) => {
                      return (
                        <MenuItem
                          key={scl}
                          value={scl}
                          sx={{ textTransform: "uppercase" }}
                        >
                          {scl}
                        </MenuItem>
                      );
                    })}
                </TextField>
              </FormControl>
              {course && (
                <ArrowCircleRightSharpIcon
                  className="next"
                  color="secondary"
                  sx={{ fontSize: "50px" }}
                  onClick={() => {
                    setShowDivision("");
                    setShowCourse("hide");
                    setAc1("");
                    setAc2("");
                    setAc3("active");
                  }}
                />
              )}
            </div>
          </Container>
          <Container
            className={`mainContainer1 ${showDivision} `}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "20px",
              minHeight: "0rem",
            }}
            maxWidth="md"
          >
            <Typography
              variant="h3"
              sx={{
                color: "secondary.contrastText",
                textShadow: " -3px 5px 5px black",
              }}
            >
              Which is your division?
            </Typography>
            <div className="schoolSelectFormDiv">
              <FormControl
                className="schoolSelectForm"
                sx={{
                  width: "100%",
                  maxWidth: "500px",
                  color: "#fff",
                }}
              >
                <TextField
                  required
                  fullWidth
                  size="medium"
                  id="standard-select-currency"
                  variant="standard"
                  select
                  label="Division"
                  select
                  value={division}
                  sx={{ marginTop: "20px", textTransform: "uppercase" }}
                  onChange={(e) => {
                    setDivision(e.target.value);
                  }}
                >
                  {divisionDetails &&
                    divisionDetails.map((scl) => {
                      return (
                        <MenuItem
                          key={scl}
                          value={scl}
                          sx={{ textTransform: "uppercase" }}
                        >
                          {scl}
                        </MenuItem>
                      );
                    })}
                </TextField>
              </FormControl>
              {division && (
                <ArrowCircleRightSharpIcon
                  className="next"
                  color="secondary"
                  sx={{ fontSize: "50px" }}
                  onClick={() => {
                    setShowDivision("hide");
                    setDot("hide1");
                    setShowWelcome("fade");
                  }}
                />
              )}
            </div>
          </Container>
          <div
            className={`dotMain ${dot}`}
            style={{ textAlign: "center", display: "flex" }}
          >
            <div
              className={`dot ${ac1}`}
              onClick={() => {
                setShowDivision("hide");
                setShowCourse("hide");
                setShowSchool("");
                setAc1("active");
                setAc2("");
                setAc3("");
              }}
            ></div>
            <div
              className={`dot ${ac2}`}
              onClick={() => {
                setShowDivision("hide");
                setShowCourse("");
                setShowSchool("hide");
                setAc1("");
                setAc2("active");
                setAc3("");
              }}
            ></div>
            <div
              className={`dot ${ac3}  `}
              onClick={() => {
                setShowDivision("");
                setShowCourse("hide");
                setShowSchool("hide");
                setAc1("");
                setAc2("");
                setAc3("active");
              }}
            ></div>
          </div>
          <Container
            className={`mainContainer1 ${showWelcome} `}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "20px",
              minHeight: "0rem",
              opacity: "0",
              fontWeight: "200",
              transform: "scale(0)",
              transition: "4s ease-in-out",
              zIndex: "1",
            }}
            maxWidth="md"
          >
            <Typography
              sx={{
                color: "secondary.contrastText",
                textShadow: " -3px 5px 5px black",
                textTransform: "uppercase",
                marginBottom: "1spx",
                fontSize: "2.29rem",
              }}
            >
              WELCOME {username}
            </Typography>
            <Button variant="contained" onClick={handleSubmit}>
              Get Started
            </Button>
          </Container>
        </>
      )}
    </div>
  );
}

export default GetStarted;
