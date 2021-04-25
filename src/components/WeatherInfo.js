import { FormControlLabel, Grid, Radio, Typography, RadioGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MoreHorizIcon from '@material-ui/icons/MoreHorizOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { getUnitWiseCalculation } from '@/utils/weatherHelper';
import { setSelectedIndex, setTempUnit } from '@/redux/actions/weatherActions';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import useDeviceDetect from '@/utils/useDeviceDetect';
import { useEffect, useState } from 'react';
import { weatherCssObj } from '@/utils/weatherHelper';
import { getDisplayableTempIndex } from '@/utils/weatherHelper';

function WeatherInfo(props){

    const temp_unit = useSelector((state)=>state.weather?.temp_unit);
    const selected_index = useSelector((state)=>state.weather?.selected_index);
    const page_size = useSelector((state)=>state.weather?.page_size);
    const [displayableIndex, setDisplayableIndex] = useState([]);

    const dispatch = useDispatch();
    const {isMobile, isTablet, isDesktop} = useDeviceDetect();
    const useStyles = makeStyles(weatherCssObj);

      useEffect(()=>{
        setDisplayableIndex(getDisplayableTempIndex(selected_index, page_size, displayableIndex));
      },[isMobile, isTablet, isDesktop])

    const handleChange = (e)=>{
        dispatch(setTempUnit(e.target.value));
    }

    const nextClick = () => {

        dispatch(setSelectedIndex(selected_index+1));
        setDisplayableIndex(getDisplayableTempIndex(selected_index+1, page_size,true,displayableIndex));
    }
    const prevClick = () => {
        dispatch(setSelectedIndex(selected_index-1));
        setDisplayableIndex(getDisplayableTempIndex(selected_index-1, page_size, false, displayableIndex));
    }
    const classes = useStyles();
    const cardsData = props?.data
    return cardsData && (    
        <>
        
        <RadioGroup aria-label="temperature unit selector" name="temperature" value={temp_unit} onChange={handleChange}>
        <Box display="flex" px={isMobile?4:10} py={isMobile?1:3}>
                <Box data-testid="celcius-button"   flexGrow={1}>  
                    <FormControlLabel value="celcius" control={<Radio color='primary'/>} label="Celcius" />
                </Box>
                <Box data-testid="fahrenheit-button">
                    <FormControlLabel  value="fahrenheit" control={<Radio color='primary'/>} label="Fahrenheit" />
                </Box>
            </Box>
        </RadioGroup>
        <Box display="flex" mx={isMobile?1:8} >

            <Box  flexGrow={1} >
            {
                selected_index>0 && (<ArrowRightAltIcon role="button" onClick={prevClick} data-testid="prev-button" color="primary" className={clsx(classes.rotate, classes.arrowIcon)}/>)
            }
            </Box>
            <Box >
            {
                cardsData[selected_index+1]?.date && (<ArrowRightAltIcon role="button" onClick={nextClick} data-testid="next-button" color="primary" className={clsx(classes.arrowIcon)}/>)
            }
            </Box>
        </Box>
        <Grid container  spacing={2} justify={'center'} data-testid="cards-container" className={classes.root}>
            {
                cardsData.map((value, key)=>{
                    return displayableIndex.includes(key)? (
                        <Grid item key={value.date}>
                            <Card className={clsx(selected_index===key && classes.cardBorder)} data-testid="card">
                                <CardContent>
                                    <Typography variant="body2" component="p" data-testid="temp_display_unit">
                                    Temp: {getUnitWiseCalculation(value.avg_temp, temp_unit)}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                    Date: {value.date}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <MoreHorizIcon/>
                                </CardActions>
                            </Card>
                        </Grid>
                    ): null
                })
            }
        </Grid>
        </>
        
    ) || null;
}

export default WeatherInfo;