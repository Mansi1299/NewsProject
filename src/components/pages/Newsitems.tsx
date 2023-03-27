import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { GetPosts } from "../store/slice/PostSlice";
import NewsSlide from "./NewsSlide";

type NewsSlideProps = {
  urlToImage: string | undefined;
  title?: string;
  publishedAt?: string;
  description?: string;
  imgurl?: string;
  url?: string;
  source?: any;
};
function Newsitems() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const postData = useAppSelector((state) => state.post.post);
  console.log(postData, "Test1");

  return (
    <>
      <div>
        <h2
          style={{ marginLeft: "86px", marginTop: "10px" }}
          className="text-center"
        >
          {" "}
          Today's : Top Headlines from
        </h2>
      </div>
      <div className="row">
        {postData.data.articles &&
          postData?.data.articles.map((item: NewsSlideProps, i: any) => {
            // console.log(item)
            return (
              <div className="col-md-3" key={i}>
                <NewsSlide
                  title={item.title ? item.title.slice(0, 40) : ""}
                  publishedAt={item.publishedAt}
                  description={
                    item.description ? item.description.slice(0, 88) : ""
                  }
                  imgurl={item.urlToImage}
                  url={item.url}
                  source={item.source}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Newsitems;
