import Tabs from './component/navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './component/Home'
import Application from './component/Application'
import Code from './component/Code'
import Git from './component/Git'
import About from './component/About'
import Footer from './component/Footer'
import './Style.css'
import {Helmet} from 'react-helmet'


function App() {
  
  return (
    <div className="page-container">
      <div className="content-wrap">
         <Helmet>
        <title>My Title</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <Router>
       <Tabs/>
       <Switch>
         <Route exact path='/'>
           <Home/>
         </Route>
         <Route path='/App'>
           <Application/>
         </Route>
         <Route path='/Code'>
           <Code/>
         </Route>
         <Route path='/Git'>
           <Git/>
         </Route>
         <Route path='/About'>
           <About/>
         </Route>
       </Switch>
     <Footer/>
    </Router>
      </div>
    </div>
     
     

  );
}

export default App;
