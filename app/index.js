import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { render } from 'react-dom';
import { hashHistory } from 'react-router';

import configureRoutes from './routes/';


const history = hashHistory;


const rootElement = document.getElementById('root');

render(configureRoutes(history), rootElement);
