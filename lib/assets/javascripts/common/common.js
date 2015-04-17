angular.module('appCommon', [
  'ngResource',
  'ngAnimate',
  'ngTouch',
  'LocalStorageModule',

  'ui.bootstrap',
  'spinner',
  'ui.router',
  'angularUtils.directives.uiBreadcrumbs'
])
.constant('BREADCRUMBS_TEMPLATE', 'assets/templates/common/breadcrumbs.tpl.html');
