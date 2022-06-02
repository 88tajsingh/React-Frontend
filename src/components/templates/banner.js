import React from "react";
const Banner = ({ heading, titleText, bgImage }) => {
	return(		
		<div class="bread weballures-about" style={{ backgroundImage: 'url('+bgImage+')'}}>
			<div class="site-container">
				<div class="banneroutertext">
					<h1>{heading}</h1>
					<h2 class="mast__text js-letters">
						{titleText.split("").map((item, index) => {
						    return <span key={index}>{item}</span>;
						})}					
					</h2>
				</div>
			</div>
		</div>
	);
}
export default Banner;