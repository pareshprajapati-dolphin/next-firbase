import React from "react";
import Link from "next/link";
import Layout from "../../components/common/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Head from "next/head";

// userDetail.title = "userDetails";
export default function UserDetail({ data }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Basic Authentication Example | userDtails </title>
        <meta
          name="description"
          content="Meta description for the userDetails page"
        />
      </Head>
      <Layout>
        <div className="mr-3 mt-2 d-flex justify-content-between">
          <h1 className="fs-5 mt-2">User Details Page</h1>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              router.push("/user/adduser");
            }}
          >
            Add User
          </button>
        </div>
        <div className="my-3">
          <table className="table table-striped">
            <thead>
              <tr className="table-primary">
                <th scope="col">id</th>
                <th scope="col">FirstName</th>
                <th scope="col">UserName</th>
                <th scope="col">email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <Link href={`/user/edit/${user.id}`}>
                        <a>
                          <FontAwesomeIcon icon={faEdit} />
                        </a>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const req = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await req.json();

  return {
    props: {
      data,
    },
  };
}
