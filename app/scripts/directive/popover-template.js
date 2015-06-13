angular.module( 'ui.bootstrap.popover' )
.directive( 'popoverTemplatePopup', [ function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { title: '@', template: '=', placement: '@', animation: '&', isOpen: '&' },
    templateUrl: 'views/common/popover.html',
    link: function( scope, iElement ) {
      var contentEl = angular.element( iElement[0].querySelector( '.popover-content' ) );
      scope.$watch( 'template', function( template ) {
        if ( !template ) { return; }
        contentEl.children().remove();
        contentEl.append( template );
      });
    }
  };
}])

.directive( 'popoverTemplate', [ '$tooltip', function ( $tooltip ) {
  return $tooltip( 'popoverTemplate', 'popover', 'click' );
}]);