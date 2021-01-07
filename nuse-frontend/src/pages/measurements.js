import PropTypes from 'prop-types';
import { withTranslation } from 'src/i18n';

import { Typography, Box } from '@material-ui/core';

import PageTitle from 'src/components/util/PageTitle';
import Layout from 'src/components/layout';

import { useSelector } from 'react-redux';

const Measurements = ({ t }) => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <PageTitle title={t('pages.measurements')} />
      <Layout t={t}>
        <section>
          <Box component="article" p={2}>
            <Typography variant="h1" align="center">
              Measurements Page
            </Typography>
          </Box>
        </section>
      </Layout>
    </>
  );
};

Measurements.getInitialProps = async () => ({
  namespacesRequired: ['common', 'measurements'],
});

Measurements.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Measurements);
