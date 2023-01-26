import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="fixed-bottom">
			<div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
					<p>
						&copy;
						<Link to="https://www.linkedin.com/in/thi-nguyen-4b2384169/"> Thi Nguyen, </Link>
						<Link>Steffy Johnson, </Link>
						<Link to="https://www.linkedin.com/in/sian-steel">Sian Steel </Link>
						2023
					</p>
			</div>
			<p style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
					<Link to="mailto:thequizapp@mail.com">Have suggestions? Get in touch</Link>
			</p>
    </div>
  )
}

export default Footer