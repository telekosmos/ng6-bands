'use strict';

class BandController {
	constructor($scope, $element, $attrs) {
		this.name = 'band';
    this._scope = $scope;
    this.bandName = $attrs.bandName;
	}
}

// BandController.$inject = ['$scope', ''];
export default BandController;