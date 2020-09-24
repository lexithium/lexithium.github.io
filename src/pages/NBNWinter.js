import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import nbn1 from '../assets/img/ind-portfolio/wintnbn1.jpg';
import nbn3 from '../assets/img/ind-portfolio/wintnbn3.jpg';
import nbn4 from '../assets/img/ind-portfolio/wintnbn4.jpg';
import nbn5 from '../assets/img/ind-portfolio/wintnbn5.jpg';
import nbn6 from '../assets/img/ind-portfolio/wintnbn6.jpg';
import nbn7 from '../assets/img/ind-portfolio/wintnbn7.jpg';
import nbn8 from '../assets/img/ind-portfolio/wintnbn8.jpg';
import nbn9 from '../assets/img/ind-portfolio/wintnbn9.jpg';
import nbn10 from '../assets/img/ind-portfolio/wintnbn10.jpg';
import nbn11 from '../assets/img/ind-portfolio/wintnbn11.jpg';
import nbn12 from '../assets/img/ind-portfolio/wintnbn12.jpg';
import nbn13 from '../assets/img/ind-portfolio/wintnbn13.jpg';
import nbn14 from '../assets/img/ind-portfolio/wintnbn14.jpg';

const NBNWinter = () => {
	return (
		<Container className="py-5">
			<Row className="justify-content-center mb-5">
				<Col lg="8">
					<p>For the 2013 winter quarter, I returned as <em>North by Northwestern</em>'s creative director. Maintaining my redesign from fall quarter, I worked with print managing editor Anca Ulea to create a new issue.</p>
				</Col>
			</Row>
			<Row>
				<Col xs="12" className="text-center mb-5">
					<img src={nbn4} alt="North by Northwester Winter '13 print design" className="img-fluid" />
				</Col>
				<Col md="6" className="text-center mb-5">
					<img src={nbn14} alt="North by Northwester Winter '13 print design" className="img-fluid" />
				</Col>
				<Col md="6" className="text-center mb-5">
					<img src={nbn13} alt="North by Northwester Winter '13 print design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={nbn5} alt="North by Northwester Winter '13 print design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={nbn6} alt="North by Northwester Winter '13 print design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={nbn7} alt="North by Northwester Winter '13 print design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={nbn8} alt="North by Northwester Winter '13 print design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={nbn11} alt="North by Northwester Winter '13 print design" className="img-fluid" />
				</Col>
				<Col md="6" className="text-center mb-5">
					<img src={nbn9} alt="North by Northwester Winter '13 print design" className="img-fluid" />
				</Col>
				<Col md="6" className="text-center mb-5">
					<img src={nbn10} alt="North by Northwester Winter '13 print design" className="img-fluid" />
				</Col>
				<Col md="6" className="text-center mb-5">
					<img src={nbn1} alt="North by Northwester Winter '13 print design" className="img-fluid" />
				</Col>
				<Col md="6" className="text-center mb-5">
					<img src={nbn3} alt="North by Northwester Winter '13 print design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={nbn12} alt="North by Northwester Winter '13 print design" className="img-fluid" />
				</Col>
			</Row>
		</Container>
	);
};

export default NBNWinter;