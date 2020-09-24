import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import wp1 from '../assets/img/ind-portfolio/whitepaper.jpg';
import wp2 from '../assets/img/ind-portfolio/whitepaper2.jpg';
import wp3 from '../assets/img/ind-portfolio/whitepaper3.jpg';
import wp4 from '../assets/img/ind-portfolio/whitepaper4.jpg';

const WhitePaper = () => {
	return (
		<Container className="py-5">
			<Row className="justify-content-center mb-5">
				<Col lg="8">
					<p>Between the winter and spring quarters of 2013, I was approached by a trio of Medill professors who were in the process of publishing a white paper on media coverage of energy issues. William F. Thomas professor Ellen Shearer and assistant professors Ashlee Humphreys and Abigail M. Foerstner hired me to proofread and design their report. The final product, <a href="http://www.northwestern.edu/newscenter/stories/2013/04/energizing-media-coverage-of-energy-issues.html" target="_blank" rel="noopener noreferrer" className="text-special font-weight-bold">"Energizing Media Coverage of Energy Issues"</a> was presented at the National Press Club in Washington, D.C. and was supported by the Richard Lounsbery Foundation.</p>
				</Col>
			</Row>
			<Row>
				<Col xs="12" className="text-center mb-5">
					<img src={wp1} alt="White Paper report design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={wp2} alt="White Paper report design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={wp3} alt="White Paper report design" className="img-fluid" />
				</Col>
				<Col xs="12" className="text-center mb-5">
					<img src={wp4} alt="White Paper report design" className="img-fluid" />
				</Col>
			</Row>
		</Container>
	);
};

export default WhitePaper;