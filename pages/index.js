import Head from "next/head";
// import styles from "../styles/Home.module.css";

import A from "components/Util/A";

const Home = ({ props }) => (
  <>
    <Head>
      <title>Nuse Gym - Home</title>
    </Head>
    <h1>Home</h1>
    <A href="/about">Go to About</A>
    <p>{process.env.NEXT_PUBLIC_TEST}</p>
  </>
);

// This gets called on every request
// export async function getServerSideProps() {
//   const res = await fetch(`https://.../data`);
//   const data = await res.json();

//   return { props: { data } };
// }

//This function gets called at build time
export async function getStaticProps() {
  // const res = await fetch(`https://.../data`);
  // const data = await res.json();

  console.log(process.env.TEST);

  return { props: {} };
}

export default Home;
