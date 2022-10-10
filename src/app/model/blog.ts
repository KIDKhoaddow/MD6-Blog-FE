import {UserInfo} from "./userInfo";
import {BlogStatus} from "./blog-status";
import {Category} from "./category";

export interface Blog{
  id:number,
  category:Category,
  title:String,
  describes:String,
  content:String,
  picture:String,
  createAt:Date,
  blogStatus:BlogStatus,
  userInfo:UserInfo,
}
