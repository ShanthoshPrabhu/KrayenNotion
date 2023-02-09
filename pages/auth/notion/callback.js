import { useRouter } from 'next/router'
import React from 'react'
import {db} from '../../../firebase'
import {addDoc,collection,doc} from "@firebase/firestore";

function callback({response}) {
  const router =useRouter();

  // await addDoc(collection(db,'users'),{
  //   username:response?.owner?.user?.name,
  //   uid:response?.owner?.user?.id,
  //   email:response?.owner?.user?.person?.email,
  //   access_token:response?.access_token,
  //   profileURL:response?.owner?.user?.avatar_url
  // })
    console.log('response',response)
  //   if(response){

  //   }
  return (
    <div>callback</div>
  )
}

export default callback



export async function getServerSideProps(resolvedUrl){
    try{
      const code = resolvedUrl.query.code;
      console.log('code',resolvedUrl)

      const res = await fetch(`https://api.notion.com/v1/oauth/token`,{
        method:'post',
        headers:new Headers({
            'Authorization':'Basic ' + btoa(process.env.NOTION_CLIENT_ID + ":" + process.env.NOTION_CLIENT_SECRET),
            'Content-Type':'application/json'
        }),
        body:JSON.stringify({
            grant_type:'authorization_code',
            code:code,
            redirect_uri:'http://localhost:3000/auth/notion/callback'
        })
      });

      console.log('res',res)

      const response = await res.json()
      
      // Add the data to Firebase
    await addDoc(collection(db, 'users'), {
      username: response?.owner?.user?.name,
      uid: response?.owner?.user?.id,
      email: response?.owner?.user?.person?.email,
      access_token: response?.access_token,
      profileURL: response?.owner?.user?.avatar_url
    })

    // Redirect the user to the dashboard page
      resolvedUrl.res.writeHead(302, { Location: '/dashboard' });
      resolvedUrl.res.end();

      return {
        props:{ }
      }
    }catch (err){
        console.log(err)
    }
}