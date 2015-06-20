(function () {
    'use strict';

    angular
        .module('karma')
        .directive('modal', modal);

    modal.$inject = ['$timeout', '$modal', '$parse'];

    /* @ngInject */
    function modal($timeout, $modal, $parse,$rootScope) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
        };
        return directive;

        function link(scope, element, attr) {
            element.bind('click', function () {
                var modal = $modal.open({
                    templateUrl: attr.modalTemplate,
                    size: attr.modalSize,
                    scope: scope
                });
                $parse(attr.modalScope).assign(scope, modal)
            });

        }
    }


})();