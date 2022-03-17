import {useState} from 'react';
import ItemCount from '../components/ItemCount';
import { Link } from 'react-router-dom'

const ItemDetail = ({ product }) => {

    const [count, setCount] = useState(null);

    const onAdd = (cant) => {
        alert(`Se han agregado ${cant}  paquetes turisticos al carrito`);
        setCount(cant);
    }

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>Detalle del Paquete</h2>
            <br />
            { count ?
                <Link to="/Cart">
                    <button className='btn btn-primary'>Ir al Cart</button>
                </Link>
                :
                <ItemCount initial={1} stock={10} onAdd={onAdd} />
            }
            <br />
            <br />
            Nombre del Paquete: {product.name}
            <br />
            Detalle: {product.description}
            <br />
            Precio: $ {product.price.toLocaleString('es-es')}
            <br />
            <div className="card-body">
                <img src={require(`../assets/img/${product.image}`)} alt='' className='w-50' />
            </div>
            <br />
        </>
    )
}

export default ItemDetail