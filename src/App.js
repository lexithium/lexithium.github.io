import React, { Suspense, lazy } from 'react';
import './assets/scss/app.scss';
import { Container, Row, Col, Spinner } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';
import SiteNavbar from './components/Navbar';

const Home = lazy(() => import('./pages/Home'));
const Pages = lazy(() => import('./pages/Pages'));

function App() {
  return (
    <div>
			<Container fluid className="page-border">
				<Row>
					<Col>
						<SiteNavbar />
					</Col>
				</Row>
			</Container>

			<Suspense fallback={ <Spinner color="primary"/> }>
				<Switch>
					<Route path="/pages" component={Pages} />
					<Route path="/" exact>
						<Home />
					</Route>
				</Switch>
			</Suspense>

			<Container fluid className="bg-primary text-white text-center py-5">
				<Row>
					<Col>
						<Container>
							<Row>
								<Col>
									<FontAwesomeIcon icon={faHandPeace} className="mr-1" /> Created by Alexis N. Shocklee, {(new Date()).getFullYear()}
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
    </div>
  );
}

export default App;
