export class User {
    id?: number;
    nom?: string;
    prenom?: string;
    dateNaissance?: Date; // idem
    ville?: string;
    adresse?: string;
    cp?: number;
    mail?: string;
    mdp?: string;
    typeInstallation?: string;
    activite?: string;
    imgPath?: string;
    id_annonce?: number;

    token?: string;

    constructor(id?: number, nom?: string, prenom?: string, dateNaissance?: Date, ville?: string, adresse?: string, cp?: number,
        mail?: string, mdp?: string, typeInstallation?: string, activite?: string, imgPath?: string, id_annonce?: number, token?: string ) {

        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.ville = ville;
        this.adresse = adresse;
        this.cp = cp;
        this.mail = mail;
        this.mdp = mdp;
        this.typeInstallation = typeInstallation;
        this.activite = activite;
        this.imgPath = imgPath;
        this.id_annonce = id_annonce;
        this.token = token;
    }
}
