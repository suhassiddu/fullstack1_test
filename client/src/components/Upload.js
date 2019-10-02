import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    Paper, 
    Button,
    Typography,
    TextField,
    Grid} from '@material-ui/core'

import {Upload as UploadAction} from '../actions'
import useStyles from '../App.style'
import AppNav from './AppNav'

class Upload extends Component{
    
    constructor(props){
        super(props)
        this.handle_submit = this.handle_submit.bind(this)
        this.area_code_input = React.createRef()
        this.store_name_input = React.createRef()
        this.product_name_input = React.createRef()
        this.product_detail_input = React.createRef()
        this.product_image_input = React.createRef()
        this.offer_detail_input = React.createRef()
        this.startdate_input = React.createRef()
        this.enddate_input = React.createRef()
    }
    handle_submit(){
        /*
        const area_code = this.area_code_input.current.value.trim()
        const store_name = this.store_name_input.current.value.trim()
        const product_name = this.product_name_input.current.value.trim()
        const product_detail = this.product_detail_input.current.value.trim()
        const product_image = this.product_image_input.current.files[0]
        const offer_detail = this.offer_detail_input.current.value.trim()
        const start_date = this.startdate_input.current.value.trim()
        const end_date = this.enddate_input.current.value.trim()
        */
        const product_name = this.product_name_input.current.value.trim()
        const product_detail = this.product_detail_input.current.value.trim()
        const product_image = this.product_image_input.current.files[0]
        const start_date = this.startdate_input.current.value.trim()
        this.props.onUpload({
            area_code: '',
            store_name: '',
            product_name,
            product_detail,
            product_image,
            offer_detail: '',
            start_date,
            end_date: ''
        })
    }
    render(){
        const classes = this.props.classes
        return (<React.Fragment><AppNav />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            New Post
          </Typography>
          <React.Fragment>
          <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            name="Title"
            label="Title"
            inputProps={{ref: this.product_name_input}}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} style={{ display: 'none' }}>
            <label for="product_photo">Photo </label>
            <input id="product_photo" ref={this.product_image_input} type="file" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline={true}
            rows={5}
            rowsMax={5}
            required
            name="Post"
            label="Post"
            inputProps={{ref: this.product_detail_input}}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
                required
                fullWidth
                id="date"
                label="Date"
                type="date"
                defaultValue="2017-05-24"
                inputProps={{ref: this.startdate_input}}
                InputLabelProps={{
                    shrink: true,
                }}
             />
        </Grid>
      </Grid>
                <div className={classes.buttons}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handle_submit}
                    className={classes.button}
                  >
                    Upload
                  </Button>
                </div>
          </React.Fragment>
        </Paper>
      </main></React.Fragment>
     )
    }
}

const dispatch2props = dispatch => ({
    onUpload: data => {
        dispatch(UploadAction(data))
    }
})

Upload = connect(null, dispatch2props)(Upload)

const Style2Props = props => {
    const classes = useStyles()
    return <Upload classes={classes} />
}

export default Style2Props
