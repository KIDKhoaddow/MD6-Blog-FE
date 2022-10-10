import {Category} from "./category";

export interface BlogDTO{
  id?: number|null,
  username?: string|null,
  avatar?:string|null,
  category?: number|null,
  title?: string|null,
  description?: string|null,
  content?: string|null,
  picture?: string|null,
  createAt?: string|null,
  status?: string|null,
  countLike?: number|null,
  countComment?:number|null,
  updateAt?: string|null,
  categoryName?: string|null,
  tag?: TagDTO[]|null
}
