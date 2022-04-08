import React from "react";
import { useForm } from "react-hook-form";
import useFullPageLoader from "../../hooks/useFullPageLoader";
import styles from "../login/login.module.css";

export default function ForgotPassword() {
  const [showLoader, hideLoader, loader] = useFullPageLoader();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const LoginData = async (data) => {
    showLoader();

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
          hideLoader();
          console.log(response);
          dispatch(signIn(response.data.token));
          localStorage.setItem("user", JSON.stringify(response.data));
          router.push("/");
        } else {
          hideLoader();
          console.error("Error:", response.status);
        }
      });
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center text-light login-box "
        style={{ height: "100vh" }}
      >
        <div className="col-sm-6 col-md-4 col-lg-3 login">
          <div className="d-flex align-items-center pt-3 justify-content-center ">
            <h5>Forgot Passoword </h5>
          </div>
          <hr />
          <div className="p-3 px-4 py-4">
            <form onSubmit={handleSubmit(LoginData)}>
              <label htmlFor="InputEmail" className="form-label">
                Email Address
              </label>
              <div className="input-text">
                <input
                  type="text"
                  className={styles.inputText}
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
              <span>*Required info</span>

              <button className="btn btn-primary btn-block w-100 mt-3">
                Reset Passoword
              </button>
            </form>
          </div>
        </div>
      </div>
      {loader}
    </>
  );
}
