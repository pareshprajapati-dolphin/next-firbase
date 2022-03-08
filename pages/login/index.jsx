import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import styles from "./login.module.css";
import Link from "next/link";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { app } from "../../components/config/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye, faGoogle } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const [passwordShow, setPasswordShow] = useState(false);

  const ShowPassword = () => {
    setPasswordShow(!passwordShow);
  };

  const LoginData = async (data) => {
    await fetch(
      "https://dws-api-client.demoproject.info/dws-api-client-back/public/api/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        if (response.status) {
          console.log(response);
          localStorage.setItem("user", JSON.stringify(response.data));
          router.push("/");
        }
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center text-light"
      style={{ height: "100vh" }}
    >
      <div className="col-sm-6 col-md-4 col-lg-3 card">
        <div className="d-flex align-items-center pt-3 justify-content-center ">
          <h5>Login </h5>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-1 mb-1">
          <span className={styles.line}></span>{" "}
          <span className={styles.line}></span>
        </div>
        <div className="p-3 px-4 py-4">
          <form onSubmit={handleSubmit(LoginData)}>
            <div class="form-group mb-3">
              <label htmlFor="InputEmail" className="form-label">
                Email or Phone
              </label>
              <input
                className="form-control"
                {...register("email", {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
                placeholder="email or phone"
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
              <span className={styles.icon} onClick={ShowPassword}>
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

            <button class="btn btn-primary btn-block w-100">Continue</button>
            <div className="mt-2 text-end">
              <Link href="/login/forgotPassword">
                <a className={styles.forgot}>Forgot Password</a>
              </Link>
            </div>
          </form>
          <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
            <span className={styles.line}></span>{" "}
            <small className="px-2 line-text">OR</small>
            <span className={styles.line}></span>
          </div>

          <div className="p-3 d-flex flex-row justify-content-center align-items-center ">
            {" "}
            <span>Not a member? </span>{" "}
            <Link className="ml-2" href="/register">
              <a> Sign Up</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
