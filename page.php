<?php get_header(); ?>
      <div class="large-8 columns">
        <section>
          <?php if (have_posts()) : ?>
          <?php while (have_posts()) : the_post(); ?>
          <article>
              <header>
                <h1><?php the_title(); ?></h1>
              </header>
              <?php the_content(); ?>
          </article>
          <?php endwhile; else: ?>
          <?php endif; ?>
        </section>
      </div>
        <!--END CONTENT-->
        <?php get_sidebar(); ?>
        <!--END SIDEBAR-->
  <!--END CONTENT-->
<?php get_footer(); ?>