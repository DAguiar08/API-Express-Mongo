
class DuplicateKey extends Error {
    errorStatus: number;
    constructor(field: string) {
      super();
      this.errorStatus = 409;
      this.name = 'DuplicateKey';
      this.message = `${field} Already exists`;
    }
  }
  
  export default DuplicateKey;