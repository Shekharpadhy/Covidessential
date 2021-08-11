import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { ReactiveFormComponent } from './reactiveForm/reactiveForm.component';



import { ControlValueAccessorComponent } from './controlValueAccessor/controlValueAccessor.component';


const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/reactiveform' },
  
  
  
  
  { path: 'reactiveform',     component: ReactiveFormComponent  },
 
  { path: 'controlvalueaccessor', component: ControlValueAccessorComponent },
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [ 
    
  ReactiveFormComponent,
    ControlValueAccessorComponent, 
  ];
}

