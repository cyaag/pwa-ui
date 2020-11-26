import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LinearProgressBar from '../components/LinearProgressBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Box } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { SettingsInputCompositeSharp } from '@material-ui/icons';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
	root: {
		maxWidth: 300,
		minWidth: 200
	},
	media: {
		height: 1
	},
	gridContainer: {
		paddingLeft: '200px',
		paddingRight: '200px'
	}
});

export default function MediaCard(props) {
	const classes = useStyles();
	const [ todos, updatetodos ] = useState([]);
	const {state} = useLocation();
	const { id, color } = state;
	/*const [todos, updatetodos] = useState(
    {
      id: '', 
      initial: '', 
      current: '', 
      target: '', 
      dayrem: '', 
      totaldays: '',
      rewardsawarded: '',
      pointsawarded: ''
    })*/

	useEffect(() => {
		console.log("State -------", state)
		// axios
		// 	.get('http://localhost:3000/dashboard')
		// 	.then((response) => {
		// 		console.log(response.data);
		// 		updatetodos(response.data);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	}, []);

	return (
    

		<Grid container spacing="5" className={classes.gridContainer} justify="center">
			<Grid item xs={4}>
				<Card className={classes.root}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image="https://png.pngtree.com/png-clipart/20190611/original/pngtree-vector-wood-fire-png-image_2907501.jpg"
							style={{ height: 200 }}
							title="Awareness of growth"
						/>
            <div>
							<ul>{todos.map((todo) => <li> Initial : {todo.initial}</li>)}</ul>
						</div>
					</CardActionArea>
				</Card>
				<Box m={5} />
			</Grid>
			<Grid item xs={4}>
				<Card className={classes.root}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image="https://png.pngtree.com/png-clipart/20190611/original/pngtree-vector-wood-fire-png-image_2907501.jpg"
							style={{ height: 200 }}
							title="Awareness of growth"
						/>
						<div>
							<ul>{todos.map((todo) => <li> Current : {todo.current}</li>)}</ul>
						</div>
					</CardActionArea>
				</Card>
			</Grid>
      <Grid item xs={4}>
      <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgressBar state={state} />
      </Box>
      <Box minWidth={200}>
        
      </Box>
    </Box>
      </Grid>
		</Grid>
    
	);
}
