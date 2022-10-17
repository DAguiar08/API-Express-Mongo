class BadRequest extends Error {
    errorStatus: number;
    constructor(field: string | number | Date ) {
      super();
      this.errorStatus = 400;
      this.name = 'Bad Request';
      this.message = `${field}`;
    }
  }
  
  export default BadRequest;