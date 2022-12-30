import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

function DrawerButton(props){
    return (
        <IconButton onClick={props.drawerVeritas} sx={{marginLeft:"1rem"}}>
            <MenuIcon/>
        </IconButton>)
}

export default DrawerButton;