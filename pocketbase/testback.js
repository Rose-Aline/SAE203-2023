import { OeuvreSorted } from './backend.mjs';
    try {

      const records  = await OeuvreSorted()
     console.log(JSON.stringify(records, null, 2));
        } catch (e) {
        console.error(e);
      };
     

 //       const records  = await oeuvresParArtisteId('m3z74c3r9mdwl64')
 //       console.log(JSON.stringify(records.expand["oeuvre(realisateur)"], null, 2))
 //     console.log(JSON.stringify(records));
 //   } catch (e) {
 //     console.error(e);
 //   };



    
