import { Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, startWith, switchMap} from 'rxjs/operators';
import { WosNextgenTypeaheadService } from './wos-nextgen-typeahead-service';

declare const myTest: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  organization: FormControl = new FormControl();

  filteredOrganizations!: Observable<string[]>;

  constructor(
     private wosNextgenTypeaheadService: WosNextgenTypeaheadService,
   ) {}

  ngOnInit() {

    this.filteredOrganizations =  this.organization.valueChanges
         .pipe(
           startWith(''),
           debounceTime(300),
           distinctUntilChanged(),
           switchMap(value => value.length >= 1 ?  this.lookup(value) : of([]))
         );
  }

  lookup(query: string): Observable<string[]> {
     return this.wosNextgenTypeaheadService.getOrgSuggestions(query);
   }
}

/* Observable<String[]> */

