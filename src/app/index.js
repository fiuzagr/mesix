'use strict';

// pages
import pages from 'pages';

// app container
let $app = window.document.querySelector('#app');

// configure mithril route mode
m.route.mode = 'hash';

// init App
m.route($app, '/', pages);
