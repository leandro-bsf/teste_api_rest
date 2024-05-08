import React, { useState, useEffect } from 'react';
import './Post.css';
import { Link } from 'react-router-dom'; 

const Post = () => {
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    fetch('https://apex.oracle.com/pls/apex/blog_fotografia/post/')
      .then(response => response.json())
      .then(data => {
        setPosts(data.items);
      })
      .catch(error => console.error('Erro ao buscar dados da API:', error));
  }, []);
  
  return (
    <div className="card-container">
      {posts.map(post => (
        <div key={post.id} className="card">
          {/* Renderizando a imagem diretamente usando base64 */}
          <img src={`data:image/jpeg;base64,${post.foto_capa}`} alt="Foto Capa" />
          <div className="card-info">
            <h2>{post.descricao}</h2>
            <p>Local: {post.loca}</p>
            <p>Cliente: {post.cliente}</p>
            <Link to={{
        pathname: `/detalhes_post/${post.id}`,
        state: { post }
      }}><button>Ver Mais</button></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
