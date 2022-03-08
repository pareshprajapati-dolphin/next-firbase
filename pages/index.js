// import TodoList from "../components/todo-list";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { app, database } from "../components/config/firebase";
// import { addDoc, collection, getDocs } from "firebase/firestore";
import { useForm } from "react-hook-form";
import Layout from "../components/layout";
import Footer from "../components/footer";

export default function Home(props) {
  const { register, handleSubmit } = useForm();
  const [userdata, setuserdata] = useState([]);
  const router = useRouter();

  return (
    <>
      <Layout>
        <div className="container-fluid">
          <h1>Hi this the home page </h1>
          <p>You&apos;re logged in with Next.js & JWT!!</p>
        </div>
        <Footer />
      </Layout>
    </>
  );
}
