messageApp.filter("uniqueMessageFilter", function()
{
	return function(currentMessages, newMessage)
	{
		var isUnique = true;
		var i;

		if (currentMessages.length > 0)
		{
			for (i = 0; i < currentMessages.length; i++)
			{
				if(currentMessages[i].id === newMessage.id)
				{
					console.log("Found duplicate message from: " + newMessage.user_handle +
					" message was: " + newMessage.message);
					isUnique = false;
				}
			}
		}

		return isUnique;
	}
});