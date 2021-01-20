import PropTypes from 'prop-types';

import { Link } from '../../i18n';

const A = ({ href, children }) => <Link href={href}>{children}</Link>;

A.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default A;
