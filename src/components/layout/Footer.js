import { i18n } from 'src/i18n';

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

const Footer = () => {
  const classes = useStyles();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Box component="footer" p={4}>
      <Grid container justify="space-around" alignItems="center">
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary" align="left">
            Copyright © Nuse Gym
            {' ' + new Date().getFullYear()}.
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.grid}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="label-langue">Linguagem</InputLabel>
            <Select
              labelId="label-langue"
              id="select-language"
              value={i18n.language}
              defaultValue={i18n.language}
              onChange={handleChange}
              label="Linguagem"
              classes={{
                outlined: classes.select,
              }}
            >
              <MenuItem value="en">EN</MenuItem>
              <MenuItem value="pt">PT</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
