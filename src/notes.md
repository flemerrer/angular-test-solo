
//////// NOTES DIVERSES ////////

Interpolation
	<h1>{{title}}</h1> : The double curly braces are Angular's interpolation binding syntax. This interpolation binding presents the component's title property value inside the HTML header tag.

Pipes
	<h2>{{hero.name | uppercase}} Details</h2> : Pipes are a good way to format strings, currency amounts, dates, and other display data. Angular ships with several built-in pipes, and you can create your own.

Two way data binding
	 <input id="name" [(ngModel)]="hero.name" placeholder="name"> : [(ngModel)] is Angular's two-way data binding syntax.

	Here it binds the hero.name property to the HTML text box so that data can flow in both directions. You have to import the directive from angular/common
	
ngFor directive
	<li *ngFor="let hero of heroes"> : The *ngFor is Angular's repeater directive. It repeats the host element for each element in a list.
	
Event binding
	<button type="button" (click)="onSelect(hero)"> : The parentheses around click tell Angular to listen for the <button> element's click event. When the user clicks in the <button>, Angular executes the onSelect(hero) expression.

Class Binding
  <button [class.selected]="hero === selectedHero" type="button" (click)="onSelect(hero)"> : Angular's class binding can add and remove a CSS class conditionally.	Here, when the current row hero is the same as the selectedHero, Angular adds the "selected" CSS class. When the two heroes are different, Angular removes the class.
  
Dependancy Injection
	Needs a provider and the injectable decorator. 
	
Constructor 
	constructor(private heroService: HeroService) {} : Reserve constructors for minimal initialization. They shouldn't do anything like call on APIs and just wire dependancies. You can inject dependancies in the constructor without further declarations. 
	
ngOnInit LifeCycle Hook
	https://angular.io/guide/lifecycle-hooks
	Your application can use lifecycle hook methods to tap into key events in the lifecycle of a component or directive to initialize new instances, initiate change detection when needed, respond to updates during change detection, and clean up before deletion of instances.
	
Observables
	https://angular.io/guide/observables
	Observables are a technique for event handling, asynchronous programming, and handling multiple values emitted over time.
	
	Vient de la librairie https://rxjs-dev.firebaseapp.com/
	
Service in Service

Bound properties must be public 
	The messageService property must be public because you're going to bind to it in the template. Angular only binds to public component properties.

RouterLink
	<a routerLink="/heroes">Heroes</a> : The routerLink is the selector for the RouterLink directive that turns user clicks into router navigations. It's another of the public directives in the RouterModule.
	
Get parameter from url
	const id = Number(this.route.snapshot.paramMap.get('id'));
	
ngClass

Switch

Providers
	export const appConfig: ApplicationConfig = {providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(HttpClientModule), provideHttpClient(withFetch())]}; : ! 
	
	Importer les providers dans le app.config
	
