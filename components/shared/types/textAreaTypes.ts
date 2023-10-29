export interface TextAreaPropsType {
    placeholder: string;
    name: string;
    validateRule:any
  }
  export interface TextAreaEmitsType{
    (e:'validate',value?:string):void,
    (e:'input',value?:string):void
  }
  
  

