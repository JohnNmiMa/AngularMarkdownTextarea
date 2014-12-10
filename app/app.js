angular.module('CodeMirror', ['markdown', 'ngSanitize'])

.directive('snippet', [function() {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: './snippet.html',
        controller: function($scope, $element, $attrs) {
            $scope.snippetData = {};
            $scope.snippetData.text = localStorage['snippetTextModel'];
            $scope.isEditing = false;
            $scope.isPreviewing = false;
        },
        link: function(scope, element, attrs, snippetCtrl) {
            // Use this 'link' function to do any DOM or jQuery manipulation
            // (won't work in the controller

            scope.toggleEdit = function(snippetData) {
                scope.isEditing = !scope.isEditing;
                if (scope.isEditing) {
                } else {
                    saveText(snippetData.text);
                }
                scope.isPreviewing = false;
            };

            scope.cancelEdit = function() {
                if (scope.isEditing) {
                    scope.isEditing = false;
                    scope.snippetData.text = localStorage['snippetTextModel'];
                }
                scope.isPreviewing = false;
            };
            scope.togglePreview = function() {
                scope.isPreviewing = !scope.isPreviewing;
            };

            function saveText(textModel) {
                localStorage['snippetTextModel'] = textModel;
            }
        }
    }
}]);
