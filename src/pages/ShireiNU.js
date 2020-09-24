import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import cd1 from '../assets/img/ind-portfolio/cd1.jpg';
import cd2 from '../assets/img/ind-portfolio/cd2.jpg';
import cd3 from '../assets/img/ind-portfolio/cd3.jpg';
import cd4 from '../assets/img/ind-portfolio/cd4.jpg';
import cd5 from '../assets/img/ind-portfolio/cd5.jpg';
import cd6 from '../assets/img/ind-portfolio/cd6.jpg';
import cd7 from '../assets/img/ind-portfolio/cd7.jpg';
import cd8 from '../assets/img/ind-portfolio/cd8.jpg';
import cd9 from '../assets/img/ind-portfolio/cd9.jpg';

const ShireiNU = () => {
	return (
		<Container className="py-5">
			<Row className="justify-content-center mb-5">
				<Col lg="8">
					<p>In winter quarter of 2013, I was approached by ShireiNU A Cappella, a Jewish student musical group at NU, about designing their new album cover. The Challah Backalbum was featured in their spring show, ShireiNU Presents: Bowties, and raised more than $3,000 on <a href="https://www.indiegogo.com/projects/support-shireinu-a-cappella-s-first-album-challah-back#/" className="text-special font-weight-bold" target="_blank" rel="noopener noreferrer">Indiegogo</a>.</p>
				</Col>
			</Row>
			<Row>
				<Col xs="12" className="text-center mb-5">
					<img src={cd1} alt="ShireiNU A Capella CD Design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={cd2} alt="ShireiNU A Capella CD Design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={cd3} alt="ShireiNU A Capella CD Design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={cd4} alt="ShireiNU A Capella CD Design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={cd5} alt="ShireiNU A Capella CD Design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={cd6} alt="ShireiNU A Capella CD Design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={cd7} alt="ShireiNU A Capella CD Design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={cd8} alt="ShireiNU A Capella CD Design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={cd9} alt="ShireiNU A Capella CD Design" className="img-fluid" />
				</Col>
			</Row>
		</Container>
	);
};

export default ShireiNU;