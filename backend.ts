import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090');

// Retourne la liste des artistes
    export async function artisteTous (){
        return await pb.collection('artiste').getFullList();
    }


//Retourne la liste des oeuvres
    export async function oeuvre (){
        const listeoeuvre = await pb.collection('oeuvre').getFullList();
        return listeoeuvre;
    }

 // Infos d'un artiste en donnant son id avec la liste de ses oeuvres
    /*
    export async function artisteParId (id){
        const listeartisteID = await pb.collection('artiste').getOne(id);
        return listeartisteID;
    }
    */
// Liste des oeuvres données par un nom d'artiste
    /*
    export async function oeuvresParArtisteId (realisateur){
        const listeoeuvresParArtiste = await pb.collection('artiste').getOne(realisateur, {expand: 'oeuvre(realisateur)'});
        return listeoeuvresParArtiste;
    }*/


//liste des artistes triés par date
    export async function artisteSorted(){
        const records = await pb.collection('artiste').getFullList({sort: 'naissance_mois_jour_annee' })
        return records;
    }

//liste des œuvres triées par date 
    export async function OeuvreSorted(){
        const records = await pb.collection('oeuvre').getFullList({sort: 'date_oeuvre' })
        return records;
    }
