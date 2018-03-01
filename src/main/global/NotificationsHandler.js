// Formato de notificaciones:
//{
//	title: "Título", --> lo que aparece en la notificación del celular 
//	type: "Tipo", --> MensajeCliente (mensaje de un cliente por la aplicación web), Calendario (actividad de calendario que se vence),
//	body: "Cuerpo", --> cuerpo del mensaje
//  priority: "High", --> prioridad; determina si es necesario mostrar una notificación del celular o no 
//	date: 000000 --> fecha; sirve para determinar si es nueva o no
//  seen: false --> si se vio la notificación o no
//}
class NotificationsHandler {
    constructor() {
        this.notifications = [
            {
                title: "Juan Farías",
                avatar: require("../images/cfachinetti.jpg"),
                type: "Mensaje de Cliente",
                body: "Por favor, necesito divorciarme urgente. Gracias",
                priority: 'Medium',
                time: "5:12 am",
                date: 10000,
                seen: false
            },
            
            {
                title: "María Grispe",
                avatar: require("../images/maria.jpg"),
                type: "Mensaje de Cliente",
                body: "Buenos días, quería preguntarle si está disponible para un caso de homicidio. Gracias",
                priority: 'Medium',
                time: "3:43 pm",
                date: 10020,
                seen: false
            },
            
            {
                title: "Recuerda cobrarle hoy a Juan Pedro Vilol",
                type: "Calendario",
                body: "Desde el equipo de Loyer queríamos recordarle que hoy vence la fecha de cobro de su cliente Juan Pedro.",
                time: "2 horas restantes",
                priority: 'Medium',
                date: 10000,
                icon: 'md-cash',
                colorIcon: '#ff0800',
                seen: false
            },
            
            {
                title: "Novedad de documento",
                type: "Novedad",
                body: "Un documento nuevo fue subido al expediente del caso de su cliente Manuel Centurion",
                time: "2 horas restantes",
                priority: 'Medium',
                date: 10000,
                icon: 'md-alarm',
                colorIcon: '#258309',
                seen: false
            }
        ];
    }

    receiveNotification(notif) {
        this.notifications.push(notif);
    }

    markAsRead() {
        this.notifications.forEach(notif => { notif.seen = true });
    }

    countNewNotifications() {
        return this.notifications.filter(notif => !notif.seen).length
    }
}

let nh = new NotificationsHandler();

export default nh;