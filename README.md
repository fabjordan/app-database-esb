# app-database-esb


> Este projeto utiliza o json-server para simular um endpoint de consulta a banco de dados. Para executar o json-server:
```bash
npx json-server --watch db.json --port 3333
```


#1 - Execute o app.js para fazer o envio da solicitação ao ESB:
```bash
node app.js
```

#2 - Execute o worker.js para fazer a leitura da mensagem e enviar a URL de consulta dos dados.
```bash
node worker.js
```

#3 - Execute o getResponse.js para ler a mensagem de resposta enviada pelo worker:
```bash
node getResponse.js
```

