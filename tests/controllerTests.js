describe("Unit: MessageController", function() {

	var $rootScope;
	var $scope;
	var $controller;

	beforeEach(module("messageApp"));

	beforeEach(inject(function(_$rootScope_, _$controller_, _$httpBackend_, _$q_)
	{
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$controller = _$controller_;
		$httpBackend = _$httpBackend_;
		$q = _$q_;

		$controller("MessageController", {'$scope': $scope});

		$httpBackend.expect("GET", "http://adaptive-test-api.herokuapp.com/tweets.json");

		$httpBackend.whenGET("http://adaptive-test-api.herokuapp.com/tweets.json").respond({
			success: [{"message": "test message"}]
		});
	}));

	it("Should create a messageData array", function()
	{
		expect($scope.messageData instanceof Array).toBeTruthy();
	});
});