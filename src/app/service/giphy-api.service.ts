import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GifDTO} from '../models/GifDTO';

// service comp for consuming Giphy api
@Injectable()
export class GiphyApiService {

  private url = 'https://api.giphy.com/';
  private apiKey = '4sfcoyKKPW4OCzYwrID2o6G8mdOO2YWZ';

  constructor(private httpClient: HttpClient) {}

  getTrendyGifs(): Observable<GifDTO> {
    const url = `${this.url}v1/gifs/trending?api_key=${this.apiKey}&limit=6`;
    return this.httpClient.get<GifDTO>(url);
  }

  getGifs(keyword, offset): Observable<GifDTO> {
    const url = `${this.url}v1/gifs/search?api_key=${this.apiKey}&q=${keyword}&offset=${offset}&limit=6`;
    return this.httpClient.get<GifDTO>(url);
  }

}
