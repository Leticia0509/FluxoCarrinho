import Cookies from 'js-cookie'
import { UseStatem } from 'react';
import { Container, RemoverIcon } from 'styled'

export default function CarrinhoItem(props) {
    const [produto, setProduto] = useState(props.info);
}

return (
    <Container>
         <div><img className="Corpo" src={produto.image} alt="" /> </div>
         <div className="title">{produto.title} </div>
         <div className="price"><span>Preço Unitário</span> <br/> {produto.price} </div>
         <div className="amount"><span>Qtd</span> <br/> {produto.amount} </div>
         <div className="remove"><RemoverIcon onClick={Remover} /> </div>

    </Container>
)