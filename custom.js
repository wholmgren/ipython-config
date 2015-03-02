$([IPython.events]).on("app_initialized.NotebookApp", function () {
    
    hideHeader();
    
    IPython.keyboard_manager.command_shortcuts.add_shortcut('t', {
    help : 'toggle header/menu',
    help_index : 'zz',
    handler : function (event) {
            if ($('div#header').is(':visible')) {
                hideHeader();
            } else {
                showHeader();
            };
            return false;
        }
    });
});

function hideHeader() {
    $('div#header').hide();
    $('div#maintoolbar').hide();
}

function showHeader() {
    $('div#header').show();
    $('div#maintoolbar').show();
}

