# TASK-APP
## BACK-END BANCO NÃO RELACIONAL

Aplicação criada a base de Javascript com o back-end Node.JS usando o mongoDB como o banco de dados principal.

Foi utilizado o **MONGOOSE** como biblioteca principal, **JWT** para autenticação com token e **EXPRESS** para criação das apis.

Nessa aplicação existe dois "Model", um para usuário(USER), e outro para tarefas(TASKS), em que, no fim, ambas estão relacionadas.

No model usuário foi criado uma coluna virtual e externa para puxar todas as tarefas do model tarefas(TASKS) que foram criadas por aquele usuário.
Através do método "populate" é capaz de recorrer esses dados.

Nesse projeto foi aprendido, noções de API. 

GET - para buscar dados.
POST - para registrar dados.
PUT/PATCH - para alterar dados.
DELETE - para deletar dados.

A importância do token com JWT para permitir acessos a certas api's apenas com o token registrado no header/authorization, e também, através do token, ter acesso ao ID do usuário
o facilita as operações dentro da api.

Criado por, Lucas Vitor.
