import { expect } from 'chai';
import { OfxApi } from '../index';

describe('OfxApi', () => {
  it('can set version to 102', () => {
    const api = new OfxApi();
    api.ofxVersion = 102;
    expect(api.ofxVersion).to.equal(102);
  });
});
