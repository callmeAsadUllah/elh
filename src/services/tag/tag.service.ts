import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Tag } from '../../models/tag/tag';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  private url = 'http://localhost:3000/tags';

  constructor(private httpClient: HttpClient) {}

  getTagList(): Observable<Tag> {
    return this.httpClient.get<Tag>(this.url);
  }
}
