import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';



const New = (props) => {
    const nav = useNavigate()
    const capitalizeString = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    document.title = `${capitalizeString(props.category)} -The News`;

    const [article, setArticle] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


    const updatePage = async () => {
        try {

            props.setProgress(10);
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.Apikey}&page=${page}&pageSize=${props.pageSize}`;
            let data = await fetch(url);
            props.setProgress(30);
            let parseData = await data.json();
            props.setProgress(50);
            if (parseData.status === 'error') {
                nav("/page500");
            }
            setArticle(parseData.articles);
            setTotalResults(parseData.totalResults);
            props.setProgress(100);

        } catch (error) {
            nav("/page500");

        }


    }



    useEffect(() => {
        updatePage();
        // eslint-disable-next-line
    }, []);


    const fetchMoreData = async () => {
        
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.Apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
            setPage(page + 1);
            let data = await fetch(url);
            let parseData = await data.json();
            if (parseData.status === 'error') {
                nav("/page500");
            }
            setArticle(article.concat(parseData.articles));
            setTotalResults(parseData.totalResults);

        } catch (error) {
            nav("/page500");

        }



    }

    return (
        <>

            <h1 className="text-center " style={{ marginTop: '85px',color:"#fff",fontSize: "3.5em"}}>Top  {capitalizeString(props.category)} Headlines</h1>

            <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                hasMore={article.length < totalResults}
                loader={<Spinner />}
            >
                <div className='container'>
                    <div className="row">

                        {article.map((element) => {
                            return <div className='col-md-4 d-flex justify-content-center ' key={element.url}>
                                <NewsItem title={(element.title !== null) ? element.title.slice(0, 45) : " "} description={(element.description) ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })
                        }
                    </div>
                </div>
            </InfiniteScroll>

        </>
    )

}

New.defaultProps = {
    country: "in",
    pageSize: 5,
    catrgory: "general"
}
New.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    catrgory: PropTypes.string

}
export default New;