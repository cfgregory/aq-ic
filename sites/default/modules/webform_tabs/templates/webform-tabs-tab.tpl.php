<?php
/**
 * @file
 * The template file for an tabs Tab.
 *
 * Available variables:
 * $title: The title for the tabs tab.
 *
 * children: The rendered child fields of the tab.
 *
 * $element: The raw render array for the tab.
 */

?>
<h3 class="tabs-tab-title"><a href="#"><?php print $title; ?></a></h3>
<div class="tabs-tab-content"><?php print $children; ?></div>
