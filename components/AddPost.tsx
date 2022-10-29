import * as React from "react";
import { IPost } from "../types";
import {useRouter} from "next/router"

type Props = {
  savePost: (e: React.FormEvent, formData: IPost) => void;
};

const AddPost: React.FC<Props> = ({ savePost }) => {
  const [formData, setFormData] = React.useState<IPost>({
    id: 0,
    userId: "",
    title: "",
    body: "",
  });

  const router = useRouter()
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  const submitPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        router.push('/home')
    })
      .catch(error=>console.log(error))
  };

  return (
    <form
      className="Form"
      onSubmit={(e) => {
        savePost(e, formData);
        submitPost()
      }}
    >
      <div>
        <div className="Form--field">
          <label htmlFor="name">User ID</label>
          <input onChange={handleForm} type="text" id="userId" />
        </div>
        <div className="Form--field">
          <label htmlFor="name">Title</label>
          <input onChange={handleForm} type="text" id="title" />
        </div>
        <div className="Form--field">
          <label htmlFor="body">Description</label>
          <input onChange={handleForm} type="text" id="body" />
        </div>
      </div>
      <button
        className="Form__button"
        disabled={formData === undefined ? true : false}
      >
        Add Post
      </button>
    </form>
  );
};

export default AddPost;
