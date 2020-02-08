import React from 'react';

import Header from './header';
import Footer from './footer';


export default function Layout(props) {
    const childrens = React.Children.map(props.children, (child) => {
        return React.cloneElement(child,{...child.props})
        });
  return (
      <div className="wrapper">
        <Header></Header>
        {childrens}
        <Footer></Footer>
      </div>
  )
}
