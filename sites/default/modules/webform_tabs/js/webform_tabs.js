/**
 * @file
 * Enables the tabs display on webforms.
 */

(function ($) {
  Drupal.behaviors.webform_tabs = {
    attach: function(context) {
      $('.tabs-container').tabs()
    }
  }
})(jQuery);
