{

  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  }

  type SuccessState = {
    result: 'success';
  }

  type ResultState = SuccessState | NetworkErrorState;
  
  class NetworkClient {
    tryConnect(): ResultState {}
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
}