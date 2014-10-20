(function(){
var app = angular.module('ATT', []);

app.controller('LibraryController', function(){
this.libraries = librariesData;
});

var librariesData = [
             { "contentID" : 1,
                "content": {
                    "reads": "12",
                    "level": "intermediate",
                    "presenter": "Anath"
                },
                "tags": [{tagID:1,tagName:"ananth"},{tagID:2,tagName:"ades"}],
                "category": {
                    "categoryName": "Article",
                    "categoryID": 1
                },
                "title": "Cloud App",
                "url": "https://drive.google.com/a/wso2.com/?tab=mo#my-drive"
            },
            {   "contentID" : 2,
                "tags": [{tagID:1,tagName:"ananth"},{tagID:2,tagName:"ades"}],
                "category": {
                    "categoryName": "Webinar",
                    "categoryID": 4
                },
                "title": "Wso2 carbon",
                "url": "https://drive.google.com/a/wso2.com/?tab=mo#my-drive"
            },
            {   "contentID" : 3,
                "tags": [{tagID:1,tagName:"ananth"},{tagID:2,tagName:"ades"}],
                "category": {
                    "categoryName": "Article",
                    "categoryID": 1
                },
                "title": "test1",
                "url": "http://test.com/test"
            },
            {   "contentID" : 4,
                "tags": [{tagID:1,tagName:"ananth"},{tagID:2,tagName:"ades"}],
                "category": {
                    "categoryName": "Article",
                    "categoryID": 1
                },
                "title": "test1",
                "url": "http://test.com/test"
            }
        ];

})();
