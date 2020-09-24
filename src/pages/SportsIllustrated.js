import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import si1 from '../assets/img/ind-portfolio/si1.png';
import si2 from '../assets/img/ind-portfolio/si2.jpg';
import si3 from '../assets/img/ind-portfolio/si3.jpg';
import si4 from '../assets/img/ind-portfolio/si4.jpg';
import si5 from '../assets/img/ind-portfolio/si5.jpg';

const SportsIllustrated = () => {
	return (
		<Container className="py-5">
			<Row className="justify-content-center mb-5">
				<Col lg="8">
					<p>I spent the spring 2012 quarter working as a design intern at <em>Sports Illustrated</em>. While a part of the design staff at the Time, Inc. magazine, I designed and illustrated for print, iPad and Samsung Galaxy Tab issues on a weekly basis. The internship was extended through the summer, allowing me to get involved in the development of SI's summer olympic coverage.</p>
				</Col>
			</Row>
			<Row>
				<Col xs="12" className="text-center mb-5">
					<img src={si1} alt="Sports Illustrated print design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={si2} alt="Sports Illustrated print design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={si3} alt="Sports Illustrated print design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={si4} alt="Sports Illustrated print design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={si5} alt="Sports Illustrated print design" className="img-fluid" />
				</Col>
			</Row>
		</Container>
	);
};

export default SportsIllustrated;