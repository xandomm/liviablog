import React, {useState} from 'react';
import axios from 'axios';



const backendURL= process.env.REACT_APP_API_URL

export default (props)=>{
    
    const [user, setUser] = useState({
        nome: "",
    numero: null,
    
    email: "",
    mensagem: ""
    })

    const handleOnChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
      };
    
    const onSubmit = ()=> {
        const data= JSON.stringify(user);
 
        axios.post(backendURL+'/api/cadastro', user, {headers: { 'Content-Type': 'application/json'}})
        .then(res=>{
        window.alert('Em breve entraremos em contato contigo!')
        setUser({
            nome: "",
        numero: null,
        
        email: "",
        mensagem: ""
        })  
        }        ).catch((err) => {
            console.log("AXIOS ERROR: ", err);
          })
    }
    console.log(user)
    
    return(
        <div className='formulario'>
        <div class="container contact">
            <div class="row">
                <div class="col-md-3">
                    <div class="contact-info">
                        <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
                        <h2>Entre em contato</h2>
                        <h4>Será um prazer poder te atender</h4>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="contact-form">
                        <div class="form-group">
                        <label class="control-label col-sm-2" for="fname">Nome:</label>
                        <div class="col-sm-10">          
                            <input type="text" class="form-control" id="fname" placeholder="Nome completo" name="nome" required onChange={handleOnChange} value={user.nome}/>
                        </div>
                        </div>
                        <div class="form-group">
                        <label class="control-label col-sm-2" for="lname">Número:</label>
                        <div class="col-sm-10">          
                            <input type="number"  pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" class="form-control" id="lname" placeholder="Não se esqueça do DDD" required name="numero" onChange={handleOnChange} value={user.numero}/>
                        </div>
                        </div>
                        <div class="form-group">
                        <label class="control-label col-sm-2" for="email">Email:</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="email" required placeholder="Digite seu email" name="email"  onChange={handleOnChange} value={user.email}/>
                        </div>
                        </div>
                        <div class="form-group">
                        <label class="control-label col-sm-2" for="comment">Mensagem:</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" rows="5" required id="comment" name="mensagem" onChange={handleOnChange} value={user.mensagem}></textarea>
                        </div>
                        </div>
                        <div class="form-group">    
                        <br/>    
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" onClick={onSubmit} class="btn btn-default">Enviar</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
        </div>
    )
}