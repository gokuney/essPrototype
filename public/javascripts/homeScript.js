$(function(){
$('#accordion').accordion();
});

var essApp = angular.module('ess' , ['ngMaterial' , 'ngRoute']);

essApp.config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet('social', '/images/social-icons.svg', 24)
    .iconSet('device', '/images/device-icons.svg', 24)
    .iconSet('communication', '/images/communication-icons.svg', 24)
    .defaultIconSet('/images/core-icons.svg', 24);
});

essApp.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl : '/partials/welcome.html',
		controller : 'welcomeController'
	})

	.when('/tutorial', {
		templateUrl : 'partials/tutorial.html',
		controller : 'tutorialController'
	})

	.when('/change-password', {
		templateUrl : 'partials/change-password.html',
		controller : 'changePasswordController'
	})

	.when('/view-employee-details', {
		templateUrl : 'partials/view-employee-details.html',
		controller : 'viewEmployeeDetailsController'
	})

	.when('/resources', {
		templateUrl : 'partials/resources/resources.html',
		controller : 'resourcesController'
	})

	.when('/resource1', {
		templateUrl : 'partials/resources/resource1.html',
		controller : 'resource1Controller'
	})

	.when('/resource2', {
		templateUrl : 'partials/resources/resource2.html',
		controller : 'resource2Controller'
	});



});

essApp.controller('welcomeController' , function($scope){

	$scope.title = 'Welcome';

});

essApp.controller('tutorialController' , function($scope){

	$scope.title = 'Welcome';

});

essApp.controller('viewEmployeeDetailsController' , function($scope){

	$scope.title = 'Welcome';

});

essApp.controller('resourcesController' , function($scope){

	$scope.title = 'Resources';

});

essApp.controller('resource1Controller' , function($scope){

	$scope.title = 'Travel Allowances';

});

essApp.controller('resource2Controller' , function($scope){

	$scope.title = 'Work Culture';

});



essApp.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
  })
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });