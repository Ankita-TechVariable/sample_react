import React from 'react'
import { Card, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Styles } from './Styles';
const SearchLoader = (props) => {
	const { classes, datas } = props
	const loader=()=>{
			datas.map((result) => {
			const id = result.id
			return (
				<div className={classes.image}>
					<Grid container spacing={2}>
						<Grid item xs={12} >
							<Card>
								<Link to={{
									pathname: `${id}`,
								}}>
									<img src={result.previewURL} alt={"not found"}  ></img>
								</Link>
							</Card>
						</Grid>
					</Grid>
				</div>
			);
		})
	}

	return (
		<div className={classes.container}>
			{loader}
		</div>

	);

}
export default withStyles(Styles, { withTheme: true })(SearchLoader);