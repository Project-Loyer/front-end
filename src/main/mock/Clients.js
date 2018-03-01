let customers = [
    {
        name: "Carlos",
        lastName: "Fachinetti",
        avatar : require("../images/cfachinetti.jpg"),
        cases: 2,
        address: "Rawson, Buenos Aires, Argentina",
        documents: 30,
        dateNextEvent: "13 de diciembre",
        birthDay: "12 abril 1982",
        email: "fachi12@gmial.com",
        phone: "011487885"
    },
    {
        name: "Juan Carlos",
        lastName: "Cané",
        avatar : require("../images/juancane.jpg"),
        pendingActivities: 1,
        cases: 1,
        address: "Chivilcoy, Buenos Aires, Argentina",
        documents: 5,
        dateNextEvent: "25 de noviembre",
        birthDay: "21 julio 1975",
        email: "canejuancarlos@gmial.com",
        phone: "011499985"
    },
    {
        name: "Esteban",
        lastName: "Cario",
        avatar : require("../images/cario.jpg"),
        pendingActivities: 1,
        cases: 8,
        address: "Carmen de Areco, Buenos Aires, Argentina",
        documents: 250,
        dateNextEvent: "6 de Marzo",
        birthDay: "24 diciembre 1991",
        email: "estebancario@apresid.com.ar",
        phone: "0114878123"
    },
    {
        name: "Julio",
        lastName: "Barbosco",
        avatar : require("../images/jbarbosco.jpg"),
        pendingActivities: 0,
        cases: 1,
        address: "Junin, Buenos aires, Argentina",
        documents: 3,
        dateNextEvent: "5 de enero de 2018",
        birthDay: "17 enero 1986",
        email: "juluibarbosco@hotmail.com",
        phone: "011487896"
    }
];

class CustomersMocks {
    constructor() {
        this.customers = customers;
    }

    addCustomer(person) {
        person.avatar = require("../images/avatarDefault.png");
        this.customers.push(person);
    }
}

let clm = new CustomersMocks();

export default clm;