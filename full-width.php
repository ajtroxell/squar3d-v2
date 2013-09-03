<?php
/*
Template Name: Full Width
*/ get_header(); ?>
      <div class="large-12 columns">
        <section>
          <?php if (have_posts()) : ?>
          <?php while (have_posts()) : the_post(); ?>
          <article>
              <header>
                <h1><?php the_title(); ?></h1>
              </header>
              <?php the_content(); ?>
              <div class="clear"></div>
          </article>
          <?php endwhile; else: ?>
          <?php endif; ?>
          <div class="clear"></div>
        </section>
      </div>
  <!--END CONTENT-->
<?php get_footer(); ?>