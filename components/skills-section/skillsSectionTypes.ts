// export interface SkillFormInputType extends SkillItemType {
 
// }
export type SkillItemType= {
  skillName: string;
  percent: number;
}
export interface SkillSectionFormPropsTypes {
  isEdit: boolean;
  skills:SkillItemType[]
}

export interface SkillSectionEmitsTypes{
    (e: 'close'): void,
    (e:'apply',data:SkillList):void
 }

 export type SkillList=SkillItemType[]
