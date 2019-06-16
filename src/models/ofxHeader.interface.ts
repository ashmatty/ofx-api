export interface IOfxHeader {
  /**
   * Descriptions are taken from http://www.ofx.net/downloads.html
   *  from the document "Ofexfin1.doc".
   */

  /**
   * OFXHEADER specifies the version number of the Open Financial
   *  Exchange headers.
   */
  OFXHEADER: number;

  /**
   * DATA specifies the content type, in this case OFXSGML.
   */
  DATA: string;
  
  /**
   * VERSION specifies the version number of the Document Type
   *  Definition (DTD) used for parsing.
   */
  VERSION: number;
  
  /**
   * SECURITY defines the type of application-level security, 
   * if any, that is used for the <OFX> block. The values for 
   * SECURITY can be NONE or TYPE1.
   */
  SECURITY: string;
  
  /**
   * ENCODING defines the text encoding used for character data.
   * The values for ENCODING can be UNICODE or USASCII.
   */
  ENCODING: string;
  
  /**
   * CHARSET defines the character set used for character data.
   */
  CHARSET: number;
  
  /**
   * A future version of the specification will define compression.
   */
  COMPRESSION: string;
  
  /**
   * OLDFILEUID is used together with NEWFILEUID only when the
   * client and server support file-based error recovery.
   */
  OLDFILEUID: string;
  
  /**
   * NEWFILEUID uniquely identifies this request file. 
   */
  NEWFILEUID: string;
}
