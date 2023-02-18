import { Nightlife } from '@mui/icons-material';
import Image from 'next/image';
import React, { Fragment } from 'react'
import { getBlocks, getPage } from '../library/notion';


export const Text = ({ text }) => {
    console.log("text", text);
    if (!text) {
      return null;
    }
    return text.map((value) => {
      console.log('value',value)
      const {
        annotations: { bold, code, color, italic, strikethrough, underline },
      } = value;
      // console.log('text',text)
      return (
        <span
          className={[
            bold ?  'font-bold': "",
            code ? ' bg-[#F2F2F2] px-2 py-4 rounded-lg' : "",
            italic ? ' italic' : "",
            strikethrough ? ' line-through' : "",
            underline ? 'underline' : "",
          ].join(" ")}
          style={color !== "default" ? { color } : {}}
        >
          {value.text.content}
          {/* {text.content } */}
          {/* {text.link == null ? text.content : <a href={text.link.url}>{text.content}</a> } */}
        </span>
      );
    });
  };





const pageRenderer=(pagedata)=>{
  console.log(pagedata)
    if(pagedata?.type == 'status'){
        return (
            <div className='mt-2 mb-2 p-2'>{pagedata.status?.name}</div>
        )
    }
    if(pagedata?.type == 'multi_select'){
        console.log('pagedata?.multi_select',pagedata?.multi_select)
        const multidata = pagedata?.multi_select?.map((values)=>{
            return (
            <div className=' '>
                <div className='  m-2 pl-2 pr-2 pb-1 min-w-[50px]  bg-[#89cff0] rounded-md'>{values.name}</div>
            </div>
            )
        })
        return (
            <div className='flex cursor-pointer'>
           {multidata}
            </div>
        )
    }
    if(pagedata?.type == 'email'){
        return (
            <div className='mt-2 mb-2 p-2'>{pagedata?.email}</div>
        )
    }
    if(pagedata?.type == 'people'){
        const peopledata =pagedata?.people?.map((person)=>{
            return(
            <div className='mt-2 mb-2 pr-2 flex'>
             
                <span className='ml-2'>{person?.name}</span>
            </div>
            )
        })
        return (
            <div className='flex'>{peopledata}</div>
        )
    }
    if(pagedata?.type == 'date'){
        return (
            <div className='mt-2 mb-2 p-2'>{pagedata?.date.start}</div>
        )
    }
    if(pagedata?.type == 'url'){
        return (
            <div className='mt-2 mb-2 p-2'>
                <a href={pagedata.url}>{pagedata.url}</a>
            </div>
        )
    }
    if(pagedata?.type == 'rich_text'){
        return (
            <div className='mt-2 mb-2 p-2'>
                <Text text={pagedata?.rich_text}/>
            </div>
        )
    }
    if(pagedata?.type == 'title'){
        const titledata = pagedata?.title?.map((title)=>{
            return(
                <div>
                    <h1>{title.plain_text}</h1>
                </div>
            )
        })
        return (
            <div className='mt-2 mb-2 p-2'>
                {titledata}
            </div>
        )
    }
    
}

function page({page}) {
    console.log('page',page)
    
  return (
    <div className=" w-4/5  flex flex-col pl-96 justify-center pb-40 pt-20">
       {Object.values(page.properties).map((pagedata)=>(
          <Fragment key={pagedata?.id}>{pageRenderer(pagedata)}</Fragment>
      ))}
    </div>
  )
}

export default page

export const pageId='4606f5e400c34d68b8a0353328ad0c3c'

export const getStaticProps = async () => {
    // const pageblock = await getBlocks(pageId);
    const pagedata = await getPage(pageId);
    // const child = await getBlocks(blockid);
 //    console.log('dataaaaaa', pageblock);
 //    console.log("0hjh",pagedata);
   return {
     props: {
       page:pagedata
     },
     revalidate: 1,
   };
 };


 
