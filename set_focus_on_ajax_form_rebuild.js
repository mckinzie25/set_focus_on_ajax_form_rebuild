/*
 * @file
 * JavaScript for set_focus_on_ajax_form_rebuild.
 *
 * Uses jQuery .ajaxStart() and ajaxComplete() to set keyboard focus
 * and link/message color for file uploads and removals.
 */

(function($) {
  //Since we can't replace the callback function for file uploads and then use
  //ajax_command_invoke(), we set focus on the appropriate element after the
  //AJAX callback is complete, here.

  Drupal.behaviors.SetFocusAjaxFormRebuild = {
    attach: function(context, settings) {
      jQuery( document ).ajaxComplete(function( event, xhr, settings ) {

        if( settings.context.extraData._triggering_element_name ) {
          //Gets the name of the triggering element, to determine if the user
          //was adding or removing a file
          var triggerElem = settings.context.extraData._triggering_element_name;

          //Gets current timestamp so we can create unique ids for used
          //placeholders.
          var timestamp = new Date().getTime();

          //Adds green color to uploaded file links and red color to remove
          //messages, as well as setting focus.  Obviously, this is not of value
          //to the visually impaired, but makes the functionality a little more
          //useful for sighted users.  We set display=none here twice on used
          //remove_placeholders so that they won't be executed multiple times by
          //Drupal behaviors.
          if ( triggerElem.indexOf('upload_button') >= 0 ) {
            if(document.getElementById( 'set_focus_on_ajax_form_rebuild_upload_placeholder_id' ) != null) {
              $( '[id^=set_focus_on_ajax_form_rebuild_remove_placeholder_id_used_]' ).css( 'display', 'none' );
              $( '#set_focus_on_ajax_form_rebuild_upload_placeholder_id' ).css( 'color', 'green' );
              $( '#set_focus_on_ajax_form_rebuild_upload_placeholder_id' ).focus();
              $( '#set_focus_on_ajax_form_rebuild_upload_placeholder_id' ).attr( 'id', 'set_focus_on_ajax_form_rebuild_upload_placeholder_id_used_' + timestamp);
            }
          } else if ( triggerElem.indexOf('remove_button') >= 0 ) {
            if(document.getElementById( 'set_focus_on_ajax_form_rebuild_remove_placeholder_id' ) != null) {
              $( '[id^=set_focus_on_ajax_form_rebuild_remove_placeholder_id_used_]' ).css( 'display', 'none' );
              $( '#set_focus_on_ajax_form_rebuild_remove_placeholder_id' ).css( 'color', 'red' );
              $( '#set_focus_on_ajax_form_rebuild_remove_placeholder_id' ).focus();
              $( '#set_focus_on_ajax_form_rebuild_remove_placeholder_id' ).attr( 'id', 'set_focus_on_ajax_form_rebuild_remove_placeholder_id_used_' + timestamp );
            }
          }
        }
      })
    }
  }
})(jQuery);
