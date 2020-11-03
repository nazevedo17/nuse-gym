import Image from "next/image";

const Img = ({ src, alt, width, height }) => (
  <Image src={src} alt={alt} width={width} height={height} />
);

export default Img;
