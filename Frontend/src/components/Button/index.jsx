import { Link } from 'react-router-dom'
import './styles.scss'

export function Button(props) {
    return(
        <div className="container-button">
            <Link className="button" to={props.link}>{props.text}</Link>
        </div>
    );
}