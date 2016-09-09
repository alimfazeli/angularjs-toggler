toggleModule.factory('ToggleService', function() {
    return {
        toggleables: {},
        add: function(identifier, element, toggleClass) {

            this.toggleables[identifier] = {
                visible: false,
                element: element,
                class: toggleClass || ""
            }

        },
        toggle: function(identifier) {

            this.closeAll(identifier);

            this.toggleables[identifier].visible = this.toggleables[identifier].visible;
            $(this.toggleables[identifier].element).toggleClass(this.toggleables[identifier].class);

            // console.log($(this.toggleables[identifier].element).addClass('show-menu'));

        },
        getElement: function(identifier) {

            return this.toggleables[identifier];
        },
        closeAll: function(except) {

            angular.forEach(this.toggleables, function(toggleable, identifier) {

                if( !except || identifier != except) {

                    toggleable.visible = false;
                    $(toggleable.element).removeClass(toggleable.class);

                }


            });
        },
        open: function(identifier) {
            
            var toggleable = this.toggleables[identifier];

            toggleable.visible = true;
            $(toggleable.element).addClass(toggleable.class);

        },
        close: function(identifier) {

            var toggleable = this.toggleables[identifier];

            toggleable.visible = true;
            $(toggleable.element).addClass(toggleable.class);

        }
    }
});
