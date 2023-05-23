import './Footer.css'

function Footer () {
        return (
        <footer className="footer">
           <section>
           <ul>
                <li>
                    <a href="https://facebook.com" rel="noreferrer" target="_blank">
                        <img src="/img/fb.png" alt="Logo Facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" rel="noreferrer" target="_blank">
                        <img src="/img/tw.png" alt="Logo Twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" rel="noreferrer" target="_blank">
                        <img src="/img/ig.png" alt="Logo Instagram" />
                    </a>
                </li>
            </ul>
           </section>
           <section>
           <img src="/img/logo.png" alt="Logo Organo" />
           </section>
           <section>
            <p>
                Desenvolvido por Caique.
            </p>
           </section>
        </footer>
        )
}

export default Footer