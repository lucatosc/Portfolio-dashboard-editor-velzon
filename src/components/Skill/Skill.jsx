import {React, useEffect, useState} from 'react';

import TechSkills from './TechSkills';
import { makeStyles } from '@material-ui/core';

import OtherSkills from './OtherSkills';
import PageHeader from '../PageHeader';

const useStyles =makeStyles((theme) =>({
  skillContainer:{
    display:"flex",
    marginTop:"7vh",
    height:"72vh",
    width:"100%",
    justifyContent:"space-around"

  }
}))
const Skill = () => {
  const classes = useStyles() 

  
  return (
    <div>
        <PageHeader title="Skills"/>
        <div className={classes.skillContainer}>
          <TechSkills/>
          <OtherSkills/>
        </div>
        
          

    </div>
    );
}
export default Skill 



