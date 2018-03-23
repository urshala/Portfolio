import React from 'react'; 
import './footer.css';

import { Icon } from 'semantic-ui-react';

const Footer = () => 
	<div className="Footer">
		<div className="footerWrapper">
			<div className="contacts">
				<h1>Contact</h1>
				
					<div className="contactWrapper">
						<Icon name='user circle' size='large'/>
						<span>Deepak Panta</span>
					</div>
					<div className="contactWrapper">
						<Icon name='location arrow' size='large'/>
						<span>Turku, Finland</span> 
					</div>
					<div className="contactWrapper">
						<Icon name='mail' size='large'/> 
						<span>lahiripak@gmail.com</span>
					</div>
				
			</div>

			<div className="connect">
				<h1>Connect</h1>
				<div class="connectWrapper"> 
					<a href='https://github.com/urshala' target='_blank'><Icon name='github' size='large'/></a>
					<a href='https://bitbucket.org/urshala/' target='_blank'><Icon name='bitbucket' size='large'/></a>
					<a href='https://www.linkedin.com/in/deepakpanta/' target='_blank'><Icon name='linkedin' size='large'/></a>
				</div>
			</div>
		
		</div>
	</div>

export default Footer;