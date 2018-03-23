import React from 'react'; 
import Zoom from 'react-reveal/Zoom';
import {Chip} from 'react-materialize';
import {Icon} from 'semantic-ui-react';

const MorePorjects = ()=>
	<div>
			<div>
				<h1>Miscellaneous Projects</h1>
				<div className="columnContainer">
					<Zoom>
						<div className="itemA red"></div>
						<div className="itemA green text">
							<h1>Predict the fate of a movie</h1>
							<p>
								<span>Keywords: </span>
								<Chip>Python</Chip>
								<Chip>Machine Learning</Chip>
								<Chip>Scikit-learn</Chip>
								<Chip>BeautifulSoup</Chip>
								<Chip>Web Crawling</Chip>
							</p>
							<p>
								This python project uses Scikit-learn to predict whether the movie will be hit 
								or flop. Data were collected from 2005-2015 using python crawlers and predictions 
								were made on 2016 movies. 
							</p>
							<a href='https://bitbucket.org/urshala/movie_prediction/src' target="_blank">
								<p className="links">
									<Icon name='github' size='large'/>
									<span>Source Code </span>
								</p>
							</a>
						</div>
						

						<div className="itemA blue text">
							<h1>Find your Foli bus</h1>
							<p>
								<span>Keywords: </span>
								<Chip>JavaScript</Chip>
								<Chip>GoogleMaps</Chip>
								<Chip>Foli API</Chip>
							</p>
							<p> 
								This is a simple vanilla JavaScript page that uses Foli API to search the local
								bus's route and location in real time for Turku(Finland).
							</p>
							<a href='https://github.com/urshala/JavaScript' target="_blank">
								<p className="links">
									<Icon name='github' size='large'/>
									<span>Source Code </span>
								</p>
							</a>
						</div>
						<div className="itemA black"></div>

						<div className="itemA orange"></div>
						<div className="itemA white text">
							<h1>Yet another auction site</h1>
							<p>
								<span>Keywords: </span>
								<Chip>Django</Chip>
								<Chip>Python</Chip>
								<Chip>Sqlite</Chip>
							</p>
							<p> 
								This is django powered web application that is a simple ebay version. Sellers
								can sell their items while buyers can bet on the items. Sellers and Buyers get 
								email notification upon the activity on their auctioned / betted items. 
							</p>
							<a href='https://bitbucket.org/urshala/abo_project/src' target="_blank">
								<p className="links">
									<Icon name='github' size='large'/>
									<span>Source Code </span>
								</p>
							</a>
						</div>
						
					</Zoom>
				</div>
			</div>
	
	</div>

export default MorePorjects; 