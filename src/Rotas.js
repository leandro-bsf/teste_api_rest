import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Post from './Post/Post';
import DetalhesPost from './Detalhes_Post/DetalhesPost';

const Rotas = () => {
  return (
    <Router>
      <Route path="/" exact component={Post} />
      <Route path="/detalhes_post/:postId" component={DetalhesPost} />
    </Router>
  );
};

export default Rotas;
