import React, {Component} from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {Grid, TextField, Button, ButtonGroup} from '@material-ui/core'

import {Offers as OffersAction} from '../actions'
import AppNav from './AppNav'
import OfferItem from './OfferItem'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

class Offers extends Component{
    constructor(props){
        super(props)
        this.state = {
            search_text: ''
        }
        this.search_input = React.createRef()
    }
    componentDidMount(){
        this.props.onOffers()
    }
    render(){
        const page_no = parseInt(this.props.match.params.id || '0')
        const item_size = 3
        const parts = Math.ceil(this.props.Offers.length / item_size)
        const item_set = _.chunk(this.props.Offers, item_size)[page_no] || []
        const classes = this.props.classes
  return (<div>
    <AppNav />
    <Paper className={classes.root}><br/>
      <Grid container spacing={3}>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}>
          <ButtonGroup variant="contained"
              color="primary"
              size="large"
              aria-label="large contained primary button group">{
          [...Array(parts).keys()].map(i =>
              <Button
                component={Link}
                to={"/"+i}
                >{i}</Button>
          )
          }</ButtonGroup>
      </Grid></Grid>
      <Table className={classes.table}>
      <TableHead>
          <TableRow>
          <TableCell>View</TableCell>
            <TableCell>Title</TableCell>
            <TableCell align="right">Post</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell aligh="right">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
              item_set.map(offer =>
                <OfferItem id={offer.id} />
              )
          }
        </TableBody>
      </Table>
    </Paper></div>
  );
}
  }

const dispatch2props = dispatch => ({
    onOffers: () => {
        dispatch(OffersAction())
    }
})

const state2props = ({Offers}) => ({
    Offers
})

Offers = withRouter(Offers)
Offers = connect(state2props, dispatch2props)(Offers)

const Style2Props = props => {
    const classes = useStyles()
    return <Offers classes={classes} />
}

export default Style2Props

