import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciaSesionComponent } from './inicia-sesion.component';

describe('IniciaSesionComponent', () => {
    let component: IniciaSesionComponent;
    let fixture: ComponentFixture<IniciaSesionComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IniciaSesionComponent]
        });
        fixture = TestBed.createComponent(IniciaSesionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
