import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Blog} from "../model/blog/blog";
import {BlogStatus} from "../model/blog/blog-status";
import {BlogsOfUser} from "../model/blog/blogsOfUser";
import {BlogMostLike} from "../model/blog/blog-most-like";
import {BlogDTO} from "../model/blog/blogDTO";
import {KeyValue} from "@angular/common";
import {BlogRecentlyPerCategory} from "../model/blog/blog-recently-per-category";
import {ImageURL} from "../model/ImageURL";

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private httpClient: HttpClient) {
  }

  getBlog(idBlog:number) :Observable<BlogDTO>{
    return this.httpClient.get<BlogDTO>("http://localhost:8080/api/blog/"+idBlog)
  }
  getTopBlogMostLike(): Observable<BlogDTO> {
    return this.httpClient.get<BlogDTO>("http://localhost:8080/api/blog/public/most-like")
  }

  findAll(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>("http://localhost:8080/api/blog")
  }

  getAllBlogOfUser(id: number ): Observable<BlogDTO[]> {
    return this.httpClient.get<BlogDTO[]>("http://localhost:8080/api/blog/user/" + id)
  }

  getAllBlogRecently():Observable<BlogDTO[]>{
    return this.httpClient.get<BlogDTO[]>("http://localhost:8080/api/blog/recently")
  }
  getThreeNewBlogsPerCategory():Observable<BlogRecentlyPerCategory[]>{
    return  this.httpClient.get<BlogRecentlyPerCategory[]>
    ("http://localhost:8080/api/blog/public/three-new-blog-per-category")
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

  getNewBlogPerCategory(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>("http://localhost:8080/api/blog/public/most-like-per-category")
  }

  createBlog(blog: BlogDTO): Observable<BlogDTO>{
    return  this.httpClient.post<BlogDTO>("http://localhost:8080/blog",blog)
  }
  getPublicBlogByCategory(idCategory:number):Observable<BlogDTO[]>{
    return this.httpClient.get<BlogDTO[]>("http://localhost:8080/api/blog/public/category/"+idCategory)
  }

  saveImage(image?: ImageURL): Observable<ImageURL>{
    return this.httpClient.post<ImageURL>("http://localhost:8081/api/blogs/imageURL", image)
  }

}
