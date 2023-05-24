import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Header, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { menuItems } from './constant/menuItems';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link>} scroll>
            <Navigation>
              {
                menuItems.map(el =>
                  <Link to={el.link}>{el.name}</Link>
                )
              }
            </Navigation>
          </Header>
          <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">Home</Link>}>
            <Navigation>
              {
                menuItems.map(el =>
                  <Link to={el.link}>{el.name}</Link>
                )
              }
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
