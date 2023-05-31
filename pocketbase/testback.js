import { artisteParId  } from './backend.mjs';
    try {

        const records  = await artisteParId('3s3tpmfmyx1acns')
      console.log(JSON.stringify(records, null, 2));
    } catch (e) {
      console.error(e);
    };



    
