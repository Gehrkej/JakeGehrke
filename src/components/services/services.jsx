import React from 'react'
import './services.css'
import Section from '../shared/Section'
import ServiceCard from './ServiceCard'
import ServicesData from '../../data/services.json'

const Services = () => {
    return (
        <Section
            id="services"
            eyebrow="What I Offer"
            title="Services"
            containerClassName="services__container"
        >
            {ServicesData.data.map(({ title, items }) => (
                <ServiceCard key={title} title={title} items={items} />
            ))}
        </Section>
    )
}

export default Services
