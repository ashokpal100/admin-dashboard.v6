/**
 * @ngdoc function
 * @name adminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminApp
 */
 
(function(){
  angular.module('adminApp').controller('MainCtrl',['$scope','$cookieStore', function($scope,$cookieStore) {
  console.log("came here MainCtrl");
    $(".push_menu").click(function(){
         $(".navbartop").toggleClass('navbarfixedtopfull');
         $(".navbar-brand").toggleClass('navbar-brandFull');
         $("#logo").toggleClass('logo');
         $(".wrapper").toggleClass("active");
         $('#menuItem').toggleClass('menuHide');
         $('#menuItemIcon').toggleClass('menuShow');
         $('.footer-bottom').toggleClass('footer-bottom-full');
    });


  }]);
})();