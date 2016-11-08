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
import slick from 'slick-carousel';
import svg4everybody from 'svg4everybody';

svg4everybody();
$('.store-gallery-lg').slick();

/**
 * @section Custom JS
 */

import legacy from './legacy';
legacy.signup();
legacy.modal();

/**
 * @section Export
 */

export default $;
