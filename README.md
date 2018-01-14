# Angular Playground

Angular playground and sandbox.

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.
- **Development server**: Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
- **Code scaffolding**: Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
- **Build**: Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
- **Running unit tests**: Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- **Running end-to-end tests**: Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
- **Further help**: To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Lessons learned

## Rx

- observable = encapsulated during creation
- subject = like an observable, but can be changed later on externally (.next)
- behaviorsubject = subject, but with an init value

## Components

Dumb encapsulated component.

- down: `@input`
- up: `@output` (via EventEmitter)
- `ngOnChanges` detects _incoming_ prop changes (but first fire happens before ngOnInit)
- use a setter or setFoo(value) to set the value _and_ fire up the chain (using the emitter)
- implement a change tracker in `ngDoCheck` (but runs on every change detection, so please don't)
- detecting internal prop changes seem to be kinda complicated (technically they should be observables/subjects)
