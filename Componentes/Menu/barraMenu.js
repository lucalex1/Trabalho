export class menuComponent extends HTMLElement {    

    constructor() {

    super();

    this.shadow = this.attachShadow({ mode: "open" });
  
    this.build();
  
    }
  
    build() {
      this.shadow.innerHTML = `
            ${this.styling()}              

            <header class="header fixed-top" >
                <a href="/" class="logo">Eleição 2023 - Sinpro Minas</a>     
                <nav class="nav">
                    <button class="btn-menu" aria-label="Abrir Menu" aria-haspopup="true" aria-controls="menu" aria-expanded="false" hidden>
                        Menu<span class="botaoMenu"></span>
                    </button>
                    <input type="checkbox" id="checkbox" class="checkbox" />
                    <label for="checkbox" class="label-menu"
                        >Menu<span class="botaoMenu"></span>
                    </label>
                    <ul class="menu" id="menu" role="menu">          
                        <li><a class="botoesmenu" id="btinicio"> <img alt="" src="Imagens/icone-home.png">  
                            Início</a></li>
                        <li><a class="botoesmenu" href="../fonte/modulos/Chapas/chapas.html"> <img alt="" src="Imagens/icone-chapas.png">              
                            Chapas</a></li>
                        <li><a class="botoesmenu" href="../fonte/modulos/Documentos/documentos.html"> <img alt="" src="Imagens/icone-documentos.png">                         
                            Documentação</a></li>
                        <li><a class="botoesmenu" href="../fonte/modulos/Duvidas/duvidas.html"> <img alt="" src="Imagens/icone-duvidas.png">                                     
                            Dúvidas</a></li>
                        <li><a class="botoesmenu" href="../fonte/modulos/RecuperaSenha/recuperasenha.html"> <img alt="" src="../fonte/Imagens/icone-senhas.png">
                            Recupera Senha</a></li>                                                                                        
                        <li><a class="botoesmenu" href="../fonte/modulos/RecuperaSenha/recuperasenha.html"> <img alt="" src="../fonte/Imagens/icone-adm.png">
                            Administração</a></li>
                    </ul>
                </nav>
            </header>  
          `;   
    }  
  
    styling() {
      return `
          <style>
            :root {
                font-size: 16px;
                --royal-blue-light: #404eed;
                --royal-blue-dark: #990000; 
                --white: #fff;
                --backgroud: #e2e3e9;
            }

            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            }
          
            body {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
                Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
                background: var(--backgroud);
                height: 100vh;
            }
            
            a {
                color: var(--white);
                text-decoration: none;
            } 
            
            
            .header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: #0080C9;    
                height: 4.6875rem;
                padding: 1rem;
            }

            .logo {            
                font-size: 18px;
                font-weight: lighter;
            }
              
            .menu {
                list-style: none;
                display: flex;
                gap: 0.5rem;
            }
            
            .menu a {
                display: block;
                padding: 1.7rem;
            }
            
            .menu a:hover {
                background: var(--royal-blue-dark);
            }
            
            .label-menu,
            .checkbox {
                display: none;
            }
            
            @media (max-width: 600px) {
                .menu {
                    display: block;
                    position: absolute;
                    top: 4.6875rem;
                    left: 0;
                    background: var(--royal-blue-light);
                    text-align: center;
                    width: 100%;
                    height: 0;
                    z-index: 1;
                    visibility: hidden;
                    overflow-y: hidden;
                    transition: 0.5s;
                }
                .menu a {
                    padding: 1rem 0;
                    margin-inline: 1rem;
                    border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.16);
                    border-radius: 0;
                }
                .label-menu {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--white);
                    padding: 1rem 0;
                    cursor: pointer;
                }
                .botaoMenu {
                    border-top: 0.125rem solid;
                    width: 1.25rem;
                }
                .botaoMenu::after,
                .botaoMenu::before {
                    content: " ";
                    display: block;
                    width: 1.25rem;
                    height: 0.125rem;
                    background: currentColor;
                    margin-top: 0.3125rem;
                    position: relative;
                    transition: 0.3s;
                }
                .checkbox:checked ~ .menu {
                    height: calc(100vh - 4.6875rem);
                    visibility: visible;
                    overflow-y: auto;
                }
                .checkbox:checked ~ .label-menu .botaoMenu {
                    border-top-color: transparent;
                }
                .checkbox:checked ~ .label-menu .botaoMenu::before {
                    transform: rotate(135deg);
                }
                .checkbox:checked ~ .label-menu .botaoMenu::after {
                    transform: rotate(-135deg);
                    top: -0.4375rem;
                }
            }                 
          </style>
          `;
    }
  }
  
  
  customElements.define("wc-menu", menuComponent);
  