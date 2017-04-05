import Ember from 'ember';
import { A as emberArray } from 'ember-array/utils';

export function svgPieArray(params = []) {
  // slice params to avoid mutating the provided params
  // due to https://github.com/emberjs/ember.js/issues/14738
  return emberArray(params.slice());
}

export default Ember.Helper.helper(svgPieArray);
