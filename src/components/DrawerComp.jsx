import React, {useState} from "react";
import {Drawer, List, ListItemIcon, ListItemButton, ListItemText} from "@mui/material";
import DrawerButton from "./DrawerButton";
// import {HashLink as Hash} from 'react-router-hash-link';

function DrawerComp(){
    const [drawerState, setDrawerState] = useState(false);

    function changeDrawer(){
        setDrawerState(!drawerState);
    }

    const pages = ["About", "Portfolio", "Blog", "Contacto"];

    const dynamicUrl = (page) => {
        if(page === "About"){
            return page = "/";
        }else if(page === "Contacto"){
            return "/#contacto";
        }else{
            return `/${page.toLowerCase()}`;
        }
    };

    return (
        <div>
            <Drawer open={drawerState}
            onClose={changeDrawer}>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText onClick={changeDrawer}><img src="images/logo-01-250.png" alt="logo"/></ListItemText>
                        </ListItemIcon>
                    </ListItemButton>   
                    {pages.map((page,index) =>(
                        <ListItemButton key={index} href={dynamicUrl(page)} onClick={changeDrawer}>
                            <ListItemIcon>
                                <ListItemText>{page}</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>  
                        ))
                    }
                </List>
            </Drawer>
            <DrawerButton drawerVeritas={changeDrawer}/>
        </div>
    )
}

export default DrawerComp;