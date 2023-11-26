require('cypress-xpath');
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://loadbalancerproyectoabc-735612126.us-east-2.elb.amazonaws.com:4200')
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-login/div/div[1]/form/div[3]/button[2]').click();
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-candidato/div/div/h2').should('exist');
    cy.xpath('/html/body/app-root/div/app-registro-candidato/div/div/h2').invoke('text').then((text) => {
      // Verificar que el texto contiene el título esperado
      const tituloRegistroUsuario = 'Registro';
      expect(text.toLowerCase()).to.include(tituloRegistroUsuario.toLowerCase());
    });
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-candidato/div/div/form/div[1]/div[1]/div/input').should('be.visible').type("soluciones@correo.com");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-candidato/div/div/form/div[2]/div[1]/div/input').should('be.visible').type("prueba");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-candidato/div/div/form/div[3]/div[1]/div/input').should('be.visible').type("prueba");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-candidato/div/div/form/div[4]/button[2]').click();
    cy.wait(200)

    cy.xpath('//*[@id="toast-container"]/div').should('exist');
    cy.xpath('//*[@id="toast-container"]/div').invoke('text').then((text) => {
      // Verificar que el texto contiene el mensaje esperado
      const mensajeRespuesta = 'Se ha registrado exitosamente';
      expect(text.toLowerCase()).to.include(mensajeRespuesta.toLowerCase());
    });
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-empresa/div/div/h2').should('exist');
    cy.xpath('/html/body/app-root/div/app-registro-empresa/div/div/h2').invoke('text').then((text) => {
      // Verificar que el texto contiene el título esperado
      const tituloRegistroEmpresa = 'Formulario de registro de información de empresa';
      expect(text.toLowerCase()).to.include(tituloRegistroEmpresa.toLowerCase());
    });
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-empresa/div/div/form/div[1]/div[1]/div/input').should('be.visible').type("8765432");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-empresa/div/div/form/div[2]/div[1]/div/input').should('be.visible').type("Soluciones Tecno10");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-empresa/div/div/form/div[3]/div[1]/div/input').should('be.visible').type("calle 21 # 6");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-empresa/div/div/form/div[4]/div[1]/div/input').should('be.visible').type("678568345");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-empresa/div/div/form/div[5]/div[1]/div/select').select('Colombia').should('have.value', '1');
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-empresa/div/div/form/div[6]/div[1]/div/select').select('Antioquia').should('have.value', '1');
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-empresa/div/div/form/div[7]/div[1]/div/select').select('Medellín').should('have.value', '1');
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-empresa/div/div/form/div[8]/button[1]').click();
    cy.wait(200)

    cy.xpath('//*[@id="toast-container"]/div').should('exist');
    cy.xpath('//*[@id="toast-container"]/div').invoke('text').then((text) => {
      // Verificar que el texto contiene el mensaje esperado
      const mensajeRespuesta = 'Se ha registrado exitosamente';
      expect(text.toLowerCase()).to.include(mensajeRespuesta.toLowerCase());
    });
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-menu-empresa/div/img').should('exist');

      

  })
})