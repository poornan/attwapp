(function(){
var addLibrary = angular.module('addLibrary', []);
addLibrary.controller('AddController', ['$http', 'transformRequestAsFormPost', function($http, transformRequestAsFormPost){
  this.formData = {};
  this.processForm = function() {
                  console.log(this.formData);
                  $http({
                          method  : 'POST',
                          url     : 'https://appserver.dev.cloud.wso2.com/t/ananthanesh4519/webapps/attws-default-SNAPSHOT/services/library/libraryService/library',
                          data    : this.formData,  // pass in data as strings
                          transformRequest: transformRequestAsFormPost
                          //headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
                      })
                          .success(function(data) {
                              console.log(data);
                              console.log(data.message);

                              if (!data.success) {
                              	// if not successful, bind errors to error variables
                                  //$scope.errorName = data.errors.name;
//                                  $scope.errorSuperhero = data.errors.superheroAlias;
                              } else {
                              	// if successful, bind success message to message
//                                  $scope.message = data.message;
                              }
                          });
  			};

}]);

addLibrary.factory(
            "transformRequestAsFormPost",
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

                        /*buffer.push(
                            encodeURIComponent( name ) +
                            "=" +
                            encodeURIComponent( ( value == null ) ? "" : value )
                        );*/
                        buffer.push(name+"=" +( value == null ) ? "" : value );

                    }

                    // Serialize the buffer and clean it up for transportation.
                    var source = buffer
                        .join( "&" )
                        .replace( /%20/g, "+" )
                    ;

                    return( source );

                }

            }
        );

var app = angular.module('ATT', []);
/*app.config(function ($httpProvider) {
            $httpProvider.defaults.withCredentials = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
            $httpProvider.defaults.headers.common = {
                                                            'Access-Control-Allow-Origin': '*',
                                                            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                                                            'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
                                                            'Access-Control-Allow-Credentials': true
                                                            };
        $httpProvider.defaults.useXDomain = true;
    });*/

app.controller('LibraryController', ['$http', function($http){
this.libraries;// = librariesData;

var library = this;
    $http.get('https://appserver.dev.cloud.wso2.com/t/ananthanesh4519/webapps/attws-default-SNAPSHOT/services/library/libraryService/library').success(function(data){
    library.libraries = data;
    });
}]);
/*
var librariesData = [
                        {
                            "content": {
                                "reads": "12",
                                "level": "intermediate",
                                "presenter": "Anath"
                            },
                            "tags": [],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "Cloud App",
                            "url": "https://drive.google.com/a/wso2.com/?tab=mo#my-drive"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Webinar",
                                "categoryID": 4
                            },
                            "title": "Wso2 carbon",
                            "url": "https://drive.google.com/a/wso2.com/?tab=mo#my-drive"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "test1",
                            "url": "http://test.com/test"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "test1",
                            "url": "http:\\/\\/test.com\\/test"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "test1",
                            "url": "http://test.com/test"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "test2",
                            "url": "qwerty"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "edfjhbnm",
                            "url": "sd"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "edfjhbnm",
                            "url": "sd"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Video",
                                "categoryID": 3
                            },
                            "title": "asdferty",
                            "url": "eatsd.com"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Video",
                                "categoryID": 3
                            },
                            "title": "asdferty",
                            "url": "eatsd.com"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Video",
                                "categoryID": 3
                            },
                            "title": "asdferty",
                            "url": "eatsd.com"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Video",
                                "categoryID": 3
                            },
                            "title": "asdferty",
                            "url": "eatsd.com"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Video",
                                "categoryID": 3
                            },
                            "title": "asdferty",
                            "url": "eatsd.com"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "asdfdsftest",
                            "url": "teat.com"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Video",
                                "categoryID": 3
                            },
                            "title": "asdferty",
                            "url": "eatsd.com"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "asdferty",
                            "url": "eatsd.com"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "asdfdsftest",
                            "url": "teat.com"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "asdfdsftest",
                            "url": "teat.com"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "asdfdsftest",
                            "url": "teat.com"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "asdfdsftest",
                            "url": "teat.com"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "asdfdsftest",
                            "url": "teat.com"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "asdfdsftest",
                            "url": "teat.com"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "asdfdsftest",
                            "url": "teat.comasdg"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "asdfdsftest",
                            "url": "me.me"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "memememe",
                            "url": "me.me"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "memememe",
                            "url": "me.me"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "memememe",
                            "url": "me.me"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "memememe",
                            "url": "me.me"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "memememe",
                            "url": "me.me"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "memememe",
                            "url": "me.me"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "memememe",
                            "url": "me.me"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "memememe",
                            "url": "me.me"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "memememe",
                            "url": "me.me"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "memememe",
                            "url": "me.me"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "memememe",
                            "url": "me.me"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "memememe",
                            "url": "me.me"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "memememe",
                            "url": "me.me"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "test2",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "testmy service",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "tmy service",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "6",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "tmy service try1",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "6",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "ctr my do",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "6",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "ctr my sec",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "6",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "ctr final",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "6",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "ctr final 1",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "6",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "ctr final 2",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "6",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "ctr final 3",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "6",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "ctr final 4",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "6",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "ctr final 5",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "6",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "ctr final 6",
                            "url": "me.me"
                        },
                        {
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Webinar",
                                "categoryID": 4
                            },
                            "title": "ctr final 8",
                            "url": "me.me"
                        },
                        {
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Webinar",
                                "categoryID": 4
                            },
                            "title": "good to go",
                            "url": "me.me"
                        },
                        {
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Webinar",
                                "categoryID": 4
                            },
                            "title": "good to go 1",
                            "url": "me.me"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Webinar",
                                "categoryID": 4
                            },
                            "title": "Wso2 Jaggery ",
                            "url": "wso2.com/jaggery"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "Wso2 Data service ",
                            "url": "wso2.com/dataservice"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "Wso2 Data service 1",
                            "url": "wso2.com/dataservice"
                        },
                        {
                            "content": {
                                "reads": "6",
                                "level": "beginner ",
                                "presenter": "Ananth, Prindicka, Naasheer"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "Wso2 ESB",
                            "url": "wso2.com/esb"
                        },
                        {
                            "content": {
                                "reads": "6",
                                "level": "beginner ",
                                "presenter": "Ananth, Prindicka, Naasheer"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "Wso2 ESB Server",
                            "url": "wso2.com/esb"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "Wso2 Data service server",
                            "url": "wso2.com/dataservice"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "WSO2 Data service server",
                            "url": "wso2.com/dataservice"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "Wso2 application",
                            "url": "org.org"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Video",
                                "categoryID": 3
                            },
                            "title": "connector",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "1",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "application server",
                            "url": "org.org"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "Rest article",
                            "url": "rest"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "Rest article",
                            "url": "rest"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "Rest article1",
                            "url": "rest"
                        },
                        {
                            "content": {
                                "reads": "23",
                                "level": "easy",
                                "presenter": "abc"
                            },
                            "tags": [],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "Rest article2",
                            "url": "rest"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "test2adsfmzp",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "pqowie",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "pqowiemt",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "pqowiemt1m0",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "pqowiemt1m06n",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "pqowiemt1m06n1z8",
                            "url": "me.me"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "pqowiemt1m06n",
                            "url": "me.me"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "pqowiemt1m06n",
                            "url": "me.me"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "pqowiemt1m06n",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "pqo5;swiemt1m06n",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Video",
                                "categoryID": 3
                            },
                            "title": "asdgpq3m9",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [],
                            "category": {
                                "categoryName": "Video",
                                "categoryID": 3
                            },
                            "title": "asdgpq3m90",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "1",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "wso2 carbon",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "1",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "gfgh"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "srwraralcer4",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "gfgh"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "srwraralcer",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "1",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "qazwsxxt52w",
                            "url": "httpe://www.prindicka.com"
                        },
                        {
                            "content": {
                                "reads": "1",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "qazwsxxt52w4",
                            "url": "httpe://www.prindicka.com"
                        },
                        {
                            "content": {
                                "reads": "9",
                                "level": "immediate",
                                "presenter": "gf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "asdfgfhmn65",
                            "url": "httpe://www.prindicka.com"
                        },
                        {
                            "content": {
                                "reads": "2",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Video",
                                "categoryID": 3
                            },
                            "title": "wso2 carbon",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "q"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "application servergfchjvk",
                            "url": "org.org"
                        },
                        {
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Webinar",
                                "categoryID": 4
                            },
                            "title": "qwe",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "qwfbgfnv",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "1",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "hhhhhgf",
                            "url": "jaggery.org"
                        },
                        {
                            "content": {
                                "reads": "2",
                                "level": "high",
                                "presenter": "sded"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "wertgr",
                            "url": "www.www"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "qw",
                            "url": "org.org"
                        },
                        {
                            "tags": [],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "qw",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "qwdffbnrtn",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "test20v2",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "test20v2ed",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "test20v2ed9",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "t1est20v2ed9",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "xc "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "ssfa b",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "t1es2t20v2ed9",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "t1e3s2t20v2ed9",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "t1e34s2t20v2ed9",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "t1e34s25t20v2ed9",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "xc "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "wwweeeeeeeeeeeeeee",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "xc "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "wwweeeeeeeeeeeeeee1",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "qazwsx320m",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "1",
                                "level": "immediate",
                                "presenter": "knl"
                            },
                            "tags": [
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "hygkn",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "qazwsx320mx",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "qazppoiu5g",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "iiii",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                },
                                {
                                    "tagName": "Cloud App",
                                    "tagID": "2"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "qazppoiu5gd",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "dlk"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "rvdvt",
                            "url": "jdbc:mysql://localhost:3306/university"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "dlk"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "rvdvt fvg g",
                            "url": "jdbc:mysql://localhost:3306/university"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "ertcd vf",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "ertcd vfjhgfiu",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "ertcd vfjhgfiukjhyfiuk",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "ertcd vfjhgfiukjhyfiukkjk",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "ertcd vfjhgfiukjhyfiukkj",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "resbrsd",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "resbrsd12",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "resbrsd123ytdfuj",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "afdb",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "wso2 cloud appvsRBV",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "wso2 cloud appvsRBVRKM",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "wso2 carbonkhlh",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "0",
                                "level": "immediate",
                                "presenter": "wefevf "
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Article",
                                "categoryID": 1
                            },
                            "title": "wso2 carbonkhlhmnbj",
                            "url": "org.org"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "Postman",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "Postmanr",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "Postmanrx",
                            "url": "me.me"
                        },
                        {
                            "content": {
                                "reads": "readsqf",
                                "level": "leveladf",
                                "presenter": "presenteradsf"
                            },
                            "tags": [
                                {
                                    "tagName": "Esb",
                                    "tagID": "1"
                                }
                            ],
                            "category": {
                                "categoryName": "Presentation",
                                "categoryID": 2
                            },
                            "title": "Gmail Application",
                            "url": "me.me"
                        }
                    ];*/



})();
