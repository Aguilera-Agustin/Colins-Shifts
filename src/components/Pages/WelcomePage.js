import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import {NavDrawer} from '../Navigation/NavDrawer'
const drawerWidth = 250
const useStyles = makeStyles((theme)=>({
    content: {
        padding: theme.spacing(0, 3)
      },
      root: {
        [theme.breakpoints.up("sm")]: { paddingLeft: drawerWidth }
      },
      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,
}))
export const WelcomePage = () => {
    const classes = useStyles()
    return (<>
                <Typography variant="h2">New ReactJs Features!</Typography>
                <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
                ducimus magnam. Laudantium, pariatur alias numquam tempore error, ipsa
                id quos sed porro sapiente tenetur inventore, consectetur eius. Magni
                quasi, error ipsum nobis dicta totam amet ducimus ea omnis, illo nemo
                reprehenderit dignissimos quod odit nisi deserunt perspiciatis
                corporis adipisci ullam at fugit explicabo minima. Delectus voluptas,
                corrupti hic reprehenderit magnam ipsa explicabo rem suscipit, rerum
                impedit facere laboriosam minima? Delectus libero distinctio sapiente,
                dolores consequatur molestiae. Earum reprehenderit sint ea quisquam
                consequatur recusandae eos, cum itaque eaque unde quibusdam rem
                quaerat officia quia dicta tenetur sapiente ut, magni voluptatum
                atque!
                </Typography>
           </>
    )
}
