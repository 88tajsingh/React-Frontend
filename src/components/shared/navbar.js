import React, {useState, useEffect} from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import Home from "../home";
import Services from "../services";
import Contact from "../contact";
import Portfolios from "../pages/portfolio";
import AboutUs from "../pages/aboutUs";
const NavigationRoutes=()=>{
	const navData = [	
		{
		   id  : 1,
		   name: "Home",		    
		   to  : "/"
		},
		{
		   id   : 2,
		   name : "About Us",		   
		   to   : "/about-us"
		},
		{
		   id   : 3,
		   name : "Services",		 
		   to   : "/services"
		}			
	];

	const [scroll, setScroll] = useState(0)

  	useEffect(() => {
	   document.addEventListener("scroll", () => {
	      const scrollCheck = window.scrollY > 100
	      if (scrollCheck !== scroll) {
	        setScroll(scrollCheck)
	      }
	   })
  	})

	return(
		<>
			<header id="homesticky" className={scroll ? "sticky-top" : ""}>
				<div className="site-container">
					<nav className="navbar navbar-expand-sm bg-white navbar-light">
						<div className="container-fluid p-0 m-0">
							<Link to="/" className="navbar-brand" ><img src="/images/logo_pvt.png" alt="Weballures" /></Link>
						   {/*<a className="navbar-brand" href="#">Logo</a>*/}
						   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
						      <span className="navbar-toggler-icon"></span>
						   </button>
						   <div className="collapse navbar-collapse" id="collapsibleNavbar">
					      	<ul className="navbar-nav ms-auto">
					      		{navData && navData.map((curItem) => {
							      	return (
							      		<li className="nav-item" key={curItem.id}>
								            <NavLink to={curItem.to}  className={({isActive}) => (isActive ? "active nav-link" : 'nav-link')} >{curItem.name}</NavLink>
								         </li>
								    	)
									})}    
					      	</ul>
						   </div>
						   <Link to="/contact" className="view-btn active contactbtnn">Contact</Link>
						</div>
					</nav>
				</div>
			</header>
			<Routes>
	         	<Route exact path="/" element={<Home />} ></Route>
	         	<Route exact path="/about-us" element={<AboutUs />} ></Route>	         	
	         	<Route exact path="/services" element={<Services />} ></Route>
	         	<Route exact path="/contact" element={<Contact />} ></Route>
	         	<Route exact path="/portfolio" element={<Portfolios />} ></Route>
	         	
	     	</Routes>
	   </>
	)
}
export default NavigationRoutes;