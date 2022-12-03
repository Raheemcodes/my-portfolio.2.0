import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SocialsComponent } from './socials/socials.component';
import { NgOptimizedImage } from '@angular/common';
import { ClickDirective } from './click.directive';
import { AnimationDirective } from './animation.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    HeaderComponent,
    FooterComponent,
    SocialsComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    ClickDirective,
    AnimationDirective,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
