<?php
define( 'WP_CACHE', true ); // Added by WP Rocket

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'sds_main' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'c@ Wv&>l2ZYG7ttQza+XnJrcZKyH+$f/C-7**y|<ssA6s3KOY9n-s)4F:~@p`2EK' );
define( 'SECURE_AUTH_KEY',  'J7j0,S?vu_U(hY/tu!dl*P2Dn=z#p<WjNCw-|<9V}%rpOV7g%dB?_Pf#j{K>R;0I' );
define( 'LOGGED_IN_KEY',    '-w~$I0=BcvNQL+Kwk_:c a1Cy[uiNzVdQ|UsWnU+6(<=zL[;Z.N.vGO7Q-=.&yzR' );
define( 'NONCE_KEY',        '-O[DN^;x/A0E-Zfaj@,]VQtiy513$*?Ke([[Tm9Lf.v|#58{DB.e*cz^*TJQa;/T' );
define( 'AUTH_SALT',        'r.rb.#g(_I=ga?H~59@Hp.YHGM[K)M&y_cV=eaBaJs,k<a$EI*?n8wWsn3%g9uC>' );
define( 'SECURE_AUTH_SALT', 'JQ+-v%eXomKk1M4AyosrAYWY}NYR5~sy A*c]fKPz.,CqJ?JL1mP5|RAz!}p=cht' );
define( 'LOGGED_IN_SALT',   '*{EU]xr3.Ze1l6y@Xv6q^6,< X<:&? xm+T%|~sBtK%O=8?<]uEU(AA ~[{t0f)0' );
define( 'NONCE_SALT',       'HV.JC`:[2x1F 6B|zKELEo;GRJ|@YyIPblb@ZaFl?*>l36kbsF]q9[:f({5U0`mB' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
