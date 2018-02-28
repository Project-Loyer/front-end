const TYPE_CLIENT = 0;
const TYPE_LAWYER = 1;

class User {

    constructor(props) {
        this.name = props.name;
        this.email = props.email;
        this.password = props.password;
        this.phone = props.phone;
        this.user_type = props.user_type;
        this.lawyer_info = props.lawyer_info;
        this.location = props.location;
    }

    isLawyer() {
        return this.user_type === TYPE_LAWYER;
    }

    isClient() {
        return this.user_type === TYPE_CLIENT;
    }

    login(password) {
        return (password === this.password);
    }

}

let users = {
    // email : User
    "fulano@casilla.com" : new User({
        name : "Fulano Mengano",
        email : "fulano@casilla.com",
        password : "asdf1234",
        phone : "2352481765",
        user_type : TYPE_CLIENT,
    }),
    "fburlando@estudio.com" : new User({
        name: 'Fernando Burlando',
        email : "fburlando@estudio.com",
        password: 'q1w2e3r4',
        phone : "111234522",
        user_type: TYPE_LAWYER,
        lawyer_info : {
            experience: 15,
            university: 'UBA',
            specialties: ['Penal', 'Civil', 'Comercial'],
            location: 'La Plata',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. ',
            picture: 'http://necocheahoy.com/wp-content/uploads/2017/05/1-104.jpg',
            fee: 10000
        }
    }),
    "jmiglino@gmail.com" : new User({
        name: 'Javier Miglino',
        email: 'jmiglino@gmail.com',
        password: 'asdf1234',
        phone : "1235356621",
        user_type: TYPE_LAWYER,
        lawyer_info : {
            experience: 56,
            university: 'UNLP',
            specialties: ['civil', 'comercial', 'empresarial'],
            location: 'Buenos Aires',
            description: 'Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
            picture: 'http://am1300lasalada.com.ar/wp-content/uploads/2016/02/0000219868.jpg',
            fee: 7400,
        },
    }),
    "dmaradona@arg.com" : new User({
        name : 'Diego Maradona',
        email: 'dmaradona@arg.com',
        password: 'eeeeeeeee',
        phone : "1235356621",
        user_type: TYPE_CLIENT
    })
};

class UsersMock {
    constructor() {
        this.users = users;
        this.loggedUser = null;
        this.onFinishSession = () => {};

        this.LAWYER_SPECIALTIES = ["Civil","Comercial","Penal","Familiar","Ambiental","Internacional"];
        this.TYPE_CLIENT = TYPE_CLIENT;
        this.TYPE_LAWYER = TYPE_LAWYER;
    }

    add(userInformation) {
        let newUser = new User(userInformation);
        this.users[userInformation.email] = newUser;
        return newUser

    }

    exist(email) {
        return (email in this.users);
    }

    get(email) {
        return this.exist(email) ? this.users[email] : null;
    }

    getLawyers() {
        let lawyers = [];
        for (let email in this.users) {
            if (this.users[email].user_type === TYPE_LAWYER) {
                lawyers.push(this.users[email]);
            }
        }
        return lawyers;
    }

    createSession(email, password) {
        let user = this.get(email);
        this.loggedUser = user && user.login(password) ? user : null;
        return !!this.loggedUser;
    }

    getLoggedUser() {
        return this.loggedUser;
    }

    setCallBack(callback) {
        this.onFinishSession = callback;
    }

    finishSession() {
        this.loggedUser = null;
        if (typeof this.onFinishSession === 'function') {
            this.onFinishSession();
        }
    }
}

let um = new UsersMock();

export default um;