import React from "react";
import Banner from '../templates/banner';
import PortfolioBox from '../templates/portfolioBox';
import CallToAction from '../templates/callToAction';
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
const Portfolios = () => {
  const heading="Our Work";
  const titleText="New stunning projects for our amazing clients. We deliver 100% and provide instant response.";
  const bgImage="images/weballures-ourwork.jpg";
  return(
    <>
      <Banner heading= { heading } titleText= { titleText } bgImage= { bgImage }/>
      <div class="portfolio">
        <PortfolioBox PortFoloiData={PortFoloiData} />
      </div>
      <div className="clearfix"></div>
      <CallToAction />
    </>
  )
}
export default Portfolios;