import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Box } from '@material-ui/core';
import { useState, useEffect} from  'react';
import axios from "axios";
import { SettingsInputCompositeSharp } from '@material-ui/icons';

const useStyles = makeStyles({
	root: {
    maxWidth: 300,
    minWidth: 200
	},
	media: {
		height: 1
  },
  gridContainer: {
    paddingLeft: "200px",
    paddingRight: "200px"
  }
});

export default function MediaCard() {
  const classes = useStyles();
  const [todos, updatetodos] = useState(
    {
      id: '', 
      initial: '', 
      current: '', 
      target: '', 
      dayrem: '', 
      totaldays: '',
      rewardsawarded: '',
      pointsawarded: ''
    })
  
  useEffect(() => {
    axios.get("http://localhost:3000/dashboard")
    .then (response => {
      console.log(response)
      updatetodos(response.data);
  })
  .catch(err => {
    console.log(err);
  })
}, [])

	return (
		<Grid container spacing = "50" className = {classes.gridContainer} justify="center">
      <Grid item xs={4} >      
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image="https://png.pngtree.com/png-clipart/20190611/original/pngtree-vector-wood-fire-png-image_2907501.jpg"
						style={{ height: 200 }}
						title="Awareness of growth"
					/>
         
              <div>
                <ul>
                  {todos.map(todo => (
                    <li key={todo.id}>{todo.initial}</li>
                  ))}
                </ul>

              </div>
      
				</CardActionArea>
			</Card>
      <Box m={5}
      />
      </Grid>
      <Grid item xs={4} >
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image="https://png.pngtree.com/png-clipart/20190611/original/pngtree-vector-wood-fire-png-image_2907501.jpg"
						style={{ height: 200 }}
						title="Awareness of growth"
					/>

				</CardActionArea>
			</Card>
      </Grid>
      <Grid item xs={4} >
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image="https://png.pngtree.com/png-clipart/20190611/original/pngtree-vector-wood-fire-png-image_2907501.jpg"
						style={{ height: 200 }}
						title="Awareness of growth"
					/>
				</CardActionArea>
			</Card>
      </Grid>
      <Grid item xs={4} >
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image="https://png.pngtree.com/png-clipart/20190611/original/pngtree-vector-wood-fire-png-image_2907501.jpg"
						style={{ height: 200 }}
						title="Awareness of growth"
					/>
				</CardActionArea>
			</Card>
      </Grid>
      <Grid item xs={4} >
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image="https://png.pngtree.com/png-clipart/20190611/original/pngtree-vector-wood-fire-png-image_2907501.jpg"
						style={{ height: 200 }}
						title="Awareness of growth"
					/>
				</CardActionArea>
			</Card>
      </Grid>
		</Grid>
	);
}
