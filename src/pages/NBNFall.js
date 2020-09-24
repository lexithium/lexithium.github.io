import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import fall1 from '../assets/img/ind-portfolio/fallnbn1.jpg';
import fall2 from '../assets/img/ind-portfolio/fallnbn2.jpg';
import fall3 from '../assets/img/ind-portfolio/fallnbn3.jpg';
import fall4 from '../assets/img/ind-portfolio/fallnbn4.jpg';
import fall5 from '../assets/img/ind-portfolio/fallnbn5.jpg';
import fall6 from '../assets/img/ind-portfolio/fallnbn6.jpg';
import fall7 from '../assets/img/ind-portfolio/fallnbn7.jpg';
import fall8 from '../assets/img/ind-portfolio/fallnbn8.jpg';
import fall9 from '../assets/img/ind-portfolio/fallnbn9.jpg';

const NBNFall = () => {
	return (
		<Container className="py-5">
			<Row className="justify-content-center mb-5">
				<Col lg="8">
					<p>After spending my junior year as a member of the design team (and later as Senior Design Editor) for NU student publication <em>North by Northwestern</em>, I became creative director in the fall of 2012. As the creative leader for the magazine, I oversaw the design, photography and illustration departments, delegating tasks and making sure all art and design were created and received.</p>
					<p>Together with print managing editor Shirley Li, I facilitated the redesign of NBN to contain a more streamlined and modern tone. The issue was extremely successful and has more online views than all other previous editions combined. In May, the Society of Professional Journalists awarded NBN second place in the Region 5 Mark of Excellence Awards for <a href="https://www.spj.org/news.asp?ref=1173" target="_blank" rel="noopener noreferrer" className="text-special font-weight-bold">Best Student Magazine</a>.</p>
				</Col>
			</Row>
			<Row>
				<Col xs="12" className="text-center mb-5">
					<img src={fall1} alt="North by Northwestern Fall '12 print design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={fall2} alt="North by Northwestern Fall '12 print design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={fall8} alt="North by Northwestern Fall '12 print design" className="img-fluid" />
				</Col>
				<Col md="6" className="text-center mb-5">
					<img src={fall3} alt="North by Northwestern Fall '12 print design" className="img-fluid" />
				</Col>
				<Col md="6" className="text-center mb-5">
					<img src={fall4} alt="North by Northwestern Fall '12 print design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={fall9} alt="North by Northwestern Fall '12 print design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={fall5} alt="North by Northwestern Fall '12 print design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={fall6} alt="North by Northwestern Fall '12 print design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={fall7} alt="North by Northwestern Fall '12 print design" className="img-fluid" />
				</Col>
			</Row>
		</Container>
	);
};

export default NBNFall;