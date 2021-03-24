import Header from '../../components/header'
import ECO from '../../img/newlogo.png'
import './main.css'
import Paper from '@material-ui/core/Paper';
import Lottie from './lottie'
import { makeStyles } from '@material-ui/core/styles';
import Medias from './medias';
import Logo2 from '../../img/logo2.png'
import Livia from './Livia'
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
 <br/>
 <br/>
 <br/>
 <div className='segundalogo'><h1 >
   CONHECIMENTO &nbsp;<h1 style={{color: '#9A4956'}}>MUITO </h1> ALÉM DOS NÚMEROS
 </h1>
 
 </div>
 <br/>

 <div >

   <h4 className="txtApresent">

   O Economia com Objetivo é uma empresa especializada em prestar consultoria em finanças pessoais. 

Nós te ajudamos a melhorar a relação com o dinheiro para que você tenha qualidade de vida no presente e futuro! 

 </h4>
 <br/> <br/> <br/>
 </div>
 
 
 
 

 
 
 

 
 
    <div className="primeiralogo" ><img src={Logo2}></img></div>
   
</div>
<div className="cards">
<Livia/><Livia/>
</div>
<div className="parte2">
<Medias/>
</div>



   
    </div>)
}