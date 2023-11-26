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

    cy.xpath('//*[@id="navbarNavDropdown"]/ul/li[4]').click();
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-crear-ficha/div[1]/div/h4').should('exist');
    cy.xpath('/html/body/app-root/div/app-crear-ficha/div[1]/div/h4').invoke('text').then((text) => {
      // Verificar que el texto contiene el título esperado
      const creacionficha = 'Crear ficha';
      expect(text.toLowerCase()).to.include(creacionficha.toLowerCase());
    });
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-crear-ficha/div[2]/div[1]/div[2]/ul').contains('Proyecto Ti2').click();
    cy.wait(500)

    cy.xpath('/html/body/app-root/div/app-crear-ficha/div[2]/div[2]/div[2]/ul').contains('Colaborador: María Gutierrez').click();
    cy.wait(500)

    cy.xpath('/html/body/app-root/div/app-crear-ficha/div[2]/div[3]/div[2]/ul').contains('Perfil: Desarrollador Angular').click();
    cy.wait(500)

    cy.xpath('/html/body/app-root/div/app-crear-ficha/div[3]/div/div/button[1]').click();
    cy.wait(200)

    cy.xpath('//*[@id="toast-container"]/div').should('exist');
    cy.xpath('//*[@id="toast-container"]/div').invoke('text').then((text) => {
      // Verificar que el texto contiene el mensaje esperado
      const mensajeRespuesta = 'Se ha registrado exitosamente';
      expect(text.toLowerCase()).to.include(mensajeRespuesta.toLowerCase());
    });
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-crear-ficha/div[3]/div/div/button[2]').click();
    cy.wait(12000)

    cy.xpath('/html/body/app-root/div/app-menu-empresa/div/img').should('exist');
    cy.wait(1000)

    cy.xpath('//*[@id="navbarNavDropdown"]/ul/li[9]').click();
    cy.wait(1000)

      
  })
})