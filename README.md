# NestJS + Clean Architecture + Domain Driven Design 📚
**Sem dúvida, o projeto no qual experimentei a maior curva de aprendizado em toda a minha carreira. 🚀** 
1. Estruturei um projeto empregando o **Domain Driven Design** para alinhar o desenvolvimento com os requisitos dos diversos domínios e subdomínios de um monólito segmentado. 🚗
2. Apliquei os princípios da **Arquitetura Limpa** ao segmentar a aplicação em camadas independentes, permitindo a separação clara das responsabilidades e a manutenção de um código mais organizado e escalável. 🧼
3. Desenvolvi a aplicação usando o framework **[NestJS](https://docs.nestjs.com/)**, que oferece uma estrutura sólida e altamente modular para simplificar o desenvolvimento. 🐺
## Conceitos aplicados 🖋️
* **Clean architeture:**
  * **[Database](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/tree/master/src/infra/database):** De acordo com os princípios da arquitetura limpa, foi desenvolvida uma estrutura que efetivamente separa a camada de banco de dados do restante da aplicação, utilizando interfaces para alcançar esse desacoplamento total.
  * **[Controllers](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/tree/master/src/infra/http/controllers):** São responsáveis por gerenciar a coordenação das interações de entrada e saída de dados da aplicação por meio do protocolo HTTP.
  * **[Presenters](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/tree/master/src/infra/http/presenters):** São responsáveis por receber os dados provenientes das camadas mais internas da aplicação e prepará-los para interação com as camadas externas.
  * **[Gateways](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/blob/master/src/domain/forum/application/use-cases/upload-and-create-attachment.ts#L25):** O conceito de Gateway foi empregado na criação de interfaces que simplificam a comunicação entre a camada de aplicação e as camadas externas do sistema. Exemplo: Serviço de armazenamento de imagens, garantindo que, no caso de uma eventual mudança na plataforma de armazenamento, a camada de aplicação permaneça inalterada, sem sofrer qualquer impacto.
  * **[External Interfaces](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/blob/master/src/infra/storage/tebi-storage.ts):** Segundo a arquitetura limpa, as "external interfaces" são as implementações reais dos Gateways.
  * **[Use cases](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/tree/master/src/domain/forum/application/use-cases):** Casos de uso na arquitetura limpa representam interações entre atores e sistemas, definindo requisitos funcionais e comportamentais de forma clara.
  * **[Entities](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/tree/master/src/domain/forum/enterprise/entities):** Representam os objetos de negócio ou domínio central da aplicação e encapsulam o estado e o comportamento relacionados a esses objetos.
* **Domain Driven Design:**
  * **[Domain](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/tree/master/src/domain):** O domínio (domain) refere-se a um conjunto de conceitos, regras, processos e comportamentos que são fundamentais para um determinado negócio ou aplicação.
  * **[Aggregate](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/blob/master/src/core/entities/aggregate-root.ts):** Um agregado (aggregate) é um conjunto de objetos de domínio que são tratados como uma unidade coesa. Eles são usados para delimitar transações consistentes de mudança de estado dentro do domínio.
  * **[Bounded Context](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/tree/master/src/domain/forum):** Bounded Context (contexto delimitado / subdomínio) é uma técnica para definir limites explícitos em torno de um conjunto de modelos de domínio. Cada Bounded Context é uma fronteira lógica que separa um modelo de domínio específico, com suas próprias regras, termos e limites, de outros modelos de domínio dentro do mesmo sistema.
  * **[Domain Events](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/tree/master/src/domain/forum/enterprise/events):** Um evento de domínio (domain event) é uma notificação assíncrona que indica que algo importante aconteceu no domínio do sistema. Ele representa um fato ocorrido dentro do sistema que pode ser interessante para outras partes do sistema e pode ser usado para tomar decisões ou gerar novas ações.
  * **[Value Objects](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/tree/master/src/domain/forum/enterprise/entities/value-objects):** Um Value Object (objeto de valor) é uma classe que representa um valor que é importante para o domínio, mas que não possui identidade própria. Em outras palavras, um Value Object é um objeto que é definido pelos seus atributos, em vez de ser definido por uma identidade exclusiva.
## Extras 🦾
* **[Cachê](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/blob/master/src/infra/database/prisma/repositories/prisma-questions-repository.ts#L48):** Desenvolvi um modelo exemplar de estratégia de cache em um ponto de acesso da aplicação, utilizando o banco de dados **[Redis](https://redis.io/)**. A utilização de cache em rotas HTTP que são frequentemente acessadas com poucas modificações traz consigo inúmeros benefícios, incluindo a otimização de desempenho, economia de largura de banda, maior capacidade de escalonamento e aperfeiçoamento da experiência do usuário.
* **[Serviço de armazenamento de imagens](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/blob/master/src/infra/storage/tebi-storage.ts):** Optei por utilizar o serviço de armazenamento de arquivos **[Tebi](https://tebi.io/)** para a guarda das imagens que os usuários da aplicação fazem upload, o qual é fundamentado na API do **[Amazon S3](https://aws.amazon.com/pt/s3/)**.
* **[Autenticação JWT com algoritmo RS256](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/blob/master/src/infra/auth/jwt.strategy.ts):** Implementei autenticação **[JWT](https://jwt.io/)** para reforçar a segurança das rotas da aplicação, adquirindo conhecimento e empregando o algoritmo RS256. Esse algoritmo, que se fundamenta em um par de chaves de criptografia, desempenha um papel crucial na proteção de microserviços.
* **[Testes automatizados](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/blob/master/vitest.config.ts):** Por meio da biblioteca **[Vitest](https://vitest.dev/)**, desenvolvi uma suite de testes que abrange tanto testes unitários como testes automatizados de ponta a ponta. Essa suite de testes abrange todos os requisitos funcionais e regras de negócio da aplicação, garantindo sua integridade e desempenho.
* **[Docker](https://www.docker.com/):** Criei um arquivo **[docker-compose.yml](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/blob/master/docker-compose.yml)**, com o propósito de simplificar a implantação local de serviços externos necessários para o funcionamento da aplicação. Isso permite que os serviços sejam provisionados de forma conveniente em um ambiente de desenvolvimento.
* **[Outros conceitos](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/blob/master/package.json):** Ampliei meu conhecimento e integrei uma variedade de outros conceitos, incluindo o tratamento de erros funcionais, a utilização de recursos avançados do TypeScript e a criação de listas observadas (Watched Lists).
* **[Outras ferramentas](https://github.com/brayan-jordan/nestjs-clean-architeture-ddd/blob/master/package.json):** Ampliei meus conhecimentos usando as ferramentas: **[ESLint](https://eslint.org/)**, **[Prisma](https://www.prisma.io/)**, **[BCryptJS](https://www.npmjs.com/package/bcryptjs)**, **[DayJS](https://day.js.org/)**, **[ZOD](https://zod.dev/)**, **[SWC](https://swc.rs/)**, **[Supertest](https://www.npmjs.com/package/supertest)**, **[Vitest](https://vitest.dev/)**, **[NestJS](https://docs.nestjs.com/)** e seus módulos.
## Iniciar aplicação localmente 🏡 
```bash
# Instalar dependências.
$ npm install

# Subir serviços do PostgreSQL e Redis.
$ docker compose up -d

# Criar tabelas no banco de dados local.
$ npx prisma generate
$ npx prisma migrate dev

# O processo envolve a replicação de bases de arquivos de configurações de ambientes.
# É essencial acrescentar apenas as informações relativas à conexão com o banco de dados de imagens, especificamente as chaves "AWS_ACCESS_KEY_ID" e "AWS_SECRET_ACCESS_KEY".
$ copy .env.test.example .env.test
$ copy .env.example .env

# Certificar que tudo está funcionando
$ npm run test
$ npm run test:e2e
```
##### Fim

