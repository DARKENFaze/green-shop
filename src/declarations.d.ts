// src/declarations.d.ts
declare module "react-slick" {
  import { Component } from "react";

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    [key: string]: any; // Qo'shimcha xususiyatlar
  }

  export default class Slider extends Component<Settings> {}
}
