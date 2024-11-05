document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Você clicou no botão Saiba mais!');
        });
    });
});
``` ```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Descarte Consciente</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="container">
            <div class="logo">
                <h1>LOGO</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Informações</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Coleta</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <h2>DESCARTE</h2>
            <h1>Seus equipamentos</h1>
            <h1>de forma conciente</h1>
            <h1>e segura</h1>
            <img src="https://www.ifto.edu.br/images/institucional/logo-ifto.png" alt="Logo IFTO" class="logo-ifto">
            <a href="#" class="btn">Saiba mais</a>
        </div>
    </section>

    <section class="como-funciona">
        <div class="container">
            <h2>Como Funciona o Descarte</h2>
            <div class="steps">
                <div class="step">
                    <div class="number">1º</div>
                    <h3>Passo 01</h3>
                    <p>Para entrar em contato com os responsáveis pela coleta de lixo eletrônico, você pode visitar nosso site e acessar a seção de contato.</p>
                </div>
                <div class="step">
                    <div class="number">2º</div>
                    <h3>Passo 02</h3>
                    <p>Após o contato, agendaremos uma data para a coleta do seu equipamento.</p>
                </div>
                <div class="step">
                    <div class="number">3º</div>
                    <h3>Passo 03</h3>
                    <p>Na data agendada, nossos profissionais irão até você para realizar a coleta.</p>
                </div>
                <div class="step">
                    <div class="number">4º</div>
                    <h3>Passo 04</h3>
                    <p>Após a coleta, você receberá um comprovante de descarte seguro.</p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2023 Descarte Consciente. Todos os direitos reservados.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
