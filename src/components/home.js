import React from "react";
import CarouselSlider from './templates/carouselSlider'; 
import ServiceBox from './templates/serviceBox'; 
import PortfolioBox from './templates/portfolioBox';
import CallToAction from './templates/callToAction';
import Testimonial from './templates/testimonial';

const Home = () => {
  const homeSliderData = [ 
    {
      id  : 1,
      titleText: "Specialize in rendering cutting edge IT solutions for small, medium and large enterprises.",
      btnText: "Request a Quote",        
      link  : "/",
      imgUrl: "/images/slider-images/slide-img-1.jpg"
    },
    {
      id   : 2,
      titleText : "The secrets to successful teamwork trust and the accountability. Makes impossible possible.",
      btnText: "Request a Quote",      
      link   : "/",
      imgUrl : "/images/slider-images/slide-img-2.jpg"
    },
    {
      id   : 3,
      titleText : "Delivering Web Designs, PHP, App Development Services to the clients worldwide.",
      btnText: "Request a Quote",    
      link   : "/",
      imgUrl : "/images/slider-images/slide-img-3.jpg"
    }     
  ];
  const servicesData = [ 
    {
      id  : 1,
      serviceName: "Web and Graphic Design",
      serviceUrl: "/",        
      serviceIconImage  : "images/services/service-first-icon.png",
      serviceDesc: "Web Layouts, Banner Designs, Email Designs, Wireframes, Vector Illustrations, Business Cards, Brochure Designs, Landing page Designs, Responsive Designs."
    },
    {
      id  : 2,
      serviceName: "Custom Web Development",
      serviceUrl: "/",        
      serviceIconImage  : "images/services/service-first-icon.png",
      serviceDesc: "Core PHP, Laravel, YI, Codeigniter, Jquey &amp; Javascript, Custom API Development, Angular JS, Node JS, React JS, Vue JS.."
    },
    {
      id  : 3,
      serviceName: "CMS Web Development",
      serviceUrl: "/",        
      serviceIconImage  : "images/services/cms.png",
      serviceDesc: "Wordpress, Weebly, Webydo, Homestead, Shopify, Wix, Squarespace."
    },
    {
      id  : 4,
      serviceName: "Ecommerce Web Development",
      serviceUrl: "/",        
      serviceIconImage  : "images/services/online-shop.png",
      serviceDesc: "Magento, Shopify, Bigcommerce, Business Catalyst, Drupal, Joomla, Opencart, Prestashop."
    },
    {
      id  : 5,
      serviceName: "Digital Marketing",
      serviceUrl: "/",        
      serviceIconImage  : "images/services/service-thrd-icon.png",
      serviceDesc: "Search Engine Optimization, Search Engine Marketing, Pay Per Click, Adwords, Content Writing and posting."
    },
    {
      id  : 6,
      serviceName: "App Development",
      serviceUrl: "/",        
      serviceIconImage  : "images/services/service-fourth-icon.png",
      serviceDesc: "Android Native, IOS Native Apps, Hybrid Applications, Building API’s for Apps."
    },       
  ];
  const PortFoloiData = [ 
    {
      id  : 1,      
      category: "WebDesign",
      categoryTitle: "Web Design",
      portFolioImg: "images/portfolio/all-state-homepage.jpg",
      preview: false
    },
    {
      id  : 2,      
      category: "WebDesign",
      categoryTitle: "Web Design",
      portFolioImg: "images/portfolio/amber-beauty-homepage.jpg",
      preview: false,
    },
    {
      id  : 3,      
      category: "WebDesign",
      categoryTitle: "Web Design",
      portFolioImg: "images/portfolio/eyetopia-homepage.jpg",
      preview: false,
    },
    {
      id  : 4,      
      category: "WebDesign",
      categoryTitle: "Web Design",
      portFolioImg: "images/portfolio/hampton-homepage.jpg",
      preview: false,
    },
    {
      id  : 5,      
      category: "GraphicDesign",
      categoryTitle: "Graphic Design",
      portFolioImg: "images/portfolio/eyelash-logo.jpg",
      preview: false,
    },
    {
      id  : 6,      
      category: "GraphicDesign",
      categoryTitle: "Graphic Design",
      portFolioImg: "images/portfolio/logo2.jpg",
      preview: false,
    },
    {
      id  : 7,      
      category: "GraphicDesign",
      categoryTitle: "Graphic Design",
      portFolioImg: "images/portfolio/sky-housewear.jpg",
      preview: false,
    },
    {
      id  : 8,      
      category: "CustomWebDevelopment",
      categoryTitle: "Custom Web Development",
      portFolioImg: "images/portfolio/sky-housewear.jpg",
      preview: true,
      previewTitle: 'Only Pure Invitation',
      previewLink:'http://onlypureinvitation.com/',
      previewText:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      previewButton:'live Preview',
    },
    {
      id  : 9,      
      category: "CMSWebDevelopment",
      categoryTitle: "CMS Web Development",
      portFolioImg: "images/portfolio/oxidize.jpg",
      preview: true,
      previewTitle: 'Oxidize IT Canada',
      previewLink:'https://www.oxidizeit.ca/',
      previewText:'',
      previewButton:'live Preview',
    },
    {
      id  : 10,      
      category: "CMSWebDevelopment",
      categoryTitle: "CMS Web Development",
      portFolioImg: "images/portfolio/hamptons.jpg",
      preview: true,
      previewTitle: 'Hampton Roads...',
      previewLink:'http://hamptonroadscashhomebuyer.com/',
      previewText:'',
      previewButton:'live Preview',
    },
    {
      id  : 11,      
      category: "CMSWebDevelopment",
      categoryTitle: "CMS Web Development",
      portFolioImg: "images/portfolio/home.jpg",
      preview: true,
      previewTitle: 'Home Abodes',
      previewLink:'https://homeabodes.com/',
      previewText:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      previewButton:'live Preview'
    },
    {
      id  : 12,      
      category: "CMSWebDevelopment",
      categoryTitle: "CMS Web Development",
      portFolioImg: "images/portfolio/we-got.jpg",
      preview: true,
      previewTitle: 'We Got Nuts',
      previewLink:'https://wegotnuts.com/',
      previewText:'',
      previewButton:'live Preview'
    },    
    {
      id  : 13,      
      category: "AppDevelopment",
      categoryTitle: "App Development",
      portFolioImg: "images/portfolio/vauluebit-app.jpg",
      preview: false,    
      previewTitle: 'Valuebit App',
      previewText:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',    
      previewImg:'images/portfolio/vauluebit-layout.jpg',   
      previewButton:'View App Design'
    },
    {
      id  : 14,      
      category: "AppDevelopment",
      categoryTitle: "App Development",
      portFolioImg: "images/portfolio/expertise-app.jpg",
      preview: false,   
      previewTitle: 'Expertise App', 
      previewText:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',   
      previewImg:'images/portfolio/vauluebit-layout.jpg',   
      previewButton:'View App Design'
    },        
  ];

  return (
    <div className="light-green-bg">
      <CarouselSlider sliderData={homeSliderData} />
      <section className="ourworkstart">
        <div className="site-container">
          <marquee>
            <ul className="ourworkinner">
              <li> <img src="images/logo/upwork.png" alt="upwork" title="Upwork" className="bw" /> </li>
              <li> <img src="images/logo/fiverr.png" alt="fiverr" className="bw" title="Fiverr" /> </li>
              <li> <img src="images/logo/peopleperhour.png" title="Peopleperhour" alt="peopleperhour" className="bw" /> </li>
              <li> <img src="images/logo/guru.png" title="Guru" alt="Guru" className="bw" /> </li>
              <li> <img src="images/logo/freelancers.png" title="Freelancer" alt="freelancers" className="bw" /> </li>
            </ul>
          </marquee>
        </div>
      </section>
      <section>
        <div className="site-container" id="serve">
          <h2 className="service-text heading-two">Services We Offer </h2>
          <p className="title-text-p">We aspire to become the most reputed Web Designing and Development Company by delivering Web Designs, PHP, Android App Development Services to the clients worldwide</p>
          <div id="sub-serve">
            {servicesData && servicesData.map((data, index )=> {
              return(
                <ServiceBox key={'servoce-box-'+index} serviceData={data} />
              )
            })}
          </div>
          <button className="view-btn">
            <a href="contact.php" title="Contact Us">Contact Us</a>
          </button>
        </div>
      </section>
      <section className="howwork">
        <div className="site-container">
          <h2 className="howork-text heading-two">Our Approach</h2>
          <p className="title-text-p">Weballures aim to be the best IT Solutions through innovative approach, advancement and a world class work force. We wish to make your business reach out to every hands-on gadget in the world.</p>
          <div className="howworkinner">
            <div className="workleft">
              <div className="howworkdiv"> <img src="images/innerlogoone.png" alt="innerlogoone" />
                <h5 className="workheading">Research 1.</h5>
                <p className="workpara">Creating product strategy, Gather resources and test the idea on wider platform.</p>
              </div>
              <div className="howworkdiv"> <img src="images/innerlogothree.png" alt="innerlogothree" />
                <h5 className="workheading">Delivery 3.</h5>
                <p className="workpara">Our top priority is delivering on time. Our highly experienced team is always committed to solution on time. In order to accomplish this,our tech team is always active on Skype / Phone.</p>
              </div>
            </div>
            <div className="workcenter"> <img src="images/innerlogo.png" alt="innerlogo" /> </div>
            <div className="workright">
              <div className="howworkdiv"> <img src="images/innerlogotwo.png" alt="innerlogotwo" />
                <h5 className="workheading">2. Implement</h5>
                <p className="workpara">After research review, we start creating project proposal and make strategy in order to deliver the project and make sure that it works great and on all platforms.</p>
              </div>
              <div className="howworkdiv"> <img src="images/innerlogofour.png" alt="innerlogothree" />
                <h5 className="workheading">4. Maintenance</h5>
                <p className="workpara">We Offer free support for 3 months to the clients  after every project completion in order to make sure that the client is satisfied with the deliverables.</p>
              </div>
            </div>
          </div>
          <h3 className="howork-textwo">Like the Way We Work?&nbsp; 
            <a href="" title="Request A Quote"><span>Get Started Now.</span></a>
          </h3>
          <div className="centeralignbutton">
            <button className="view-btn">
              <a href="" title="Request A Quote">Request A quote</a>
            </button>
          </div>
        </div>
      </section>
      <section id="port-bg" style={{ backgroundImage: 'url(images/portfolio/portfolio-bg.jpg)'}}>    
        <div className="site-container portfolio" id="port">
          <h4 className="port-text">Our Portfolio </h4>
          <p className="port-p">Weballures Technologies believes in developing live versions of the client’s business vision. For that, at first we start with hearing our client’s tale of ideas so as to gain an insight of his expectation </p>
          <PortfolioBox PortFoloiData={PortFoloiData} />
        </div>
      </section>
      <Testimonial />
      <CallToAction />
    </div>   
  );
};
export default Home;