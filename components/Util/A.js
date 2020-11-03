import Link from "next/link";

const A = ({ href, children }) => <Link href={href}>{children}</Link>;

export default A;
