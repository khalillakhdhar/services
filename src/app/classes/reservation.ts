export class Reservation {

    id:string;
    date:string;
    heure:string;
    adresse:string;
    description:string;
    image:File;
    video:File;
    etat:boolean;//s'ajoute aprés la confirmation de demande (executé ou non)
}
