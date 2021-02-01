
import { Router, Switch,Route} from 'react-router-dom' 

import main from './pages/main/main'

export default _=>{
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={main} />
                </Switch>
            </Router>
        </div>
    )
}