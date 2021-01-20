import PropTypes from 'prop-types';

import Image from 'next/image';

const Img = ({ src, alt, width, height }) => <Image src={src} alt={alt} width={width} height={height} />;

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Img;
