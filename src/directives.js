toggleModule.directive('toggleable', function(ToggleService) {
    return {
        restrict: "A",
        replace: false,
        scope: {
            id: '@toggleable',
            toggleableClass: '@',
            visible: '=?'
        },
        link: function(scope, element) {

            ToggleService.add(scope.id, element, scope.toggleableClass);


        }
    }
});

toggleModule.directive('toggler', function(ToggleService) {
    return {
        restrict: "A",
        replace: false,
        scope: {
            id: '@toggler'
        },
        link: function(scope, element) {

            var toggle = function() {
                ToggleService.toggle(scope.id);
            }

            $(element).click( function(e) {

                e.preventDefault();
                toggle();

            });
        }
    }
});
