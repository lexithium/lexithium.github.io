import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import suz1 from '../assets/img/ind-portfolio/SusieLogo3.jpg';
import suz2 from '../assets/img/ind-portfolio/SusieLogo32.jpg';
import suz3 from '../assets/img/ind-portfolio/SusieLogo.jpg';
import kj1 from '../assets/img/ind-portfolio/kj1.jpg';
import kj2 from '../assets/img/ind-portfolio/kj2.jpg';
import kj3 from '../assets/img/ind-portfolio/kj3.jpg';
import josh from '../assets/img/ind-portfolio/joshlogo.jpg';
import dj from '../assets/img/ind-portfolio/D&J.png';
import mas from '../assets/img/ind-portfolio/know.jpg';

const Branding = () => {
	return (
		<Container className="py-5">
			<Row className="justify-content-center mb-5">
				<Col lg="8">
					<p>During the summer before my senior year, I began freelancing as a branding consultant. Once I returned to campus in the fall, I was approached by several students to create logos, brands, business cards and resumes.</p>
				</Col>
			</Row>
			<Row>
				<Col xs="12" className="text-center">
					<img src={suz1} alt="Logo design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={suz2} alt="Logo design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center">
					<img src={suz3} alt="Logo design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center">
					<img src={kj1} alt="Logo design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={kj2} alt="Logo design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={kj3} alt="Logo design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={josh} alt="Logo design" className="img-fluid" />
				</Col>
			</Row>
			<Row className="justify-content-center mb-5">
				<Col lg="8">
					<p>By the time winter rolled around, I was hired to become part of the Creative and Tech staff for an Associated Student Government campaign on campus. Below, I have displayed the progression of the logo up through the final product.</p>
				</Col>
			</Row>
			<Row>
				<Col xs="12" className="text-center mb-5">
					<img src={dj} alt="Logo design" className="img-fluid" />
				</Col>
			</Row>
			<Row className="justify-content-center mb-5">
				<Col lg="8">
					<p>Martha A. Sanchez asked me to help her create a logo for her new radio show Know The Radio Show last summer. She and the rest of her crew were thrilled with the results.</p>
				</Col>
			</Row>
			<Row>
				<Col xs="12" className="text-center mb-5">
					<img src={mas} alt="Logo design" className="img-fluid" />
				</Col>
			</Row>
		</Container>
	);
};

export default Branding;