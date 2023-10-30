<?php
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
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

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
define( 'AUTH_KEY',          '#t^Z$(RCPv~Sy:_@;,mser/aMmhnpR}rAX@A6Y+j|Qt!.a=vKwV|?<S:P&9c~y~)' );
define( 'SECURE_AUTH_KEY',   'r+*5MZATWRpkd2-.Fi^;`uzJ&c7uD/X~ct!qwDqH4f?5ih-G}137WdprpUj:T7eg' );
define( 'LOGGED_IN_KEY',     'D9b%vN(wfY|7u}9MA8h,*CaKB{b-:h 2uh*GFukK6%m:2Z0T~2lQ:p>f);I~&>di' );
define( 'NONCE_KEY',         'mAor(Ts1 l&CP TDDRpKa3F(60BGXWW+oaz~j>@Nx*8x f%v84$0gjliC1+e L*^' );
define( 'AUTH_SALT',         'eW60HuS+e<C)~O1Iri+hA>$Q.~+%j8GueWt93lC~iZr!}`lS(p2wMo%Fh<Vf5*Bx' );
define( 'SECURE_AUTH_SALT',  '*RFQyi?+(m0P,kw9?iqO?VF|mX5z9+@z?]Zz.2YfAqhM?K/AmJ-^Ph)P(d4aVKY%' );
define( 'LOGGED_IN_SALT',    'EFs[ZqCpKT|S!lV)YuhJ^)Zfq1zZ&IbrmTA!@D]> %i2F{6Ks<!>j*;NtE&@?2C%' );
define( 'NONCE_SALT',        ',KfQCj9zyYO0Z),/N]Dj4v4^$ew*;!F$#Pv.rY?Bh7}dp`*k{xF4Ssj-(1[sqCCW' );
define( 'WP_CACHE_KEY_SALT', 'kkD<2q0fP-.#U1@cPKNghwzE+,m8?YlB6M4z1wI0FDW#ZL}d/VUD65wLFM#RLIuR' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
