import Cookie from 'js-cookie'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from './styled'

export default function DetailProduct(props) {
  const [product, setProduct] = useState(props.location.state);  
  const navigation = useHistory();
  
  function purchase() {
    let cart = Cookie.get('cart');
    cart = cart !== undefined 
                ? JSON.parse(cart) 
                : [];

    if (cart.some(item => item.id === product.id) === false)
        cart.push({...product, amount: 1 });
 
    Cookie.set('cart', JSON.stringify(cart));
    navigation.push('/Carrt');
  }

  

  return (
    <Container>

        <div>
            <Link to="/"> Voltar </Link>
            <h1> Detalhes do Produto </h1> <br /> <br />
            <div> <img src={product.imagem} alt="" /> </div>
            <div> <h1> {product.titulo} </h1> </div>
            <div> <h3> {product.preco} </h3> </div>
        </div>
        <div>
          <h2> Descrição </h2>
            <div> {product.descricao} </div>
            <h2> Especificações </h2>
            <div> {product.especificacoes} </div>
            <div> <button onClick={comprar}> Comprar </button> </div>
        </div>

    </Container>
  )



  
}