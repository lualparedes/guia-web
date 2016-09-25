# guia-web
Website dev for astronomy group GUIA USB
<br><br>

## File structure
TBA
<br><br>

## Style guidelines for code

### Commits
- Always write a message when commiting and make it short but meaningful:
```
  git commit -m 'updated README.md'
```
- Commit when you have added a substantial ammount of code (an entire journey, a section, corrected a bug, etc.)


### SCSS
- All documentation will be written in English, except in cases when Spanish is desirable because of practicity ([example](https://github.com/lualparedes/guia-web/blob/master/README.md#todo-general)).
- The naming convention that will be used is [BEM](https://github.com/lualparedes/guia-web/blob/master/README.md#useful-resources-for-code-styling).
- The coding approach will follow [OOCSS](https://github.com/lualparedes/guia-web/blob/master/README.md#useful-resources-for-code-styling) principles.
- SCSS code should be indented in the following order:
```sass
  .parent {
      // 1. styles directly applied to the element with the parent selector
      // 2. styles applied to events (:hover, :selection, etc.)
      // 3. styles applied to children
  }
```
- Whenever a block is apllied to more than 1 selector, each selector must be written in a separated line to increase readability:
```sass
  .main-class,
  .other-class {
      // styles
  }
```
- If the same block of code is used in several ocassions, consider refactoring defining a single class for that block of code or creating a `@mixin`.
<br><br>

## Useful resources for code styling
- [How to write in a .md file](https://guides.github.com/features/mastering-markdown/)
- [Basics of design systems for the web](https://css-tricks.com/design-systems-building-future/)
- [BEM naming convention](https://en.bem.info/methodology/quick-start/)
- [HTML semantics](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
- [Basics of CSS methodologies](http://learn.shayhowe.com/advanced-html-css/performance-organization/)
<br><br>

## ToDo (general)
- [ ] Exportar todos los diagramas de pantallas (a.k.a. wireframes de las páginas).*
- [ ] Exportar patrones de diseño en imágenes.*
- [ ] Escribir la documentación inicial con las normas de estilo, convención de nombres y organización de archivos.*
- [ ] Desarrollo de patrones de diseño (en código).
- [ ] Implementación de front-end.
- [ ] Implementación de back-end (Jekyll).
- [ ] Despliegue en servidor en vivo.
<br><br>

## Doubts?
Just reach out.
