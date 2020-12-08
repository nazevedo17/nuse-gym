import { i18n } from 'src/i18n';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, FormControl, InputLabel, MenuItem, Select, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 90,
  },
  grid: {
    textAlign: 'right',
  },
  select: {
    padding: '10px',
  },
}));

const Footer = ({ t }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Box component="footer" p={4}>
      <Grid container justify="space-around" alignItems="center">
        <Grid item xs={8}>
          <Typography variant="body2" color="textSecondary" align="left">
            Copyright © Nuse Gym
            {' ' + new Date().getFullYear()}.
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.grid}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="label-language">{t('language')}</InputLabel>
            <Select
              labelId="label-language"
              id="select-language"
              value={i18n.language || 'en'}
              defaultValue={i18n.language || 'en'}
              onChange={handleChange}
              label={t('language')}
              classes={{
                outlined: classes.select,
              }}
            >
              <MenuItem value="pt">PT</MenuItem>
              <MenuItem value="en">EN</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Footer;
