import CardBS from 'react-bootstrap/Card';

const Card = (props) => {
    return(
        <CardBS style={{ width: '18rem' }}>
            <CardBS.Img variant="top" src={props.src}/>
            <CardBS.Body>
                <CardBS.Title>{props.titulo}</CardBS.Title>
                <CardBS.Text>
                    {props.descripcion}                    
                </CardBS.Text>
            </CardBS.Body>
        </CardBS>
    )
}

export default Card;