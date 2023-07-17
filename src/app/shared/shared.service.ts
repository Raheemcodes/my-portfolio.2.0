import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, of } from 'rxjs';
import { Project } from './shared.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  projects: Project[] = [
    {
      title: 'NFT Demo Minting Site',
      desc: "An NFT Demo minting site developed using Azuki's art. It contains the list of minted NFTs and extra details about each.",
      img: './../../assets/projects/demo-minting.png',
      areas: ['Angular', 'SCSS', 'TypeScript', 'Solidity', 'Hardhat', 'Web3js'],
      background: '#3D1F1E',
      link: {
        github: 'https://github.com/Raheemcodes/Demo-mint_smart-contract',
        website: 'https://fir-minting-site.web.app/',
      },
    },
    {
      title: 'Weather App',
      desc: 'A weather forecast web app with hourly and daily weather prediction for any location.',
      img: './../../assets/projects/weather-app.jpg',
      areas: ['Angular', 'SCSS', 'TypeScript', 'Jasmine', 'Karma'],
      background: '#7da4c3',
      link: {
        github: 'https://github.com/Raheemcodes/e-weather',
        website: 'https://e-web-weather.web.app/',
      },
    },
    {
      title: 'Bulan',
      desc: 'A website for an african-themed NFT project. Created to enlighten people on the history and culture surrounding African deities.',
      img: './../../assets/projects/bulan.jpg',
      areas: ['Angular', 'ExpressJs', 'TypeScript'],
      background: '#7da4c3',
      link: {
        github: 'https://github.com/bulan-io',
        website: 'https://bulan.io/',
      },
    },
    {
      title: 'Iphone Lockscreen',
      desc: 'A clone of Iphone lock screen notification animation scroll feature.',
      img: './../../assets/projects/iphone-lockscreen.png',
      areas: ['Angular', 'TypeScript', 'SCSS'],
      background: '#750207',
      link: {
        github: 'https://github.com/Raheemcodes/iphone-lock-screen',
        website: 'https://iphone-lockscreen.web.app/',
      },
    },
    {
      title: 'Space Tourism',
      desc: 'A multi-page web app for space tourism. This is an intermediate level challenge from frontendmentor.io',
      img: './../../assets/projects/space-tourism.jpg',
      areas: ['Angular', 'TypeScript', 'SCSS', 'Jasmine', 'Karma'],
      background: '#3A465E',
      link: {
        github: 'https://github.com/Raheemcodes/space-tourium',
        website: 'https://spacetourium.web.app/',
      },
    },
    {
      title: 'Slide Puzzle',
      desc: 'A web app game for 3x, 4x, 5x anime slide puzzle which uses Durstenfeld shuffle an optimized version of Fisher-Yates shuffling algorithm.',
      img: './../../assets/projects/slide-puzzle.jpg',
      areas: ['Angular', 'TypeScript', 'SCSS'],
      background: '#F0FFE0',
      link: {
        github: 'https://github.com/Raheemcodes/slide-puzzle',
        website: 'https://anime-slide-puzzle.web.app/',
      },
    },
    {
      title: 'Web Portfolio',
      desc: 'I developed this portfolio for a UI/UX designer with rich animation implented by integrating angular animation withinin a stand-alone directive.',
      img: './../../assets/projects/chime.jpg',
      areas: ['Angular', 'TypeScript', 'SCSS'],
      background: '#b8d3f1',
      link: {
        github: 'https://github.com/Raheemcodes/Chime-portfolio',
        website: 'https://chimezie-portfolio.web.app/',
      },
    },
    {
      title: 'Attendance Collator',
      desc: 'The Attendance management system uses both password and password-less authentication (JavaScript webauthnAPI was used for its passwordless authentication); also GPS protection where necessary.',
      img: './../../assets/projects/yct.jpg',
      areas: ['Angular', 'ExpressJs', 'MongoDB'],
      background: '#e1e8e0',
      link: {
        github: 'https://github.com/Raheemcodes/YCT-Attendance-Collator',
        website: 'https://yct-attendance-collator.onrender.com',
      },
    },
    {
      title: 'Squidward',
      desc: 'Squidward is a character from my favorite cartoon series. I leisurely developed this using HTML, SCSS and webpack.',
      img: './../../assets/projects/squid.jpg',
      areas: ['HTML', 'SCSS', 'Webpack'],
      background: '#f5f5f5',
      link: {
        github: 'https://github.com/Raheemcodes/squidward',
        website:
          'https://stackblitz.com/edit/web-platform-vxtwps?file=index.html',
      },
    },
    {
      title: 'Date Picker',
      desc: "Date Picker web component is a reusable custom HTML element. It provide programmers with dynamic features like the 'format', 'theme' etc.",
      img: './../../assets/projects/date-picker-sm.png',
      areas: ['TypeScript', 'OOP', 'Webpack'],
      background: '#f5f5f5',
      link: {
        github: 'https://github.com/Raheemcodes/date-picker',
        website: 'https://aray-date-picker.web.app/',
      },
    },
    {
      title: 'Money-Mine',
      desc: 'Money-Mine is a personal project of mine. I started off with this project while trying to get accustomed to vanilla CSS and JavaScript. Money-Mine is an affilate marketing platform.',
      img: './../../assets/projects/money-mine.jpg',
      areas: ['HTML', 'CSS', 'JavaScript', 'SwiperJS'],
      background: '#3fb2ab',
      link: {
        github: 'https://github.com/Raheemcodes/First-Project',
        website: 'https://dream-site-407d0.web.app/index.html',
      },
    },
    {
      title: 'Angular Biometrics',
      desc: 'I embarked on this project to further improve how I make use of the JavaScript Webauthn API in the most efficient and simplest solution I can come up with.',
      img: './../../assets/projects/biometrics.jpg',
      areas: ['Angular', 'Angular Material', 'ExpressJS', 'MongoDB', 'NgRx'],
      background: '#673BB7',
      link: {
        github: 'https://github.com/Raheemcodes/angular-biometrics',
        website: 'https://angular-biometric.web.app/',
      },
    },
    {
      title: 'iPhone Calculator',
      desc: 'I developed this project to hone my angular skills and my knowledge on web components.',
      img: './../../assets/projects/iphone.jpg',
      areas: ['Angular', 'TypeScript', 'SCSS'],
      background: '#000000',
      link: {
        github: 'https://github.com/Raheemcodes/Iphone-calculator-clone',
        website: 'https://iphone-calc.web.app',
      },
    },
    {
      title: 'RoyaleBiba Makeup Store',
      desc: 'The RoyaleBiba Makeup store is a PWA (Progressive Web App) i created to buff up my angular framework skills. It is rendered from the server side and connected to a RestAPI.',
      img: './../../assets/projects/royale.jpg',
      areas: ['Angular', 'ExpressJS', 'MongoDB'],
      background: '#E6C0BD',
      link: {
        github: 'https://github.com/Raheemcodes/Royale-biba-shop',
        website: 'https://royalebiba-angular.web.app/',
      },
    },
    {
      title: 'Ibeemay',
      desc: 'Created to get myself familiar with the intricacies of NodeJS and its framework, ExpressJS, Ibeemay Mobile Store is a demo E-Commerce web application for handling mobile phone purchase. It integrates Stripe payment gateway for (test) payments. ',
      img: './../../assets/projects/ibeemay.jpg',
      areas: ['ExpressJS', 'MongoDB', 'EJS', 'Stripe'],
      background: '#4E6776',
      link: {
        github: 'https://github.com/Raheemcodes/Phone-store',
        website: 'https://ibeemay.onrender.com/',
      },
    },
  ];

  constructor(private router: Router) {}

  navigate(page: string, fragment?: string) {
    return of('navigate')
      .pipe(delay(300))
      .subscribe(() => {
        this.router.navigate([page], { fragment });
      });
  }
}
