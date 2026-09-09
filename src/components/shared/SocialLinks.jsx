import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import socials from '../../data/socials.json'

/**
 * The LinkedIn + GitHub icon links used in the header (and available anywhere
 * else socials belong). URLs come from the single source in data/socials.json.
 */
const SocialLinks = ({ className = 'header__socials' }) => {
    return (
        <div className={className}>
            <a href={socials.linkedin.url}>
                <BsLinkedin />
            </a>
            <a href={socials.github.url}>
                <FaGithub />
            </a>
        </div>
    )
}

export default SocialLinks
