<?php

/**
 * Plugin Name:       Block Salad
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-salad
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_block_salad_block_init()
{
	register_block_type(__DIR__ . '/build/post-grid');
	register_block_type(__DIR__ . '/build/tabs');
	register_block_type(__DIR__ . '/build/tab-content');

	if (!is_admin()) {
		wp_enqueue_script('boilerplateFrontendScript', plugin_dir_url(__FILE__) . 'build/tabs/frontend.js', array('wp-element'));
		wp_enqueue_style('boilerplateFrontendStyles', plugin_dir_url(__FILE__) . 'build/tabs/frontend.css');
	}
}
add_action('init', 'create_block_block_salad_block_init');