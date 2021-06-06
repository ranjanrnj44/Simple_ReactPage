import React from "react";
import { useLocation, useParams } from "react-router";

function PostUsingLocation() {
    

    let { id } = useParams();
    console.log(useParams());
    
    let query = new URLSearchParams(useLocation().search);
    console.log(useLocation());

    return (
      <div>
        <h2>The ID of useParams is : {id}</h2>
        <h2>FName from useLocation is : {query.get("fname")}</h2>
        <h2>LName from useLocation is : {query.get("lname")}</h2>
      </div>
    );
}

export default PostUsingLocation;
