
import { BrowserRouter, Switch,Route} from 'react-router-dom' 

import main from './pages/main/main'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default _=>{
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={main} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}