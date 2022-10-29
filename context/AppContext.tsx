import React, { useState } from 'react';
import { IPost } from '../types'

interface IAppContextProps {
  postList: IPost[];
  setPostlist: (data: IPost[]) => void;
}

export const AppContext = React.createContext<IAppContextProps>({
    postList: [{
    id: 0,
    userId: '',
    title: '',
    body: ''}],
    setPostlist: () => {},
  });
  
  export const AppContextProvider = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    const [currentPost, setCurrentPost] = useState([{id: 0,
        userId: '',
        title: '',
        body: ''}]);
  
    return (
      <AppContext.Provider
        value={{
          postList: currentPost,
          setPostlist: setCurrentPost,
        }}
      >
        {props.children}
      </AppContext.Provider>
    );
  };