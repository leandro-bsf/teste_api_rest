    import React, { useState, useEffect } from 'react';
    import { useParams , useLocation } from 'react-router-dom';

    import './DetalhesPost.css';

    const DetalhesPost = () => {
    const { postId } = useParams();
    const [images, setImages] = useState([]);
    const location = useLocation();
  const { post } = location.state;

    console.log('Informações do post:', post.descricao);
    useEffect(() => {
        fetch(`https://apex.oracle.com/pls/apex/blog_fotografia/image_post/?post_id=${postId}`)
        .then(response => response.json())
        .then(data => {
            setImages(data.items);
        })
        .catch(error => console.error('Erro ao buscar imagens da API:', error));
    }, [postId]);
    
    return (
        <div>
        <h1>Fotos do Post {postId}</h1>
        <div className="image-container">
            {images.map(image => (
            <img key={image.image_id} src={`data:image/jpeg;base64,${image.image_data}`} alt={`Imagem ${image.image_id}`} />
            ))}
        </div>
        </div>
    );
    };

    export default DetalhesPost;
