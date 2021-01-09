# TASK-APP
## BACK-END BANCO NÃO RELACIONAL

Aplicação criada a base de Javascript com o back-end Node.JS usando o mongoDB como o banco de dados principal.

Foi utilizado o **MONGOOSE** como biblioteca principal, **JWT** para autenticação com token e **EXPRESS** para criação das apis.

Nessa aplicação existe dois "Model", um para usuário(USER), e outro para tarefas(TASKS), em que, no fim, ambas estão relacionadas.

No model usuário foi criado uma coluna virtual e externa para puxar todas as tarefas do model tarefas(TASKS) que foram criadas por aquele usuário.
Através do método "populate" é capaz de recorrer esses dados.

Nesse projeto foi aprendido, noções de API. 

- GET - para buscar dados.
- POST - para registrar dados.
- PUT/PATCH - para alterar dados.
- DELETE - para deletar dados.

A importância do token com JWT para permitir acessos a certas api's apenas com o token registrado no header/authorization, e também, através do token, ter acesso ao ID do usuário
o facilita as operações dentro da api.

Criado por, Lucas Vitor.

## ENGLISH - BACK-END NON-RELATIONAL DATABASE 

Application created on the basis of Javascript with the backend Node.JS using mongoDB as the main database.

** MONGOOSE ** was used as the main library, ** JWT ** for token authentication and ** EXPRESS ** to create apis.

In this application there are two "Models", one for user (USER), and another for tasks (TASKS), in which, in the end, both are related.

In the user model, a virtual and external column was created to pull all tasks from the model tasks (TASKS) that were created by that user.
Through the "populate" method you are able to use this data.

In this project it was learned, notions of API.

- GET - to search for data.
- POST - to record data.
- PUT / PATCH - to change data.
- DELETE - to delete data.

The importance of the token with JWT to allow access to certain api's only with the token registered in the header / authorization, and also, through the token, to have access to the user ID
o facilitates operations within the api.

Created by, Lucas Vitor.
