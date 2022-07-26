# app-database-esb

Este projeto simula a troca de mensagens pelo ESB via webhooks.
<br />
<br />

# Cache Manager
O arquivo cacheManagerRoute possui 2 endpoints:
<br />
<br />
1 - **/cache-manager/request-cache** que simula o envio de mensagem de solicitação dos dados de cache.
<br />
<br />
2 - **/cache-manager/get-cache** que simula a leitura da mensagem de retorno dos dados de cache.
<br />
<br />

# Webhook App-database
O arquivo **webhooksRoute** possui um endpoint que simula o recebimento da mensagem do ESB via webhook,
retornando um endpoint com os dados disponíveis.
<br />
<br />

# Webhook
Para que os webhooks funcionem corretamente, você pode disponibilizar está aplicação online com o ngrok:
```bash
ngrok http 8000
```
Agora basta pegar o endereço https e cadastrar no recebedor (callbackURL) do ESB. 
<br />
<br />

# Json-server
 Este projeto utiliza o json-server para simular um endpoint de consulta a banco de dados. Para executar o json-server:
```bash
npx json-server --watch db.json --port 3333
```
Agora basta acessar http://localhost:3333 para acessar a página inicial do json-server
