class TimeoutError extends Error {

}
class OfflineError extends Error {

}



class NetworkClient {
  tryConnect(): void {
    throw new OfflineError('no network');
  }
}

class UserService {
  constructor(private client: NetworkClient){}
  login() {
      this.client.tryConnect();
    //login...
  }
}

class App {
  constructor(private userService: UserService) {}
  run() {
    try{
      this.userService.login();
    }catch(error){
      // show dialog to user
    }
  }
}

const clinet = new NetworkClient();
const userService = new UserService(clinet);
const app = new App(userService);
app.run();