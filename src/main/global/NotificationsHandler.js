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
                title: "Mensaje de cliente!",
                type: "Mensaje de Cliente",
                body: "Buenos días, quería preguntarle si está disponible para un caso de divorcio. Mi nombre es Juan. Gracias",
                priority: 'Medium',
                date: 10000,
                seen: false
            },
            
            {
                title: "Mensaje de cliente!",
                type: "Mensaje de Cliente",
                body: "Buenos días, quería preguntarle si está disponible para un caso de homicidio. Mi nombre es María. Gracias",
                priority: 'Medium',
                date: 10020,
                seen: false
            },
            
            {
                title: "Fecha de cobro!",
                type: "Calendario",
                body: "Desde el equipo de Loyer queríamos recordarle que hoy vence la fecha de cobro de su cliente Juan Pedro.",
                priority: 'Medium',
                date: 10000,
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
}

let nh = new NotificationsHandler();

export { nh };