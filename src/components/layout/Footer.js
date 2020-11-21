import { Typography, Box } from '@material-ui/core';

const Footer = ({}) => (
  <Box component="footer" p={4}>
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright © Nuse Gym
      {' ' + new Date().getFullYear()}.
    </Typography>
  </Box>
);

export default Footer;
