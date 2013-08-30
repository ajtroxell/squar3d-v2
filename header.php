<!DOCTYPE html>

<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->
<head>
  <meta charset="utf-8" />

  <!-- Set the viewport width to device width for mobile -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta name="msapplication-tap-highlight" content="no"/>

  <title>
    <?php if (function_exists('is_tag') && is_tag()) { echo 'Tag Archive for &quot;'.$tag.'&quot; - '; } elseif (is_archive()) { wp_title(''); echo ' Archive - '; } elseif (is_search()) { echo 'Search for &quot;'.wp_specialchars($s).'&quot; - '; } elseif (!(is_404()) && (is_single()) || (is_page())) { wp_title(''); echo ' - '; } elseif (is_404()) { echo 'Not Found - '; } if (is_home()) { bloginfo('name'); echo ' - '; bloginfo('description'); } else { bloginfo('name'); } ?>
  </title>

  <!-- Included CSS Files (Compressed) -->
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/master.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/user.css">

  <!-- Color Schemes -->
  <?php $options = get_option('squar3d_theme_options'); if (($options['schemeinput'] == 'default')) { echo ""; } elseif (($options['schemeinput'] == 'none')) { echo ""; } else { echo "<link rel='stylesheet' href='".get_template_directory_uri()."/assets/css/color-schemes/".$options['schemeinput'].".css'>"; } ?>
  <?php $options = get_option('squar3d_theme_options'); if ($options['custom-stylesheet']) { echo "<link rel='stylesheet' href='".get_template_directory_uri()."/".$options['custom-stylesheet'].".css'>"; } ?>
  <?php $options = get_option('squar3d_theme_options'); if ($options['css_override']) { echo "<style type='text/css'>".$options['css_override']."</style>"; } ?>

  <!-- Google Font -->
  <link href='http://fonts.googleapis.com/css?family=Ubuntu:300,400,700' rel='stylesheet' type='text/css'>

  <!-- Fav and touch icons -->
    <?php $options = get_option('squar3d_theme_options'); if ($options['ios144']) { echo "<link rel='apple-touch-icon' sizes='144x144' href='".$options['ios144']."'>"; } ?><?php $options = get_option('squar3d_theme_options'); if ($options['ios114']) { echo "<link rel='apple-touch-icon' sizes='114x114' href='".$options['ios114']."'>"; } ?><?php $options = get_option('squar3d_theme_options'); if ($options['ios72']) { echo "<link rel='apple-touch-icon' sizes='72x72' href='".$options['ios72']."'>"; } ?><?php $options = get_option('squar3d_theme_options'); if ($options['ios57']) { echo "<link rel='apple-touch-icon' href='".$options['ios57']."'>"; } ?><?php $options = get_option('squar3d_theme_options'); if ($options['favicon']) { echo "<link rel='shortcut icon' href='".$options['favicon']."'>"; } ?>

  <!-- Wordpress Header Scripts -->
    <?php wp_enqueue_script("jquery"); ?>
    <?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); wp_head(); ?>

  <!-- Wordpress XML -->
    <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="<?php echo site_url(); ?>/feed/" />

</head>

<body <?php body_class(); ?>>

<div id="wrap">

  <div class="row header-wrap">
    <div class="small-3 large-3 columns">
      <a id="hamburger">
        <i class="metro-plain-hamgurger"></i>
      </a>
    </div>
    <div class="small-9 large-3 columns">
      <?php $options = get_option('squar3d_theme_options'); if (($options['searchinput']) == "above") { echo get_search_form(); } ?>
    </div>
  </div>

  <div class="row wrap-content">

    <div class="large-12 columns">

      <header class="primary">
            <div class="row">
              <div class="large-5 columns logo">
                <a href="<?php echo site_url(); ?>" title="Home">
                  <?php $options = get_option('squar3d_theme_options');
                    if (($options['logoinput']) == ("yes")) { 
                      echo "<img src='".$options['logo']."' alt='".get_bloginfo('name')."' />";
                      if ( is_home() || is_front_page() ) {
                        echo "<h1 class='hidden-txt'>";
                        echo bloginfo('name');
                        echo "</h1>";
                      }
                      else {
                        echo "<h2 class='hidden-txt'>";
                        echo bloginfo('name');
                        echo "</h2>";
                      }
                    }
                    else {
                      if ( is_home() || is_front_page() ) {
                        echo "<h1>";
                        echo bloginfo('name');
                        echo "</h1>";
                      }
                      else {
                        echo "<h2>";
                        echo bloginfo('name');
                        echo "</h2>";
                      }
                    }
                  ?>
                </a>
                <?php $options = get_option('squar3d_theme_options'); if (($options['taglineinput']) == "yes") { echo "<span class='description'>"; echo bloginfo('description'); echo"</span>"; } ?>
              </div>
              <div class="large-7 columns">
                <nav id="primary-nav" role="navigation">
                  <?php wp_nav_menu( array( 'theme_location' => 'header-menu' ) ); ?>
                </nav>
                <div class="row">
                  <div class="large-6 push-6 columns">
                    <?php $options = get_option('squar3d_theme_options'); if (($options['searchinput']) == "below") { echo get_search_form(); } ?>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div class="row">