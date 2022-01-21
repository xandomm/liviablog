/* eslint-disable jsx-a11y/alt-text */
import Header from '../../components/header'
import ECO from '../../img/newlogo.png'
import './main.css'
import Paper from '@material-ui/core/Paper';
import Lottie from './lottie'
import { makeStyles } from '@material-ui/core/styles';
import Medias from './medias';
import Logo2 from '../../img/logo3.png'
import Livia from '../../img/livia.png'
import Gabriela from '../../img/gabriela.png'
import Blog2 from '../blog/blog2'

import Form from '../contato/form'
import Services from './Services';
import Review from './Review';

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
// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{
    const classes = useStyles();
    return(<div className="bg-bege">
        <Header/>
<div className="apresentacao">

 
 
    <div className="primeiralogo" ><img src={Logo2}></img></div>
    <div className="segundotxt"><h2>Uma consultoria que vai além dos números</h2></div>
   
</div>





<div className='txt-p'>
  <h1>CONHEÇA A NOSSA HISTÓRIA</h1>
   <h4> Somos Gabriela e Lívia, duas doutoras em economia, que decidiram usar o conhecimento e a paixão pelo mundo das finanças para transformar a relação das pessoas com o dinheiro. Juntas, criamos o Economia com Objetivo, com o intuito de levar um conhecimento que vai muito além dos números, para que você consiga lidar com as suas finanças de modo descomplicado. Em outras palavras, queremos que as pessoas sonhem e sejam capazes de realizar!
</h4>
<br/><br/><br/><br/><br/><br/><br/>

 </div>
<div className="bg-bege">
  <div className='txt-p'>
    <h1 className="txt-p">SOBRE NÓS</h1>
  </div>


<div className="txt-intro">
  <div className="livia">
  <img class="rounded-circle" alt="50x50" src={Gabriela}
         />
    <h2>Lívia Melo</h2>
  	<p>Consultora Financeira do Economia com Objetivo e professora no Centro Universitário Mário Palmério. Graduação e Mestrado pela Universidade Federal de Uberlândia e Doutorado pela Universidade de São Paulo.
</p>
  </div>
<div className="gabriela">
<img class="rounded-circle" alt="50x50" src={Livia}
         />
<h2>Gabriela Aidar</h2>
<p>
Consultora Financeira do Economia com Objetivo, Graduação pela Universidade Presbiteriana Mackenzie, Mestrado e Doutorado pela Universidade Federal de Uberlândia.


</p>
</div>
</div>


</div>
<br/>
<br/>
<br/>
<div className="carta txt-p"><h1 className="txt-p">A CONSULTORIA</h1></div>

<div className="carta">

  <div className="carta-wrapper">
  <div className="icon-carta">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
  </div>
  <h4>DIAGNÓSTICO FINANCEIRO</h4>
 </div>


  <div className="carta-wrapper">
  <div className="icon-carta">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16">
  <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>
  </div>
  <h4>PLANEJAMENTO</h4>
 </div>


  <div className="carta-wrapper">
  <div className="icon-carta">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
  </div>
  <h4>PLANO DE AÇÃO</h4>
 </div>

  <div className="carta-wrapper">
  <div className="icon-carta">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
</svg>
  </div>
<h4>PROTEÇÃO AO PATRIMÔNIO</h4>
 </div>
 
 <div className="carta-wrapper">
  <div className="icon-carta">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-piggy-bank-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199zm-8.999-.65A6.613 6.613 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 1 0 .286-.958A7.601 7.601 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962zM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"/>
</svg>
  </div>
<h4>APOSENTADORIA</h4>
 </div>
 <br/>
 </div>



<div className='txt-p '>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
  <p>
  O Economia com Objetivo é uma empresa especializada em prestar consultoria em finanças pessoais. Nós te ajudamos a melhorar a relação com o dinheiro para que você tenha qualidade de vida no presente e futuro!

Te auxiliamos a montar um planejamento para que os seus sonhos e objetivos se tornem realidade! 

Com a consultoria pensamos em diferentes cenários e fornecemos informações para você tomar as melhores decisões e viver uma vida planejada! </p></div>
<Blog2/>
<br/>
<br/>
<Services />
<br/>
<br/>
<br/>
<br/>
<Review />
<Form/>
<br/>
<br/><br/>
<br/>
<br/><br/><br/>
<br/><br/>
<br/>
<br/><br/>
<br/>
<br/><br/><br/>
<br/><br/>
<div className="parte2"></div>
<Medias/>




   
    </div>)
}