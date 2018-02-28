let customers = [
    {
        name: "Carlos",
        lastName: "Fachinetti",
        avatar : require("../images/cfachinetti.jpg"),
        cases: 2,
        address: "Rawson, Buenos Aires, Argentina",
        documents: 30,
        dateNextEvent: "13 de diciembre"
    },
    {
        name: "Juan Carlos",
        lastName: "Cané",
        avatar : require("../images/juancane.jpg"),
        pendingActivities: 1,
        cases: 1,
        address: "Chivilcoy, Buenos Aires, Argentina",
        documents: 5,
        dateNextEvent: "25 de noviembre"
    },
    {
        name: "Esteban",
        lastName: "Cario",
        avatar : require("../images/cario.jpg"),
        pendingActivities: 1,
        cases: 8,
        address: "Carmen de Areco, Buenos Aires, Argentina",
        documents: 250,
        dateNextEvent: "6 de febrero"
    },
    {
        name: "Julio",
        lastName: "Barbosco",
        avatar : require("../images/avatarDefault.png"),
        pendingActivities: 0,
        cases: 1,
        address: "Junin, Buenos aires, Argentina",
        documents: 3,
        dateNextEvent: "5 de enero de 2018"
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