describe("Unit: MessageController", function() {

	var $rootScope, $scope, $controller;

	beforeEach(module("messageApp"));

	beforeEach(inject(function(_$rootScope_, _$controller_){
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$controller = _$controller_;

		$controller("MessageController", {'$scope': $scope});
	}));

	it("Should create the messageData array", function()
	{
		expect($scope.messageData.length === 2);
	});
});