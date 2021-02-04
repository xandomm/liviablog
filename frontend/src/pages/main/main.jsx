import Header from '../../components/header'
import ECO from '../../img/brancalogo.png'
import './main.css'
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {

      '& > *': {
        right: 10,
        margin: theme.spacing(0),
        marginRight: theme.spacing(1),
        width: '100%',
        height: '100%',
      },
    },
  }));
export default (props)=>{
    const classes = useStyles();
    return(<div>
        <Header/>
<div className="apresentacao">
    <div className="primeiralogo"><img src={ECO}></img></div>
    <div className="segundalogo" ><div  className={[classes.root, 'alinhar']}><Paper elevation={3} >
        
        
        <br/>
        
        <h1> PORQUE O CARA DEVE PARAR A VIDA DELE PRA VER SEU SITE</h1>
        <p>coloque infos ou nao se quiser

        </p>
        <br/>
  
   <button  className="btn butao"> <h2>NAVEGUE PRA OUTRO LUGAR</h2> </button>
   
   <br/><br/><br/>
   
   <div>

   </div>
   </Paper></div> </div>
</div>





       <button className="btn-outline-success btn">BORA PORRA</button>
    </div>)
}