
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import About from "./components/About"
import {CssBaseline, makeStyles} from "@material-ui/core"
import { Route, Routes} from "react-router-dom"

const useStyles = makeStyles((theme) =>({
  mainContent:{
    paddingLeft: "17%",
    justifyContent: "center",
    marginTop: "94px",
    paddingTop: "2vh",
    width: "100%",
    backgroundColor:"#F5F5F5",
    zIndex: "-1",
    [theme.breakpoints.down("md")]:{
      paddingLeft:"0" 
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "60px",
    }
  }
}))

function App() {
  const classes = useStyles()
  return (
    
    <div styles={{display:"flex"}}>  
        <Sidebar />
          <div className={classes.mainContent}>
            <Header />
            <Routes>
                <Route index element={<Dashboard/>}/>
                <Route path="/about" element={<About/>}/> 
            </Routes>
          </div>
        <CssBaseline />        
      </div>  
    
  );
}


export default App 