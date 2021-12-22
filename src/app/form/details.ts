export class Details {

    constructor(
      public id: number,
      public fullname: string[],
      public personalcode:string[],
      public phonenumber:number,
      public loanterm?: number,
      public occupation?:string[],
      public education?:string[],

    ) {  }
  
  }