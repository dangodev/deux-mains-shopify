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
import stepper from './components/stepper';

$(document).ready(() => {
  legacy.modal();
  legacy.signup();
  stepper();
  slider();
});

/**
 * @section Stylesheets
 */

import styles from '../stylesheets/application.sass';

module.exports = { $ };
