<?php get_header(); ?>
      <div class="large-8 columns">
        <section>
          <article>
              <header>
                <h1>01000101 01110010 01110010 01101111 01110010 00100000 00110100 00110000 00110100</h1>
              </header>
              <?php the_content(); ?>
               <p>Unless you can read binary code, your failure to read this message will result in the implosion of the interwebs.</p>

              <p>Actually, this is just a good ole <strong>Error 404</strong> page. Unless i'm mistaken, the page you are looking for is no longer here. Why don't you try searching!</p>

              <p>If you still can't find it, go ahead and <a href="mailto:<?php echo antispambot(get_bloginfo('admin_email')); ?>?subject=Error 404">email me</a> and we'll figure it out together.</p>

              <?php get_search_form(); ?>
          </article>
        </section>
      </div>
        <!--END CONTENT-->
        <?php get_sidebar(); ?>
        <!--END SIDEBAR-->
  <!--END CONTENT-->
<?php get_footer(); ?>