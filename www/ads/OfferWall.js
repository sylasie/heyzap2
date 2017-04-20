//  OfferWall.js
//
//  Copyright 2015 Heyzap, Inc. All Rights Reserved
//
//  Permission is hereby granted, free of charge, to any person
//  obtaining a copy of this software and associated documentation
//  files (the "Software"), to deal in the Software without
//  restriction, including without limitation the rights to use,
//  copy, modify, merge, publish, distribute, sublicense, and/or sell
//  copies of the Software, and to permit persons to whom the
//  Software is furnished to do so, subject to the following
//  conditions:
//
//  The above copyright notice and this permission notice shall be
//  included in all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
//  OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
//  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
//  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
//  OTHER DEALINGS IN THE SOFTWARE.

(function() {
  "use strict";

  var SERVICE = "OfferWall";
  var Common = cordova.require("heyzap-cordova.Common");

  /**
   * Object responsible for handling Offer Wall
   * @type {Object}
   *
   * @memberOf HeyzapAds
   */
  var OfferWall = {
    Events: {
      SHOW: 'show',
      HIDE: 'hide',
      CLICKED: 'clicked',
      SHOW_FAILED: 'show_failed',
      FETCH_FAILED: 'fetch_failed',
      AUDIO_STARTED: 'audio_started',
      AUDIO_FINISHED: 'audio_finished',
      AVAILABLE: 'available'
    },

    /**
     * Fetch an offer wall
     *
     * @return {Promise} An ES-6 style promise if the native call succeeded or failed.
     * @throws {TypeError} If the above parameters do not match their types
     */
    display: function display() {


      return Common.exec(SERVICE, 'display');
    },

    /**
     * Add an event listener for Offer Wall
     *
     * @param {string} type Name of event
     * @param {function} listener Event listener
     *
     * @throws {TypeError} If the parameters do not match their types
     */
    addEventListener: Common.partial(Common.addEventListener, SERVICE)
  };

  Common.registerEventsForService(SERVICE, OfferWall.Events, false);

  module.exports = OfferWall;
})();
