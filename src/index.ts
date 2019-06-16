export class OfxApi {
  private version: number = 0;
  
  public get ofxVersion() { return this.version };
  public set ofxVersion(version: number) { this.version = version };

}
