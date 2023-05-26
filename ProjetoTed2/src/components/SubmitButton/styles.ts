import { createStyles, makeStyles } from "@material-ui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonLoading: {
      opacity: "0.5",
    },
  })
);

export default useStyles;
