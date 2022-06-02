import React, { useState, useEffect } from "react";
// import parse from 'html-react-parser';
const PortfolioBox = ({PortFoloiData}) => {
  const [categoryData, setCategoryData]= useState(PortFoloiData);

  const setActive = el => {
    console.log(el);
    [...el.parentElement.children].forEach(sib => sib.classList.remove('current'))
    el.classList.add('current')
  };
  const filterItem = (category) => { 
    const updatedList = PortFoloiData.filter((curElem) => {
      return curElem.category === category;
    });

    setCategoryData(updatedList);
    var activeCat=document.getElementById(category);    
    setActive(activeCat);
  };  
  
  const uniqueList = [
    ...new Set(
      PortFoloiData.map((curElem) => {
        return curElem.categoryTitle;
      })
    )    
  ];
  const showModal=(data)=>{
    console.log(data);
  };  
  useEffect(() => {
    var currcat = PortFoloiData[0]['category'];
    filterItem(currcat);   
  },[]);
  return(
    <div className="spac">
      <div className="category">
        <div className="portfolioFilter clearfix"> 
          {uniqueList && uniqueList.map((data, index) => { 
            const cat = data.replace(/ /g, '') ;
            return (
              <span key={"key"+index} className={index===0?'current cat-selector':'cat-selector'} id={cat} onClick={()=>filterItem(cat)}>{data}</span>
            );
          })}
        </div>
        <button className="view-btn view-btntwo">
          <a href="/portfolio" title="Portfolio" target="_blank">View full portfolio</a>
        </button>
      </div>
      <div className="portfolioContainer" style={{'position':'relative', 'height':'648px' }}>
        {uniqueList && uniqueList.map((cat, index) => {
          const category = cat.replace(/ /g, '') ;
          return(            
            <div key={"cat-"+category} className="catgryone w-100" style={{ 'transform': 'none', 'zIndex': 1, 'position':'absolute', 'left': 0, 'top': 0 }} >
              {categoryData && categoryData.map((data, index) => {
                const { id, categoryTitle, portFolioImg, preview, previewLink } = data; 
                return( 
                  <div key={'wrap-'+id}>                 
                    { preview===false?(                    
                      <div key={"table-cell-"+id} className="divTableCell">
                        <div className="opaciltycatgry">
                          <div className="overlay-effect" onClick={()=>showModal(data.portFolioImg)}></div>
                          <img src={data.portFolioImg} className="modal-hover-opacity clickmodal webdesign" onClick={()=>showModal(data.portFolioImg)} alt={categoryTitle} />
                          <div className="middle">
                            <div className="text"><i className="fas fa-plus"></i></div>
                          </div>
                        </div>
                      </div>
                    ):(
                      <div key={"bkg-cell-"+id} className="bkg" style={{backgroundImage: 'url('+portFolioImg+')'}}>
                        <div className="left1 lefttwo">
                          <h3 className="hd">Only Pure Invitation</h3>
                          <button className="whi">
                            <a href={previewLink} target="_blank" rel="noreferrer">Live Preview</a>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>     
    </div>
  );
}
export default PortfolioBox;