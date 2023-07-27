# Palestra Puc Minas

## Ferramentas que iremos precisar
| Ferramenta/Framework | Descrição |
| -------------------- | ----------|
| [Nodejs](https://nodejs.org/en)                   | Framework para construção de aplicações web.
| [MySQL](https://www.mysql.com/)                   | Banco de dados relacional.
| [Mysql Workbench](https://www.mysql.com/products/workbench/) | Ferramenta para a visualização e gerenciamento de banco de dados. (Opcional).
| [Redis](https://redis.io/)                        | Banco de dados In-Memory.                                  
| [AWS Cognito](https://aws.amazon.com/pt/cognito/) | Gerenciamento de identidade e acesso ao cliente na núvem.
| [Postman](https://www.postman.com/)               | Ferramenta para testes de API.
| [Openssl](https://www.openssl.org/) | Ferramenta para criptografia, será utilizado para gerar as chaves privada e pública.

## Packages que iremos utilizar
| Package | Descrição |
| ------- | ----------|
| [Express](https://expressjs.com/)                             | Construido em cima do Nodejs, flexivel e robusto.
| [Prisma](https://www.prisma.io/)                              | ORM para acesso ao banco de dados.
| [Amazon Cognito Identity SDK](https://www.npmjs.com/package/amazon-cognito-identity-js) | Software Development Kit para acessar as funções diretamente no cognito.
| [AWS SDK](https://www.npmjs.com/package/aws-sdk)              | Software Development Kit para acessar as funções da AWS.
| [Dayjs](https://www.npmjs.com/package/dayjs)                  | Package para simplificar funções de tempo em javascript.
| [Dotenv](https://www.npmjs.com/package/dotenv)                | Arquivo de variáveis de ambiente. Simplifica o armazenamento dessas variáveis para não ficarem no sistema.
| [Joi](https://www.npmjs.com/package/joi)                      | Validação de objetos/payloads.
| [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)    | Package simples para manipulação de JWT's.
| [Nodemon](https://www.npmjs.com/package/nodemon)              | Package para facilitar o desenvolvimento e reiniciar o servidor quando houver alguma mudança nos arquivos. *Em versões mais novas do node essa funcionalidade já bem embutida. Somente para manter compatibilidade com versões mais antigas*
| [Node-Redis](https://www.npmjs.com/package/redis)             | Client para acessar o redis.

---

## O que é preciso instalar?
Se você não tem as ferramentas acima instalada, precisará instalar todas ou as que você não tem. <br>
- *Vale a pena enfatizar que o Cognito é um serviço da Amazon, por isso não precisa de ser instalado.*<br>
*Mas é necessário uma conta na [AWS](https://aws.amazon.com/free) e um cartão de crédito valido. O cartão somente será creditado se houver alguma despesa na aws, no estilo "self-service".*<br>
*A maioria dos serviços contêm um período (de tempo e uso) que não é cobrado.*
- *Os downloads do linux estão para o Ubuntu 22.04. Tecnicamente não existe nenhum diferença entre as versões do ubuntu ou qualquer outro distro do linux. Muitos desses downloads são feitos via apt-get, se existe essa ferramente no seu linux é bem provável que você consiga seguir os tutoriais sem problema algum.<br>
Mas sempre vale a pena dar uma olhada, para a sua distribuição do linux especifica e versão.*
- *Em relação ao Windows, todas as ferramentas podem ser instaladas via .exe.*<br>
*Alguns processos requerem alguns conhecimentos diversos, como por exemplo inserir variáveis de ambiente.*


> ### Nodejs
> [Download Nodejs - Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04)<br>
> Recomendo esse tutorial utilizando a opção 3, nessa opção você estará instalando o NVM que é justamente a ferramenta para o gerenciamento de versões do node.<br><br>
> [Download Nodejs - Windows - NVM](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)<br>
> Recomento esse tutorial para a instalação do NVM.<br><br>
> [Download Nodejs - Windows](https://nodejs.org/en)<br>
> Caso queira somente instalar o Node, baixe diretamente pelo site deles.<br><br>
> ***Sempre recomendo a utilizando da versão LTS (Long-term support) que significa "Suporte a longo prazo". Sendo assim pode-se garantir que será uma versão estável.***

> ### Mysql
> [Download MySql - Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-22-04)<br>
> Recomendo o tutorial da Digital Ocean. São sempre bem detalhados e fáceis de seguir.<br><br>
> [Download Mysql - Windows](https://www.dataquest.io/blog/install-mysql-windows/)<br>
> O processo no Windows é um pouco mais longo, mas nesse tutorial a instalação inclue o ***MySql Server*** e ***MySql Workbench***.

> ### MySql Workbench
> [Download MySql Workbench - Buntu 22.04](https://linux.how2shout.com/3-ways-to-install-mysql-workbench-on-ubuntu-22-04-lts-linux/)<br>
> Recomendo a instalação via download diretamente pelo site do MySql Workbench, nesse tutorial começa no passo **2. Download MySQL WorkBench**.<br>
> Tive problemas instalando via apt-get, e imagino que esse problema seja global. Caso queira tentar primeiro via apt (que é mais simples) começa no passo ***7. Get MySQL Workbench using APT**.

> ### Redis
> [Download Redis - Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-22-04)<br>
> Novamente, um tutorial da Digital Ocean. Bem simples e fácil de seguir.<br><br>
> [Download Redis - Windows](https://www.memurai.com/get-memurai)<br>
> Infelizmente o Redis não tem uma versão para o Windows, mas existe uma alternativa.<br>
> [Memurai](https://www.memurai.com/) é uma implementação do Redis para Windows.<br> 
> Basta fazer o download da versão do desenvolvedor e instalar.<br><br>
> Para aqueles aqueles mais aventurados pode-se estar instalando o [WSL2](https://pureinfotech.com/install-windows-subsystem-linux-2-windows-10/) e seguir com a instalação do Ubuntu normalmente. *Nota: é importante saber o que está fazendo, pois são processos mais complexos de seguir.*

> ### Postman
> [Download](https://www.postman.com/)<br>
> Tanto para Linux (Ubuntu) ou Windows é a mesma forma. Basta fazer o download para o seu sistema operacional.

> ### Openssl
> [Download Openssl - Ubuntu 22.04](https://itslinuxfoss.com/install-openssl-ubuntu-22-04/)<br>
> A maioria das distribuições do linux, por padrão, já vem instalado *openssl*. Mas caso não esteja esteja instaldo, segue o tutorial.<br>
> *Para saber se o seu linux contém a ferramenta basta escrever o comando no terminal "openssl version".*<br><br>
> [Download Openssl - Windows](https://thesecmaster.com/procedure-to-install-openssl-on-the-windows-platform/)<br>
> Se você estiver no Windows terá que instalar a ferramenta.

## Como iniciar o projeto

> Nota importante: Em alguns fluxos a ser seguido o primeiro passo é ***Abra o terminal e navegue na pasta do projeto***, caso o seu terminal já estava aberto na pasta do projeto não há a necessidade de abrir outro terminal, basta continuar com o mesmo.

Com o seu vscode aberto:<br>
1. Abra o projeto em questão.
2. Na raiz do projeto, onde está a pasta ***app*** crie o arquivo ***.env***. <br>
Note que esse arquivo não tem extensão, e isso está certo.<br>
Esse arquivo é responsável por armazenar as variáveis de ambiente.
1. Abra o arquivo, se já não estiver aberto.
2. Insira todas as variáveis que precisamos para o servidor rodar.<br>
*Nota: não há a necessidade de colocar entre aspas*:
```
BACKEND_PORT=3000
AWS_REGION=Região da AWS que você está trabalhando por padrão é us-east-1
API_VERSION=2016-04-18
COGNITO_CLIENT_ID=Id do cognito
COGNIT_POOL_ID=Id do cognito
REDIS_IP=127.0.0.1
REDIS_PORT=6379
```
> A veriavel ***BACKEND_PORT=3000*** pode ser alterado para qualquer valor, por padrão utilizamos a porta 3000, mas caso haja algum outro serviço utilizando essa porta pode-se alterar.<br>
> A veriavel ***API_VERSION=2016-04-18*** não será alterada.<br>
> A veriavel ***REDIS_IP=127.0.0.1*** não será alterada.<br>
> A veriavel ***REDIS_PORT=6379*** não será alterada.

Com o seu vscode aberto:<br>
1. Abra o projeto em questão.
2. Na raiz do projeto, onde está a pasta ***app*** abra a pasta ***prisma***.
3. Na pasta *prisma* contém duas coisas, ***migrations***: que são todos os arquivos *.sql* que irão construir e atualizar o nosso banco e o arquivo ***schema.prisma***, abra-o.
4. Com o arquivo *schema.prisma* aberto, vamos editar a variável ***url*** que é a url necessária para o prisma acessar o nosso banco.<br>
Onde está ***root:Password123*** é o ***usuário:senha*** que você cadastrou quando configurou o *MySql server*. Basta atualizar com o seu usuário e senha.

Com o openssl instalado e funcionando:<br>
1. Abra o terminal e navegue na pasta do projeto.
2. Dentro do projeto vai ter algumas coisas, mas estamos interessados na pasta ***app***, navegue para dentro dela.
3. Dentro de *app* vai ter uma pasta chamada ***keys***, navegue para dentro dela.
4. Escreva o comando ***openssl genrsa -out privateKey.pem 4096***.<br>
Esse comando gerá uma chave privada com o tamanho de 4096 bytes.
1. Escreva o comando ***openssl rsa -in privateKey.pem -pubout -out publicKey.pub***<br>
Esse comando gerá uma chave pública da chave privada que acabos de criar.

Após tudo estar instalado, configurado e todos os passos acima darem certo:
1. Abra o terminal e navegue na pasta do projeto.
2. Dentro do projeto vai ter algumas coisas, mas estamos interessados na pasta ***app***, navegue para dentro dela.
3. Escreva o comando ***npm install*** ou ***npm i***. Note que o comando so irá funcionar se você estiver dentro da pasta *app* e o arquivo ***package.json*** estiver presente. O *npm* irá instalar todos os packages que estão listados no *package.json* sem precisar instala-lo manualmente um por um.
4. Caso tudo dê certo e todos os packes foram instalado, pode-se iniciar o server, para isso basta escrever o comando ***npm start*** e aparecerá uma mensagem do servidor inicializando.

Com todos os packages instalado com sucesso, MySql instalado e o arquivo ***schema.prisma*** com o seu usuário e senha, vamos inicializar o nosso banco de dados:
1. Abra o terminal e navegue na pasta do projeto.
2. Dentro do projeto vai ter algumas coisas, mas estamos interessados na pasta ***app***, navegue para dentro dela.
3. Escreva o comando ***npx prisma migrate dev***.<br>
Dessa forma o prisma irá construir o banco de dados com as informações que estão no *schema.prisma*.

Com todos os passo seguidos e sucesso:
1. Abra o terminal e navegue na pasta do projeto.
2. Dentro do projeto vai ter algumas coisas, mas estamos interessados na pasta ***app***, navegue para dentro dela.
3. Escreva o comando ***npm start**.<br>
Esse comando é responsável por iniciar o servidor e carregar a nossa aplicação.