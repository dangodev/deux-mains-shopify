/**
 * Application
 *
 * Set Modules here
 */

/**
 * @section Vendor JS
 */

import $ from 'jquery';

/**
 * @section Custom JS
 */

import legacy from './legacy';
import slider from './components/slider';

$(document).ready(() => {
  legacy.modal();
  legacy.signup();
  slider();
});

/**
 * @section Stylesheets
 */

import styles from '../stylesheets/application.sass';

module.exports = { $ };
