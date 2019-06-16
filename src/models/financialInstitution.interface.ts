export interface IFinancialInstitution {
  /**
   * Organization defining this FI name space
   */
  org: string;

  /**
   * Financial Institution ID (unique within <ORG>)
   */
  fid?: string;
}
