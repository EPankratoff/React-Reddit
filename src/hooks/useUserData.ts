import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../store/store';

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
  const [data, setData] = React.useState<IUserData>({});
  const token = useSelector<IState, string>(state => state.token);

  React.useEffect(() => {
    if (!token || token === "undefined") return;

    axios.get('https://oauth.reddit.com/api/v1/me.json', {
      headers: {Authorization: `bearer ${token}`}
    })
    .then(({data}) => {
      const {name, icon_img} = data;
      setData({
        name, iconImg: icon_img
      })
    })
    .catch(() => console.log())
  }, [token]);

  return [data]
}