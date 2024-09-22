export default class LoginModel {
  constructor() {
    this.username = "";
    this.password = "";
    this.isLoggedIn = false;
  }

  setCredentials(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    if (this.username === "pengguna" && this.password === "masuk") {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }
}
