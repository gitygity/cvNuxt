import { AnyObject, ISchema, Reference } from "yup";

export interface TextInputPropsType {
  placeholder: string;
  name: string;
  validateRule:any
}

export interface TextInputEmitsType{
  (e:'validate',value?:string):void,
  (e:'input',value?:string):void
}

