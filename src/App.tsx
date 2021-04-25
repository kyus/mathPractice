import React, {useEffect, useState} from 'react';
import './App.scss';
import {Breadcrumb, Layout, Menu} from 'antd';
import {QuestionCircleOutlined, ApiOutlined, FormOutlined} from '@ant-design/icons';
import {Switch, Route, withRouter, RouteComponentProps} from 'react-router-dom';
import About from './Components/about/About';
import LinearEq from "./Components/J1/LinearEq";
import Contact from "./Components/contact/Contact";

function App({history, location}:RouteComponentProps) {
  console.log('loc', location);
  const {Header, Footer, Content} = Layout;
  const [loc, setLoc] = useState(['practices']);
  const movePage = (page:string) => {
    setLoc([page]);
    history.push(`/${page}`);
  }
  useEffect(() => {
    history.push('/practices')
  }, []);

  return (
    <div className="App">
      <Header>
        <Menu mode={"horizontal"} theme={"dark"} selectedKeys={loc}>
          <Menu.Item key={'practices'} onClick={() => movePage('practices')} icon={<FormOutlined />}>practices</Menu.Item>
          <Menu.Item key={'about'} onClick={() => movePage('about')} icon={<QuestionCircleOutlined />}>About</Menu.Item>
          <Menu.Item key={'contact'} onClick={() => movePage('contact')} icon={<ApiOutlined />}>contact</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Breadcrumb style={{padding:"5px 10px", textAlign:'left'}}>
          <Breadcrumb.Item>main</Breadcrumb.Item>
          {
            loc.map((l,k) => {
              return <Breadcrumb.Item key={k}>{l}</Breadcrumb.Item>
            })
          }
        </Breadcrumb>
        <Switch>
          <Route exact path={"/about"} component={About} />
          <Route exact path={"/practices"} component={LinearEq} />
          <Route exact path={"/contact"} component={Contact} />
        </Switch>
      </Content>
      <Footer>
        <div>
          <a href={"https://blog.naver.com/hkjw1211"} target={"_blank"}>Copyright 2021. kyus.All rights reserved.</a>
        </div>
        <a href={"mailto:hkjw1211@naver.com"}>hkjw1211@naver.com</a>
      </Footer>
    </div>
  );
}

export default withRouter(App);
