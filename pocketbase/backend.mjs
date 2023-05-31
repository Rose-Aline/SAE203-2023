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
 export async function artisteParId (id){
    const listeartisteID = await pb.collection('artiste').getFullList({
        filter : `id = '${id}'`,
        expand : 'oeuvres'
    });
    return listeartisteID;
 }

