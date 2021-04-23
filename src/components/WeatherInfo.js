import { FormControlLabel, Grid, Radio, Typography, RadioGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MoreHorizIcon from '@material-ui/icons/MoreHorizOutlined';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTemperatureWiseCalculation } from '../utils/weatherHelper';
import { setSelectedIndex, setTempUnit } from '../redux/actions/weatherActions';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import useDeviceDetect from '../utils/useDeviceDetect';
import { useEffect, useState } from 'react';
import { getDisplayableTempIndex } from '../utils/globalFunctions';

function WeatherInfo(props){

    const temp_unit = useSelector((state)=>state.weather?.temp_unit);
    const selected_index = useSelector((state)=>state.weather?.selected_index);
    const cardsData = useSelector((state)=>state.weather?.data?.cardsData, shallowEqual);
    const page_size = useSelector((state)=>state.weather?.page_size);
    const [displayableIndex, setDisplayableIndex] = useState([]);

    const dispatch = useDispatch();
    const {isMobile} = useDeviceDetect();
    const useStyles = makeStyles({
        root: {
          maxWidth: '100vw'
        },
        radio: {
            marginTop:'2%'
        },
        rotate: {
            transform: 'rotate(180deg)'
        },
        arrowIcon: {
            fontSize:60
        },
        cardBorder: {
            border:'2px solid black'
        }
      });

      useEffect(()=>{
        setDisplayableIndex(getDisplayableTempIndex(selected_index, page_size, displayableIndex));
      },[])

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
    return props?.data && (    
        <>
        
        <RadioGroup aria-label="temperature unit selector" name="temperature" value={temp_unit} onChange={handleChange}>
        <Box display="flex" px={isMobile?4:10} py={isMobile?1:3}>
                <Box flexGrow={1}>  
                    <FormControlLabel value="celcius" control={<Radio color='primary'/>} label="Celcius" />
                </Box>
                <Box >
                    <FormControlLabel  value="fahrenheit" control={<Radio color='primary'/>} label="Fahrenheit" />
                </Box>
            </Box>
        </RadioGroup>
        <Box display="flex" px={isMobile?1:8} py={isMobile?0:3}>

            <Box  flexGrow={1} >
            {
                selected_index>0 && (<ArrowRightAltIcon onClick={prevClick} color="primary" className={clsx(classes.rotate, classes.arrowIcon)}/>)
            }
            </Box>
            <Box >
            {
                cardsData[selected_index+1]?.date && (<ArrowRightAltIcon onClick={nextClick} color="primary" className={classes.arrowIcon}/>)
            }
            </Box>
        </Box>
        <Grid container  spacing={2} justify={'center'} className={classes.root}>
            {
                props.data.map((value, key)=>{
                    return displayableIndex.includes(key)? (
                        <Grid item key={value.date}>
                            <Card className={clsx(selected_index===key && classes.cardBorder)}>
                                <CardContent>
                                    <Typography variant="body2" component="p">
                                    Temp: <span dangerouslySetInnerHTML={{__html: getTemperatureWiseCalculation(value.avg_temp, temp_unit)}}></span>
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