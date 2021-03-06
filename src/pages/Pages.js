import React, { Fragment, lazy, Suspense, useEffect } from 'react';
import { Spinner } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';

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
			<Suspense fallback={<Spinner color="primary" className="page-loader" />}>
				<Switch>
					<Route path={`${props.match.url}/block-museum`} component={BlockMuseum} />
					<Route path={`${props.match.url}/nabj`} component={Monitor} />
					<Route path={`${props.match.url}/freelance`} component={Branding} />
					<Route path={`${props.match.url}/sports-illustrated`} component={SportsIllustrated} />
					<Route path={`${props.match.url}/shireinu`} component={ShireiNU} />
					<Route path={`${props.match.url}/nbn-winter`} component={NBNWinter} />
					<Route path={`${props.match.url}/white-paper`} component={WhitePaper} />
					<Route path={`${props.match.url}/nbn-fall`} component={NBNFall} />
					<Route path={`${props.match.url}`} exact render={() => <Redirect to="/" />} />
				</Switch>
			</Suspense>
		</Fragment>
	);
};

export default Pages;