
Set Focus on AJAX Form Rebuild 
==========================================

The Set Focus on AJAX Form Rebuild module sets the keyboard focus to an
appropriate and useful element after a form is rebuilt following an AJAX call.
For example, for cases where a new textfield or textarea is added for a 
widget that can have unlimited values, the focus is set to the most recently
added field.  For file uploads, the focus is set to the link to the newly added
file.  For file removals, an appropriate message is sent to the screen adjacent
to the file select button and focus is set to the message.  For file uploads,
the link color is set to green, and for file removals, the message text color is
set to red; while this does not help the visually impaired, it takes nothing
away from them, and it makes the module more useful for sighted users.

By default, Drupal does not set keyboard focus to an element that makes it
obvious what the next step should be for users who use screenreaders to navigate
the page.  This creates an accessibility problem for the visually impaired.  

The goal of this module is to address that problem by enhancing keyboard
accessibility in an effort to meet U.S. Government Section 508 compliance
requirements.  This functionality of this module only affects node- and taxonomy
term-editing forms; it does not affect forms created through Webforms or the
Form API.

NOTE:  This module is still in development.  

Issues
==========================================
1.  The focus does set focus for field types of Text, Long text, and Long text
and summary; however, it does not set focus properly for Long text, and Long
text and summary fields if the CKEditor wysiwyg editor is set for those fields.

2.  Having CKEditor wysiwyg editor on Long text fields interferes with the 
JavaScript that sets focus on the message when a file is removed or added, but
only for the first file removed or added.

3.  This module is not currently optimized for use with the Field Collection
module; some functionality may work, but some may not.  

4.  The functionality to set focus on textfields and textareas is not supported
in the OpenPublic distro, because that distro has additional code in 
/misc/ajax.js (Drupal.ajax.prototype.success, lines 419 through 426) that sets
focus to the element that triggered the AJAX request.

These issues are expected to be addressed in a future release.  

Requirements
==========================================
Drupal 7.x

-- CREATORS --

Matthew F. McKinzie -- https://www.drupal.org/u/mckinzie25
