import React from 'react';
import ReactDOM from 'react-dom';
import 'aos/dist/aos.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
