messageApp.controller("MessageController", function($scope, MessageService, $filter)
{
	$scope.messageData = [];
	$scope.hasError = false;

	$scope.getNewMessages = function()
	{
		MessageService.getMessages().then(
		/* success */
		function(messages)
		{
			var i;
			var newMessage;
			var isUniqueMessage = false;

			for (i = 0; i < messages.length; i++)
			{
				newMessage = messages[i];
				isUniqueMessage = $filter("uniqueMessageFilter")($scope.messageData, newMessage);

				if (isUniqueMessage)
				{
					$scope.messageData.unshift(newMessage);
				}
			}
		},
		/* failure */
		function(e)
		{
			console.log("WE GOT A FAILURE!!! " + e.error.message);
			$scope.hasError = true;
		})
		.catch(function(error)
		{
			console.log("SOME OTHER FAILURE HAPPENED??? " + error);
		});
	};

	$scope.getNewMessages();
});