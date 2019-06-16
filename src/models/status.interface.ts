export interface IStatus {
  code: [
    { 0: 'Success (INFO)' },
    { 2000: 'General Error (ERROR)' },
    { 15000: 'Must change USERPASS (INFO)' },
    { 15500: 'Signon invalid (ERROR)' },
    { 15501: 'Customer account already in use (ERROR)' },
    { 15502: 'USERPASS Lockout (ERROR)' }
  ];
}
