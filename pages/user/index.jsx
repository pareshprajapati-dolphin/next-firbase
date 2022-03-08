import React from "react";
import Link from "next/link";
import Layout from "../../components/layout";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export default function userDetail({ data }) {
  const router = useRouter();

  return (
    <Layout>
      <div className="mr-3 text-right">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            router.push("/user/Add");
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
