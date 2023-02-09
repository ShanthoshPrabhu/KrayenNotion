import { getDatabase, getPage } from '../../library/notion';

const axios = require('axios')

export default async  (req,res) =>{
  const databaseId = req.body.databaseId
 console.log('req.b',req.body.databaseId)
  const pageId = req.body.pageId
  const NOTION_API_URL = 'https://api.notion.com';

  
  // console.log('database',database)
    // const headers = {
    // 'Authorization': 'Bearer secret_Jk4OZPnpBoqyzOgxCrAT8hoKCgEEQCqyuZTxJKKTriE',
    // 'Content-Type': 'application/json'
    // };
   if(databaseId){
    const database = await getDatabase(databaseId);
    res.status(200).json({data:database })
   }
   if(pageId){
    const pagedata = await getPage(pageId)
    res.status(200).json({data:pagedata })
   }
    // try {
    //     const response = await axios.get(`${NOTION_API_URL}/v3/databases/${databaseId}`, { headers });
    //     console.log('response',response.data);
    //     res.status(200).json({response:response.data })
    //   } catch (error) {
    //     console.error(error);
    //   }

      
}