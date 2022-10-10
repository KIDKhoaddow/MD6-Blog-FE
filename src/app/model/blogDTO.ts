import {Category} from "./category";

export interface BlogDTO{
  id?: number|null,
  username?: string|null,
  category?: number
  title?: string|null,
  description?: string|null,
  content?: string|null,
  picture?: string|null,
  createAt?: string|null,
  status?: string|null,
  countLike?: number|null,
  updateAt?: string|null

}
