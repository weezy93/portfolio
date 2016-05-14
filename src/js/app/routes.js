(function () {
  angular.module('myApp')
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'partials/projects.html'
      })
      .state('aboutMe', {
        url: '/about-me',
        templateUrl: 'partials/aboutMe.html'
      })
      .state('resume', {
        url: '/resume',
        templateUrl: 'partials/resume.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'partials/contact.html'
      });
    });
})();
