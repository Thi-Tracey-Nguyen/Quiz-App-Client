import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'react-external-link'

const Footer = () => {
  return (
		// <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',color:'#FFFFFF', background: 'linear-gradient(to top, #000000,#3e4545)', flexDirection:'column'}}>
		<div className='footer'>
			<ExternalLink href='https://www.linkedin.com/in/thi-nguyen-4b2384169/' style={{color: '#D86D18'}}> Tracey Nguyen &copy; 2023</ExternalLink>
			<p>
					<ExternalLink href='mailto:thequizapp@mail.com' style={{color:' #D86D18'}}>Have suggestions? Get in touch</ExternalLink>
			</p>
		</div>
  )
}

export default Footer