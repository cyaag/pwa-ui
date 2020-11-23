import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    sideMenu: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "0px",
        width: "160px",
        height: "100%",
        backgroundColor: "#1e6821"
    }
})
export default function SideMenu1(){
    const classes = useStyles();
    return (
        <div className={classes.sideMenu}>

        </div>
    )
}
