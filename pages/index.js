import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { getProviders, useSession } from 'next-auth/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Login from '../components/Login';
import { db } from '../firebase';

function Home({providers}) {
  const {data:session} = useSession();
   const [user,setUser]=useState([])
  // console.log('ses',session)
  async function createUser(){
    await setDoc(doc(db, 'users',session.user.email),{
      username:session.user.name,
      email:session.user.email,
      profile:session.user.image
    });
    return getUser()
   
  }
console.log('user',user)
async function getUser(){
  const docRef = doc(db, "users", session?.user?.email);
  const docSnap = await getDoc(docRef);
  console.log('data', docSnap.data())
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return setUser(docSnap.data())
  } else {
    return createUser()
  }

  // else {
  //   createUser()
  //   return
  // }
}
if(session && user.length === 0){
  getUser()
}
  // useEffect(()=>{
  
  // },[])
  if(!session){
    return <Login providers={providers}/>
  }
  return (
    <div>Home</div>
  )
}

export default Home

export async function getServerSideProps(context) {
  const providers = await getProviders()
  console.log('providers',providers)
  return {
    props: {
      providers:providers
    },
  }
}