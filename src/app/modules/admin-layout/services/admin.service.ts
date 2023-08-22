import {Injectable} from '@angular/core';
import {environment as env} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../interfaces/post.interface';

@Injectable()
export class AdminService {
  private apiUrl = `${env.apiUrl}/posts`;

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.apiUrl}`,);
  }

  getPost(postId: string): Observable<IPost> {
    return this.http.get<IPost>(`${this.apiUrl}/${postId}`,);
  }
}
