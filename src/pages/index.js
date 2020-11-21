import PropTypes from 'prop-types';
import { withTranslation } from 'src/i18n';

import { Typography, Box } from '@material-ui/core';

import PageTitle from 'src/components/util/PageTitle';
// import A from 'components/util/A';
import Layout from 'src/components/layout';
// import Img from 'components/util/Img';

const Home = ({ t }) => (
  <>
    <PageTitle title={t('home:page-title')} />
    <Layout>
      <section>
        <Box component="article" p={2}>
          <Typography variant="h1" align="center">
            Home Page
          </Typography>
          <Typography variant="h1" align="center">
            Home Page
          </Typography>
          <Typography variant="h1" align="center">
            Home Page
          </Typography>
          <Typography variant="h1" align="center">
            Home Page
          </Typography>
          <Typography variant="h1" align="center">
            Home Page
          </Typography>
          <Typography variant="h1" align="center">
            Home Page
          </Typography>
          <Typography variant="h1" align="center">
            Home Page
          </Typography>
          <Typography variant="h1" align="center">
            Home Page
          </Typography>
          <Typography variant="h1" align="center">
            Home Page
          </Typography>
          <Typography variant="h1" align="center">
            Home Page
          </Typography>
        </Box>
        {/* <article>
              <A href="/login">Go to Login</A>
        <p>{process.env.NEXT_PUBLIC_TEST}</p>
        <Img src="/images/test.jpg" alt="img-test" width="100" height="100" />
      </article> */}
      </section>
    </Layout>
  </>
);

// This gets called on every request
// export async function getServerSideProps() {
//   const res = await fetch(`https://.../data`);
//   const data = await res.json();

//   return { props: { data } };
// }

//This function gets called at build time
// export async function getStaticProps() {
//   const res = await fetch(`https://.../data`);
//   const data = await res.json();

//   console.log(process.env.TEST);

//   return { props: {} };
// }

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'home'],
});

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Home);
