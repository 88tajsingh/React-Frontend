import React from "react";
const Testimonial = () => {
	const handleChange=()=>{
		console.log("hello");
	}
	return(
		<div className="site-container client">
			<h5 id="client-text">What Our Clients Say</h5>
			<p id="client-p">We aspire to become the most reputed Web Designing and Development Company by delivering Web Designs, PHP, Android App Development Services to the clients worldwide</p>
			<div className="videoWrapper videoWrapper169 js-videoWrapper">			    
			    <iframe className="videoIframe js-videoIframe" src="" frameBorder="0" allowtransparency="true" allowFullScreen="" data-src="https://www.youtube.com/embed/iuyZf8__gqA?start=3"></iframe>
			   
			    <button className="videoPoster js-videoPoster" style={{backgroundImage: 'url(images/poster-new.png)'}}>Play video</button>
			</div>
			<div id="rev">
				<div className="container">
					<input type="radio" name="nav" id="first" checked="" onChange={handleChange}/>
				  	<input type="radio" name="nav" id="second" onChange={handleChange}/>
				  	<input type="radio" name="nav" id="third" onChange={handleChange} />
				  	<input type="radio" name="nav" id="four" onChange={handleChange} />

				  	<label htmlFor="first" className="first"></label>
				  	<label htmlFor="second" className="second"></label>
				  	<label htmlFor="third" className="third"></label>
				  	<label htmlFor="four" className="four"></label>
				  	<div className="one slide">
					    <blockquote>
					      I have successful working with team weballures. They were having original ideas, always on time, clear and excellent communication. I have already recommended then in our network already.
					    </blockquote>
				    	<h2>-Paul Arts</h2>
				  	</div>				  
				  	<div className="two slide">
					    <blockquote>
					      Thanks for the perfect and excellent communication at work. The work done by them is always well designed, developed, clean and easy to use. I am very happy to outsource the work to them as a valuable resource.
					    </blockquote>
				   		<h2>-DJ Rich Conway</h2>
				  	</div>
				  
					<div className="three slide">
					    <blockquote>I have been working with weballures technologies for a period of 8 months and have excellent experience working with the responsible team. Highly recommended agency.
					    </blockquote>
					    <h2>-Robert Williams</h2>
					 </div>
				  	<div className="four slide">
					    <blockquote>
					       I have known weballures for more than 3 years and have wonderfull experience working with their team, They are reliable and i have hired them for successfull projects. I hope to work with them in future.
					    </blockquote>
				    	<h2>-Mike McClue</h2>
				  	</div>
				</div>
			</div>
		</div>
	);
}
export default Testimonial