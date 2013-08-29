      </div>
        <footer>
          <div class="row">
            <div class="large-12 columns">
              <?php get_template_part('metro-icons'); ?>
            </div>
          </div>
          <div class="row">
            <div class="large-8 push-4 columns">
              <nav class="secondary-nav" role="navigation">
                <?php wp_nav_menu( array( 'theme_location' => 'footer-menu' ) ); ?>
              </nav>
            </div>
            <div class="small-12 large-4 pull-8 columns">
              <p class="copy">Copyright &copy; <?php echo date("Y") ?> <?php bloginfo('name'); ?>. <?php $options = get_option('squar3d_theme_options'); if ($options['footer-text']) { echo $options['footer-text']; } ?></p>
            </div>
          </div>
        </footer>

      </div>

    </div>

  </div>

<!-- Included JS Files -->
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/js/master-ck.js"></script>

<!-- Wordpress Footer -->
<?php wp_footer(); ?>

<?php $options = get_option('squar3d_theme_options'); if ($options['google-analytics']) { echo $options['google-analytics']; } ?>

</body>
</html>