---
title: "Angular e NestJS: Utilizam a mesma arquitetura? Vamos explorar as principais semelhanças e diferenças entre eles."
excerpt: "o NestJS é uma estrutura Node.js para criação de aplicações do lado do servidor utilizando TypeScript. Ele oferece uma arquitetura escalável e testável inspirada no Angular. Isso significa que o NestJS e o Angular possuem várias semelhanças e vamos explora-las."
date: "2023-06-10T02:17:00.322Z"
author:
  name: Lucas S. Almeida
  picture: "/assets/blog/authors/lucas.png"
---

# Semelhanças entre os framworks NestJS e Angular

Com essa combinação, é possível construir aplicações completas, tanto no back-end quanto no front-end, utilizando a mesma arquitetura, linguagem e testes.

## Nomeclatura dos arquivos

A nomenclatura dos arquivos segue o mesmo padrão: `nome.função.extensão`. No NestJS, um controller seria `cat.controller.ts`, enquanto no Angular, um componente seria `cat.component.ts`. Alguns arquivos até compartilham o mesmo nome, como módulos e serviços. Por exemplo: `app.module.ts` e `cat.service.ts`.

## main.js

O arquivo de inicialização de ambos possue o mesmo nome, diretório e função. O arquivo `src/main.js` realiza o bootstrap e inicia o AppModule.

NestJS

```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

Angular

```typescript
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
```

## Modulorização

No arquivo `src/main.js`, o `AppModule` é passado como parâmetro para o bootstrap. Tanto no NestJS quanto no Angular o AppModule representa o módulo principal da aplicação.

```typescript
@Module({
  imports: [BrowserModule, FormsModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
```

NestJS - O módulo é exportado como uma classe decorada com @Module() que recebe um objeto de configuração."

```typescript
@NgModule({
  declarations: [CatsComponent],
  imports: [FormsModule],
  providers: [CatsService],
  bootstrap: [AppComponent],
})
export class CatsModule {}
```

Angular - A única diferença é o nome do decorador `@NgModule()`.

import, export, providers são idênticos.

## Serviços

Ao criar um serviço tanto no aplicativo no NestJS quanto no Angular é utilizado o decorator @Injectable().

NestJS / Angular

```typescript
@Injectable()
class HeroService {}
```

- Injeção de dependencia também é idêntica. Tudo é classe e as dependência são passadas via constructor,

```typescript
@Component({ … })
class HeroListComponent {
  constructor(private service: HeroService) {}
}
```

## CLI

Ambos possuem CLI que geram códigos prontos já com módulos configurados. exemplo:

```bash
ng generate component product-details
```

gerar um componente no angular

```bash
nest generate service product
```

gerar um service no NestJS

```bash
nest generate resource product
```

Gerar uma pasta com um módulo contendo um CRUD básico: controller, service e teste

Essas são algumas das semelhanças entre Angular e NestJS.
