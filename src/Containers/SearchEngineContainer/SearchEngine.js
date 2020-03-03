import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Styles } from './Styles';
import Search from '../../Components/Search'
const SearchEngine = (props) => {
    const { classes } = props
    return (
        <div className={classes.container}>
            <Search />
        </div>
    );

}
export default withStyles(Styles, { withTheme: true })(SearchEngine);