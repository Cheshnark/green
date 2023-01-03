import React, {useState} from "react";
import {Drawer, List, ListItemIcon, ListItemButton, ListItemText} from "@mui/material";
import DrawerButton from "./DrawerButton";
import {HashLink as Hash} from 'react-router-hash-link';
import logo from '../images/logo-01-250.png';

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
            onClose={changeDrawer}
            className="drawer">
                <List>
                    <Hash smooth to='/#about'>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListItemText onClick={changeDrawer}><img src={logo} alt="logo"/></ListItemText>
                            </ListItemIcon>
                        </ListItemButton>   
                    </Hash>
                    {pages.map((page,index) =>(
                        <ListItemButton key={index} href={dynamicUrl(page)} onClick={changeDrawer}>
                            <ListItemIcon>
                                <ListItemText sx={{textAlign:"right"}}>{page}</ListItemText>
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