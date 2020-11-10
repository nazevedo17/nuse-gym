import PropTypes from 'prop-types';
import { withTranslation } from 'i18n';

// import styles from '../styles/Home.module.css';
import A from 'components/Util/A';

import PageTitle from 'components/Util/PageTitle';

const Login = ({ t }) => (
  <>
    <PageTitle title={t('login:page-title')} />
    <A href="/">Go to Home</A>
  </>
);

Login.getInitialProps = async () => ({
  namespacesRequired: ['common', 'login'],
});

Login.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Login);
