import { Link } from 'react-router-dom'
import { Container } from './styled'

export default function Product(props) {
  return (
    <Container>
      <img className="corpo" src={props.info.imagem} alt="" />
      <div className="title"> {props.cart.title} </div>
      <div className="price"> {props.cart.price} </div>
        
      <Link to={{
        pathname: '/detalhe',
        state: props.cart
      }}>
        <button> Ver Detalhes </button>   
      </Link>
    </Container>
  )
}


