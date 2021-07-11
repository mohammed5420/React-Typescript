import { title } from 'process';
import React, { useState } from 'react';
import { idText } from 'typescript';
import Services from '../assits/data/Services'
import ServiceItems from './ServiceItems';

const ServicesSection: React.FC = () => {
    const [services] = useState(Services)
    return (
        <>
            {services.map((service) => {}
                const {title, id, description, icon} = service;
                <ServiceItems key={id}/>
    })}
        </>
    )
}


export default ServicesSection;