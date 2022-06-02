import React from "react";
import Banner from '../templates/banner';
import CallToAction from '../templates/callToAction';
const AboutUs = () => {
	const heading="About Us";
  	const titleText="Weballures Technologies believes in developing live versions of the  client’s business vision.";
  	const bgImage="images/weballures-about.jpg";
	return(
		<>
		<Banner heading= { heading } titleText= { titleText } bgImage= { bgImage }/>
		<div className="clearfix"></div>
      	<CallToAction />
		</>
	);
}
export default AboutUs;