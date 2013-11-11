(function() {
    'use strict';

    var app = angular.module('dynamicUI', ['ui.router']);

    app.config(['$stateProvider', function($stateProvider){
    	$stateProvider
    		.state('home', {
    			url: '/home',
    			templateUrl: 'app/layouts/layout.main.html'
    		})
            .state('home.details', {
                url: '/details',
                templateUrl: 'app/partials/home.details.html'
            });

		$stateProvider
    		.state('signin', {
    			url: '/signin',
    			templateUrl: 'app/layouts/layout.signin.html'
    		});
    }]);

    app.run(['$state', function($state){
    	$state.transitionTo('home');
    }]);
})();
