const IntroPage =require('./intro.page.js');
const HomePage =require('./home.page.js');
const JoinForm =require('./join.form.js');
const LoginForm =require('./login.form.js');
const UserForm =require('./user.form.js');

class World{
    constructor() {
        this.introPage = new IntroPage();
        this.homePage = new HomePage();
        this.joinForm=new JoinForm();
        this.loginForm=new LoginForm();
        this.userForm=new UserForm();
    }
}
module.exports= new World();