import React, {useState} from "react";
import apiURL from "../api";

export const Form = ({setPage}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tags, setTags] = useState('');

  async function handler(event) {
    //event.preventDefault();
    const response = await fetch(`${apiURL}/wiki/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {title, content, name, email, tags}
      )
    });

    const data = await response.json();
    setPage({});
  }

  return (
    <>
      <h2>Add a Page</h2>
      <form>
        <p>
          <input type="text" value={title} placeholder="Title" onChange={(event) => setTitle(event.target.value)}/>
        </p>
        <p>
          <input type="text" value={content} placeholder="Article Content" onChange={(event) => setContent(event.target.value)}/>
        </p>
        <p>
          <input type="text" value={name} placeholder="Author Name" onChange={(event) => setName(event.target.value)}/>
        </p>
        <p>
          <input type="text" value={email} placeholder="Author Email" onChange={(event) => setEmail(event.target.value)}/>
        </p>
        <p>
          <input type="text" value={tags} placeholder="Tags" onChange={(event) => setTags(event.target.value)}/>
        </p>
        <p>
          <button onClick={handler}>Create Page</button>
        </p>
      </form>
    </>
  );
};