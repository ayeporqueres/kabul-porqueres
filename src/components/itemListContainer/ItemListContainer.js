import ItemCount from '../itemCount/ItemCount';
import ItemList from  '../itemList/ItemList';


const ItemListContainer = () => {

     const onAdd = (valor) => {
        alert ( "Usted ha seleccionado " + valor + " productos")
     }

    return(
        

        <>
        <div>
            <h1 style={{color:"green"}}> ¡Bienvenido a Kabul! </h1>
        </div>

        <ItemCount stock={5} inicial={1}  onAdd= {onAdd} />
        <ItemList />
        </>
    );
        
}

export default ItemListContainer;