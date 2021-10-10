import React, { useState,useRef,useCallback,useEffect } from 'react'
import './addpost.css'
import {withRouter} from 'react-router-dom'
import {createPost} from './actions/Post'
import {updatePost} from './actions/Post'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import {
CameraAlt,
Close, Crop, ExpandLess, ExpandMore, InsertPhoto,Videocam

} from '@material-ui/icons'
import {Avatar} from '@material-ui/core'

export default withRouter(({ history,currentId,setCurrentId }) => {


  const histories=useHistory();  
  const [tags ,setTags]=useState(false)
const [videoImg ,setVideoImg]=useState(true)
const [isVideoplaying, setisVideoplaying]=useState(false)
const [state ,setState]=useState(true)
const Videoref=useRef(null)
const Playvideo=()=>{
if(isVideoplaying){
//stop
Videoref.current.pause()
setisVideoplaying(false)

}else{
//play
Videoref.current.play()
setisVideoplaying(true)

}

}


const choseImg=()=>{
document.getElementById('btnImg').click()
setVideoImg(true)
setState(false)


}
const chosevideo=()=>{
document.getElementById('btnvideo').click()
setVideoImg(false)
setState(false)

}




const closeItems=()=>{
setState(true)
document.getElementById('video').style.pointerEvents="initial"
document.getElementById('photo').style.pointerEvents="initial"
// setBaseImage("")


}
const handleEmtyInput=({target})=>{

const files=target.files
target.value=''
}

const Tagss=()=>{
if (tags){
setTags(false)


}
else{
setTags(true)
}
}
// submit




  const [postData, setPostData] = useState({   provider:'',
  title:'',
  message:'',
  tags:'',
  image:'',
  video:'',
  accountType:'',
  description:'',});
  const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : currentId));
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({   provider:'',
    title:'',
    message:'',
    tags:'',
    image:'',
    video:'',
    accountType:'',
    description:'', });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === null) {
      dispatch(createPost({ ...postData, name: user?.result?.name ,    accountType: user?.result?.  accountType ,user: user?.result?._id ,status:user?.result.status ,photo:user?.result.profileImg}));
      console.log("masa aden")
      clear();
   
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name, accountType: user?.result?.    accountTypeuser ,user:user?.result?._id,status:user?.result.status ,photo:user?.result.profileImg  }));
      clear();
   
      console.log("submited")
    }
  };
  if (!user?.result?.name) {
    return (
      <div>
        <p>
          Please Sign In to create your own memories and like other's memories.
        </p>
      </div>
    );
  }




  const uploadPrev=()=>{
    
    const oFreader=new  FileReader()
   oFreader.readAsDataURL(document.getElementById('btnImg').files[0]);
   oFreader.onload=function(oFREvent){
   document.getElementById("prev").src=oFREvent.target.result;
   console.log(oFREvent.target.result)
   document.getElementById('photo').style.pointerEvents="none"
   document.getElementById('photo').style.opacity="0.9"
   setPostData({...postData, image:oFREvent.target.result})
  
   }
   }


   const uploadprevvideo=()=>{
   const ofFreader=new  FileReader()
   ofFreader.readAsDataURL(document.getElementById('btnvideo').files[0]);
   ofFreader.onload=function(ofFREvent){
   document.getElementById("prevvideo").src=ofFREvent.target.result;
   console.log(ofFREvent.target.result)
   document.getElementById('video').style.pointerEvents="none"
   document.getElementById('video').style.opacity="0.9"
   console.log(ofFREvent.target.result,"video")
   setPostData({...postData, video:ofFREvent.target.result})


   }
   }
  
return (

<div className="main__post">

<form    onSubmit={handleSubmit}  >
<div className="main__posthead">
<Close onClick={() => history.goBack()}/>
<p  onClick={handleSubmit}>hook</p>
</div>
<div className="profileImgItems">
<div className="profileImg">
<Avatar  src="https://media-exp1.licdn.com/dms/image/C5603AQEEvxXppI3NcQ/profile-displayphoto-shrink_200_200/0/1597502735835?e=1623888000&v=beta&t=XmR961p3-kxSIp8LJu0b4RnZASS8t0VIU3yQJLDH2mQ"/>    
</div>
<div className="tags">
<p>Tags</p>
{tags?(<ExpandLess onClick={Tagss}/>):(<ExpandMore onClick={Tagss}/>)}
{tags?(<div className="tags__elements">

  <input type="radio" id="Local" name="gender" value="Local"
  onChange={(e)=>setPostData({...postData, tags:e.target.value})}
  />
  <label for="Local">Local </label><br/>
  <input type="radio" id="male" name="gender" value="World"
  onChange={(e)=>setPostData({...postData, tags:e.target.value})}
  />
  <label for="male">World </label><br/>
  <input type="radio" id="male" name="gender" value="Science"
  onChange={(e)=>setPostData({...postData, tags:e.target.value})}/>
  <label for="male">Sceince </label><br/>
  <input type="radio" id="male" name="gender" value="Technology"
  onChange={(e)=>setPostData({...postData, tags:e.target.value})}/>
  <label for="male">Technology</label><br/>
  <input type="radio" id="male" name="gender" value="Sports"
  onChange={(e)=>setPostData({...postData, tags:e.target.value})}/>
  <label for="male">Sports</label><br/>
  <input type="radio" id="male" name="gender" value="Finance"
  onChange={(e)=>setPostData({...postData, tags:e.target.value})}/>
  <label for="male">Finances</label><br/>
</div>
):""
}
</div>
</div>
<div className="title__textArea">
<textarea name="creator" id="input" placeholder="Add Your Article Title ..." value={postData.title}
onChange={(e)=>setPostData({...postData, title:e.target.value})}

/>

</div>
<div className="media___section">
    {state?(<p id="default"></p>):(
<div id="imgSection" className="media___sectionImageSelected">
 {videoImg?(<img accept="image/*" id="prev"/>):(
<video  onClick={Playvideo} ref={Videoref}  id="prevvideo" accept="video/*"/> )}

<Close onClick={closeItems} className="closeup"/>

{/* {videoImg?(<Crop  className="crop"/>):(<p>hello</p>)} */}

</div>
    )
}

<input  accept="image/*" type="file" id="btnImg" 
onClick={handleEmtyInput}
onChange={ uploadPrev}
/> 

<input onChange={uploadprevvideo} onClick={handleEmtyInput} accept="video/* " type="file" id="btnvideo"/> 
<div className="media___sectionImageOption">

<InsertPhoto id="photo"  onClick={choseImg}/>
<Videocam id="video" onClick={chosevideo}/>
<img src="https://pbs.twimg.com/profile_images/1168921769215975427/9HtgkZck.png"/>
<img src="https://cdn2.vectorstock.com/i/1000x1000/73/31/black-and-red-business-card-template-vector-14297331.jpg"/>
<img src="https://i1.wp.com/www.euroscientist.com/wp-content/uploads/2020/04/chelsea-WvusC5M-TM8-unsplash-scaled.jpg?fit=2560%2C1920&ssl=1"/>
<img src="https://assets.swappie.com/iphone11provihreaCC88.jpg"/>


</div>
</div>
<div className="desc__textAREA">
<textarea name="description" placeholder="Article Description..."value={postData.description}
onChange={(e)=>setPostData({...postData, description:e.target.value})}/>
</div>

</form>
</div>
)
});


