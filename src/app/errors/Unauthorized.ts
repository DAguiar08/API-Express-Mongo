class Unauthorized extends Error {
    errorStatus: number;
    constructor(field: string) {
      super();
      this.errorStatus = 401;
      this.name = 'Unauthorized';
      this.message = `${field}`;
    }
  }
  
  export default Unauthorized;