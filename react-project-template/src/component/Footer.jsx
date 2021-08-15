import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import Logo from '../img/classW.png'
const Footer = () => {
  return ( <div >
       <footer className="bg-dark main-footer mt-auto py-3 sticky-footer">
           <div className="container-fluid text-center">
              <img src={Logo} id='footerHeight' />
           </div>
       </footer>
      
  </div> );
}
 
export default Footer;