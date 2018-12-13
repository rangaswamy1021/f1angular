import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CustomFormsModule } from 'ng2-validation';
import { AgmCoreModule } from '@agm/core';

import { SidebarModule } from 'ng-sidebar';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import {NgxChartsModule} from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';


import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { AccordionComponent } from './ui-components/accordion/accordion.component';
import { AlertComponent } from './ui-components/alert/alert.component';
import { ButtonsComponent } from './ui-components/buttons/buttons.component';
import { CarouselComponent } from './ui-components/carousel/carousel.component';
import { CollapseComponent } from './ui-components/collapse/collapse.component';
import { TablesComponent } from './ui-components/tables/tables.component';
import { TabsComponent } from './ui-components/tabs/tabs.component';
import { CardsComponent } from './cards/cards.component';
import { BasicInputsComponent } from './forms/basic-inputs/basic-inputs.component';
import { CheckboxesRadiosComponent } from './forms/checkboxes-radios/checkboxes-radios.component';
import { ValidationComponent } from './forms/validation/validation.component';
import { SelectTagsComponent } from './forms/select-tags/select-tags.component';
import { FormsComponent } from './forms/forms.component';
import { FaqComponent } from './faq/faq.component';
import { UiComponentsComponent } from './ui-components/ui-components.component';
import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputMasksComponent } from './forms/input-masks/input-masks.component';
import { DropdownComponent } from './ui-components/dropdown/dropdown.component';
import { ModalComponent } from './ui-components/modal/modal.component';
import { RatingComponent } from './ui-components/rating/rating.component';
import { EmailComponent } from './email/email.component';
import { PagesComponent } from './pages/pages.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { TaskboarddragulaComponent } from './taskboarddragula/taskboarddragula.component';
import { DatatableComponent } from './datatable/datatable.component';
import { FullComponent } from './datatable/full/full.component';
import { InlineEditingComponent } from './datatable/inline-editing/inline-editing.component';
import { FilteringComponent } from './datatable/filtering/filtering.component';
import { PagingComponent } from './datatable/paging/paging.component';
import { SortingComponent } from './datatable/sorting/sorting.component';
import { MapsComponent } from './maps/maps.component';
import { GoogleComponent } from './maps/google/google.component';
import { FullscreenComponent } from './maps/fullscreen/fullscreen.component';
import { QuillEditorComponent } from './forms/quill-editor/quill-editor.component';
import { GoogleMapsComponent } from './maps/google-maps/google-maps.component';
import { ChartsComponent } from './charts/charts.component';
import { BarChartsComponent } from './charts/bar-charts/bar-charts.component';
import { PieChartsComponent } from './charts/pie-charts/pie-charts.component';
import { LineAreaChartsComponent } from './charts/line-area-charts/line-area-charts.component';
import { OtherChartsComponent } from './charts/other-charts/other-charts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarService } from './navbar.service';
import { SidebarService } from './sidebar.service';
import { FooterService } from './footer.service';
import { PricingComponent } from './pages/pricing/pricing.component';
import { BlankComponent } from './pages/blank/blank.component';
import { ForumComponent } from './pages/forum/forum.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AccordionComponent,
    AlertComponent,
    ButtonsComponent,
    CarouselComponent,
    CollapseComponent,
    TablesComponent,
    TabsComponent,
    CardsComponent,
    BasicInputsComponent,
    CheckboxesRadiosComponent,
    ValidationComponent,
    SelectTagsComponent,
    FormsComponent,
    FaqComponent,
    UiComponentsComponent,
    DashboardComponent,
    InputMasksComponent,
    DropdownComponent,
    ModalComponent,
    RatingComponent,
    EmailComponent,
    PagesComponent,
    InvoiceComponent,
    TaskboarddragulaComponent,
    DatatableComponent,
    FullComponent,
    InlineEditingComponent,
    FilteringComponent,
    PagingComponent,
    SortingComponent,
    MapsComponent,
    GoogleComponent,
    FullscreenComponent,
    QuillEditorComponent,
    GoogleMapsComponent,
    ChartsComponent,
    BarChartsComponent,
    PieChartsComponent,
    LineAreaChartsComponent,
    OtherChartsComponent,
    LoginComponent,
    RegisterComponent,
    PricingComponent,
    BlankComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, JsonpModule,
    FormsModule,
    DragulaModule,
    CustomFormsModule,
    NgxDatatableModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MalihuScrollbarModule.forRoot(),
    NgbModule.forRoot(),
    SidebarModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDeGqxk9waANYhMU-3mYmA4EAsrJLL66tk'
    })
  ],
  providers: [NavbarService, SidebarService, FooterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
