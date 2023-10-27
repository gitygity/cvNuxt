export interface ModalType {
  title: string;
  icon: string;
  close?: (value: any) => void;
  dismiss?: (reason: string) => void;
}

export interface ModalRootPropsType {
  close: Function;
  dismiss: Function;
  icon: string;
  title: string;
}
