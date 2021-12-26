import emailjs from 'emailjs-com';

import './styles.scss';


export function ContactForm() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_USER_LOGIN, process.env.REACT_APP_EMAIL_TEMPLATE, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                alert('Mensagem enviada! Obrigado pelo contato!')
            }, (error) => {
                alert(error.text)
            });
        e.target.reset();
    }

    return (
        <div className="container-form">
            <div className="form-title">Deixe seu contato no formulário abaixo</div>
            
            <form onSubmit={sendEmail}>
                <div className="formular-container">
               
                    <div className="input-container">
                        <div>Nome:</div>
                        <input type="text" name="name" placeholder="Digite seu nome"></input>
                    </div>

                    <div className="input-container">
                        <div>E-mail:</div>
                        <input type="email" name="email" placeholder="Digite seu e-mail"></input>
                    </div>

                    <div className="input-container">
                        <div>Celular:</div>
                        <input type="tel" name="phone" placeholder="(DDD) 9999-9999"></input>
                    </div>

                    <div className="input-container">
                        <div>Assunto:</div>
                        <input type="text" name="subject" placeholder=""></input>
                    </div>

                    <div className="input-container">
                        <div>Mensagem:</div>
                        <textarea name="message"></textarea>
                    </div>

                    <div className="button-container">
                        <button className="form-button"type="submit">Enviar</button>
                    </div>
                </div>
            </form>
    
            
        </div>
    );
}