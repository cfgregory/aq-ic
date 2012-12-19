<?php
/**
 * @file
 * Defines the tabs Tab webform component.
 */

/**
 * Implements _webform_defaults_component().
 */
function _webform_defaults_tabs_tab() {
  return array(
    'name' => '',
    'form_key' => NULL,
    'pid' => 0,
    'weight' => 0,
    'extra' => array(
      'title_display' => 0,
      'description' => '',
      'private' => FALSE,
    ),
  );
}

/**
 * Implements _webform_edit_component().
 */
function _webform_edit_tabs_tab($component) {
  $form = array();

  // Empty placeholder so that users don't get a warning about
  // the component not having an edit function defined.
  $form['webform_tabs_tab_placeholder'] = array(
    '#type' => 'markup',
    '#value' => '',
  );

  return $form;
}

/**
 * Implements _webform_render_component().
 */
function _webform_render_tabs_tab($component, $value = NULL, $filter = TRUE) {
  $component['weight'] += 10;

  $element = array(
    '#type' => $component['type'],
    '#title' => $filter ? _webform_filter_xss($component['name']) : $component['name'],
    '#title_display' => $component['extra']['title_display'] ? $component['extra']['title_display'] : NULL,
    '#weight' => $component['weight'],
    '#description' => $filter ? _webform_filter_descriptions($component['extra']['description']) : $component['extra']['description'],
    '#attributes' => array('class' => array('webform-component-tabs-tab'), 'id' => 'webform-component-' . $component['form_key']),
    '#pre_render' => array('webform_tabs_tab_prerender', 'webform_element_title_display'),
    '#webform_component' => $component,
    '#id' => 'webform-component-' . str_replace('_', '-', $component['type']),
    '#theme_wrappers' => array('webform_tabs_tab'),
  );

  return $element;
}

/**
 * Pre-render function to set a tabs ID.
 */
function webform_tabs_tab_prerender($element) {
  $element['#attributes']['id'] = 'webform-component-' . str_replace('_', '-', implode('--', array_slice($element['#parents'], 1)));
  $element['#id'] = $element['#attributes']['id'];
  return $element;
}

/**
 * Implements _webform_display_component().
 */
function _webform_display_tabs_tab($component, $value, $format = 'html') {
  if ($format == 'text') {
    $element = array(
      '#title' => $component['name'],
      '#weight' => $component['weight'],
      '#post_render' => array('webform_element_wrapper'),
      '#theme_wrappers' => array('webform_element_text'),
      '#translatable' => array('title'),
    );
  }
  else {
    $element = _webform_render_tabs_tab($component, $value);
  }

  $element['#format'] = $format;

  return $element;
}

/**
 * Theme function callback for rendering the tabs tab HTML.
 *
 * @param array $variables
 *   The theme variables array.
 *
 * @return string
 *   The HTML output for the tab.
 */
function theme_webform_tabs_tab($variables) {
  webform_tabs_insert_js_css();
  $element = $variables['element'];
  $variables = array(
    'title' => $element['#title'],
    'children' => $element['#children'],
    'element' => $element,
  );

  return theme('webform_tabs_tab_template', $variables);
}
