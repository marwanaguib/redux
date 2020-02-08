import React from 'react';

import Header from './header';
import Footer from './footer';


export default function Layout(props) {
    const childrens = React.Children.map(props.children, (child) => {
        return React.cloneElement(child,{...child.props})
        });
  return (
      <div className="container-fluid">
        <div className="wrapper">
            <Header></Header>
            <div className="mainContent">{childrens}</div>
            <Footer></Footer>
        </div>
      </div>
  )
}
