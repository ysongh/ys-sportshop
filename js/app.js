var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(function($routeProvider) {
	$routeProvider
		.when("/equipments", {
			templateUrl: "partials/equipment-list.html",
			controller: "EquipmentListCtrl"
		})
		.when("/cart", {
			templateUrl: "partials/cart-list.html",
			controller: "CartListCtrl"
		})
	.otherwise({
		redirectTo: "/equipments"
	});
});

myApp.factory("cartService", function() {
	var cart = [];
	var total = 0;
	
	return {
		getCart: function() {
			return cart;
		},
		addToCart: function(equipment) {
			cart.push(equipment);
		},
		buy: function(equipment) {
			total+=equipment.price;
			alert("Thanks for buying " + equipment.name + ", your total is $" + total);
			cart.splice(equipment);
		}
	};
});

myApp.factory("equipmentService", function() {
	var equipments = [
		{
			imgUrl: "baseball.jpg",
			name: "Baseball",
			price: 20,
			quanity: 5,
			details: "Small leather ball"
		},
		{
			imgUrl: "pingpongball.jpg",
			name: "Ping Pong Ball",
			price: 5,
			quanity: 20,
			details: "Small plastic ball"
		},
		{
			imgUrl: "paddle.jpg",
			name: "Paddle",
			price: 19,
			rating: 4,
			quanity: 8,
			details: "A paddle for table tennis."
		}
	];
	
	return {
		getEquipments: function() {
			return equipments;
		},
		addToCart: function(equipment) {
			
		}
	};
});

myApp.controller("CartListCtrl", function($scope, cartService) {
	$scope.cart = cartService.getCart();
	
	$scope.buy = function(equipment) {
		cartService.buy(equipment);
	};
});

myApp.controller("HeaderCtrl", function($scope, $location) {
	$scope.appDetails = {};
	$scope.appDetails.title = "YSSportShop";
	$scope.appDetails.tagline = "We have brand new sport equipments";
	
	$scope.nav = {};
	$scope.nav.isActive = function(path) {
		if (path === $location.path()) {
			return true;
		}
		
		return false;
	};
});

myApp.controller("EquipmentListCtrl", function($scope, equipmentService, cartService) {
	$scope.equipments = equipmentService.getEquipments();
	
	$scope.addToCart = function(equipment) {
		cartService.addToCart(equipment);
	};
});