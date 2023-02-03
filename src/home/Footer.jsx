import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'react-external-link'

const Footer = () => {
  return (
    <div>
			<div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
					<p>
						&copy;
						<ExternalLink href='https://www.linkedin.com/in/thi-nguyen-4b2384169/'> Thi Nguyen, </ExternalLink>
						<ExternalLink href='https://github.com/Steff4evr'>Steffy Johnson, </ExternalLink>
						<ExternalLink href='https://www.linkedin.com/in/sian-steel'>Sian Steel </ExternalLink>
						2023
					</p>
			</div>
			<p style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
					<ExternalLink href='mailto:thequizapp@mail.com'>Have suggestions? Get in touch</ExternalLink>
			</p>
    </div>
  )
}

export default Footer