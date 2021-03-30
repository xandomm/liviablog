import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


import LinkedInIcon from '@material-ui/icons/LinkedIn';


import './main.css'


export default ()=>{
    return(<div className="mediaSocial">
      <a href="https://www.instagram.com/economiacomobjetivo/"><InstagramIcon style={{ fontSize: 50,  color: "white" }}/></a>  
       <a href="https://www.facebook.com/Economia-com-Objetivo-113248517200924/?ref=bookmarks"><FacebookIcon style={{ fontSize: 50 ,  color: "white"}}/></a> 
     <a href="https://www.linkedin.com/company/economiacomobjetivo/?viewAsMember=true"><LinkedInIcon style={{ fontSize: 50,  color: "white" }}/></a>   

    </div>)
}