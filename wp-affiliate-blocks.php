<?php

/*
  Plugin Name: Wp Affiliate Blocks
  Description: Add simple affiliate blocks to your site
  Version: 1.0.0
  Author: Matt Kiggen
  Author URI: https://github.com/mattkiggen/
*/

if (!defined('ABSPATH')) exit;

class WpAffiliateBlocks {
  function __construct()
  {
    add_action('init', [$this, 'onInit']);
  }

  function onInit() {
    wp_register_script('wpAffiliateBlocksScript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    wp_register_style('wpAffiliateBlocksStyle', plugin_dir_url(__FILE__) . 'build/index.css');
    
    register_block_type('wpaffiliateblocks/product-box', array(
      'render_callback' => array($this, 'renderCallback'),
      'editor_script' => 'wpAffiliateBlocksScript',
      'editor_style' => 'wpAffiliateBlocksStyle'
    ));
  }

  function renderCallback() {
    return '<p>product box here</p>';
  }
}

$wpAffiliateBlocks = new WpAffiliateBlocks();