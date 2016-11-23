'use strict';

(function () {
    //enable tooltips
    $('[data-toggle="tooltip"]').tooltip();

    function todoController($scope){
    	$scope.name = 'Angel';
    	$scope.new_todo = '';

    	$scope.addTodo = function(){
    		$scope.todoList.push({
    			title: $scope.new_todo,
    			completed: false
    		});
    		$scope.new_todo = '';
    	}

    	$scope.statusToggle = function(todo){
    		todo.completed = !todo.completed;
    	}

    	$scope.todoList = [
    		{
    			title: 'Do laundry',
    			completed: false 
    		},
    		{
    			title: 'Check emails',
    			completed: true 
    		},
    		{
    			title: 'Take class out for beer',
    			completed: false 
    		}
    	];
    }

    var app = angular.module('app', []);	// create the app
    app.controller('todoController', todoController);  		// make the controller part of the app

})();