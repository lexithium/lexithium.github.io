import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import block1 from '../assets/img/ind-portfolio/blockapp1.png';
import block2 from '../assets/img/ind-portfolio/blockapp2.png';
import block3 from '../assets/img/ind-portfolio/blockapp3.png';
import block4 from '../assets/img/ind-portfolio/blockapp4.png';
import block5 from '../assets/img/ind-portfolio/blockapp5.png';

const BlockMuseum = () => {
	return (
		<Container className="py-5">
			<Row className="justify-content-center mb-5">
				<Col lg="8">
					<p>This project was a collaboration between the Mary and Leigh Block Museum of Art at Northwestern University and the Medill School of Journalism, Media, Integrated Marketing Communications. Together with Professor Susan Mango Curtis, I oversaw the design of the iPad app with my junior designer Ian Robinson. The Block Museum was looking to become more visible to the students on campus and wanted the app to garner interest. The app was released on the iTunes App Store in early March 2012, and is scheduled to become a quarterly digital issue that provides information about the exhibitions currently on display at the museum.</p>
				</Col>
			</Row>
			<Row>
				<Col xs="12" className="text-center">
					<img src={block1} alt="Block Museum App Screenshot" className="img-fluid" />
				</Col>
				<Col md="4" className="text-center mb-5">
					<img src={block3} alt="Block Museum App Screenshot" className="img-fluid" />
				</Col>
				<Col md="4" className="text-center mb-5">
					<img src={block4} alt="Block Museum App Screenshot" className="img-fluid" />
				</Col>
				<Col md="4" className="text-center mb-5">
					<img src={block5} alt="Block Museum App Screenshot" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center">
					<img src={block2} alt="Block Museum App Screenshot" className="img-fluid" />
				</Col>
			</Row>
		</Container>
	);
};

export default BlockMuseum;