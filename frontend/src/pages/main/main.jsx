import Header from '../../components/header'
import ECO from '../../img/newlogo.png'
import './main.css'
import Paper from '@material-ui/core/Paper';
import Lottie from './lottie'
import { makeStyles } from '@material-ui/core/styles';
import Medias from './medias';
import Logo2 from '../../img/logo2.png'
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
export default (props)=>{
    const classes = useStyles();
    return(<div className="bg-bege">
        <Header/>
<div className="apresentacao">
 <br/>
 <br/>
 <br/>
 <div className='segundalogo'><h1 >
   PLANEJAMENTO &nbsp;<h1 style={{color: '#9A4956'}}>MUITO </h1> ALÉM DOS NÚMEROS
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





<div className='txt-p'>
   <h2>Somos Gabriela e Lívia, duas doutoras em economia, que decidiram usar o conhecimento e a paixão pelo mundo das finanças para transformar a relação das pessoas com o dinheiro. Juntas, criamos o Economia com Objetivo, com o intuito de levar um conhecimento que vai muito além dos números, para que você consiga lidar com as suas finanças de modo descomplicado. Em outras palavras, queremos que as pessoas sonhem e sejam capazes de realizar!</h2>
<br/>

 </div>
<div className="bg-azul">
  <h1 className="txt-p1">Nossa equipe</h1>
<div class="card img-menins ">
  <img src={Meninasj} class="card-img"style={{border: 'none'}} />
  <div class="card-img-overlay">

 
  </div>

</div>
<div className="txt-intro">
  <div className="livia">
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
<div className="carta txt-p">
  <button className="btn btn2"><h1>Como atuamos?</h1></button>
  <br/>
<h3>Após um diagnóstico financeiro, te auxiliamos a montar um planejamento para que os seus sonhos e objetivos se tornem realidade! Se você estiver endividado, não se preocupe, montaremos um plano de ação para quitarmos uma a uma.
 </h3>
 <br/>
 <h2 >
   Além disso, nos preocupamos com a proteção de patrimônio. 
 </h2>
 <br/>
 <h3> Tudo isso sem esquecer de planejar a sua aposentadoria, para que você não necessite depender de outras pessoas ou instituições no futuro.
 
 Com a consultoria  pensamos em todas as possibilidades e fornecemos informações para você tomar as melhores decisões e viver uma vida planejada! 
 
 E nós, Lívia e Gabriela somos as responsáveis por tudo isso!</h3>

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
<div className="parte2">
<Medias/>
</div>



   
    </div>)
}