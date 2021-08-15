import Logo from '../img/dark.svg'
import LogoGa from '../img/gatsby.svg'
import LogoRe from '../img/redux.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import '../Style.css';




const Home = () => {
  return ( <>
   <div className="container">
     <div className="row row-cols-1 row-cols-sm-2">
      {/* room for explanation about the app */}
     <div className="col order-last order-sm-first">
      <h2 className="fw-bold lh-1 mb-3">app name:coding project</h2>
      <p className="lead">describe the project</p>
      <ul className="fa-ul pt-2 checklist">
        <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>text</li>
        <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>text</li>
        <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>text</li>
      </ul>
      <button className="btn btn-outline-dark btn-lg px-4 me-md-2">try it out</button>
      <h5 className="fw-bold mt-5">
        <div className="d-flex">
          <div className="row gx-3">
          <div className="col">
            <li style={{color:' #61dbfb'}}className="fab fa-react fa-4x"></li></div>
            <div className="col"><li style={{color:'#264de4'}}className="fab fa-css3-alt fa-4x"></li></div>
            <div className="col"><li style={{color:'#e34c26'}}className="fab fa-html5 fa-4x"></li></div>
            <div className="col"><li style={{color:'#563d7c'}}className="fab fa-bootstrap fa-4x"></li></div>
            
            <div className="col"><img src={LogoGa} height='75px' width='75px'/></div>
            <div className="col"><img src={LogoRe} height='75px' width='75px'/></div>
          </div>
        </div>
      </h5>
     </div>
     {/* room for the logo */}
     <div className="col">
        <img src={Logo}  className='img-fluid center-block d-block mx-auto'/>
     </div>
     </div>
    
   </div>

</>);
}
 
export default Home;