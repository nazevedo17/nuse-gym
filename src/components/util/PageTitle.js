import PropTypes from 'prop-types';

import Head from 'next/head';

const PageTitle = ({ title }) => (
  <Head>
    <title>Nuse Gym - {title}</title>
  </Head>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default PageTitle;
