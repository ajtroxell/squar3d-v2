<?php
	/*
	 * DEREGISTER WP-DOWNLOAD MANAGER STYLES/SCRIPTS
	 */
	add_action( 'wp_print_styles', 'my_deregister_styles', 100 );

	function my_deregister_styles() {
		wp_deregister_style( 'thickbox' );
		wp_deregister_style( 'wpdm-front' );
		wp_deregister_script( 'thickbox' );
	}
?>