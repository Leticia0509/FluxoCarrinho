import Cookies from 'js-cookie'
import { UseStatem } from 'react';
import { Container, RemoverIcon } from './styled'

export default function Carrt(props) {
    const [product, setProduct] = useState(props.cart);
}

function alterarQtd(amount){
    setProduct({...product, amount});

    props.onUpdate(product.id, amount)
}

function remover() {
    props.onRemove(product.id);
}

return (
    <Container>
        
         <div><img className="corpo" src={produto.image} alt="" /> </div>
         <div className="title">{produto.title} </div>
         <div className="price"><span>Preço Unitário</span> <br/> {produto.price} </div>
         <div className="amount"><span>Qtd</span> <br/> {produto.amount} </div>
         <div className="remover"><RemoverIcon onClick={Remover} /> </div>

    </Container>
)