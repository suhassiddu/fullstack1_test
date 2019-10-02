import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'

import {Offers as OffersAction} from '../actions'
import {BaseURL} from '../api'

class BlogView extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.onOffers()
    }
    render(){
        return <div>
            {// JSON.stringify(this.props.Offer)
            }
            <h1>{this.props.Offer.product_name}</h1>
            <p>Date: {this.props.Offer.start_date}</p>
            {// <p>Photo <br/><img width="150" alt={''} src={BaseURL + this.props.Offer.image_path} /></p>
            }
            <p>{this.props.Offer.product_detail}</p>
            </div>
    }
}

// Offer: state.Offers.find(offer => offer.id === parseInt(ownProps.match.params.id || '0'))
const state2props = (state, ownProps) => ({
    Offer: state.Offers.find(offer => offer.id === parseInt(ownProps.match.params.id || '0'))
})

const dispatch2props = dispatch => ({
    onOffers: () => {
        dispatch(OffersAction())
    }
})

BlogView = withRouter(BlogView)

export default connect(state2props, dispatch2props)(BlogView)