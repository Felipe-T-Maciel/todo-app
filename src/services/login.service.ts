import { Injectable } from '@angular/core';

@Injectable()
export class LogadoComponent {

  constructor() { }

  public getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  public deleteCookie(name: string) {
    this.setCookie(name, "");
  }

  public setCookie(name: string, value: string) {
    let d: Date = new Date();
    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
    let expires: string = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
  }

}