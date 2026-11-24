import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the header, home page, conference list, and footer in order', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(Array.from(compiled.children).map((element) => element.tagName.toLowerCase())).toEqual([
      'app-header',
      'app-navbar',
      'app-accueil',
      'app-home',
      'app-list-conf',
      'app-footer',
    ]);
  });
});
