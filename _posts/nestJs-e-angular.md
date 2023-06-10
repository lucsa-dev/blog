---
title: "Angular e NestJs atilizam a mesma arquitetura, vamos ver as principais semelhanças e diferenças entre eles ?"
excerpt: "NestJs é uma estrutura node.js para criação de aplicações do lado do servidor utilizando typescript, ele provê uma arquitetura escalável e testável baseada em Angular. O que em outras palavras significa que NestJS e Angular são incrivelmente semelhantes."
date: "2023-06-10T02:17:00.322Z"
author:
  name: Lucas S. Almeida
  picture: "/assets/blog/authors/lucas.png"
---

## Semelhanças entre os framworks NestJS e Angular

NestJs é uma estrutura node.js para criação de aplicações do lado do servidor utilizando typescript, ele provê uma arquitetura escalável e testável baseada em Angular. O que em outras palavras significa que NestJS e Angular são incrivelmente semelhantes.

como o Angular é um framwork front-end, com esse combo é possível construir aplicações completas utilizando a mesma arquitetura, linguagem e testes tanto no back-end como no front-end 😍

Se você conhece angular e ainda não conhece o NestJs, ou vice-versa, da uma olhada nessas semelhanças.

- A nomenclatura dos arquivos seguem o mesmo padrão `nome . função . extensão`
  no NestJS um controller seria `cat.controller.ts` no Angular um componente seria `cat.component.ts`. alguns arquivos até carregam o mesmo nome como módulos e serviços por exemplo: `app.module.ts` `cat.service.ts`
- O arquivo de inicialização do NestJs e do angular possuem o mesmo nome, diretório e função. O `src/main.js` cria o bootstrap e inicia o AppModule.

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

- O AppModule passado para o bootstrap no arquivo `src/main.js` é o módulo principal da aplicação, perceba como são semelhantes.

```typescript
@Module({
  imports: [BrowserModule, FormsModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
```

NestJS - Exporta uma classe com o nome do Módulo com um decorador `@Module()`que recebe o objeto de configuração.

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

- Para criar um service o decorator tem o mesmo nome `@Injectable()`

NestJS / Angular

```typescript
@Injectable()
class HeroService {}
```

- Injeção de dependencia também é idêntico. Tudo é classe e as dependência sãp passadas via constructor,

```typescript
@Component({ … })
class HeroListComponent {
  constructor(private service: HeroService) {}
}
```

- Ambos possuem CLI que geram códigos prontos já com módulos configurados. exemplo:

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
