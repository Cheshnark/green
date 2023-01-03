import React, {useState} from 'react';
import { ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material';

const Portfolio = ({itemData}) => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("xl"));
    const matches2 = useMediaQuery(theme.breakpoints.down("md"));

    const [zoom, setZoom] = useState();
    const [title, setTitle] = useState();
    const [open, setOpen] = useState(false);

    const enlarge = (event) => {
        let id = event.target.id
        setZoom(itemData[id].img);
        setTitle(event.target.title);
        setOpen(true);
    };

    const hide = () => {
        setOpen(false);
        console.log(open);
    };

    return(
        <div className="portfolio">
                <div className="portfolio-container">
                <h1>Portfolio</h1>
                {itemData && (
                matches2 ? 
                    <ImageList className='portfolio-list' sx={{ width: "100%", height: 'auto'}} cols={1} rowHeight={'50%'} gap={'2rem'}>
                    {itemData.map((item, index) => (
                    <div className="image-container"> 
                        <ImageListItem className='portfolio-list-item' sx={{ width: 400, minWidth:"25%", height: 400, minHeigh: "25%", margin:"0 auto" }}key={item.img}>
                            <img
                              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                              alt={item.title}
                              id={index}
                              loading="lazy"
                              onClick={enlarge}
                            />
                        </ImageListItem>
                    </div>))}    
                </ImageList> : (
                    matches ? (
                    <ImageList className='portfolio-list' sx={{ width: '80%', minWidth:"830px", height: 'auto' }} cols={2} rowHeight={'50%'} gap={'1rem'}>
                    {itemData.map((item, index) => (
                    <div className="image-container"> 
                        <ImageListItem className='portfolio-list-item' sx={{ width: "50%", minWidth: 400, minHeight: 400 }}key={item.img}>
                            <img
                              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                              alt={item.title}
                              id={index}
                              loading="lazy"
                              onClick={enlarge}
                            />
                        </ImageListItem>
                    </div>))}    
                </ImageList> ) : (
                    <ImageList className='portfolio-list' sx={{ width: '80%', height: 'auto' }} cols={3} rowHeight={'50%'} gap={'2rem'}>
                    {itemData.map((item, index) => (
                    <div className="image-container">
                        <ImageListItem className='portfolio-list-item' sx={{ width: 400, height: 400 }}key={item.img}>
                            <img
                              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                              alt={item.title}
                              id={index}
                              loading="lazy"
                              onClick={enlarge}
                            />
                        </ImageListItem>
                    </div>))}
                </ImageList>))
                )}
            </div>

           { open && 
            <div className="popup-container" onClick={hide}>
                <div className='pop-up-image-container' >
                    <img className='popup__image' src={zoom} alt={title} />
                </div>
            </div>} 

        </div>
    )
}

export default Portfolio;