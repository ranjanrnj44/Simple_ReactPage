import React from 'react'
import { useParams } from 'react-router'

// function postFromUrl({match}) {
//     return <h2>The ID is : {match.params.id}</h2>
// }

function PostUsingParams() {
    console.log(useParams());
    let { id } = useParams();
    return (
      <div>
        <h2>The ID is : {id}</h2>
      </div>
    );
}
export default PostUsingParams;
