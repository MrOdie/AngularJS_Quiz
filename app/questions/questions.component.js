"use strict";

angular.module("questions", []).component("questions", {
	templateUrl: "questions/questions.template.html",
	controller: [
		"$scope",
		"Question",
		"$http",
		function QuestionsCtrl($scope, Question, $http) {
			var self = this;
			self.items = Question.query();
			self.num = 1;
			self.score = 0;
			self.finished = false;

			self.updateScore = function () {
				if (self.isCorrect) {
					$scope.score++;
				}
			};

			$scope.pickDifficulty = false;
			$scope.pickCategory = false;
			$scope.score = self.score;
			$scope.num = 1;
			$scope.isDisabled = true;
			$scope.range = 0;

			$scope.begin = function(e){
				switch(e.target.dataset.difficulty){
					case 'testing':
						$scope.range = 2;
						break;
					case 'easy':
						$scope.range = 15;
						break;
					case 'medium':
						$scope.range = 25;
						break;
					default:
						$scope.range = 50; 
				}
				$scope.pickDifficulty = true;
			}

			$scope.cat = function(e){
				switch(e.target.dataset.cat){
					case 'entertainment':
						$scope.category = 'entertainment'
						break;
					case 'mythology':
						$scope.category = 'mythology'
						break;
					case 'computers':
						$scope.category = 'computers'
						break;
					case 'sports':
						$scope.category = 'sports'
						break;
					case 'film':
						$scope.category = 'film'
						break;
					default: 
						$scope.category = 'general'
				}
				var route = './data/' + $scope.category + '.json'

				$http.get(route).then((questions) => {
					$scope.limit = questions.data.splice(0, $scope.range);
				});

				$scope.pickCategory = true;
			}

			$scope.selectedAnswer = function (question, choice) {
				$scope.isDisabled = false;
				if (choice === question.correct_answer) {
					self.isCorrect = true;
				} else {
					self.isCorrect = false;
				}
			};

			$scope.next = function (e) {
				self.updateScore();
				$scope.stupidScopeRulez.question.selected = "";
				$scope.isDisabled = true;
				$scope.num++;
			};

			$scope.previous = function (e) {
				if ($scope.num <= 1) return;
				$scope.num--;
			};

			$scope.finish = function () {
				self.updateScore();
				self.finish = true;
				$scope.finalScore = ($scope.score / $scope.range) * 100;
			};
		},
	],
});
