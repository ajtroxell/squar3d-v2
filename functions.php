<?php
/*
 * Add theme update checking
 */
	require 'theme-updates/theme-update-checker.php';
	$example_update_checker = new ThemeUpdateChecker(
	    'squar3d-v2',
	    'http://labs.ajtroxell.com/themes/squar3d-v2/info.json'
	);
/*
 * Add theme options
 */
	require_once (TEMPLATEPATH .'/functions/theme-options.php');
/*
 * Include user functions
 */
	require_once (TEMPLATEPATH .'/functions-user.php');
/*
 * Remove header junk
 */
	remove_action('wp_head', 'rsd_link');
	remove_action('wp_head', 'wp_generator');
	remove_action('wp_head', 'feed_links', 2);
	remove_action('wp_head', 'index_rel_link');
	remove_action('wp_head', 'wlwmanifest_link');
	remove_action('wp_head', 'feed_links_extra', 3);
	remove_action('wp_head', 'start_post_rel_link', 10, 0);
	remove_action('wp_head', 'parent_post_rel_link', 10, 0);
	remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);
/*
 * Register sidebar
 */
	if ( function_exists('register_sidebar') )
		register_sidebar(array(
			'before_widget' => '<aside class="callout">',
			'after_widget' => '<div class="clear"></div></aside>',
			'before_title' => '<h3>',
			'after_title' => '</h3>',
	));
/**
 * Menus
 */
	register_nav_menus( array(
        'header-menu' => __( 'Header Menu' ),
        'footer-menu' => __( 'Footer Menu' ),
    ));
/**
 * Thumbnails
 */
	add_theme_support( 'post-thumbnails' );
	set_post_thumbnail_size(755, 125, true);
/**
 * Feed links
 */
	add_theme_support( 'automatic-feed-links' );
/**
 * Add magnific popup class to images
 */
add_filter('the_content', 'addlightboxrel_replace');
function addlightboxrel_replace ($content)
{	global $post;
	$pattern = "/<a(.*?)href=('|\")(.*?).(bmp|gif|jpeg|jpg|png)('|\")(.*?)>/i";
  	$replacement = '<a$1class="pop" href=$2$3.$4$5$6</a>';
    $content = preg_replace($pattern, $replacement, $content);
    return $content;
}
/**
 * Excerpt
 */
	function replace_excerpt($content) {
		return str_replace('[...]',
			'...',
			$content
		);
	}
	add_filter('the_excerpt', 'replace_excerpt');
/**
 * Contact width
 */
	if ( ! isset( $content_width ) )
		$content_width = 755;
/**
 * Remove caption line styling
 */
	add_shortcode('wp_caption', 'fixed_img_caption_shortcode');
	add_shortcode('caption', 'fixed_img_caption_shortcode');
	function fixed_img_caption_shortcode($attr, $content = null) {
		if ( ! isset( $attr['caption'] ) ) {
			if ( preg_match( '#((?:<a [^>]+>\s*)?<img [^>]+>(?:\s*</a>)?)(.*)#is', $content, $matches ) ) {
				$content = $matches[1];
				$attr['caption'] = trim( $matches[2] );
			}
		}
		$output = apply_filters('img_caption_shortcode', '', $attr, $content);
		if ( $output != '' )
			return $output;

		extract(shortcode_atts(array(
			'id'	=> '',
			'align'	=> 'alignnone',
			'width'	=> '',
			'caption' => ''
		), $attr));

		if ( 1 > (int) $width || empty($caption) )
			return $content;

		if ( $id ) $id = 'id="' . esc_attr($id) . '" ';

		return '<div ' . $id . 'class="wp-caption ' . esc_attr($align) . '" style="width: ' . $width . 'px">'
		. do_shortcode( $content ) . '<p class="wp-caption-text">' . $caption . '</p></div>';
	}
/**
 * Custom prev/next links
 */
	add_filter('wp_link_pages_args', 'wp_link_pages_args_prevnext_add');
	function wp_link_pages_args_prevnext_add($args) {
	    global $page, $numpages, $more, $pagenow;

	    if (!$args['next_or_number'] == 'next_and_number') 
	        return $args; # exit early

	    $args['next_or_number'] = 'number'; # keep numbering for the main part
	    if (!$more)
	        return $args; # exit early

	    if($page-1) # there is a previous page
	        $args['before'] .= _wp_link_page($page-1)
	            . $args['link_before']. $args['previouspagelink'] . $args['link_after'] . '</a>'
	        ;

	    if ($page<$numpages) # there is a next page
	        $args['after'] = _wp_link_page($page+1)
	            . $args['link_before'] . $args['nextpagelink'] . $args['link_after'] . '</a>'
	            . $args['after']
	        ;

	    return $args;
	}

/**
 * Add theme usage
 */
	function squar3d_v2_presstrends_theme() {
	    // PressTrends Account API Key
	    $api_key = '1uv0ak16ziqw785pmqxn0eykq5pmhic3kvqv';
	    $auth = 'zf0rpvcugj6of7xhpzgeuyn0fl84bccbk';
	    // Start of Metrics
	    global $wpdb;
	    $data = get_transient( 'presstrends_theme_cache_data' );
	    if ( !$data || $data == '' ) {
	        $api_base = 'http://api.presstrends.io/index.php/api/sites/add/auth/';
	        $url      = $api_base . $auth . '/api/' . $api_key . '/';
	        $count_posts    = wp_count_posts();
	        $count_pages    = wp_count_posts( 'page' );
	        $comments_count = wp_count_comments();
	        if ( function_exists( 'wp_get_theme' ) ) {
	            $theme_data    = wp_get_theme();
	            $theme_name    = urlencode( $theme_data->Name );
	            $theme_version = $theme_data->Version;
	        } else {
	            $theme_data = get_theme_data( get_stylesheet_directory() . '/style.css' );
	            $theme_name = $theme_data['Name'];
	            $theme_version = $theme_data['Version'];
	        }
	        $all_plugins = get_plugins();
	        $plugin_name = '';
	        foreach ( $all_plugins as $plugin_file => $plugin_data ) {
	            $plugin_name .= $plugin_data['Name'];
	            $plugin_name .= '&';
	        }
	        $posts_with_comments = $wpdb->get_var( "SELECT COUNT(*) FROM $wpdb->posts WHERE post_type='post' AND comment_count > 0" );
	        $avg_time_btw_posts = $wpdb->get_var("SELECT TIMESTAMPDIFF(SECOND, MIN(post_date), MAX(post_date)) / (COUNT(*)-1) FROM $wpdb->posts WHERE post_status = 'publish' AND post_type = 'post'");
	        $avg_time_btw_comments = $wpdb->get_var("SELECT TIMESTAMPDIFF(SECOND, MIN(comment_date), MAX(comment_date)) / (COUNT(*)-1) FROM $wpdb->comments WHERE comment_approved = '1'");
	        $data                	= array(
	            'url'             	=> stripslashes( str_replace( array( 'http://', '/', ':' ), '', site_url() ) ),
	            'posts'           	=> $count_posts->publish,
	            'pages'           	=> $count_pages->publish,
	            'comments'        	=> $comments_count->total_comments,
	            'approved'        	=> $comments_count->approved,
	            'spam'            	=> $comments_count->spam,
	            'between_posts'   	=> $avg_time_btw_posts,
	            'between_comments'	=> $avg_time_btw_comments,
	            'pingbacks'       	=> $wpdb->get_var( "SELECT COUNT(comment_ID) FROM $wpdb->comments WHERE comment_type = 'pingback'" ),
	            'post_conversion' 	=> ( $count_posts->publish > 0 && $posts_with_comments > 0 ) ? number_format( ( $posts_with_comments / $count_posts->publish ) * 100, 0, '.', '' ) : 0,
	            'theme_version'   	=> $theme_version,
	            'theme_name'      	=> $theme_name,
	            'site_name'       	=> str_replace( ' ', '', get_bloginfo( 'name' ) ),
	            'plugins'         	=> count( get_option( 'active_plugins' ) ),
	            'plugin'          	=> urlencode( $plugin_name ),
	            'wpversion'       	=> get_bloginfo( 'version' ),
	            'api_version'	  	=> '2.4',
	        );
	        foreach ( $data as $k => $v ) {
	            $url .= $k . '/' . $v . '/';
	        }
	        wp_remote_get( $url );
	        set_transient( 'presstrends_theme_cache_data', $data, 60 * 60 * 24 );
	    }
	}
	add_action('admin_init', 'squar3d_v2_presstrends_theme');
?>
<?php function squaredv2_pings($comment, $args, $depth) {
	$GLOBALS['comment'] = $comment; ?>
		<li id="comment-<?php comment_id(); ?>"><?php comment_author_link(); ?>
<?php } ?>
<?php function squaredv2_comments($comment, $args, $depth) {
	$GLOBALS['comment'] = $comment; ?>
	<li <?php comment_class(); ?> id="li-comment-<?php comment_ID() ?>">
		<div id="comment-<?php comment_ID(); ?>">
			<div class="avatar">
				<?php echo get_avatar($comment,$size='66' ); ?>
			</div>

			<?php if ($comment->comment_approved == '0') : ?>
				<em><?php _e('Your comment is awaiting moderation.', 'white') ?></em>
				<br />
			<?php endif; ?>

			<?php comment_text() ?>

			<div class="comment-meta">
				<div class="info vcard">
					<?php printf(__('<cite class="fn">%s</cite>, '), get_comment_author_link()) ?>
					<?php printf(__('%1$s at %2$s', 'white'), get_comment_date(),get_comment_time()) ?><?php edit_comment_link( __( '(Edit)', 'white' ), ' ' ) ?>
				</div>
				<?php if($args['max_depth']!=$depth) { ?>
				<div class="reply">
					<?php comment_reply_link(array_merge($args, array('depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
				</div>
			<?php } ?>
			</div>
			<div class="clear"></div>
		</div>
<?php } ?>