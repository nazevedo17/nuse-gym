import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Footer from './Footer';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: '75px',
    width: 'calc(100% - 75px)',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container maxWidth="xl" className={classes.container}>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
