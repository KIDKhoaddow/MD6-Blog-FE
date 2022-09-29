export interface UserInfo {
  id: number,
  name: string,
  email: string,
  avatar: string,
  phoneNumber: string,
  birthDay: string,
  registerDate: Date,
  user: {
    id: number,
    username: string,
    password: string,
    roles: {
      id: number,
      name: string
    }
  }
  userStatus: {
    id: number,
    lastLogin: string,
    status: string,
    verify: boolean
  }
}
