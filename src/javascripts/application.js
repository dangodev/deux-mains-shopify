/**
 * Application
 *
 * Set Modules here
 */

/**
 * @section Stylesheets
 */

import styles from '../stylesheets/application.sass';

/**
 * @section Vendor JS
 */

import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import slick from 'slick-carousel';

const vendor = {
  $,
  slick,
  svg4everybody,
};

/**
 * @section Custom JS
 */

import legacy from './legacy';
const library = {
  legacy,
};

/**
 * @section Export
 */

module.exports = Object.assign(vendor, library);
