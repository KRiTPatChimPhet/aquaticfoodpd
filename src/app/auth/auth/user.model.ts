export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExprirationDate: Date
  ) { }
  get token() {
    if (!this._tokenExprirationDate || new Date() > this._tokenExprirationDate) {
      //ไม่มีค่าของเวลา หรือ เวลาน้อยกว่าปัจจุบัน
      return null;
    }
    return this._token
  }
}

