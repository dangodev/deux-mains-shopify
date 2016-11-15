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

import svg4everybody from 'svg4everybody';
svg4everybody();

/**
 * @section Custom JS
 */

import legacy from './legacy';
import product from './components/product';
import slider from './components/slider';

legacy.signup();
legacy.modal();

