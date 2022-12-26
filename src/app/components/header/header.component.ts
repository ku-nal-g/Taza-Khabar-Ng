import { NewsDataService } from './../../services/news-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dropdownGroup!: FormGroup;
  countryName!: string;
  keyword!: string;
  filterText!: string;

  country: any = [
    {
      "id": 1,
      "country_name": "India",
      "country_code": "IN"
    },
    {
      "id": 2,
      "country_name": "U.S.A",
      "country_code": "US"
    },
    {
      "id": 3,
      "country_name": "Canada",
      "country_code": "CA"
    }, {
      "id": 4,
      "country_name": " Australia",
      "country_code": "AU"
    }, {
      "id": 5,
      "country_name": "Israel",
      "country_code": "IL"
    }
  ];

  constructor(private _fb: FormBuilder, private _newsData: NewsDataService) { }
  ngOnInit(): void {
    this.dropdownGroup = this._fb.group({
      dropdown: ['India']
    })
  }
  onChange(item: any) {
    this.countryName = item;
    this._newsData.setCountry(this.countryName);
  }
  fetchApiByKeyWord(searchParam: string) {
    this._newsData.setKeywordForApi(searchParam);
  }
  passFilterText() {
    this._newsData.setFilterText(this.filterText);
  }
}
