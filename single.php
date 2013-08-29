<?php get_header(); ?>
      <div class="large-8 columns">
        <section>
          <?php if (have_posts()) : ?>
          <?php while (have_posts()) : the_post(); ?>
          <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <header>
              <h1><?php the_title(); ?></h1>
            <span class="meta"><a href="<?php the_permalink(); ?>" title="posted <?php the_time('F j, Y'); ?>"><?php the_time('F j, Y'); ?></a> // <?php echo get_the_category_list(', '); ?> // <a href="<?php the_permalink(); ?>#comments" title="Comments"><?php comments_number( '0 Comments', '1 Comment', '% Comments' ); ?></a><br /><?php the_tags('Tags: ', ', ', ''); ?></span>
            </header>

            <?php  if((get_post_meta($post->ID, "demo", true))) { ?>
              <div class="demo-download">
                <a class="demo" href="<?php echo get_post_meta($post->ID, "demo", true); ?>">Demo</a>
                <?php $downloadShortcode=get_post_meta($post->ID,'download',true);
                  echo do_shortcode($downloadShortcode); ?>
                <div class="clear"></div>
              </div>
            <?php } ?>

            <?php the_content(); ?>

            <?php  if((get_post_meta($post->ID, "demo", true))) { ?>
              <div class="demo-download">
                <a class="demo" href="<?php echo get_post_meta($post->ID, "demo", true); ?>">Demo</a>
                <?php $downloadShortcode=get_post_meta($post->ID,'download',true);
                  echo do_shortcode($downloadShortcode); ?>
                <div class="clear"></div>
              </div>
            <?php } ?>
            
            <?php
              wp_link_pages(array(
                  'before' => '<div class="post-page-nav">' . __('', 'white'),
                  'after' => '</div>',
                  'next_or_number' => 'next_and_number',
                  'nextpagelink' => __('Next &raquo;', 'white'),
                  'previouspagelink' => __('Prev &laquo;', 'white'),
                  'pagelink' => '%',
                  'echo' => 1 )
              );
            ?>
            <article id="comments" class="comments">
              <?php comments_template('', true); ?>
            </article>
          </article>
          <?php endwhile; else: ?>
          <?php endif; ?>
        </section>
      </div>
        <!--END POSTS-->
        <?php get_sidebar(); ?>
        <!--END SIDEBAR-->
    <!--END CONTENT-->
<?php get_footer(); ?>