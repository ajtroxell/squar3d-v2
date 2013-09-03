#SQUAR3D V2
SQUAR3D V2 is the sequel to the original SQUAR3D theme, except this time it has been taking steroids. It has a small footprint, is responsive, and offers a ton of user customization.

##Demo
View a demo [here](http://themes.ajtroxell.com/index.php?wptheme=Squar3d+v2).

##Features
-	Responsive design
-	CSS written in SASS(scss) with source files and codekit-config.json provided
-	Widgetized sidebar
-	Threaded comments w/ Gravatars
-	[Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/) used for responsive lightbox styled image/gallery viewing
-	Separate trackbacks and comments
-	Header and footer menu areas
-	Header dropdown menu support
	-	Three tiers supported
-	Post format styles and icons built in (can be disabled via CSS)
-	Sticky post styling
-	WP-Metro icon font installed by default, see usage and available icons [here](http://ajtroxell.github.io/wp-metro/)
-	Custom Theme Options
	-	Customizable logo and logo placement
	-	Customizable favicon and iOS icons
	-	Multiple areas for search field placement (above content, below navigation, or widget)
	-	21 color scheme options or a custom scheme
	-	Specify a custom stylesheet URL OR insert specific properties into theme options CSS field
	-	Show or hide site tagline below site logo
	-	Choose from 38 social icons to be placed in the footer
	-	Customizable footer text
	-	Google Analytics placement without editing the theme
-	Off-canvas mobile navigation with dropdown support

##Installation
If you have never installed a custom WordPress theme before, check out [Using Themes](http://codex.wordpress.org/Using_Themes) on WordPress.org. If you have previously installed themes then this should be no problem for you.

1. Unzip and upload the folder squar3d-v2 to the `/wp-content/themes/` directory on your server.
2. Activate it via the Dashboard.
3. In `Appearance » Menus`, create two menus. One for your header navigation, and one for your social icons in the footer.
4. Visit `Appearance » Theme Options` to configure SQUAR3D V2.
5. Visit `Appearance » Widgets` and start adding your Widgets. All the work is done for you.

##Screenshots
<a href="http://ajtroxell.com/wp-content/uploads/2013/08/01.jpg" style="float:left;" target="new"><img src="http://ajtroxell.com/wp-content/uploads/2013/08/01.jpg" title="Clean and simple" style="width:150px;height:auto;"/>
<a href="http://ajtroxell.com/wp-content/uploads/2013/08/01.jpg" style="float:left;" target="new"><img src="http://ajtroxell.com/wp-content/uploads/2013/08/02.jpg" title="Footer with custom icons" style="width:150px;height:auto;"/>
<a href="http://ajtroxell.com/wp-content/uploads/2013/08/01.jpg" style="float:left;" target="new"><img src="http://ajtroxell.com/wp-content/uploads/2013/08/04.jpg" title="Default styles" style="width:150px;height:auto;"/>
<a href="http://ajtroxell.com/wp-content/uploads/2013/08/01.jpg" style="float:left;" target="new"><img src="http://ajtroxell.com/wp-content/uploads/2013/08/03.jpg" title="Threaded comments" style="width:150px;height:auto;"/>
<a href="http://ajtroxell.com/wp-content/uploads/2013/08/01.jpg" style="float:left;" target="new"><img src="http://ajtroxell.com/wp-content/uploads/2013/08/05.jpg" title="Separate trackbacks and comments" style="width:150px;height:auto;"/>
<a href="http://ajtroxell.com/wp-content/uploads/2013/08/01.jpg" style="float:left;" target="new"><img src="http://ajtroxell.com/wp-content/uploads/2013/08/06.jpg" title="Theme options" style="width:150px;height:auto;"/>
<a href="http://ajtroxell.com/wp-content/uploads/2013/08/01.jpg" style="float:left;" target="new"><img src="http://ajtroxell.com/wp-content/uploads/2013/08/07.jpg" title="Custom logo fields" style="width:150px;height:auto;"/>
<a href="http://ajtroxell.com/wp-content/uploads/2013/08/01.jpg" style="float:left;" target="new"><img src="http://ajtroxell.com/wp-content/uploads/2013/08/08.jpg" title="Social icons" style="width:150px;height:auto;"/>
<a href="http://ajtroxell.com/wp-content/uploads/2013/08/01.jpg" style="float:left;" target="new"><img src="http://ajtroxell.com/wp-content/uploads/2013/08/09.jpg" title="Analytics support" style="width:150px;height:auto;"/>
<a href="http://ajtroxell.com/wp-content/uploads/2013/08/01.jpg" style="float:left;" target="new"><img src="http://ajtroxell.com/wp-content/uploads/2013/08/10.jpg" title="Mobile friendly/responsive" style="width:150px;height:auto;"/>
<a href="http://ajtroxell.com/wp-content/uploads/2013/08/01.jpg" style="float:left;" target="new"><img src="http://ajtroxell.com/wp-content/uploads/2013/08/11.jpg" title="Off-canvas mobile nav" style="width:150px;height:auto;"/>
<a href="http://ajtroxell.com/wp-content/uploads/2013/08/01.jpg" style="float:left;" target="new"><img src="http://ajtroxell.com/wp-content/uploads/2013/08/12.jpg" title="Sidebar stacking on mobile" style="width:150px;height:auto;"/>

##Changelog
###1.1.3
*	Further improvement made to Magnific Popup intialization via jQuery

###1.1.2
*	Updated README.md features list
*	Updated Magnific Popup to use jQuery to initialize images and galleries
*	Corrected blockquote styling
*	Removed unneeded functions-user.php file

###1.1.1
*	Removed user.scss, user.css files
*	Removed call to user.css in header.php
*	Adjusted call to style.css in header.php to use stylesheet_directory_uri
*	Improvements/changes made for better child theme support