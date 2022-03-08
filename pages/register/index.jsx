import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import styles from "../login/login.module.css";
// import { app } from "../../components/config/firebase";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
import axios from "axios";

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
        <div className={styles.card}>
          <div className="p-3 d-flex align-items-center justify-content-center ">
            <h5>Login </h5>
          </div>
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
              <div className=" mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  autoComplete="true"
                  className="form-control"
                  name="password"
                  type={passwordShow ? "text" : "password"}
                  placeholder="password"
                  {...register("password", { required: true, minLength: 6 })}
                />
                <span
                  className={styles.icon}
                  onClick={() => setPasswordShow(!passwordShow)}
                >
                  {passwordShow ? (
                    <i className="fas fa-eye" />
                  ) : (
                    <i className="fas fa-eye-slash" />
                  )}
                </span>

                {errors.password && errors.password.type === "required" && (
                  <span className={styles.error}> password is required</span>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <span className={styles.error}>
                    Password must have at least 6 characters
                  </span>
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
              <button
                className="btn btn-primary"
                style={{ marginTop: "10px" }}
                type="submit"
              >
                Submit
              </button>
              <button
                type="button"
                style={{ marginTop: "10px", marginLeft: "5px" }}
                className="btn btn-secondary"
                onClick={() => {
                  router.push("/login");
                }}
              >
                cancel
              </button>
            </form>
            <div className="mt-3">
              <button className="btn btn-primary" onClick={signUpGoogle}>
                Signup with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
