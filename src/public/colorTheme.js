import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  grey50,
  grey100,
  grey400,
  grey500,
  grey900,
  amber500,
  cyan500,
  fullBlack,
  white,
} from 'material-ui/styles/colors';

const colorTheme = getMuiTheme({
  palette: {
    primary1Color: grey50,
    primary2Color: grey100,
    primary3Color: grey400,
    accent1Color: amber500,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: grey900,
    alternateTextColor: grey900,
    canvasColor: white,
    borderColor: grey400,
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack,
  },
});

export default colorTheme;
