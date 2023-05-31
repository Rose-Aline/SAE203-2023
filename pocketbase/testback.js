import {
    artiste, oeuvre
  } from './backend.mjs';
    try {

        const artisteParId  = await artiste()
      console.log(JSON.stringify(listeartisteID, null, 2));
    } catch (e) {
      console.error(e);
    };



    
