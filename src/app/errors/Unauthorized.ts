class Unauthorized extends Error {
    errorStatus: number;
    constructor(field: any) {
      super();
      this.errorStatus = 401;
      this.name = 'Unauthorized';
      this.message = `${field}`;
    }
  }
  
  module.exports = Unauthorized;