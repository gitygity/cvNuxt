export interface AboutFormInputType {
  firstName: string;
  lastName: string;
  summery: string;
  email: string;
  phone: string;
  location: string;
  language: string;
}

export type SummeryType=Pick<AboutFormInputType,"summery"|"firstName"|"lastName">
export type BasicInfoType=Pick<AboutFormInputType,"email"|"phone"|"location"|"language">
export interface AboutSectionFormPropsTypes extends AboutFormInputType {
  isEdit: boolean;
}

export interface AboutSectionEmitsTypes{
    (e: 'close'): void,
    (e:'apply',data:AboutFormInputType):void
 }
