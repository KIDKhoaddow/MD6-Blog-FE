import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Blog} from "../model/blog";
import {BlogStatus} from "../model/blog-status";
import {BlogsOfUser} from "../model/blogsOfUser";
import {BlogMostLike} from "../model/blog-most-like";

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>("http://localhost:8080/admin/blogs")
  }

  banBlog(id: number): Observable<BlogStatus> {
    return this.httpClient.get<BlogStatus>("http://localhost:8080/admin/banBlog/" + id)
  }

  activeBlog(id: number): Observable<BlogStatus> {
    return this.httpClient.get<BlogStatus>("http://localhost:8080/admin/activeBlog/" + id)
  }

  getlistBlogsOfUser(): Observable<BlogsOfUser[]> {
    return this.httpClient.get<BlogsOfUser[]>("http://localhost:8080/userView/listBlogsOfUser")
  }
  getlistBlogsMostLike(): Observable<BlogMostLike[]> {
    return this.httpClient.get<BlogMostLike[]>("http://localhost:8080/userView/listBlogsMostLike")
  }
}
