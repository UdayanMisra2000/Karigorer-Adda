import { Link } from 'react-router-dom';
import './footer.css';

function App() {
  return (
<>

<footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><Link to="/about-us">about us</Link></li> 
  	 				<li><Link to="/service">customer services</Link></li>
  	 				<li><Link to="/privacy_policy">privacy policy</Link></li>
					<li><Link to="/help">help centre</Link></li>
					<li><Link to="/terms_and_conditions">terms & condition</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><Link to="/faq">FAQ</Link></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>join us</h4>
  	 			<ul>
  	 				<li><Link to="/careers">careers</Link></li>
					<li><Link to="/contact-us">contact us</Link></li>
  	 				<li><Link to="/blogs">blogs</Link></li>
  	 				<li><Link to="/projects">projects</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="https://www.facebook.com/ishita.pahari.39" target="_blank"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="https://www.linkedin.com/in/ishita-pahari-aa16841a9/" target="_blank"><i className="fab fa-twitter"></i></a>
  	 				<a href="https://www.facebook.com/dig.dasgupta/" target="_blank"><i className="fab fa-instagram"></i></a>
  	 				<a href="https://www.linkedin.com/in/udayan-misra-1297161a2/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
</>
  );
}

export default App;