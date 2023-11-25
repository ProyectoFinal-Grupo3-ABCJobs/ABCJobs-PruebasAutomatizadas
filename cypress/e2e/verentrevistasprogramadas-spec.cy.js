require('cypress-xpath');
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://loadbalancerproyectoabc-735612126.us-east-2.elb.amazonaws.com:4200')
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-login/div/div[1]/form/div[1]/div[1]/div/input').should('be.visible').type("candidato");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-login/div/div[1]/form/div[2]/div/div/input').should('be.visible').type("candidato");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-login/div/div[1]/form/div[3]/button[1]').click();
    cy.wait(1000)

    cy.xpath('//*[@id="navbarNavDropdown"]/ul/li[1]').click();
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-ver-entrevistas-programadas/div/div[1]/h3').should('exist');
    cy.xpath('/html/body/app-root/div/app-ver-entrevistas-programadas/div/div[1]/h3').invoke('text').then((text) => {
      // Verificar que el texto contiene el título de la página esperado
      const tituloPaginaEntrevistasProgramadas = 'entrevistas programadas';
      expect(text.toLowerCase()).to.include(tituloPaginaEntrevistasProgramadas.toLowerCase());
    });
    cy.wait(1000)

    cy.xpath('//*[@id="navbarNavDropdown"]/ul/li[4]').click();
    cy.wait(1000)



  })
})