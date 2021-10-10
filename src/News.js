import * as React from 'react';
import {useSelector} from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom';
import './news.css'
import {AllInclusive} from '@material-ui/icons'
import Paginate from './Pagination';
import CardPost from  './CardPost'
import Moment from 'react-moment';
import {Skeleton,Stack} from '@mui/material'
import Stories from 'react-insta-stories';
function useQuery1() {
  return new URLSearchParams(useLocation().search);
}
function News(setCurrentId) {
  
  
  
// FETCH POST
  const query = useQuery1();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

const {posts,isLoading}=useSelector((state)=>state.posts)
console.log(posts)
// stories
const stories = 

 posts.map((post)=>(
  post.image!==""?
    {
   
      type: 'image',
      url: post.image!==""?post.image:post.video,
      duration: 5000,
      header: {
        heading:post.name,
    
          subheading:(<Moment fromNow>{post.createdAt}</Moment>) ,
        profileImage: post.photo,
      },
      seeMore: ({ close }) => {
        return <div className="stort_title" onClick={close}><p>{post.title}</p></div>;
      }
    }
    :(<div>hello</div>)
    ))

if(!posts.length && !isLoading){
  return 'no Post'
}
return (
<div className="news">
 
{
isLoading?(<div className="loader__news">
 <Stack spacing={1}>
   
      <Skeleton variant="circular" width={50} height={50} />
      <Skeleton variant="rectangular" width={400} height={218} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={50} height={50} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width={400} height={318} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </Stack>


</div>):
(<div>
   <div className="stories">
  <div className="stories1">
<Stories
			stories={stories}
			defaultInterval={1500}
			width="100%"
			height={220}
      isPaused={true}
      loop={true}
      currentIndex={10}
      storyStyles={{

       
        width: '400px',
        maxWidth: '100%',
        maxHeight: '100%',
        margin: 'auto',
        objectFit:'cover',
        height: '220px',

      }
      }
		/>
     </div>
     <div className="stories2">
       
<p>DISCOVERIES</p>
<AllInclusive/>
     </div>
    </div>
{posts.map((post)=>(  

<CardPost post={post} setCurrentId={setCurrentId} key={post._id}
photo={post.photo}
newsrc={post.name}
newtype={post.accountType}
newstypeimg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYd2zxgqMSBA62puWUurhS_MLaOmpoOEoQZA&usqp=CAU"
Url="url"
newimage={post.image}
video={post.video}
title={post.title}
tag={post.tags.map((tag) => `#${tag} `)}
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

export default News
