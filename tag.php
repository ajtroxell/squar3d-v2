<?php get_header(); ?>
      <div class="large-8 columns">
        <section>
          <header>
            <h1>Browsing tag <i><?php wp_title("",true); ?></i></h1>
          </header>
          <?php if (have_posts()) : ?>
          <?php while (have_posts()) : the_post(); ?>
          <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
              <header>
                  <h2><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h2>
                  <span class="meta"><a href="<?php the_permalink(); ?>" title="posted <?php the_time('F j, Y'); ?>"><?php the_time('F j, Y'); ?></a> // <?php echo get_the_category_list(', '); ?> // <a href="<?php the_permalink(); ?>#comments" title="Comments"><?php comments_number( '0 Comments', '1 Comment', '% Comments' ); ?></a><br /><?php the_tags('Tags: ', ', ', ''); ?></span>
                </header>
                  <?php if(has_post_thumbnail()) :?>
                  <div class="img">
                    <?php the_post_thumbnail(); ?>
                  </div>
                  <?php endif;?>
                <?php the_excerpt(); ?>
          </article>
          <?php endwhile; else: ?>
          <?php endif; ?>
          <div class="post-page-nav">
            <span class="prev"><?php previous_posts_link('&larr; Newer Entries') ?></span>
            <span class="next"><?php next_posts_link('Older Entries &rarr;') ?></span>
          </div>
        </section>
      </div>
        <!--END POSTS-->
        <?php get_sidebar(); ?>
        <!--END SIDEBAR-->
    <!--END CONTENT-->
<?php get_footer(); ?>