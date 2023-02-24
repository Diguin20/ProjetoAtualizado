# Projeto Controle Financeiro
    Projeto criado por Jessica da Silva, e Rodrigo Alves.

    O projeto consiste no controle financeiro do usuario, nele é possivel acrescentar valores de receita ou retirar para despesas. Além de mostrar todo o historico das transações feitas pelo cliente.

    aplicação totalmente responsiva

# banco de dados
    Necessario criar um banco de dados chamado "financial" no mysql.


# Dependencias necessarias para a visualização do projeto:

    bcryptjs -> Necessaria para criptografar senhas e afins.

    connect-flash -> Utilizado para mandar mensagens ao usuario.

    cookie-parser -> Cookies são arquivos/dados simples e pequenos que são enviados ao cliente.

    cookie-session -> Armazena dados da sessão do cliente dentro de um cookie.

    express -> Usado para a criação de servidores web.

    express-flash -> Usados para mensagem flash do formulario.

    express-handlebars -> Para modelagem geral.

    express-session -> Para criar uma sessao middleware

    mysql2 -> Mysql Para Node.js

    nodemon -> Para atualização automaticado no node.js

    sequelize -> Para realização e coorelação entre o Mysql.

    session-file-store -> Armazenar dados de um usuario a um arquivo.


# Organização das pastas

# Controllers
    TransactionController.js --> responsavel por toda a criação da tabela de transações, e onde é feito o calculo das despesa e receitas de cada úsuario, assim como o historico de transações.

    UserController.js --> responsavel por toda a criação dos usuarios desde cadastro a verificação do login.

# db
    conn.js --> conexão com o banco de dados existente no mysql.

# helpers
    auth.js --> permite a entrada do usuario em rotas restritas.

# models
    Transaction.js --> criação da tabela transações.

    User.js --> criação da tabela usuarios.

# public
    estilização das paginas handlebars com conceitos de responsividade e dinamicas.

# routes
    authRouters.js --> rotas que variam da pagina de Login e Cadastro, rotas não restritas.

    dashRouters.js --> rotas internas que precisam de login para serem acessadas, rotas restritas.

# views
    paginas handlebars utilizadas no projeto.

    # authentication
        pasta onde se encontram o HTML das paginas de login e registro

    # dashboard
       pasta onde se encontram os HTML das paginas para acerscentar receitas, fazer as despesas, e verificar o historico. 

    # layouts
        pasta onde se encontra o HTML do arquivo main.
        


# Paleta de cores em HEXCDECIMAL:
    #400101
    #CF4526
    #612940
    #DB7396
    #D9C1D0
    #DBC5BD
    #EFE6EC