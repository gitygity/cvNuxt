export interface ModalType {
  title: string;
  icon: string;
  close?: (value: any) => void;
  dismiss?: (reason: string) => void;
}

export interface HeaderPropsType {
  title: string;
}
export interface ModalRootPropsType {
  // close: ()=>void;
  icon: string;
  title: string;
}

export interface HeaderEmitsType{
  (e:"close"):void
}

export interface ModalRootEmitsType{
  (e:"close"):void
}