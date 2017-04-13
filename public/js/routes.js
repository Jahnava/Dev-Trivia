(function() {
  angular.module('mymeanblog')
      .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
    $routeProvider
      .when('/', {
        controller: 'SignupController',
        templateUrl: 'views/signup.html',
        restricted: {
          access: false
        }
      })
      .when('/login', {
        controller: 'LoginController',
        templateUrl: 'views/login.html',
        restricted: {
          access: true
        }
      })

      .when('/dashboard', {
        controller: 'DashboardController',
        templateUrl: 'views/dashboard.html',
        restricted: {
          access: true
        }
      })
      .when('/create', {
        controller: 'PostController',
        templateUrl: 'views/create.html',
        restricted: {
          access: true
        }
      })
      .when('/edit/:postId', {
        controller: 'PostController',
        templateUrl: 'views/edit.html',
        restricted: {
          access: false
        }
      })

      .otherwise({
        redirectTo: '/',
        restricted: {
        access: false
        }
      });
  }
}());
