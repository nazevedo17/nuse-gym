import PropTypes from 'prop-types';
import { withTranslation } from 'i18n';

import styles from 'styles/pages/Home.module.css';

import PageTitle from 'components/util/PageTitle';
import A from 'components/util/A';
import Img from 'components/util/Img';

const Home = ({ t }) => (
  <>
    <PageTitle title={t('home:page-title')} />
    <section>
      <article>
        <h1 className="text-center">Page Test</h1>
        <A href="/login">Go to Login</A>
      </article>
      <article>
        <p className={styles.test}>{process.env.NEXT_PUBLIC_TEST}</p>
        <Img src="/images/test.jpg" alt="img-test" width="100" height="100" />
      </article>
    </section>
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
