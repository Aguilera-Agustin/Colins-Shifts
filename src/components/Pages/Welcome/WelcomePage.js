import React, {useEffect} from 'react'
import { Typography, Container, Avatar, Grid, makeStyles } from '@material-ui/core'
import {useSelector, useDispatch} from 'react-redux'
import { startAddData } from '../../../actions/shifts'
import { PageBar } from '../../Navigation/PageBar'
import {Card} from '../Welcome/Card'

const useStyles = makeStyles((theme)=>({
    container : {
        display:"flex", 
        flexDirection: "column", 
        alignItems:"center",
        marginTop:"10vh", 
        height:"70vh"
    },
    username:{
        color: theme.palette.secondary.main
    },
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
      },

}))

export const WelcomePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startAddData())    //Add shifts data
    }, [])
    const classes = useStyles()
    const name = useSelector( state => state.auth.name )

    return (
            <>
                <PageBar title={"Welcome Page"} buttonRequired={true}/>
                <Container  className={classes.container}>
                <Avatar alt="USERNAME" src="https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg" className={classes.large} />
                  <Typography variant="subtitle1" align="center" color="initial">
                      Hi <span className={classes.username}>{`@${name.split(' ')[0]}`}</span> !
                  </Typography>
                    <Grid container spacing={1} style={{marginTop:"10vh"}}>

                     <Card  text={'This is the colins power'} image="/static/images/avatar/1.jpg"/>
                     <Card  text={'This is the colins power'} image="/static/images/avatar/1.jpg"/>
                     <Card  text={'This is the colins power'} image="/static/images/avatar/1.jpg"/>
                     
                    </Grid>     
                </Container>
            </>
    )
}
