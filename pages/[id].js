import { makeConsoleLogger } from "@notionhq/client/build/src/logging";
import { useEffect, useState } from "react";

import { Googlemapsembed } from "../components/Googlemapsembed";
import Navbar from "../components/Navbar";
import { Spotifyembed } from "../components/Spotifyembed";
import { Tweetembed } from "../components/Tweetembed";
import { getPage, getBlocks, getDatabase } from "../library/notion";
// import { PlayIcon } from "@heroicons/react/24/solid";';

function pagedatas({ page, pageblock, child }) {
  console.log("page", page);
  console.log("pageblock", pageblock);

  const datasOFBlock = child;
  const definedBlock = datasOFBlock || [];

  // console.log("defined block", definedBlock)
  const something = definedBlock.map((child) => {
    return child.type === "table_row"
      ? child?.table_row?.cells.map((item) => item[0]?.text.content)
      : "";
  });
  // const rows = something.map((row) => {
  //   return row.map((cell) => cell);
  // });

  // console.log("type", rows);

  // console.log("something", something);
  const datasOfPage = pageblock;
  const items = datasOfPage || [];
  //  console.log("codeBlocks", items);
  const codeBlocks = items.map((block) => {
    if (block.type == "callout") {
      return (
        <div
          key={block?.id}
          className="px-4 py-2 text-black my-5 bg-[#e5e5e5] rounded-lg"
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
          className={`p-4 my-5 overflow-x-auto text-white bg-gray-600 rounded-md`}
          key={block.id}
        >
          {block?.code?.rich_text.map((item) => item?.text?.content)}
        </pre>
      );
    } else if (block.type == "heading_3") {
      return (
        <div
          key={block?.id}
          className="my-5 text-3xl font-medium text-gray-800 capitalize "
        >
          {block?.heading_3?.rich_text.map((item) => item?.text?.content)}
        </div>
      );
    } else if (block.type == "heading_2") {
      return (
        <div
          key={block?.id}
          className="my-5 text-4xl font-medium text-gray-800 capitalize "
        >
          {block?.heading_2?.rich_text.map((item) => item?.text?.content)}
        </div>
      );
    } else if (block.type == "heading_1") {
      return (
        <div key={block?.id} className="mb-8 text-2xl font-bold">
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
        <div className="text-base leading-relaxed md:text-lg lg:text-xl">
          {block?.paragraph?.rich_text.map((item) => item?.text?.content)}
        </div>
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
          className={`w-full my-5 caret-color-${colorQuote}-500 px-3 py-2 max-w-full text-base border-gray-800 white-space-pre-wrap word-break-break-word text-md border-l-4`}
        >
          {block?.quote?.rich_text.map((item) => item?.text?.content)}
        </div>
      );
    } else if (block?.type == "toggle") {
      const [isToggled, setIsToggled] = useState(false);
      const mainval = block?.toggle?.rich_text.map((val) => {
        return <div>{val?.plain_text}</div>;
      });
      let newArray = [];

      const togggle = definedBlock?.map((value) => {
        if (value?.parent?.block_id === block?.id) {
          // console.log('xxxxx',value)
          // console.log('valueee',value)
          // console.log('blockkkk',block)
          {
            value?.paragraph.rich_text.map((val) => {
              return newArray.push(val);
            });
          }
          return;
        }
      });
      // console.log('toggle',togglechild)
      // console.log('newArray',newArray)
      // const subval =
      return (
        <div className="my-5 ml-0 ">
          <div className="flex items-center">
            <div
              className={`h-[18px] cursor-pointer ${
                isToggled ? "transform rotate-90 duration-300 ease-in-out" : null
              }`}
              onClick={() => setIsToggled(!isToggled)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
              </svg>

            </div>
            <div className="ml-2 text-lg font-medium ">{mainval}</div>
          </div>
          {isToggled && (
            <div className="mt-2 text-base ml-7">
              {newArray?.map((val) => {
                return (
                  <div className="my-2 text-gray-700">
                    {val?.text.link == null ? (
                      val?.text.content
                    ) : (
                      <a href={val?.text.link.url}>{val?.text.content}</a>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    } else if (block.type == "to_do") {
      const [colorToDo, setColorToDo] = useState(
        block?.to_do?.color == "default" ? "gray" : "black"
      );
      useEffect(() => {
        setColorToDo(block?.to_do?.color);
      }, [block]);
      const classNameCheck =
        block?.to_do?.checked == true ? "line-through" : "";
      // console.log("todo", classNameCheck);
      return (
        <div
          key={block?.id}
          className={`text-${colorToDo}-400 my-5 flex items-center font-normal text-base  ${classNameCheck} leading-relaxed mb-4`}
        >
          <input
            type="checkbox"
            checked={block?.to_do?.checked}
            readOnly={true}
          />
          <div className="ml-3 ">
            {block?.to_do?.rich_text.map((item) => item?.text?.content)}
          </div>
        </div>
      );
    } else if (block.type == "numbered_list_item") {
      return (
        <li className="my-5 list-decimal text-md">
          {block.numbered_list_item.rich_text.map(
            (item) => item?.text?.content
          )}
        </li>
      );
    } else if (block.type == "video") {
      return (
        <div className="my-5 ">
          {/* <span>{block.video.caption}</span> */}
          <a href={`${block.video.external.url}`}>{block.video.external.url}</a>
        </div>
      );
    } else if (block.type == "image") {
      return (
        <div className="my-5 ">
          <img src={`${block.image.file.url}`} alt="" />
        </div>
      );
    } else if (block.type == "embed") {
      const url = block?.embed?.url;
      const spliturl = url.split("/");
      // console.log('url',spliturl)
      if (spliturl[2] === "open.spotify.com") {
        return <Spotifyembed trackUrl={spliturl} />;
      } else if (spliturl[2] === "twitter.com") {
        return <Tweetembed tweet={spliturl} />;
      } else if (spliturl[2] === "goo.gl") {
        return <Googlemapsembed place={spliturl} />;
      }
    } else if (
      block &&
      block.type === "paragraph" &&
      block.paragraph &&
      block.paragraph.rich_text &&
      block.paragraph.rich_text[0] &&
      block.paragraph.rich_text[0].type === "equation" &&
      block.paragraph.rich_text[0].equation
    ) {
      return (
        <div className="my-5 ">
          {block.paragraph.rich_text[0].equation.expression}
        </div>
      );
    } else if (block.type == "bulleted_list_item") {
      return (
        <ul className="max-w-md my-5 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
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

  const properties = Object.values(page.properties);

  const titleProperties = properties
    .filter((property) => property.type === "title")
    ?.map((prop) => {
      //  console.log("prop",prop.title[0].text.content)
      return prop?.title.map((item) => {
        return <div className="">{item.text.content}</div>;
      });
    });
  // const date = new Date(p.last_edited_time).toLocaleString("en-US", {
  //   month: "short",
  //   day: "2-digit",
  //   year: "numeric",
  // });
  // const title = properties[24].title[0].text.content

  const multiSelectProperties = properties
    .filter((property) => property?.type === "multi_select")
    ?.map((prop) => {
      return prop?.multi_select?.map((value) => {
        return (
          <div className="cursor-pointer text-xs ml-4 px-2 py-[1px] flex justify-around shadow-md bg-[#89cff0] rounded-sm">
            {value?.name}
          </div>
        );
      });
    });

  const textureProperties = properties
    .filter((property) => property?.type === "rich_text")
    ?.map((prop) => {
      return prop?.rich_text?.map((item) => {
        return <div>{item?.text?.content}</div>;
      });
    });
  return (
    <div className="flex flex-col px-10 sm:px-20 md:px-36 lg:px-64 xl:px-72">
      <div>
        <Navbar />
      </div>
      <div className="mt-20 rounded-md ">
        <div className="px-10 border-b-4 border-black">
          <div className="my-4">
            {properties
              .filter((property) => property.type === "title")
              .map((prop) =>
                prop.title.map((item) => (
                  <div
                    key={item.id}
                    className="text-4xl font-bold text-left mb-8 md:text-5xl lg:text-6xl"
                  >
                    {item.text.content}
                  </div>
                ))
              )}
          </div>
          <div className="my-4">
            {properties
              .filter((property) => property.type === "rich_text")
              .map((prop) =>
                prop.rich_text.map((item) => (
                  <div
                    key={item.id}
                    className="text-base leading-relaxed font-sans mb-8 md:text-lg lg:text-xl"
                  >
                    {item.text.content}
                  </div>
                ))
              )}
          </div>
          <div className="flex my-4 font-mono">{multiSelectProperties}</div>
        </div>
        <hr />
        <div className="xl:w-800px items-center justify-center px-10 min-w-400px">
          {codeBlocks}
        </div>
      </div>
    </div>
  );
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
  for (let i = 0; i < pageblock.length; i++) {
    if (pageblock[i].parent.page_id === pageId && pageblock[i].has_children) {
      child.push(...(await getBlocks(pageblock[i].id)));
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
