import PropTypes from 'prop-types';
import { withTranslation } from 'i18n';

import PageTitle from 'components/util/PageTitle';

const Login = ({ t }) => (
  <>
    <PageTitle title={t('login:page-title')} />
  </>
);

Login.getInitialProps = async () => ({
  namespacesRequired: ['common', 'login'],
});

Login.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Login);
