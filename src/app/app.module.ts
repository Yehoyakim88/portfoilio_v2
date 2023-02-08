import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ProjectComponent } from './project/project.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MailSentComponent } from './mail-sent/mail-sent.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactComponent,
    MenuComponent,
    HeaderComponent,
    AboutMeComponent,
    PortfolioComponent,
    MySkillsComponent,
    ProjectComponent,
    ImprintComponent,
    MailSentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
