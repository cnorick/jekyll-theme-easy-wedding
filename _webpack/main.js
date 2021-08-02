import './main.scss';
import { Modal } from 'bootstrap';
import { createAddToCalendarButton } from './js/calendar';
window.jQuery = window.$ = require('jquery');
require('jquery.easing');
require('./js/rsvp');
require('./js/nav');
window.createAddToCalendarButton = createAddToCalendarButton;

