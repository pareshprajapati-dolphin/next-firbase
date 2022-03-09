import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import styles from "../login/login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

// import { app } from "../../components/config/firebase";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
import axios from "axios";
import Link from "next/link";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({});
  const router = useRouter();

  // const auth = getAuth();

  // const googleProvider = new GoogleAuthProvider();

  const password = useRef();
  password.current = watch("password");

  const [passwordShow, setPasswordShow] = useState(false);

  const RegisterData = async (data) => {
    // const rawResponse = await fetch(
    //   "https://47121ced7d7d.ngrok.io/first_lumen_project/public/api/register",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       // Accept: "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   }
    // );

    await axios
      .post(
        "https://47121ced7d7d.ngrok.io/first_lumen_project/public/api/register",
        data
      )
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const signUpGoogle = () => {
    // s
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center text-light"
        style={{ height: "100vh" }}
      >
        <div className="col-sm-6 col-md-4 col-lg-3 login-box">
          <div className="p-2 d-flex align-items-center justify-content-center ">
            <h5>Create new Account </h5>
          </div>
          <hr />
          <div className="p-3 px-4 py-4">
            <form onSubmit={handleSubmit(RegisterData)}>
              <div className="form-group mb-3">
                <label htmlFor="firstname" className="form-label">
                  FirstName
                </label>
                <input
                  autoComplete="true"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="firstname"
                  placeholder="fisrtName"
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.firstname && (
                  <span className={styles.error}>firstName required</span>
                )}
              </div>

              <div className=" form-group mb-3">
                <label htmlFor="InputEmail" className="form-label">
                  Email address
                </label>
                <input
                  autoComplete="true"
                  className="form-control"
                  name="email"
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  placeholder="email Id"
                />

                {errors.email && errors.email.type === "required" && (
                  <span className={styles.error}>email is required</span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <span className={styles.error}>Invalid Email</span>
                )}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  className="form-control"
                  type={passwordShow ? "text" : "password"}
                  {...register("password", {
                    required: true,
                  })}
                  placeholder="password"
                />
                <span
                  className={styles.icon}
                  onClick={() => setPasswordShow(!passwordShow)}
                >
                  {passwordShow ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </span>
                {errors.password && (
                  <span className={styles.error}>password is required</span>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="confirmpassword" className="form-label">
                  confirm password
                </label>
                <input
                  autoComplete="true"
                  className="form-control"
                  name="password_confirm"
                  type="password"
                  placeholder="confirm_password"
                  {...register("password_confirm", {
                    required: true,
                    validate: (value) => value === password.current,
                  })}
                />

                {errors.password_confirm &&
                  errors.password_confirm.type === "required" && (
                    <span className={styles.error}>
                      password confirm field is required
                    </span>
                  )}
                {errors.password_confirm &&
                  errors.password_confirm.type === "validate" && (
                    <span className={styles.error}>passwords do not match</span>
                  )}
              </div>

              <button className="btn btn-primary btn-block w-100 mb-3">
                Continue
              </button>
              <button
                className="btn btn-secondary btn-block w-100"
                onClick={() => {
                  router.push("/login");
                }}
              >
                cancel
              </button>
            </form>

            {/* <button className="btn btn-primary" onClick={signUpGoogle}>
                Signup with Google
              </button> */}
            <hr />
            <div className="p-3 d-flex flex-row justify-content-center align-items-center ">
              <span>already member? </span>{" "}
              <Link className="ml-2" href="/login">
                <a style={{ marginLeft: "10px", color: "blue" }}> Sign In</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
