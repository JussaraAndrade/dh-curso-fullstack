import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  const mockResponse = [{
    id: 1,
    nome: 'Juca',
    sobrenome: 'Andrade',
    idade: 26,
    profissao: "Programador"
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule

      ]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be return response users', () => {
    service.getUsers().subscribe(response => {
      expect(response).toEqual(mockResponse);
    })
  })

  it('should be return user response', () => {
    service.getUser('Juca').subscribe(response => {
      expect(response).toEqual(mockResponse);
    })
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
