import React from "react";
import imageIsNotThere from "./when-image-not-loaded.png"


const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <>
            <div className="my-3">
                <div className="card " style={{ width: "18rem" }}>
                    <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
                        <span className="badge rounded-pill  bg-danger shadow " style={{ left: '98%', zIndex: 1 }}>{source}</span>
                    </div>

                    <img src={!imageUrl ? imageIsNotThere : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {author ? author : "unknow"} <br /> Published At  {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        </>
    )

}

export default NewsItem;