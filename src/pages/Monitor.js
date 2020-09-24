import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import monitor1 from '../assets/img/ind-portfolio/monitor1.jpg';
import monitor2 from '../assets/img/ind-portfolio/monitor2.jpg';
import monitor3 from '../assets/img/ind-portfolio/monitor3.jpg';
import monitor4 from '../assets/img/ind-portfolio/monitor4.jpg';

const Monitor = () => {
	return (
		<Container className="py-5">
			<Row className="justify-content-center mb-5">
				<Col lg="8">
					<p>I was selected to be part of the National Association of Black Journalists' summer convention design team in 2012. The convention was being held in New Orleans that summer and every year <em>The Monitor</em>, the three-day conference's daily newspaper, is made by a handful of specially chosen student project applicants.</p>
					<p>I worked with many of the nation's finest journalists from companies like The New York Times, Disney, Gannett and The Chicago Tribune to produce a high-quality newspaper for the three days of the conference.</p>
				</Col>
			</Row>
			<Row>
				<Col xs="12" className="text-center">
					<img src={monitor1} alt="Print Design from The Monitor" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center">
					<img src={monitor2} alt="Print Design from The Monitor" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center">
					<img src={monitor3} alt="Print Design from The Monitor" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center">
					<img src={monitor4} alt="Print Design from The Monitor" className="img-fluid" />
				</Col>
			</Row>
		</Container>
	);
};

export default Monitor;