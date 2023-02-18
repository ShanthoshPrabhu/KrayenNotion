import { makeConsoleLogger } from "@notionhq/client/build/src/logging";
import { useEffect, useState } from "react";

import { Googlemapsembed } from "../components/Googlemapsembed";
import { Spotifyembed } from "../components/Spotifyembed";
import { Tweetembed } from "../components/Tweetembed";
import { getPage, getBlocks, getDatabase } from "../library/notion";

function pagedatas({ page, pageblock, child }) {
   
  console.log("page", page);
  console.log("pageblock", pageblock);


  const datasOFBlock = child;
  const definedBlock = datasOFBlock || [];

  console.log("defined block", definedBlock)
  const something = definedBlock.map((child) => {
    return child.type === "table_row"
      ? child?.table_row?.cells.map((item) => item[0]?.text.content)

      : ""; 

  });
  // const rows = something.map((row) => {
  //   return row.map((cell) => cell);
  // });

  // console.log("type", rows);


  console.log("something", something);
  const datasOfPage = pageblock;
  const items = datasOfPage || [];
   console.log("codeBlocks", items);
  const codeBlocks = items.map((block) => {
   
    console.log("bloc",block?.paragraph?.rich_text.map((item) => item));

    if (block.type == "callout") {
      return (
        <div
          key={block?.id}
          className="px-4 py-2 text-black bg-yellow-200 rounded-xl"
        >
          <div>
            {" "}
            <span key={block?.id} className="inline-block mr-2">
              {block?.callout?.icon?.type == "emoji"
                ? block?.callout?.icon?.emoji
                : ""}
            </span>
            {block?.callout?.rich_text.map((item) => item?.text?.content)}
          </div>
        </div>
      );
    } else if (block.type == "code") {
      return (
        <pre
          className={`p-4 overflow-x-auto text-white bg-gray-800 rounded-md`}
          key={block.id}
        >
          {block?.code?.rich_text.map((item) => item?.text?.content)}
        </pre>
      );

    } else if (block.type == "heading_3") {
      return (
        <div
          key={block?.id}
          className="mt-5 text-3xl font-medium text-gray-800 capitalize"
        >
          {block?.heading_3?.rich_text.map((item) => item?.text?.content)}
        </div>
      );
    } else if (block.type == "heading_2") {
      return (
        <div
          key={block?.id}
          className="text-2xl font-bold text-gray-800 capitalize "
        >
          {block?.heading_2?.rich_text.map((item) => item?.text?.content)}
        </div>
      );
    } else if (block.type == "heading_1") {
      return (
        <div
          key={block?.id}
          className="text-3xl font-bold leading-tight capitalize"
        >
          {block?.heading_1?.rich_text.map((item) => item?.text?.content)}
        </div>
      );
    } else if (block.type == "paragraph") {
      const [colorPara, setColorPara] = useState(
        block?.paragraph?.color == "default" ? "gray" : "black"
      );
      useEffect(() => {
        setColorPara(block?.paragraph?.color);
      }, [block]);
      return (
        <div>{block?.paragraph?.rich_text.map((item) => item?.text?.content)}</div>
      );
    } else if (block.type == "quote") {
      const [colorQuote, setColorQuote] = useState(
        block?.quote?.color == "default" ? "gray" : "black"
      );
      useEffect(() => {
        setColorQuote(block?.quote?.color);
      }, [block]);
      return (
        <div
          key={block?.id}
          className={`w-full caret-color-${colorQuote}-500 p-3 max-w-full text-lg border-gray-800 white-space-pre-wrap word-break-break-word text-md border-x-4`}
        >
          {block?.quote?.rich_text.map((item) => item?.text?.content)}
        </div>
      );
    } else if (block?.type == "toggle"){
      const [isToggled, setIsToggled] = useState(false);
      // console.log('block',block)
      console.log('xxx')
      console.log('definedBlock',definedBlock)
       {definedBlock?.map((value)=>{
        console.log('valueee',value)
        console.log('blockkkk',block)
        if(value?.parent?.page_id  === block?.id){
          console.log('xxxxx',value)
          // const mainval = 
          // const subval = value?.paragraph.rich_text.map((val)=>{
          //     return <div className="text-gray-700">{val?.text.link == null ? val?.text.content : <a href={val?.text.link.url}>{val?.text.content}</a> }</div>
          // })
          // return (
          //   <div>
          //     <span
          //       className={`bg-gray-200 rounded-full p-2 focus:outline-none ${
          //         isToggled ? 'bg-indigo-500' : ''
          //       }`}
          //       onClick={() => setIsToggled(!isToggled)}
          //     >
          //       {block?.toggle?.rich_text.map((val)=>{
          //         return <div>{val?.plain_text}</div>
          //       })}
          //     </span>
          //     {isToggled && (
          //       <div className="p-4 bg-gray-300 rounded-md">
          //         {subval}
          //       </div>
          //     )}
          //   </div>
          // );
        }
      })}
      // console.log('toggle',togglechild)
      // return <div>{togglechild}</div>
      // if(block.id ==)

    } else if (block.type == "to_do") {
      const [colorToDo, setColorToDo] = useState(
        block?.to_do?.color == "default" ? "gray" : "black"
      );
      useEffect(() => {
        setColorToDo(block?.to_do?.color);
      }, [block]);
      const classNameCheck =
        block?.to_do?.checked == true ? "line-through" : "";
      console.log("todo", classNameCheck);
      return (
        <div
          key={block?.id}
          className={`text-${colorToDo}-400 font-medium  ${classNameCheck} leading-relaxed mb-4`}
        >
          <input type="checkbox" checked={block?.to_do?.checked} />
          {block?.to_do?.rich_text.map((item) => item?.text?.content)}
        </div>
      );

    } else if (block.type == "numbered_list_item") {
      return (
        <li className="list-decimal text-md">
          {block.numbered_list_item.rich_text.map(
            (item) => item?.text?.content
          )}
        </li>
      );

    } else if (block.type == "video" ) {
        return (
            <div>
                {/* <span>{block.video.caption}</span> */}
                <a href={`${block.video.external.url}`}>{block.video.external.url}</a>
            </div>
        )
    } else if (block.type == "image") {
        return (
            <div>
              <img src={`${block.image.file.url}`} alt="" />               
            </div>
        )
    } else if (block.type == "embed"){
      const url = block?.embed?.url
      const spliturl = url.split('/');
      console.log('url',spliturl)
      if(spliturl[2] === 'open.spotify.com'){
        return <Spotifyembed trackUrl={spliturl}/>
      } else if(spliturl[2] === 'twitter.com'){
        return <Tweetembed tweet={spliturl}/>
      } else if(spliturl[2] === 'goo.gl'){
        return <Googlemapsembed place={spliturl}/>
      }
    }
      
    else if (block && block.type === "paragraph" && block.paragraph && block.paragraph.rich_text && block.paragraph.rich_text[0] && block.paragraph.rich_text[0].type === "equation" && block.paragraph.rich_text[0].equation) {
    return (
        <div>
            {block.paragraph.rich_text[0].equation.expression}      
        </div>
    );
    }else if (block.type == "bulleted_list_item") {
      return (
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li className="text-md">
            {block.bulleted_list_item.rich_text[0].text.content}
            </li>
        </ul>
      );
    // }   else if (block.type === "table") {
    //   return (
    //     <tbody>
    //       {block?.table?.has_row_header &&
    //         something.map((row, i) => (
    //           <tr key={i}>
    //             {row.map((cell, j) => (
    //               <td
    //                 key={j}
    //                 className={`border px-4 py-2 text-green-600 ${
    //                   (j == 0 && block?.table?.has_column_header) ||
    //                   (i == 0 && block?.table?.has_row_header)
    //                     ? "font-bold"
    //                     : ""
    //                 }`}
    //               >
    //                 {cell || ""}
    //               </td>
    //             ))}
    //           </tr>
    //         ))}
    //     </tbody>
    //   );
    }
    // else if (block.type === "table") {
    //   return (
    //     <tbody>
    //       {block?.table?.has_row_header &&
    //         something.map((row, i) => (
    //           <tr key={i}>
    //             {row.map((cell, j) => (
    //               <td
    //                 key={j}
    //                 className={`border px-4 py-2 text-green-600 ${
    //                   (j == 0 && block?.table?.has_column_header) ||
    //                   (i == 0 && block?.table?.has_row_header)
    //                     ? "font-bold"
    //                     : ""
    //                 }`}
    //               >
    //                 {cell || ""}
    //               </td>
    //             ))}
    //           </tr>
    //         ))}
    //     </tbody>
    //   );
    // }
  });


  return (
    <div className="flex items-center justify-center">
      <div className=" w-[800px]">{codeBlocks}</div>;
    </div>
  )
}
export default pagedatas;


// export const databaseId = "e649f6c751994c0ea85ac6cd6495e7f4";
// export const pageId = "4606f5e400c34d68b8a0353328ad0c3c";


export const databaseId = "4c699e3e758d41248751780fefed7d23";
// export const pageId = "4606f5e400c34d68b8a0353328ad0c3c";

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};



export const getStaticProps = async (context) => {
  const pageId = context.params.id;
  const pageblock = await getBlocks(pageId);
  const pagedata = await getPage(pageId);
  let child = [];
  for (let i=0; i<pageblock.length; i++) {
    if (pageblock[i].parent.page_id === pageId && pageblock[i].has_children) {
        child.push(...await getBlocks(pageblock[i].id));
    }
  }

  return {
    props: {
      page: pagedata,
      pageblock: pageblock,
      child: child,
    },
    revalidate: 1,
  };
};


//  export const blockd = 'a2f8852f-0bee-4c1e-9ba2-fcdd7c52eab6'

// export const getStaticProps = async ({ params }) => {
//    const pageblock = await getBlocks(pageId);
//    const pagedata = await getPage(pageId);
//    const childPromises = blockId.filter(id => id).map(id => getBlocks(id));
//    const child = await Promise.all(childPromises);
//   // const child = await getBlocks(blockId);
// //    console.log('dataaaaaa', pageblock);
// //    console.log("0hjh",pagedata);
//   return {
//     props: {
//       page:pagedata,
//       pageblock:pageblock,
//       blockchild:child
//     },
//     revalidate: 1,
//   };
// };