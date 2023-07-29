import { hot } from "react-hot-loader/root";
import React from 'react';
import GlobalStyle from './globalStyles';
import { Layout } from './Components/Layout';
import { Header } from './Components/Header';
import { Content } from './Components/Content';
import { CardsList } from './Components/CardsList';
import {useToken} from './hooks/useToken';
import {Provider, useDispatch} from 'react-redux';
import { store } from './store/store';
import { setToken } from './store/actions';

function AppComponent() {
  const [token] = useToken();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setToken(token))
  }, [token])
  
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
        <Content>
          <CardsList />
        </Content>
      </Layout>
    </>
  );
}

export const App = hot(() => <Provider store={store}><AppComponent /></Provider>);
