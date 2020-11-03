import Head from "next/head";

import A from "components/Util/A";
import Img from "components/Util/Img";

const About = () => (
  <>
    <Head>
      <title>Nuse Gym - About</title>
    </Head>
    <h1>About</h1>
    <Img src="/images/test.jpg" alt="img-test" width="100" height="100" />
    <A href="/">Go to Home</A>
  </>
);

export default About;
