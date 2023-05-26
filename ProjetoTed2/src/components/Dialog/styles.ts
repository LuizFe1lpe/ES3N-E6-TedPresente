import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    headerRoot: {
      margin: 0,
      padding: "2px 2px",
      borderBottom: "1px solid #F0F4F7",
      minHeight: "30px",
    },
    headerContent: {
      minHeight: 0,
      paddingRight: 5,
      paddingLeft: 5,
    },
    content: {
      padding: "0px 10px",
      background: "#F1F5F8",
    },
    spacer: {
      flexGrow: 1,
    },
  })
);

export default useStyles;
