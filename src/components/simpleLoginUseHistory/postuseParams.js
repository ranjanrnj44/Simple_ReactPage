import React from 'react'
import { useParams } from 'react-router'

// 1 of the way instead of useParams
  // function postFromUrl({match}) {
  //     return <h2>The ID is : {match.params.id}</h2>
  // }

function PostUsingParams() {
    console.log(useParams());
    let { id } = useParams(); // destructuring
    return (
      <div>
        <h2>The ID is : {id}</h2>
      </div>
    );
}
export default PostUsingParams;
