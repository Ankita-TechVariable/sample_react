import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Styles } from './Styles';
import ImageDetails from '../../Components/ImageDetails'
const DetailPage = (props) => {
    const { classes } = props
    return (
        <div className={classes.container}>
            <ImageDetails />
        </div>

    );

}
export default withStyles(Styles, { withTheme: true })(DetailPage);