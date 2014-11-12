/**
 * Service to get messages from adaptive-test-api
 * Depends on $http service
 */

messageApp.factory("MessageService", function($http, $q)
{
	return {
		getMessages: function()
		{
			var deferred = $q.defer();

			$http.get("http://adaptive-test-api.herokuapp.com/tweets.json")
				.success(function(response)
				{
					deferred.resolve(response);
				})
				.error(function(error)
				{
					console.log("ERROR!!");
					deferred.reject(error);
				});

			return deferred.promise;
		}
	}
});