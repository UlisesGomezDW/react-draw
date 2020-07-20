import { makeStyles } from '@material-ui/core/styles';
export const useStyleIcons = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));
