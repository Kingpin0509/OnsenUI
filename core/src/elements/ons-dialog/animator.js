/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

import util from 'ons/util';
import BaseAnimator from 'ons/base-animator';
import {fade, union, translate} from 'ons/animations';

export class DialogAnimator extends BaseAnimator {

  /**
   * @param {HTMLElement} dialog
   * @param {Function} done
   */
  show(dialog, done) {
    done();
  }

  /**
   * @param {HTMLElement} dialog
   * @param {Function} done
   */
  hide(dialog, done) {
    done();
  }
}

/**
 * Android style animator for dialog.
 */
export class AndroidDialogAnimator extends DialogAnimator {

  constructor(options) {
    super(util.extend({timing: 'ease-in-out', duration: 0.3}, options));
  }

  /**
   * @param {Object} dialog
   * @param {Function} callback
   */
  show(dialog, callback) {
    this._animateAll(dialog, {
      _mask: fade.in,
      _dialog: {
        animation: union(fade.in, translate({from: '-50%, -60%', to: '-50%, -50%'})),
        restore: true,
        callback
      }
    });
  }

  /**
   * @param {Object} dialog
   * @param {Function} callback
   */
  hide(dialog, callback) {
    this._animateAll(dialog, {
      _mask: fade.out,
      _dialog: {
        animation: union(fade.out, translate({from: '-50%, -50%', to: '-50%, -60%'})),
        restore: true,
        callback
      }
    });
  }
}

/**
 * iOS style animator for dialog.
 */
export class IOSDialogAnimator extends DialogAnimator {

  constructor(options) {
    super({timing: 'ease-in-out', duration: 0.3}, options);
  }

  /**
   * @param {Object} dialog
   * @param {Function} callback
   */
  show(dialog, callback) {
    this._animateAll(dialog, {
      _mask: fade.in,
      _dialog: {
        animation: union(fade.in, translate({from: '-50%, 300%', to: '-50%, -50%'})),
        restore: true,
        callback
      }
    });
  }

  /**
   * @param {Object} dialog
   * @param {Function} callback
   */
  hide(dialog, callback) {
    this._animateAll(dialog, {
      _mask: fade.out,
      _dialog: {
        animation: union(fade.out, translate({from: '-50%, -50%', to: '-50%, 300%'})),
        restore: true,
        callback
      }
    });
  }
}

/**
 * Slide animator for dialog.
 */
export class SlideDialogAnimator extends DialogAnimator {

  constructor(options = {}) {
    super({timing: 'cubic-bezier(.1, .7, .4, 1)'}, options);
  }

  /**
   * @param {Object} dialog
   * @param {Function} callback
   */
  show(dialog, callback) {
    this._animateAll(dialog, {
      _mask: fade.in,
      _dialog: {
        animation: union(fade.in, translate({from: '-50%, -350%', to: '-50%, -50%'})),
        restore: true,
        callback
      }
    });
  }

  /**
   * @param {Object} dialog
   * @param {Function} callback
   */
  hide(dialog, callback) {
    this._animateAll(dialog, {
      _mask: fade.out,
      _dialog: {
        animation: union(fade.out, translate({from: '-50%, -50%', to: '-50%, -350%'})),
        restore: true,
        callback
      }
    });
  }
}
