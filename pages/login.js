import PropTypes from 'prop-types';
import { withTranslation } from 'i18n';

import { Typography } from '@material-ui/core';

import PageTitle from 'components/util/PageTitle';

const Login = ({ t }) => (
  <>
    <PageTitle title={t('login:page-title')} />
    <Typography variant="h1" align="center">
      Login Page
    </Typography>
  </>
);

Login.getInitialProps = async () => ({
  namespacesRequired: ['common', 'login'],
});

Login.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Login);
