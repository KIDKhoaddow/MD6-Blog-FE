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

  getTopBlogMostLike(): Observable<Blog> {
    return this.httpClient.get<Blog>("http://localhost:8080/api/blog/public/most-like")
  }

  findAll(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>("http://localhost:8080/api/blog")
  }

  getAllBlogOfUser(id: number ): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>("http://localhost:8080/api/blog/user/" + id)
  }

  banBlog(id: number): Observable<BlogStatus> {
    return this.httpClient.get<BlogStatus>("http://localhost:8080/api/blog/ban/" + id)
  }

  activeBlog(id: number): Observable<BlogStatus> {
    return this.httpClient.get<BlogStatus>("http://localhost:8080/api/blog/active/" + id)
  }

  getlistBlogsOfUser(): Observable<BlogsOfUser[]> {
    return this.httpClient.get<BlogsOfUser[]>("http://localhost:8080/api/blog/listBlogsOfUser")
  }

  getlistBlogsMostLike(): Observable<BlogMostLike[]> {
    return this.httpClient.get<BlogMostLike[]>("http://localhost:8080/api/blog/listBlogsMostLike")
  }

  getTopTenBlogMostLike(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>("http://localhost:8080/api/blog/public/top-ten-most-like")
  }
}
