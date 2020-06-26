describe('Testando primeiro acesso a aplicação', () => {
  it('Visitando a aplicação', () => {
    cy.visit('/');
    cy.get('form').find('input').should('have.id', 'search');
  });

  it('Verificando Input e fazendo Busca da cidade', () => {
    cy.visit('/');
    cy.get('[data-cy=input-search]').type('São Paulo');
  });
});
