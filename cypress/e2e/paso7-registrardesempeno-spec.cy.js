require('cypress-xpath');
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://loadbalancerproyectoabc-735612126.us-east-2.elb.amazonaws.com:4200')
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-login/div/div[1]/form/div[1]/div[1]/div/input').should('be.visible').type("empresa");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-login/div/div[1]/form/div[2]/div/div/input').should('be.visible').type("empresa");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-login/div/div[1]/form/div[3]/button[1]').click();
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-banner/div/div/h1').should('exist');
    cy.xpath('/html/body/app-root/div/app-banner/div/div/h1').invoke('text').then((text) => {
      // Verificar que el texto contiene el nombre de la empresa esperado
      const nombreDeLaEmpresaLogueada = 'empresa';
      expect(text.toLowerCase()).to.include(nombreDeLaEmpresaLogueada.toLowerCase());
    });
    cy.wait(1000)

    cy.xpath('//*[@id="navbarNavDropdown"]/ul/li[8]').click();
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-desempeno-candidato/div/div/h2').should('exist');
    cy.xpath('/html/body/app-root/div/app-registro-desempeno-candidato/div/div/h2').invoke('text').then((text) => {
      // Verificar que el texto contiene el título esperado
      const titulo = 'Desempeño candidato';
      expect(text.toLowerCase()).to.include(titulo.toLowerCase());
    });
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-desempeno-candidato/div/div/form/div[1]/div[1]/div/div/ul/li[1]').click();
    cy.wait(500)

    cy.xpath('/html/body/app-root/div/app-registro-desempeno-candidato/div/div/form/div[1]/div[2]/div[1]/div[1]/div/input').should('be.visible').type("Buena");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-desempeno-candidato/div/div/form/div[1]/div[2]/div[2]/div[1]/div/input').should('be.visible').type("trabajo en equipo");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-desempeno-candidato/div/div/form/div[1]/div[2]/div[3]/div[1]/div/input').should('be.visible').type("atención al detalle");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-desempeno-candidato/div/div/form/div[2]/button[1]').click();
    cy.wait(200)

    cy.xpath('//*[@id="toast-container"]/div').should('exist');
    cy.xpath('//*[@id="toast-container"]/div').invoke('text').then((text) => {
      // Verificar que el texto contiene el mensaje esperado
      const mensajeRespuesta = 'Se ha registrado exitosamente';
      expect(text.toLowerCase()).to.include(mensajeRespuesta.toLowerCase());
    });
    cy.wait(1000)

    cy.xpath('//*[@id="navbarNavDropdown"]/ul/li[9]').click();
    cy.wait(1000)

      
  })
})