import { Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  template: `
    <a
      class="link-img__container"
      title="LinkedIn Profile"
      target="_blank"
      href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQG_LDjTB5lqxAAAAYFVzi_oER890lDPvsRzw8MNl0Kz0rlihTq6hE_99zge1FKcvaq5AyskJOPlltaiOjj6Coe6Kv73WPABz0IS34cbrYF3YtOVrdz_hC9sithpSwf6hNM-lWc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fabdulraheem-yusuf-b99bb1234"
    >
      <img ngSrc="./../../assets/icons/LinkedIn.png" alt fill priority />
    </a>
    <a
      class="link-img__container"
      title="Github Profile"
      target="_blank"
      href="https://github.com/Raheemcodes"
    >
      <img ngSrc="./../../assets/icons/GitHub.png" alt fill priority />
    </a>
    <a
      class="link-img__container"
      title="StackBlitz Profile"
      target="_blank"
      href="https://stackblitz.com/@Raheemcodes"
    >
      <img ngSrc="./../../assets/icons/StackBlitz.png" alt fill priority />
    </a>
    <a
      class="link-img__container"
      title="Twitter Profile"
      target="_blank"
      href="https://twitter.com/raheemscorp?s=20&t=7mtcCzsfzRE810cRUiSypg"
    >
      <img ngSrc="./../../assets/icons/Twitter.png" alt fill priority />
    </a>
  `,
  styles: [
    `
      @import './../shared/shared';

      :host {
        width: 100%;
        max-width: toRem(312);
        @include between();
        margin-bottom: toRem(77);

        @media screen and (min-width: $lg) {
          max-width: toRem(360);
          margin-bottom: toRem(64);
        }
        @media screen and (min-width: $lg) {
          margin-bottom: toRem(71);
        }
      }

      .link-img__container {
        position: relative;
        width: toRem(48);
        height: toRem(48);
      }
    `,
  ],
})
export class SocialsComponent {}
