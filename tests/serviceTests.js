describe("Unit: MessageService", function() {

	var service;
	var $httpBackend;

	beforeEach(module("messageApp"));

	beforeEach(inject(function(MessageService, _$httpBackend_){
		service = MessageService;
		$httpBackend = _$httpBackend_;
	}));

	it("Should return a promise", function () {
		expect(service.getMessages().then).toBeDefined();
	});
});