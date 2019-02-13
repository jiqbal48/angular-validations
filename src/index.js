import angular from 'angular';

console.log('hi this works');

angular.module('mainModule', [])
    .controller('sectionController', ["$scope", (theScopeObject) => {
        // this scope object is only concerned about keeping track of this one property.
        theScopeObject.absoluteMinimumCharacterRequirement = 10;
        console.log('hi?');
    }]);