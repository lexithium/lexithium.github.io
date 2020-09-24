import React, { Fragment, lazy, Suspense, useEffect } from 'react';
import { Spinner, Container, Row, Col } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import SiteNavbar from '../components/Navbar';

const BlockMuseum = lazy(() => import('./BlockMuseum'));
const Monitor = lazy(() => import('./Monitor'));
const Branding = lazy(() => import('./Branding'));
const SportsIllustrated = lazy(() => import('./SportsIllustrated'));
const ShireiNU = lazy(() => import('./ShireiNU'));
const NBNWinter = lazy(() => import('./NBNWinter'));
const WhitePaper = lazy(() => import('./WhitePaper'));
const NBNFall = lazy(() => import('./NBNFall'));

const Pages = (props) => {
	
	useEffect( () => {
		if (props.history.action === "PUSH") {
			document.documentElement.scrollTop = 0;
			document.scrollingElement.scrollTop = 0;
		}
	}, [ props.history.action ] );
	
	return (
		<Fragment>
			<Container fluid className="page-border">
				<Row>
					<Col>
						<SiteNavbar needsLinks={true} />
					</Col>
				</Row>
			</Container>

			<Suspense fallback={<Spinner color="primary" />}>
				<Switch>
					<Route path={`${props.match.url}/block-museum`} component={BlockMuseum} />
					<Route path={`${props.match.url}/nabj`} component={Monitor} />
					<Route path={`${props.match.url}/freelance`} component={Branding} />
					<Route path={`${props.match.url}/sports-illustrated`} component={SportsIllustrated} />
					<Route path={`${props.match.url}/shireinu`} component={ShireiNU} />
					<Route path={`${props.match.url}/nbn-winter`} component={NBNWinter} />
					<Route path={`${props.match.url}/white-paper`} component={WhitePaper} />
					<Route path={`${props.match.url}/nbn-fall`} component={NBNFall} />
				</Switch>
			</Suspense>
		</Fragment>
	);
};

export default Pages;