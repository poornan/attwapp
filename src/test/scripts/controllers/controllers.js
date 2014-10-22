(function(){

'use strict';

/* Controllers */

var app = angular.module('ATTApp.controllers', []);


// Clear browser cache (in development mode)
//
// http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine
app.run(function ($rootScope, $templateCache) {
  $rootScope.$on('$viewContentLoaded', function () {
    $templateCache.removeAll();
  });
});


app.controller('DummyCtrl', ['$scope', 'DummyFactory', function ($scope, DummyFactory) {
  $scope.bla = 'bla from controller';
  DummyFactory.query({}, function (data) {
    $scope.foo = data.firstName;
  })
}]);

app.controller('UserListCtrl', ['$scope', 'UsersFactory', 'UserFactory', '$location',
  function ($scope, UsersFactory, UserFactory, $location) {

    /* callback for ng-click 'editUser': */
    $scope.editUser = function (userId) {
      $location.path('/user-detail/' + userId);
    };

    /* callback for ng-click 'deleteUser': */
    $scope.deleteUser = function (userId) {
      UserFactory.delete({ id: userId });
      $scope.users = UsersFactory.query();
    };

    /* callback for ng-click 'createUser': */
    $scope.createNewUser = function () {
      $location.path('/user-creation');
    };

    $scope.users = UsersFactory.query();
  }]);

app.controller('UserDetailCtrl', ['$scope', '$routeParams', 'UserFactory', '$location',
  function ($scope, $routeParams, UserFactory, $location) {

    /* callback for ng-click 'updateUser': */
    $scope.updateUser = function () {
      UserFactory.update($scope.user);
      $location.path('/user-list');
    };

    /* callback for ng-click 'cancel': */
    $scope.cancel = function () {
      $location.path('/user-list');
    };

    $scope.user = UserFactory.show({id: $routeParams.id});
  }]);

app.controller('UserCreationCtrl', ['$scope', 'UsersFactory', '$location',
  function ($scope, UsersFactory, $location) {

    /* callback for ng-click 'createNewUser': */
    $scope.createNewUser = function () {
      UsersFactory.create($scope.user);
      $location.path('/user-list');
    }
  }]);

  app.controller('LibraryCreationCtrl', ['$scope', 'UsersFactory', '$location',
    function ($scope, UsersFactory, $location) {

      /* callback for ng-click 'createNewUser': */
      $scope.createNewUser = function () {
        UsersFactory.create($scope.user);
        $location.path('/user-list');
      }
    }]);

app.controller('AddController', ['$http', 'transformRequestAsFormPost',
    function($http, transformRequestAsFormPost){
  this.formData = {};
  this.processForm = function() {
                  console.log(this.formData);
                  $http({
                          method  : 'POST',
                          url     : 'https://appserver.dev.cloud.wso2.com/t/ananthanesh4519/webapps/attws-default-SNAPSHOT/services/library/libraryService/library',
                          data    : this.formData,  // pass in data as strings
                          transformRequest: transformRequestAsFormPost,
                          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
                      })
                          .success(function(data) {
                              console.log(data);
                              console.log(data.message);
                               //this.formData = {};
                               //x= data;
                              /*if (!data.success) {
                              	// if not successful, bind errors to error variables
                                  //$scope.errorName = data.errors.name;
//                                  $scope.errorSuperhero = data.errors.superheroAlias;
                              } else {
                              	// if successful, bind success message to message
//                                  $scope.message = data.message;
                              }*/
                              var test;
                              function checkTags(){
                              for (var i = 0; i < data.response.tags.length; i++) {

                                  if (data.response.tags[i].result=="SUCCESSFUL") {
                                  test = true;
                                  } else {
                                  test = false;
                                  }
                              }

                              }
                              if (data.status===200 &&
                                  data.response.Content=="SUCCESSFUL" &&
                                  data.response.Library=="SUCCESSFUL"
                                 ){
                                    //this.formData = {};
                                    alert("successfully added");
//                                    console.log(this.formData);
                                  } else {
                                     alert("Something went wrong please try again later");
                                  }
                          });
  			};

}]);

app.factory("transformRequestAsFormPost",
            function() {

                // I prepare the request data for the form post.
                function transformRequest( data, getHeaders ) {

                    var headers = getHeaders();

                    //headers[ "Content-type" ] = "application/x-www-form-urlencoded; charset=utf-8";

                    return( serializeData( data ) );

                }


                // Return the factory value.
                return( transformRequest );


                // ---
                // PRVIATE METHODS.
                // ---


                // I serialize the given Object into a key-value pair string. This
                // method expects an object and will default to the toString() method.
                // --
                // NOTE: This is an atered version of the jQuery.param() method which
                // will serialize a data collection for Form posting.
                // --
                // https://github.com/jquery/jquery/blob/master/src/serialize.js#L45
                function serializeData( data ) {

                    // If this is not an object, defer to native stringification.
                    if ( ! angular.isObject( data ) ) {

                        return( ( data == null ) ? "" : data.toString() );

                    }

                    var buffer = [];

                    // Serialize each key in the object.
                    for ( var name in data ) {

                        if ( ! data.hasOwnProperty( name ) ) {

                            continue;

                        }

                        var value = data[ name ];

                        buffer.push(
                            encodeURIComponent( name ) +
                            "=" +
                            encodeURIComponent( ( value == null ) ? "" : value )
                        );
                        //buffer.push(name+"=" +( value == null ) ? "" : value );

                    }

                    // Serialize the buffer and clean it up for transportation.
                    var source = buffer
                        .join( "&" )
                        .replace( /%20/g, "+" )
                    ;

                    return( source );

                }

            });
app.controller('LibraryController', ['$http', '$rootScope', '$location',
    function($http, $rootScope, $location){
    this.libraries;// = librariesData;
    this.editLibrary = function (library){
       $rootScope.library = library;
       console.log($rootScope.library);
       $location.path('/library-edit');
    };
    var library = this;
        $http.get('https://appserver.dev.cloud.wso2.com/t/ananthanesh4519/webapps/attws-default-SNAPSHOT/services/library/libraryService/library').success(function(data){
        library.libraries = data;
        console.log(data);
        });
    }]);

app.controller('UpdateController', ['$http', '$rootScope', 'transformRequestAsFormPost',
    function($http, $rootScope, transformRequestAsFormPost){

  this.formData = {};
  this.formData = $rootScope.library;
  console.log(this.formData);
  console.log($rootScope.library);
  this.processForm = function() {
                  console.log(this.formData);
                  $http({
                          method  : 'POST',
                          url     : 'https://appserver.dev.cloud.wso2.com/t/ananthanesh4519/webapps/attws-default-SNAPSHOT/services/library/libraryService/library',
                          data    : this.formData,  // pass in data as strings
                          transformRequest: transformRequestAsFormPost,
                          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
                      })
                          .success(function(data) {
                              console.log(data);
                              console.log(data.message);
                               //this.formData = {};
                               //x= data;
                              /*if (!data.success) {
                              	// if not successful, bind errors to error variables
                                  //$scope.errorName = data.errors.name;
//                                  $scope.errorSuperhero = data.errors.superheroAlias;
                              } else {
                              	// if successful, bind success message to message
//                                  $scope.message = data.message;
                              }*/
                              var test;
                              function checkTags(){
                              for (var i = 0; i < data.response.tags.length; i++) {

                                  if (data.response.tags[i].result=="SUCCESSFUL") {
                                  test = true;
                                  } else {
                                  test = false;
                                  }
                              }

                              }
                              if (data.status===200 &&
                                  data.response.Content=="SUCCESSFUL" &&
                                  data.response.Library=="SUCCESSFUL"
                                 ){
                                    //this.formData = {};
                                    alert("successfully added");
//                                    console.log(this.formData);
                                  } else {
                                     alert("Something went wrong please try again later");
                                  }
                          });
  			};

}]);


})();