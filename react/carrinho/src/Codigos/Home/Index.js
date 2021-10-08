import { CarrouselConfig } from './config';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Container } from './styled'
import Product from '../product'
import { useState } from 'react'

export default function Home() {
    const [products, setProducts] = useState([]);

    function list() {
        const r = [
            {
                id: 50001,
                imagem: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
                titulo: "PC Gamer",
                preco: "R$ 12.584,00",
                descricao: "This product is really cool and you should buy it because your life will be happy!!!",
                especificacoes: "This product is of great quality, you will never regret it in your life!!"
            },
                {
                id: 50002,
                imagem: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-fnr-pp0131.jpg",
                titulo: "Poltrona Gamer",
                preco: "R$ 1.350,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            },
            {
                id: 50003,
                imagem: "https://images-americanas.b2w.io/produtos/1846627018/imagens/teclado-gamer-de-uma-mao-hxsj-j50-com-led-mouse-gamer-iluminado-com-fio/1846627018_1_large.jpg",
                titulo: "Teclado Gamer",
                preco: "R$ 680,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
            },
            {
                id: 50004,
                imagem: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
                titulo: "PC Gamer",
                preco: "R$ 12.584,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            },
            {
                id: 50005,
                imagem: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-fnr-pp0131.jpg",
                titulo: "Poltrona Gamer",
                preco: "R$ 1.350,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            },
            {
                id: 50006,
                imagem: "https://images-americanas.b2w.io/produtos/1846627018/imagens/teclado-gamer-de-uma-mao-hxsj-j50-com-led-mouse-gamer-iluminado-com-fio/1846627018_1_large.jpg",
                titulo: "Teclado Gamer",
                preco: "R$ 680,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
            },
            {
                id: 50007,
                imagem: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
                titulo: "PC Gamer",
                preco: "R$ 12.584,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            },
            {
                id: 50008,
                imagem: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-fnr-pp0131.jpg",
                titulo: "Poltrona Gamer",
                preco: "R$ 1.350,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            },
            {
                id: 50009,
                imagem: "https://images-americanas.b2w.io/produtos/1846627018/imagens/teclado-gamer-de-uma-mao-hxsj-j50-com-led-mouse-gamer-iluminado-com-fio/1846627018_1_large.jpg",
                titulo: "Teclado Gamer",
                preco: "R$ 680,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
            }
            ]
        }
        setProducts(r);

    return (
        
        <Container>
    
          <h1> Sejam bem-vindos! </h1> <br /> 
          <button onClick={list}> Listar </button> <br />
          <div className="list-products">

            <Carousel 
              responsive={CarouselConfig}
              infinite={true}
              showDots={true}
              containerClass="carousel-container"
              >
              
              {products.map(item => 
                  <Product
                   key={item.id}
                   cart={item} />
              )}
    
            </Carousel>
          </div>
    
        </Container>
      )
    
    }