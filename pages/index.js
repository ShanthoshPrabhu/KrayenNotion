// import { getDatabase } from "@notionhq/client/build/src/api-endpoints";
// import { OpenInNewRounded } from "@mui/icons-material";
import axios from "axios";
import Link from "next/link";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { getBlocks, getDatabase, getPage } from "../library/notion";
import BlogNav from "../components/BlogNav";
//export const databaseId = "4c699e3e758d41248751780fefed7d23";
// export const pageId = "4606f5e400c34d68b8a0353328ad0c3c";

//export const databaseId = "e649f6c751994c0ea85ac6cd6495e7f4";
// //export const pageId='4606f5e400c34d68b8a0353328ad0c3c'

// export const databaseId = "e649f6c751994c0ea85ac6cd6495e7f4";
// export const pageId = "eb889e735554462ca107e68cd7ace229";

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    // console.log("value", value);

    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    // console.log('text',text)
    return (
      <span
        className={[
          bold ? "font-bold" : "",
          code ? " bg-[#F2F2F2] px-2 py-4 rounded-lg" : "",
          italic ? " italic" : "",
          strikethrough ? " line-through" : "",
          underline ? "underline" : "",
        ].join(" line-clamp-3")}
        style={color !== "default" ? { color } : {}}
      >
        {text?.link == null ? (
          text.content
        ) : (
          <a href={text?.link?.url}>{text?.content}</a>
        )}
      </span>
    );
  });
};

function index({ posts, datablock }) {
  console.log("posts", posts);
  // console.log('datablock',datablock)

  // useEffect(() => {
  //   async function ffff() {
  //     const getdata = await axios.post(`/api/database`, {
  //       databaseId: "4c699e3e758d41248751780fefed7d23",
  //     });
  //     console.log("getdata", getdata);
  //   }
  //   ffff();
  // }, []);

  //Title
  const title = posts.map((post) => {
    const properties = Object.values(post?.properties);
    const titleProperties = properties
      .filter((property) => property?.type === "title")
      .map((property) => {
        return property?.title?.map((value) => value?.text?.content);
      });
    return (
      <div className="font-sans text-2xl font-bold">{titleProperties}</div>
    );
  });

  // const multiSelect = posts.map((post) => {
  //  ;
  // });

  const Select = posts.map((post) => {
    const properties = Object.values(post.properties);
    const selectProperties = properties
      .filter((property) => property.type === "select")
      .map((prop) => {
        return (
          <div className="cursor-pointer flex m-2 w-full shadow-lg bg-[#89cff0] rounded-sm">
            {prop?.select?.name}
          </div>
        );
      });
    console.log("selectProperties", selectProperties);
    return <div>{selectProperties}</div>;
  });

  const Texture = posts.map((post) => {
    const properties = Object.values(post.properties);
    console.log("properties", properties);
    const textureProperties = properties
      .filter((property) => property?.type === "rich_text")
      .map((prop) => {
        return prop?.rich_text?.map((item) => {
          return <div>{item?.text?.content}</div>;
        });
      });
    return <div>{textureProperties}</div>;
  });

  const CreatedTime = posts.map((post) => {
    const properties = Object.values(post.properties);
    const createdTimeProperties = properties
      .filter((property) => property.type === "created_time")
      .map((prop) => {
        const date = new Date(prop.created_time);
        return date.toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        });
      });
    return <div>{createdTimeProperties}</div>;
  });

  const CreatedBy = posts.map((post) => {
    const properties = Object.values(post.properties);
    const createdByProperties = properties
      .filter((property) => property?.type === "created_by")
      .map((prop) => {
        return <div>{prop?.created_by?.name}</div>;
      });
    return <div>{createdByProperties}</div>;
  });

  const LastEditedTime = posts.map((post) => {
    const properties = Object.values(post.properties);
    const lastEditedTimeProperties = properties
      .filter((property) => property?.type === "last_edited_time")
      .map((prop) => {
        const date = new Date(prop?.last_edited_time);
        return date.toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        });
      });
    return <div>{lastEditedTimeProperties}</div>;
  });

  const LastEditedBy = posts.map((post) => {
    const properties = Object.values(post.properties);
    const lastEditedTimeProperties = properties
      .filter((property) => property.type === "last_edited_by")
      .map((prop) => {
        return <div>{prop.last_edited_by.name}</div>;
      });
    return <div>{lastEditedTimeProperties}</div>;
  });

  const Number = posts.map((post) => {
    const properties = Object.values(post.properties);
    const NumberProperties = properties
      .filter((property) => property.type === "number")
      .map((prop) => {
        return <div>{prop.number}</div>;
      });
    return <div>{NumberProperties}</div>;
  });

  const Status = posts.map((post) => {
    const properties = Object.values(post.properties);
    const StatusProperties = properties
      .filter((property) => property.type === "status")
      .map((prop) => {
        return <div>{prop.status.name}</div>;
      });
    return <div>{StatusProperties}</div>;
  });

  const DateProp = posts.map((post) => {
    const properties = Object.values(post.properties);
    const DateProperties = properties
      .filter((property) => property.type === "date")
      .map((prop) => {
        const date = new Date(prop?.date?.start);
        return date.toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        });
      });
    return <div>{DateProperties}</div>;
  });

  const Person = posts.map((post) => {
    const properties = Object.values(post.properties);
    const PersonProperties = properties
      .filter((property) => property.type === "people")
      .map((prop) => {
        return prop.people.map((item) => {
          return item.name;
        });
      });
    return <div>{PersonProperties}</div>;
  });

  const Phone = posts.map((post) => {
    const properties = Object.values(post.properties);
    const PhoneProperties = properties
      .filter((property) => property.type === "phone_number")
      .map((prop) => {
        return prop.phone_number;
      });
    return <div>{PhoneProperties}</div>;
  });

  const Email = posts.map((post) => {
    const properties = Object.values(post.properties);
    const EmailProperties = properties
      .filter((property) => property.type === "email")
      .map((prop) => {
        return prop.email;
      });
    return <div>{EmailProperties}</div>;
  });

  const Checkbox = posts.map((post) => {
    const properties = Object.values(post.properties);
    const CheckboxProperties = properties
      .filter((property) => property.type === "checkbox")
      .map((prop) => {
        return (
          <div>
            <input type="checkbox" checked={prop.checkbox} />
          </div>
        );
      });
    return <div>{CheckboxProperties}</div>;
  });

  const urls = posts.map((post) => {
    const properties = Object.values(post?.properties);
    const urlsProperties = properties
      .filter((property) => property?.type === "url")
      .map((prop) => {
        return (
          <div>
            <a href={prop?.url} />
            {prop?.url}
          </div>
        );
      });
    return <div>{urlsProperties}</div>;
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-screen-2xl sm:m-8">
      <div className="z-50">
        <BlogNav />
      </div>
      <h2 className="mb-[70px] text-3xl">All Posts</h2>
      <div className="grid grid-flow-row-dense mx-auto xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ">
        {posts.map((post) => {
          // console.log(
          //   "postingggggggggg",
          //   post?.properties?.Name?.title[0]?.text?.content
          // );
          const date = new Date(post.last_edited_time).toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          });

          const properties = Object.values(post?.properties);
          const titleProperties = properties
            .filter((property) => property?.type === "title")
            ?.map((property) => {
              return property?.title?.map((value) => {
                return <div>{value?.text?.content}</div>;
              });
            });
          const multiSelectProperties = properties
            .filter((property) => property?.type === "multi_select")
            ?.map((prop) => {
              return prop?.multi_select?.map((value) => {
                return (
                  <div className="cursor-pointer text-sm ml-4 px-2 py-[1px] flex justify-around shadow-md bg-[#89cff0] rounded-sm">
                    {value?.name}
                  </div>
                );
              });
            });
          return (
            <Link className="" href={`/${post.id}`}>
              <div className="relative items-center justify-center m-8 transition duration-300 ease-in-out bg-white rounded-lg cursor-pointer hover:scale-105 hover:-translate-y-1 hover:delay-150">
                <div className="w-full">
                  <img
                    src={post?.cover?.external?.url}
                    alt=""
                    className="w-full min-h-[210px] max-h-[210px] object-cover rounded-lg"
                  />
                </div>

                <div className="px-2 py-2">
                  <div className="flex items-center justify-between py-2 text-xs">
                    <div className="flex font-mono ">
                      {multiSelectProperties}
                    </div>
                    <span className="text-neutral-500">{date}</span>
                  </div>
                  <div className="flex px-3 py-2">
                    <h1 className="text-xl font-semibold ">
                      {titleProperties}
                    </h1>
                  </div>
                  <div className="p-3 text-lg line-clamp-3">
                    <Text text={post?.properties?.Text?.rich_text} />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {}
    </div>
  );
}

export default index;

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  const datablock = await getBlocks(databaseId);

  // console.log("dataaaaaa", database);

  return {
    props: {
      posts: database,
      datablock: datablock,
    },
    revalidate: 1,
  };
};
