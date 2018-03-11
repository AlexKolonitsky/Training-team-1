$(document).ready(function () {

    $(document).on('click', '.global-edit-button:not(._active)', function(e) {
        var $editButton = $(e.currentTarget);
        var $parents = $('[data-edit]');

        $editButton.addClass('_active');
        $parents.each(function() {
            var $text = $(this).find('span');
            var $field = $(this).find('input');

            $text.hide();
            $field.show().val($text.text());
        })
    });

    $(document).on('click', '.global-edit-button._active', function(e) {
        var $saveButton = $(e.currentTarget);
        var $parents = $('[data-edit]');

        $saveButton.removeClass('_active');
        $parents.each(function() {
            var $text = $(this).find('span');
            var $field = $(this).find('input');

            $text.text($field.val()).show();
            $field.hide();
        })
    });
    
});