import React, { useState } from 'react'
import axios from 'axios'
import { withStyles, Button } from '@material-ui/core'
import { Styles } from './Styles';
import SearchLoader from './../SearchLoader'
import { DebounceInput } from 'react-debounce-input'

const Search = (props) => {
	const [query, setQuery] = useState("");
	const [datas, setData] = useState([]);
	const [loader, SetLoader] = useState("false");
	const apiCall = value => {
		let params = {
			key: "15247070-cfc9fc379707217c6db1dd41c",
			q: value
		}
		axios.get(`https://pixabay.com/api`, { params })
			.then((res) => {
				setData(res.data.hits);
				SetLoader("true");
			})
			.catch((error) => { console.error() });
	}
	const handleChange = e => {
		apiCall(e.target.value);
	}

	const handleClick = () => {
		apiCall(query);
	}
	const { classes } = props
	return (
		<div>
			<h2>PIXABAY SEARCH ENGINE</h2>
			<DebounceInput className={classes.textbox} type="text" debounceTimeout={1000} placeholder="Search..." onKeyUp={e => { setQuery(e.target.value) }} onChange={handleChange} />
			<Button className={classes.button} onClick={handleClick}>SEARCH</Button>
			{loader ? <SearchLoader datas={datas} /> : null}
		</div>
	);
}

export default withStyles(Styles, { withTheme: true })(Search);