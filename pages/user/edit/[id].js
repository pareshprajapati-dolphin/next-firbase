import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Layout from "../../../components/layout";
import styles from "../../login/login.module.css";

const EditUser = ({ data }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("firstname", data.name);
    setValue("username", data.username);
    setValue("email", data.email);
    setValue("phone", data.phone);
  }, [data]);

  const onUpdate = (data) => {
    console.log(data);
  };

  return (
    <>
      <Layout>
        <div className="container mt-3">
          <form onSubmit={handleSubmit(onUpdate)}>
            <div className="form-group mb-3">
              <label for="firstname" className="form-label">
                FirstName
              </label>
              <input
                className="form-control"
                id="firstname"
                {...register("firstname", { required: true })}
              />
              <div>
                {errors.firstname && (
                  <span className={styles.error}>This field is required</span>
                )}
              </div>
            </div>
            <div className="form-group mb-3">
              <label for="username" className="form-label">
                UserName
              </label>
              <input
                className="form-control"
                id="username"
                {...register("username", {
                  required: true,
                })}
              />
              <div>
                {errors.username && (
                  <span className={styles.error}>This field is required</span>
                )}
              </div>
            </div>
            <div className="form-group mb-3">
              <label for="email" className="form-label">
                Email Address
              </label>
              <input
                className="form-control"
                id="exampleInputEmail1"
                {...register("email", {
                  required: true,
                })}
              />
              <div>
                {errors.email && (
                  <span className={styles.error}>This field is required</span>
                )}
              </div>
            </div>
            <div className="form-group">
              <label for="phonenumber" className="form-label">
                Phone Number
              </label>
              <input
                className="form-control"
                id="phonenumber"
                {...register("phone", {
                  required: true,
                })}
              />
              <div>
                {errors.phone && (
                  <span className={styles.error}>This field is required</span>
                )}
              </div>
            </div>

            <button className="btn btn-primary mt-3" type="submit">
              Update
            </button>
            <button
              type="button"
              className="btn btn-secondary mt-3 mx-3"
              onClick={() => router.push("/user")}
            >
              Cancel
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const req = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await req.json();

  // console.log(data);
  return {
    props: {
      data,
    },
  };
}

export default EditUser;
