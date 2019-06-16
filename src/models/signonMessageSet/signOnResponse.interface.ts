import { IFinancialInstitution } from '../financialInstitution.interface';
import { IStatus } from '../status.interface';

export interface ISignOnResponse {
  /**
   * See Status interface for more information.
   */
  status: IStatus;

  /**
   * Date and time of the server response.
   */
  dtServer: number;

  /**
   * Use user key instead of USERID and USERPASS
   * for subsequent requests. TSKEYEXPIRE can limit lifetime. A-64
   */
  userKey?: string;

  /**
   * Date and time that USERKEY expires, datetime
   */
  tsKeyExpiry?: number;

  /**
   * Language used in text responses.
   */
  language: string;

  /**
   * Date and time of last update to profile
   * information for any service supported by this FI (see Chapter 7), datetime
   */
  dtprofup?: number;

  /**
   * Date and time of last update to account information (see Chapter 8), datetime
   */
  dtacctup?: number;

  /**
   * Financial-Institution-identification aggregate
   */
  fi?: IFinancialInstitution;

  /**
   * Session cookie that the client should return on the next <SONRQ>,
   */
  sesscookie?: string;
}
