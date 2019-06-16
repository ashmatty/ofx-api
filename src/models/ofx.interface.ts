import { IOfxHeader } from './ofxHeader.interface';
export interface IOfx {
  /**
   * Store the OFX header information here.
   */
  header: IOfxHeader;
}
