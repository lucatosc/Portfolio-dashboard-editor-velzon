import {React, useState} from 'react'

import {makeStyles, Box, Typography, Grid, Avatar, Chip, IconButton, Collapse} from "@material-ui/core";
import {Event, MoreHoriz, Delete, Edit, Publish, Cancel} from "@material-ui/icons";
import EditEducation from './EditEducation';

const useStyles = makeStyles((theme) => ({
    buttonStyle:{
        marginTop:"20px",
        left:"90%",
        [theme.breakpoints.down("sm")]: {
            left:"80%"
        }
    },
    dataContainer:{
        whiteSpace: 'nowrap',
        display:"flex",
        alignItems:"center",
        height: "10vh",
        width: "100%",
        backgroundColor: 'white',
        marginTop:"20px",
        transition: "all 0.2s cubic-bezier(.25,.8,.25,1)",
        '&:hover': {
            opacity: [0.9, 0.8, 0.7],
            boxShadow: "0 5px 10px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.12)",
        },
    },
    avatarContainer:{
        marginLeft:"20px",
        width:"5%",
        // [theme.breakpoints.down("sm")]:{
        //     display:"none"
        // }
    },
    schoolName:{
        display:"inline-block",
        width:"10%",
        marginRight:"50px",
        fontWeight:"bold",
        overflow:"hidden",
        textOverflow: "ellipsis",
        [theme.breakpoints.down("md")]:{
            display:"none"
        }
    },
    date:{
        display:"flex",
        alignItems:"center",
        width: "25%",
        [theme.breakpoints.down("md")]:{
            display:"none"
        }
    },
    degreeBox:{
        width:"10%",
        marginLeft:"50px",
        display:"flex",
        alignItems:"center",
        [theme.breakpoints.down("sm")]:{
            marginLeft:"100px",
        }
    },
    statusContainer:{
        marginLeft:100,
        display:"flex",
        alignItems:"center",
        borderRadius:20,
        [theme.breakpoints.down("sm")]:{
            display:"none"
        }
    },
    optionsBox:{
        display:"flex",
        marginLeft:"12%",
        [theme.breakpoints.down("md")]:{
            marginLeft:"0%",   
        }
    },
   
}))

const EducationData= (props) => {
    const [modal, setModal] = useState(false);
    const handleModal = () => setModal(!modal);
    const [openOptions, setOpenOptions] = useState(false)
    const handleClick = () => {setOpenOptions(!openOptions);};
    const classes = useStyles()
    return (
        <Box className={classes.dataContainer} boxShadow={1}>
            <Grid container className={classes.avatarContainer}>
                <Grid item>
                    <Avatar>AUL</Avatar>
                </Grid >
            </Grid> 
            <Typography variant="body1" className={classes.schoolName}>
                {props.data.instName}
            </Typography>
            <Box className={classes.date}>
                <Event fontSize="small" />
                <Typography variant="body1" style={{margin:"0px 0px 2px 5px",}}>
                    {props.data.startDate+ " - "+props.data.endDate}
                </Typography>
            </Box>
            <Box className={classes.degreeBox}>
                <Typography style={{margin:"0px 0px 2px 5px"}} variant="body1">
                    {props.data.degree}
                </Typography>
            </Box>
            <Box className={classes.statusContainer}>
                <Chip label={props.data.active ? "active" : "inactive" } color={props.data.active ? "primary": "secondary"} />    
            </Box>
            <Box className={classes.optionsBox}>
                <Collapse in={openOptions} timeout="auto" >
                    <IconButton>
                        <Delete fontSize="small"/>
                    </IconButton>
                    <IconButton onClick={handleModal}>
                        <Edit fontSize="small"/>
                    </IconButton>
                    {props.data.active ? "": <IconButton>
                        <Publish fontSize="small"/>
                    </IconButton>}
                </Collapse>
                <IconButton onClick={handleClick}>
                    {openOptions ? <Cancel fontSize="small"/> : <MoreHoriz fontSize="small"/> }
                </IconButton>
            </Box>
            <EditEducation
                data={props.data}
                modal={modal}
                handleModal={handleModal}
            />
        </Box>        
    )
}
export default EducationData