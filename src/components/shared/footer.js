import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  return(
    <footer id="foot-bg">
      <div className="site-container">
        <div className="footerlets">
          <h5 className="letsheading">Let's talk <span>about your project</span></h5>
          <a href="" title="Request A Quote">
            <FontAwesomeIcon icon={['fas', 'fa-angle-right']} />  
          </a>
        </div>
        <div className="footersinner">
          <div className="foot">
            <h6>Main Links</h6>
            <ul>
              <li><a href="" title="About Us">About Us</a></li>
              <li><a href="" title="Our Work">Portfolio</a></li>
              <li><a href="" title="Career">Career</a></li>
              <li><a href="" title="Insights">Blog/Insights</a></li>
              <li><a href="" title="Contact">Contact</a></li>
            </ul>
          </div>
          <div className="foot foottwo">
            <h6>Services</h6>
            <ul>
              <li><a href="" title="Web and Graphic Design">Web and Graphic Design</a></li>
              <li><a href="" title="Custom Web Development">Custom Web Development</a></li>
              <li><a href="" title="CMS Web Development">CMS Web Development</a></li>
              <li><a href="" title="Ecommerce Web Development">Ecommerce Web Development</a></li>
              <li><a href="" title="Digital Marketing">Digital Marketing</a></li>
              <li><a href="" title="App Development">App Development</a></li>
            </ul>
          </div>

          <div className="foot space footthree">
            <h6>BLOG</h6>
            <ul>
              <li><a href="" title="Signs - Your Current Website Desperately Need A Redesign?">Signs - Your current website desperately need a Redesign?</a></li>
              <li><a href="" title="Measuring Client Satisfaction: Are You Doing It Right?">Measuring Client Satisfaction: Are you doing it right?</a></li>
              <li><a href="" title="CMS - Here Is Why You Need To Give It A Try?">CMS - Here is why you need to give it a try?</a></li>
              <li><a href="" title="It's The Logo Factor!">It's the logo factor!</a></li>
              <li><a href="" title="Web Designing Trends Beyond Any Doubt To Rule In 2018!">Web Designing trends beyond any doubt to rule in 2018!</a></li>
            </ul>
          </div>

          <div className="foot footfour">
            <h6>Contact</h6>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> F-195, Phase 8B, <span id="location">Industrial Area,</span> 
              <span id="sector"> Sector 74,  Mohali</span></li>
              <li><a href="tel:0172-4014-190"><i className="fas fa-phone"></i> 0172-4014-190</a></li>
              <li><a href="mailto:hr@weballures.com"><i className="fas fa-envelope"></i> hr@weballures.com</a></li>
              <li><a href="mailto:hr.weballures@gmail.com"><i className="fas fa-envelope"></i> hr.weballures@gmail.com</a></li>
            </ul>
            <div className="site-social">
              <ul>
                <li><a href="https://www.facebook.com/weballurestechnologies/" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/weballures" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://in.linkedin.com/in/weballures-technologies-4705a4104" title="Linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://www.instagram.com/weballures_technologies/" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCUHiuiTbTvx5-9ezvOorG1Q" title="Youtube"><i className="fab fa-youtube"></i></a></li>
                <li><a href="https://www.behance.net/weballurestechnology" title="Behance"><i className="fab fa-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div id="bottom">
        <p>Copyright 2021 by Weballures Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
      {/*<a href="javascript:" id="return-to-top" style="display: inline;"><i className="fas fa-chevron-up"></i></a>*/}
    </footer>
  );
}
export default Footer;
