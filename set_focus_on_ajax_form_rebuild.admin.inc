<?php

/**
 * @file
 * Admin page callback file for the Set Focus on AJAX Form Rebuild module.
 *
 */

/**
 * Set Focus on AJAX Form Rebuild configuration form.
 *
 * This form provides site admins options to specify for the module to 
 * control how keyboard focus is set when a new textfield/textarea is added
 * and/or when a file or image is uploaded or removed.
 */
function set_focus_on_ajax_form_rebuild_admin_form($form, &$form_state) {
  $form['set_focus_on_ajax_form_rebuild_options'] = array(
    '#type' => 'fieldset', 
    '#title' => t('Options for setting keyboard focus on form rebuild.'), 
    '#collapsible' => FALSE, 
    '#collapsed' => FALSE,
  );

  $form['set_focus_on_ajax_form_rebuild_options']['set_focus_textfields'] = array(
    '#type' => 'checkbox',
    '#title' => t('Sets focus for "Add another item" textfields and long text (textarea) fields'),
    '#default_value' => variable_get('set_focus_on_ajax_form_rebuild_textfields', FALSE),
    '#description' => t('When a new textfield or textarea is added by clicking "Add another item", focus is set to the newly added field.'),
  );

  $form['set_focus_on_ajax_form_rebuild_options']['set_focus_file_uploads'] = array(
    '#type' => 'checkbox',
    '#title' => t('Sets focus for file and image uploads and removals'),
    '#default_value' => variable_get('set_focus_on_ajax_form_rebuild_file_uploads', FALSE),
    '#description' => t('On file upload, this option will set focus to the newly added filename.  On file removal, it will display a message near the file select button indicating the file has been removed and set focus to the message.  If the file was added and removed before the form was saved, the message will not display the filename; otherwise, it will display the filename.'),
  );
   
  $form['submitter'] = array(
    '#type' => 'submit',
    '#value' => 'Save settings',
  );

  return $form;
}

/**
 * Custom submission function for set_focus_on_ajax_form_rebuild_admin_form().  
 */
function set_focus_on_ajax_form_rebuild_admin_form_submit($form, &$form_state) {
  variable_set('set_focus_on_ajax_form_rebuild_textfields', $form_state['values']['set_focus_textfields']);
  variable_set('set_focus_on_ajax_form_rebuild_file_uploads', $form_state['values']['set_focus_file_uploads']);
}