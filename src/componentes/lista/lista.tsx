import './lista.css';

type ListaProps = {
    label: string;
    item: string[];
    obrigatorio: boolean;
    aoAlterado: (valor: string) => void;
    valor: string;
};

const Lista = ({label, item, obrigatorio, aoAlterado, valor}: ListaProps) => {
    
    return(
        <div className='lista'>
            <label>{label}</label>
            <select value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio}>
                <option value=""></option>
                {item.map(item =>{return <option key={item}>{item}</option>})}
            </select>
        </div>
    )
}

export default Lista;