(function () {
  angular.module('myApp')
    .controller('projectsCtrl', projectsCtrl);

  projectsCtrl.$inject = ['projectsService'];

  function projectsCtrl(projectsService) {
    var vm = this;

    vm.projects = [];
  }

})();
