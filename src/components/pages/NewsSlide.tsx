// import { useEffect, useState } from "react";
import React, { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
type NewsSlideProps = {
  title?: string;
  author?: string;
  publishedAt?: string;
  description?: string;
  imgurl?: string;
  url?: string;
  source?: any;
};
function NewsSlide({
  title,
  author,
  publishedAt,
  description,
  imgurl,
  url,
  source,
}: NewsSlideProps) {
  console.log(url);
  const navigate = useNavigate();
  return (
    <div className="App">
      <div>
        <div
          className="card"
          style={{ padding: "10px", marginLeft: "60px" }}
        >
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ left: "80%" }}
          >
            {source?.id}
          </span>
          <img
            src={
              !imgurl
                ? "https://c.ndtvimg.com/2021-12/kat5p27g_pfizer-covid19-booster-vaccinesafp_625x300_08_December_21.jpg"
                : imgurl
            }
            className="card-img-top"
            alt="mansi"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">On {publishedAt}</small>
            </p>
            <a href={url} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(NewsSlide);
