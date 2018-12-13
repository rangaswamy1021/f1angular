import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms/forms.component';
import { UiComponentsComponent } from './ui-components/ui-components.component';
import { FaqComponent } from './faq/faq.component';
import { BasicInputsComponent } from './forms/basic-inputs/basic-inputs.component';
import { CheckboxesRadiosComponent } from './forms/checkboxes-radios/checkboxes-radios.component';
import { SelectTagsComponent } from './forms/select-tags/select-tags.component';
import { ValidationComponent } from './forms/validation/validation.component';
import { AccordionComponent } from './ui-components/accordion/accordion.component';
import { AlertComponent } from './ui-components/alert/alert.component';
import { ButtonsComponent } from './ui-components/buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './ui-components/carousel/carousel.component';
import { TablesComponent } from './ui-components/tables/tables.component';
import { TabsComponent } from './ui-components/tabs/tabs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputMasksComponent } from './forms/input-masks/input-masks.component';
import { CollapseComponent } from './ui-components/collapse/collapse.component';
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
import { QuillEditorComponent } from './forms/quill-editor/quill-editor.component';
import { MapsComponent } from './maps/maps.component';
import { GoogleMapsComponent } from './maps/google-maps/google-maps.component';
import { ChartsComponent } from './charts/charts.component';
import { BarChartsComponent } from './charts/bar-charts/bar-charts.component';
import { PieChartsComponent } from './charts/pie-charts/pie-charts.component';
import { LineAreaChartsComponent } from './charts/line-area-charts/line-area-charts.component';
import { OtherChartsComponent } from './charts/other-charts/other-charts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GoogleComponent } from './maps/google/google.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ForumComponent } from './pages/forum/forum.component';
import { BlankComponent } from './pages/blank/blank.component';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'forms', component: FormsComponent, children: [
      { path: 'basic-inputs', component: BasicInputsComponent },
      { path: 'input-masks', component: InputMasksComponent },
      { path: 'checkboxes-radios', component: CheckboxesRadiosComponent },
      { path: 'select-tags', component: SelectTagsComponent },
      { path: 'validation', component: ValidationComponent },
      { path: 'quill-editor', component: QuillEditorComponent },
    ]
  },
  {
    path: 'ui-components', component: UiComponentsComponent, children: [
      { path: 'accordion', component: AccordionComponent },
      { path: 'alert', component: AlertComponent },
      { path: 'buttons', component: ButtonsComponent },

      { path: 'carousel', component: CarouselComponent },
      { path: 'collapse', component: CollapseComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'dropdown', component: DropdownComponent },
      { path: 'modal', component: ModalComponent },
      { path: 'rating', component: RatingComponent },
      { path: 'tabs', component: TabsComponent },
    ]
  },
  {
    path: 'datatables', component: DatatableComponent, children: [
      { path: 'full', component: FullComponent },
      { path: 'inline-editing', component: InlineEditingComponent },
      { path: 'filtering', component: FilteringComponent },
      { path: 'paging', component: PagingComponent },
      { path: 'sorting', component: SortingComponent },
    ]
  },
  { path: 'faq', component: FaqComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'email', component: EmailComponent },
  { path: 'taskboard', component: TaskboarddragulaComponent },
  {
    path: 'pages', component: PagesComponent, children: [
      { path: 'invoice', component: InvoiceComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'forum', component: ForumComponent },
      { path: 'blank', component: BlankComponent },
    ]
  },

   {
    path: 'charts', component: ChartsComponent, children: [
      { path: 'bar-charts', component: BarChartsComponent },
      { path: 'pie-charts', component: PieChartsComponent },
      { path: 'line-area-charts', component: LineAreaChartsComponent },
      { path: 'other-charts', component: OtherChartsComponent },
    ]
  },


  {
    path: 'maps', component: MapsComponent, children: [
      { path: 'google-maps', component: GoogleMapsComponent },
      { path: 'google', component: GoogleComponent },
    ]
  }]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
