import React, { useEffect, useState } from 'react'
import post from  '../File/posts.json'


function Card() {

    console.log(post, "post")
    
    
    

    const [title, setTitle] = useState([{}]);
    const [description, setDescription] = useState([{}]);
    const [tags, setTage] = useState([{}]);
    const [author, setAuthor] = useState([{}]);
    
    // const fetchData = async() => {
       

    //     const response =  await fetch("C:\Users\DELL\Desktop\My_Project\Interview\author\src\File\posts.json") => [{
    //         method : 'POST',
    //         'content type': post,
    //     }]
        
   
         
    //     const data = response.json();
 
    //      data
    //     .then((res) => {return data})
    //      .then((res) => setTitle(res.title()))
    //      .then((res)=> setDescription(res.body()))
    //      .then((res)=> setTage(res.tags()))
    //      .then((res)=> setAuthor(res.author()))
    // }

    useEffect(()=>{

        const data = fetch("../File/posts.json")
        // const data1 = data.json()
        console.log(data, "data")
      
        // post(post)
        // .then((res) => {return post.json()})
        //  .then((res) => setTitle(res.title()))
        //  .then((res)=> setDescription(res.body()))
        //  .then((res)=> setTage(res.tags()))
        //  .then((res)=> setAuthor(res.author()))

    }, [])

  return (
    <div style={{height:200, width:300, border:2 , borderRadius:5, flexDirection:'column'}}>
      
       {title.map((index, titles)=>{
              <p key={index}>Title:{titles} </p>
       })}
      
       {description.map((index, descriptions)=>{
              <p key={index}>Description:{descriptions}</p>
       })}
      
        {tags.map((index, tags)=>{
              <p key={index}>Tage:{tags}</p>
       })}
      
        {author.map((index, authors)=>{
              <p key={index}>Author Details::{authors}</p>
       })}
         
    </div>
  )
}

export default Card
