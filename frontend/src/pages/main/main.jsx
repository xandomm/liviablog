/* eslint-disable jsx-a11y/alt-text */
import Header from '../../components/header'
import ECO from '../../img/newlogo.png'
import './main.css'
import Paper from '@material-ui/core/Paper';
import Lottie from './lottie'
import { makeStyles } from '@material-ui/core/styles';
import Medias from './medias';
import Logo2 from '../../img/logo3.png'
import Livia from './Livia'
import Meninasj from '../../img/menina1.jpeg'
import Blog2 from '../blog/blog2'

import Form from '../contato/form'

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
    <div className="segundotxt"><h2><i>Uma consultoria que vai além dos números</i></h2></div>
   
</div>





<div className='txt-p'>
  <h1>Conheça nossa história</h1>
   <h4>Somos Gabriela e Lívia, duas doutoras em economia, que decidiram usar o conhecimento e a paixão pelo mundo das finanças para transformar a relação das pessoas com o dinheiro. Juntas, criamos o Economia com Objetivo, com o intuito de levar um conhecimento que vai muito além dos números, para que você consiga lidar com as suas finanças de modo descomplicado. Em outras palavras, queremos que as pessoas sonhem e sejam capazes de realizar!</h4>
<br/>

 </div>
<div className="bg-bege">
<h1 className="txt-p1">Sobre nós</h1>

<div className="txt-intro">
  <div className="livia">
  <img class="rounded-circle" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
          data-holder-rendered="true"/>
    <h2>Lívia Melo</h2>
  	<p>Consultora Financeira do Economia com Objetivo e professora no Centro Universitário Mário Palmério. Graduação e Mestrado pela Universidade Federal de Uberlândia e Doutorado pela Universidade de São Paulo.
</p>
  </div>
<div className="gabriela">
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
<div className="carta txt-p"><h1 className="txt-p">A consultoria</h1></div>

<div className="carta">

  <div className="carta-wrapper">
  <div className="icon-carta">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16">
  <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
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
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16">
  <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>
  </div>
  <h4>PLANO DE AÇÃO</h4>
 </div>

  <div className="carta-wrapper">
  <div className="icon-carta">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16">
  <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>
  </div>
<h4>PROTEÇÃO AO PATRIMÔNIO</h4>
 </div>
 
 <div className="carta-wrapper">
  <div className="icon-carta">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16">
  <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>
  </div>
<h4>APOSENTADORIA</h4>
 </div>
 <br/>
 </div>



<div className='txt-p '><button className="btn btn1">  <h1>Confira nosso blog</h1></button>

  <br/>

 </div>
<Blog2/>
<br/>
<br/>
<br/>
<br/>
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