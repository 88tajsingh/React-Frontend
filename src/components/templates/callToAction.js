import React from "react";
const CallToAction = () => {
	return(
		<section id="sub-bg" className="calltoaction" style={{ backgroundImage: 'url(images/sub-banner.png)'}}>
		    <div className="site-container">
		      <div className="sub-bginner">
		        <p id="sub-banner">We Visualize &amp; Conceptualize <span>Creative Stories for Brand</span></p>
		        <div className="sub-bginnerbtn">
		          <button className="sub-btn">
		            <a href="/" title="View Full Portfolio">View Full Portfolio</a>
		          </button>
		        </div>
		      </div>
		    </div>
		</section>
	);
}
export default CallToAction;