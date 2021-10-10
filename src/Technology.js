import React from 'react';
import {useSelector} from 'react-redux'

import { useHistory, useLocation } from 'react-router-dom';
import './news.css'

import CardPost from  './CardPost'
import Loader from './Contentloader'
import Paginate from './Pagination';

function useQuery1() {
  return new URLSearchParams(useLocation().search);
}
function Technology(setCurrentId) {
// FETCH POST
  const query = useQuery1();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

const {posts,isLoading}=useSelector((state)=>state.posts)
console.log(posts)

if(!posts.length && !isLoading){
  return 'no Post'
}
return (
<div className="news">
{
isLoading?("Loading"):
(<div>
{posts.map((post)=>(  
<CardPost post={post} setCurrentId={setCurrentId} key={post._id}
newsrc={post.name}
newtype={post.accountType}
newstypeimg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYd2zxgqMSBA62puWUurhS_MLaOmpoOEoQZA&usqp=CAU"
Url="url"
newimage={post.image}
tag={post.tags.map((tag) => `#${tag} `)}
video={post.video}
title={post.title}
description={post.description}
seeMore="see more..."
articlebody={post.description}
ProviderUrl="url"
time={post.createdAt}
share="100"
love={post.likeCount}
comment="79"
/>
))}
</div>)
}
<div className="Page__div">

<Paginate page={page}/>
</div>

</div>

)
}

export default Technology
