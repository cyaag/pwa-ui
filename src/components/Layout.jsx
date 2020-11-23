import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => ({

    appMain: {
        paddingleft: '320px',
        width: '100%'
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 500,
        width: 700,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function SpacingGrid() {
    
    const classes = useStyles();

    return (
        <React.Fragment>
            <SideMenu />
            <div className={classes.appMain} />
            <Header />
        </React.Fragment>

    );
}