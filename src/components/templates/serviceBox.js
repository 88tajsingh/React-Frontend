import React, {useState} from "react";
const ServiceBox = (props) => {
    const [serviceData, setServiceData] = useState(props.serviceData);
    return(
        <div className="service"> 
            <a href={serviceData.serviceUrl} title={serviceData.serviceName}>
                <img src={serviceData.serviceIconImage} alt={serviceData.serviceName} />
            </a>
            <h3 className="sub-serve-txt">
                <a href={serviceData.serviceUrl} title={serviceData.serviceName} >{serviceData.serviceName}</a>
            </h3>
            <p className="sub-serve-p">{serviceData.serviceDesc}</p>
            <a href={serviceData.serviceUrl} title={serviceData.serviceName} className="read">Read More</a>
        </div>
    )
}
export default ServiceBox;