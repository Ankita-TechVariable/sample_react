import React, { useState, useEffect } from 'react'
import { Card, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Styles } from './Styles';
import axios from 'axios'
const ImageDetails = (props) => {
	const [output, setOutput] = useState([]);
	const { id } = props.match.params;
	let params = {
		key: "15247070-cfc9fc379707217c6db1dd41c",
		id: `${id}`
	}
	useEffect(() => {
		axios.get(`https://pixabay.com/api`, { params })
			.then((res) => {
				setOutput(res.data.hits[0])
			}).catch((error) => {
				console.log(error);
			});
	}, [])
	return (
		<div>
			<Grid item xs={12}>
				<Card>
					<img src={output.largeImageURL} alt={"not found"}></img>
				</Card>
			</Grid>
		</div>

	);

}
export default withStyles(Styles, { withTheme: true })(ImageDetails);