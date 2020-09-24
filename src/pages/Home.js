import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardImgOverlay } from 'reactstrap';
import dev from '../assets/img/dev.jpg';
import { portfolio } from '../data/portfolio';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
	return (
		<Fragment>
			<Container id="about">
				<Row className="align-items-center justify-content-between py-5">
					<Col md="4">
						<img src={dev} alt="" aria-hidden="true" className="img-fluid"/>
					</Col>
					<Col md="7">
						<p><strong className="text-special">I'm Alex,</strong> a senior software developer at <a href="https://e2gens.com/" target="_blank" rel="noopener noreferrer"><strong className="text-special">E2Generations</strong></a>, and graduate of Northwestern University's Medill School of Journalism. I'm a journalist by trade, programmer by day, designer by night and illustrator in the minutes between.</p>
						<p>Browse my <a href="#portfolio"><strong className="text-special">portfolio</strong></a>, look over my <a href="#resume"><strong className="text-special">résumé</strong></a> or shoot me an <a href="mailto:alexshocklee@gmail.com"><strong className="text-special">email</strong></a>.</p>
					</Col>
				</Row>
			</Container>
			<Container fluid className="bg-light py-5" id="portfolio">
				<Row>
					<Col>
						<Container className="position-relative">
							<div className="flags">portfolio</div>
							<Row>
								{ portfolio.map( (item, index) => (
									<Col sm="6" md="4" lg="3" key={index} className="py-3">
										{ item.is_blank ? <a href={item.link} target="_blank" rel="noopener noreferrer">
											<Card className="card-hover">
												<div className="card-img-top" style={{ backgroundImage: 'url(' + item.image + ')' }}></div>
												<CardImgOverlay>
													<div className="hover-state d-flex flex-column align-items-center justify-content-center h-100">
														<div><strong>{item.name}</strong></div>
														<div><em>{item.location}</em></div>
													</div>
												</CardImgOverlay>
											</Card>
										</a> : <Link to={item.link}>
											<Card className="card-hover">
												<div className="card-img-top" style={{ backgroundImage: 'url(' + item.image + ')' }}></div>
												<CardImgOverlay>
													<div className="hover-state d-flex flex-column align-items-center justify-content-center h-100">
														<div><strong>{item.name}</strong></div>
														<div><em>{item.location}</em></div>
													</div>
												</CardImgOverlay>
											</Card>
										</Link> }
									</Col>
								) ) }
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
			<Container className="py-5" id="resume">
				<Row>
					<Col lg="8" className="order-lg-2 resume">
						<div className="flags">résumé</div>
						<h4 className="text-serif mb-4"><em>education</em></h4>
						<p>Northwestern University<br/>
						Class of 2013, <em>cum laude</em><br/>
						Bachelor of Sciences, Journalism &mdash; Design<br/>
						Double major, Linguistics</p>

						<div className="py-4"></div>
						
						<h4 className="text-serif mb-4">development</h4>
						<p className="resume-position">E2Generations</p>
						<p className="resume-time">October 2018 - Present | Senior Software Developer</p>
						<p className="resume-description">Creating web-based software for clients around the country, ranging from single page apps to fully immersive database frameworks. Using React, Angular, HTML, CSS/Sass, JavaScript, Typescript, Node.js, and ES6 on a regular basis. Now in a senior position serving as a lead developer on several projects, reviewing code submissions, and managing junior developers.</p>

						<p className="resume-position">Kobie Marketing</p>
						<p className="resume-time">January 2016 - October 2018 | Front-End Web Developer</p>
						<p className="resume-description">Creating websites, emails, apps, APIs, content management systems and web experiences for major loyalty marketing companies like Verizon, First Citizens Bank, Royal Bank of Canada and State Farm. As part of the Customer Experience team, Alex is responsible for designing and developing user interactions and websites for our client's loyalty customers. Since starting here, her work has won 13 American Advertising Federation awards in the Tampa Bay area. Alex has been recognized for her efforts in streamlining automation through campaign management tools, lightweight template engines and proprietary email generators. On a daily basis, she is working with Node.js, Angular, HTML, CSS/Sass, Javascript, PHP, .NET, and version control software like Git and SVN.</p>

						<div className="py-4"></div>

						<h4 className="text-serif mb-4">journalism</h4>
						<p className="resume-position"><em>Tampa Bay Times</em></p>
						<p className="resume-time">July 2013 - January 2016 | Front-End Web Developer, Web Editor</p>
						<p className="resume-description">Front-end web developer and web editor, designing interactive graphics and multimedia features for the newspaper. Responsible for entire multimedia department and construction/maintenance of website. Projects include: Michael Kruse's multimedia feature, "The Last Voyage of the Bounty," the Pulitzer Prize-winning "Failure Factories" series, the Pulitzer Prize-winning "Insane. Invisible. In danger." series, and Lane DeGregory's multimedia narrative, "The
						Long Fall of Phoebe Jonchuck". Also served as a page designer for the weekly Weekend edition.</p>

						<p className="resume-position">Digital Publishing</p>
						<p className="resume-time">Fall Quarter 2012 - Winter Quarter 2013 | Tablet Designer</p>
						<p className="resume-description">Worked with the Mary and Leigh Block Museum of Art at Northwestern University to create an iPad app that would garner student interest. Served as the head designer for the project while overseeing one junior designer. The app was released on iTunes in March of 2013. Also created prototype iPad and Android digital versions of North by Northwestern magazine.</p>

						<p className="resume-position"><em>North by Northwestern</em> magazine</p>
						<p className="resume-time">June 2011 - March 2013 | Creative Director</p>
						<p className="resume-description">Oversaw the design, photography and illustration departments and spearheaded a redesign of the magazine. Designed infographics and complete pages. Developed art, illustrations and photography.</p>
						<p className="resume-time">Jan. 2010 - June 2013 | Writer</p>
						<p className="resume-description">Wrote short clips for several quarterly issues about men's swimming, incidents at the Norris Student Center, women's lacrosse, exercise and body and beverage recipes.</p>
						
						<p className="resume-position"><em>Sports Illustrated</em></p>
						<p className="resume-time">March 2012-Sept. 2012 | Design Intern</p>
						<p className="resume-description">Designed front of the book and back of the book pages every week, including Faces In The Crowd, SI.com, Point After, Dan Patrick and Mail. Aided art directors with iPad and Galaxy versions and created photo illustrations on a weekly basis.</p>
						
						<p className="resume-position">National Association of Black Journalists</p>
						<p className="resume-time">Summer 2012 (New Orleans Convention) | Designer</p>
						<p className="resume-description">Selected as one of six national design students to create the NABJ summer convention's daily newspaper, The Monitor. Designed full pages, edited photos and helped in creation of graphics.</p>
						
						<p className="resume-position">NorthByNorthwestern.com</p>
						<p className="resume-time">March 2011 - March 2012 | Interactive Editor</p>
						<p className="resume-description">Oversaw all interactive graphic production in the multimedia section. Assigned projects while teaching staff Adobe Flash, HTML, CSS and JavaScript. Served as liaison between magazine and web staffs.</p>

						<p className="resume-position">2C Media, Inc.</p>
						<p className="resume-time">Summer 2011 | Production Intern</p>
						<p className="resume-description">Researched facts about reptiles and the Everglades for Animal Planet's hit reality show, "Swamp Wars." Fact-checked scripts and voiceovers.</p>

						<div className="py-4"></div>

						<h4 className="text-serif mb-4">program experience</h4>
						<Row>
							<Col md="6">
								<strong>Programming Languages</strong><br/>
								JavaScript/React/Angular<br/>
								Node.js<br/>
								HTML/CSS/Sass<br/>
								PostgreSQL<br/>
								MySQL<br/>
								MongoDB<br/>
								PHP/Laravel<br/>
							</Col>
							<Col md="6">
								<strong>Adobe Creative Suite</strong><br/>
								Illustrator<br/>
								InDesign<br/>
								Photoshop<br/>
								Premiere<br/>
							</Col>
						</Row>
					</Col>
					<Col lg="4" className="order-lg-1 text-right resume-awards">
						<h4 className="text-serif mb-4">awards</h4>
						<p><strong>2018 AAF Tampa Bay Addy Awards</strong><br/>
						Verizon Moment-of-Open Dynamic Emails<br/>
						(Gold Award: Data-Driven Media)<br/><br/>
						Just For Men Rewards<br/>
						(Gold Tucker Digital Advertising Campaign)<br/><br/>
						Verizon Small Biz Rewards 5th Anniversary<br/>
						(Silver Award: Online/Interactive Campaign)</p>
						<p><strong>2017 AAF Tampa Bay Addy Awards</strong><br/>
						Verizon Small Biz Rewards Rebrand<br/>
						(10 Awards)</p>
						<p><strong>2016 Pulitzer Prize, Local Reporting</strong><br/>
						Failure Factories</p>
						<p><strong>2016 Pulitzer Prize, Investigative Reporting</strong><br/>
						Insane. Invisible. In danger.</p>
						<p><strong>2014 Sunshine State Awards</strong><br/>
						Non-Deadline News Reporting: Atomic Sailors (First Place)<br/>
						Series: The Last Voyage of the Bounty (First Place)<br/><br/>
						<strong>2014 Society for News Design</strong><br/>
						The Last Voyage of the Bounty (Award of Excellence)<br/><br/>
						<strong>2014 Florida Society of News Editors</strong><br/>
						Public Service: The Last Voyage of the Bounty (Gold Medal)<br/>
						Features & Arts Writing: The Last Voyage of the Bounty (First Place)<br/>
						Investigative Reporting: Atomic Sailors (Third Place)<br/><br/>
						<strong>2014 Green Eyeshade Awards</strong><br/>
						Online Nondeadline Reporting: The Last Voyage of the Bounty (First Place)<br/><br/>
						<strong>2013 ASNE Punch Sulzberger Award for Online Storytelling</strong><br/>
						The Last Voyage of the Bounty (Finalist)<br/><br/>
						<strong>2013 Medill Student Showcase</strong><br/>
						Block Museum iPad app<br/><br/>
						<strong>2013 Society for News Design Michigan State University iPad Magazine category</strong><br/>
						Block Museum iPad App (Honorable Mention)<br/><br/>
						<strong>2012 SPJ Region 5 Mark of Excellence Awards for Best Magazine</strong><br/>
						North by Northwestern (Second Place)<br/><br/>
						<strong>2011 SPJ Region 5 Mark of Excellence Awards for Best Magazine</strong><br/>
						North by Northwestern (First Place)</p>
						<hr className="my-5"/>
						<p>Need a hard copy? <a href="/documents/AlexisNShocklee_Resume.pdf" target="_blank" rel="noopener noreferrer"><strong className="text-special">Voila!</strong></a></p>
					</Col>
				</Row>
			</Container>
			<Container id="contact" className="py-5">
				<Row>
					<Col className="text-center">
						<h2 className="mb-4 text-special"><strong>Need to contact me?</strong></h2>
						<a href="mailto:alexshocklee@gmail.com" className="btn btn-danger mx-2">
							<FontAwesomeIcon icon={faPaperPlane} fixedWidth className="mr-1" /> Send me an email
						</a>
						<a href="https://www.linkedin.com/in/alex-shocklee-2643b33a/" target="_blank" rel="noopener noreferrer" className="btn btn-info mx-2">
							<FontAwesomeIcon icon={faLinkedinIn} fixedWidth className="mr-1" /> Go to my LinkedIn
						</a>
						<a href="https://github.com/lexithium" target="_blank" rel="noopener noreferrer" className="btn btn-primary mx-2">
							<FontAwesomeIcon icon={faGithub} fixedWidth className="mr-1" /> See my GitHub
						</a>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Home;