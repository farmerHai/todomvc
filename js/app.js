(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var myapp = angular.module("myToDoMVC", [])
	myapp.controller("myController", ["$scope", function ($scope) {
		function getId() {
			var id = Math.random();
			for (var i = 0; i < $scope.todos.length; i++) {
				if (id === $scope.todos[i].id) {
					id = getId();
					break;
				}
			}
			return id;
		}
		//function getId() {
		//	var id = Math.random(); // 1 2
		//	for (var i = 0; i < $scope.todos.length; i++) {
		//		if ($scope.todos[i].id === id) {
		//			id = getId();
		//			break;
		//		}
		//	}
		//	return id;
		//}

		$scope.text = "";
		$scope.todos = [{
			id: 0.122,
			text: '打机',
			completed: false
		}, {
			id: 0.132,
			text: '玩pp',
			completed: true
		}, {
			id: 0.152,
			text: '睡觉',
			completed: true
		}];
		$scope.add = function () {
			if (!$scope.text) {
				return;
			}
			$scope.todos.push({
				id: getId(),
				text: $scope.text,
				completed: false
			});
			$scope.text = "";
		}
		//$scope.add = function() {
		//	if(!$scope.text){
		//		return;
		//	}
		//	$scope.todos.push({
		//		// 自动增长？
		//		id: getId(),
		//		// 由于$scope.text是双向绑定的，add同时肯定可以同他拿到界面上的输入
		//		text: $scope.text,
		//		completed: false
		//	});
		//	// 清空文本框
		//	$scope.text = '';
		//};
		$scope.clear=function(id){
			for(var i=0;i<$scope.todos.length;i++){
				if(id==$scope.todos[i].id){
					$scope.todos.splice(i,1);
					break;
				}
			}
		}
		$scope.clearCompleted=function(){
			var result=[];
			for(var i=0;i<$scope.todos.length;i++){
				if(!$scope.todos[i].completed){
					result.push($scope.todos[i])
				}
			}
			$scope.todos=result;
		}
		$scope.existCompleted=function(){
			for (var i=0;i<$scope.todos.length;i++){
				if ($scope.todos[i].completed){
					return true;
				}
			}
			return false;
		}
		$scope.currentEditingId=-1;
		$scope.changeEditing=function(id){
			$scope.currentEditingId=id;
		}
		$scope.save=function(){
			$scope.currentEditingId=-1;
		}
		$scope.now=true;
		$scope.toggle=function(){
			for(var i=0;i<$scope.todos.length;i++){
				$scope.todos[i].completed=$scope.now;
			}
			$scope.now=!$scope.now;
		}

	}])

})(angular);
