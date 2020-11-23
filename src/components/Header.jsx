
import React from 'react';
import { Grid, Button, InputBase, IconButton, Typography, Container, AppBar, Toolbar } from '@material-ui/core';

export default function Header(){
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Grid container>
                        <Grid item sm = {6} style = {{border: '1px solid #fff'}}>
                            <InputBase />
                        </Grid>
                        <Grid item sm = {6} style = {{border: '1px solid #000'}}>
                            <IconButton>

                            </IconButton>
                        </Grid>
                    </Grid>
                    <Typography variant="h6" color="text" align="left">
                        cYAAG
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}