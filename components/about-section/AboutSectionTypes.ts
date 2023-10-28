export interface AboutFormInputType {
  firstName: string;
  lastName: string;
  summery: string;
  email: string;
  phone: string;
  location: string;
  language: string;
}
export interface AboutSectionFormTypes {
  isEdit: boolean;
}

export interface AboutSectionEmitsTypes{
    (e: 'close'): void,
    (e:'apply',data:AboutFormInputType):void
 }
