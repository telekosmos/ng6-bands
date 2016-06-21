'use strict';

class BandController {
	constructor($scope, $element, $attrs, util) {
		this.name = 'band';
    this._scope = $scope;
    this.bandName = $attrs.bandName;
    this.bandTit = $attrs.bandTitle;

    util.getBandMedia(this.bandName)
      .then(bandData => {
        this.bandData = bandData;
      });
	}
}

BandController.$inject = ['$scope', '$element', '$attrs', 'util'];
export default BandController;