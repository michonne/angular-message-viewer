messageApp.controller("MessageController", function($scope)
{
	$scope.messageData = [
		{
			"created_at": "2012-09-27T16:15:06Z",
			"followers": 5,
			"id": 8,
			"message": "Tweet me your fav drinks #drinks",
			"sentiment": 0,
			"updated_at": "2012-09-27T16:15:06Z",
			"user_handle": "@drinkies"
		},
		{
			"created_at": "2012-09-27T16:11:44Z",
			"followers": 345,
			"id": 4,
			"message": "Who likes coca-cola?",
			"sentiment": 0,
			"updated_at": "2012-09-27T16:11:44Z",
			"user_handle": "@questionnr"
		}
	];
});