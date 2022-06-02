import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const CarouselSlider = (props) => { 
  var carouselData = props.sliderData;
  var carousel = document.getElementById('carousel');
  // var slides = 3;
  var speed = 8000;

  if (carousel) {
    var slides = carousel.querySelectorAll('.slide');
    var indicators = carousel.querySelectorAll('.indicator');
    var switcher = setInterval(function() {
      switchSlide();
    }, speed);
  }
  const carouselHide=(num)=> {
    indicators[num].setAttribute('data-state', '');
    slides[num].setAttribute('data-state', '');
    slides[num].style.opacity=0;
  }

  const carouselShow=(num)=> {
    indicators[num].checked = true;
    indicators[num].setAttribute('data-state', 'active');
    slides[num].setAttribute('data-state', 'active');
    slides[num].style.opacity=1;
  }

  const setSlide=(slide)=>{
    return function() {
    // Reset all slides
      for (var i = 0; i < indicators.length; i++) {
        indicators[i].setAttribute('data-state', '');
        slides[i].setAttribute('data-state', '');        
        carouselHide(i);
      }

      // Set defined slide as active
      indicators[slide].setAttribute('data-state', 'active');
      slides[slide].setAttribute('data-state', 'active');
      carouselShow(slide);

      // Stop the auto-switcher
      clearInterval(switcher);
    };
  }

  const switchSlide=()=> {
    var nextSlide = 0;

    // Reset all slides
    for (var i = 0; i < indicators.length; i++) {
        // If current slide is active & NOT equal to last slide then increment nextSlide
        if ((indicators[i].getAttribute('data-state') === 'active') && (i !== (indicators.length-1))) {
            nextSlide = i + 1;
        }

        // Remove all active states & hide
        carouselHide(i);
    }
    // Set next slide as active & show the next slide
    carouselShow(nextSlide);
  }
  

  const handleChange=() =>{ 
    for (var i = 0; i < indicators.length; i++) {
      indicators[i].addEventListener("click", setSlide(i));
    }   
  }

  return (
    <>
      <div id="carousel" className="carousel carouselmargin hme-crsl">        
        <div className="slides">
          {carouselData && carouselData.map((data, index) => {  
            return (
              <div key={'slide-'+ data.id}  className="slide" data-state={index===0?('active'):('')} style={{ backgroundImage: 'url(' + data.imgUrl + ')', opacity: index===0?1:0 }} > 
                          
                <div className="sliderinner site-container">
                  <p className="bannerpara">{data.titleText}</p>
                  <button className="consult-btn">
                    <a href={data.link} title="Get A Free Quote">Request a Quote 
                      <FontAwesomeIcon icon={['fas', 'fa-angle-right']} size="sm" />                       
                    </a>
                  </button>
                </div>
              </div>
            );
          })}          
        </div>
        <div className="indicators">
          {carouselData && carouselData.map((data, index) => {
            return (
              <label key={'indicator-'+data.id} className="containerradio">  
                <input className="indicator" name="indicator" data-slide={data.id} data-state={index===0?('active'):('')} checked={index===0?('checked'):('')} type="radio" onChange={handleChange} />
                <span className="checkmark"></span>
              </label>
            )
          })}          
        </div>
      </div> 
    </> 
  );
};

export default CarouselSlider;
