
import { BrowserRouter, Switch,Route} from 'react-router-dom' 

import main from './pages/main/main'
import dash from './dashboard/Components/Main'
import teste from './pages/main/test'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default _=>{
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={main} />
                    <Route exact path="/dashadmi" component={dash} />
                    <Route path ="/teste" component={teste}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}