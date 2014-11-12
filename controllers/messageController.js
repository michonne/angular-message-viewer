messageApp.controller("MessageController", function($scope, MessageService, $filter)
{
	$scope.messageData = [];

	$scope.getNewMessages = function()
	{
		$scope.hasError = false;
		$scope.hasNoMessagesError = false;

		MessageService.getMessages().then(
		/* success */
		function(messages)
		{
			var i;
			var newMessage;
			var isUniqueMessage = false;
			var hasUnique = false;

			for (i = 0; i < messages.length; i++)
			{
				newMessage = messages[i];
				isUniqueMessage = $filter("uniqueMessageFilter")($scope.messageData, newMessage);

				if (isUniqueMessage)
				{
					hasUnique = true;
					$scope.messageData.unshift(newMessage);
				}
			}

			if (!hasUnique)
			{
				$scope.hasNoMessagesError = true;
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