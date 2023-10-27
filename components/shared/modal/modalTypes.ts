import { Component } from "vue";

export interface ModalType{
    component?:Component,
    props?:{[key:string]:string},
    close?: (value:any) => void,
    dismiss?: (reason:string) => void,
}

export interface OpenModalType{
    component:Component,
    props:any,
    resolve:Function,
    reject:Function
}