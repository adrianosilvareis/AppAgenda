angular.module('agenda')
	.config(function ($routeProvider) {

		$routeProvider.when('/', {
			templateUrl: 'partials/index.html',
			controller: 'agendaCtrl'
		});

		$routeProvider.when('/cliente', {
			templateUrl: 'partials/cliente.html',
			controller: 'agendaCtrl'
		});

		$routeProvider.when('/lista', {
			templateUrl: 'partials/lista.html',
			controller: 'agendaCtrl'
		});

		$routeProvider.when('/contatos', {
			templateUrl: 'partials/contatos.html',
			controller: 'agendaCtrl'
		});

		$routeProvider.when('/quemsou', {
			templateUrl: 'partials/quemsou.html',
			controller: 'agendaCtrl'
		});

		$routeProvider.when('/exit', {
			templateUrl: 'partials/exit.html',
			controller: 'agendaCtrl'
		});

		$routeProvider.otherwise({redirectTo: '/'});

	})