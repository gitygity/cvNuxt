

export interface HeaderPropsType {
  title: string;
}
export interface ModalRootPropsType {
  icon: string;
  title: string;
}

export interface HeaderEmitsType{
  (e:"close"):void
}

export interface ModalRootEmitsType{
  (e:"close"):void
}