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

    cy.xpath('/html/body/app-root/div/app-registro-candidato/div/div/form/div[1]/div[1]/div/input').should('be.visible').type("juan2@correo.com");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-candidato/div/div/form/div[2]/div[1]/div/input').should('be.visible').type("prueba");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-candidato/div/div/form/div[3]/div[1]/div/input').should('be.visible').type("prueba");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-candidato/div/div/form/div[4]/button[1]').click();
    cy.wait(200)

    cy.xpath('//*[@id="toast-container"]/div').should('exist');
    cy.xpath('//*[@id="toast-container"]/div').invoke('text').then((text) => {
      // Verificar que el texto contiene el mensaje esperado
      const mensajeRespuesta = 'Se ha registrado exitosamente';
      expect(text.toLowerCase()).to.include(mensajeRespuesta.toLowerCase());
    });
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/h2').should('exist');
    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/h2').invoke('text').then((text) => {
      // Verificar que el texto contiene el título esperado
      const tituloRegistroCandidato = 'Formulario de registro de información del candidato';
      expect(text.toLowerCase()).to.include(tituloRegistroCandidato.toLowerCase());
    });
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[1]/div[1]/div[1]/div[1]/div/input').should('be.visible').type("Juan Pérez");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[1]/div[1]/div[2]/div[1]/div/select').select('Cédula de Ciudadanía').should('have.value', 'CC');
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[1]/div[1]/div[3]/div[1]/div/input').should('be.visible').type("1234567");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[1]/div[1]/div[4]/div[1]/div/input').should('be.visible').type("calle 25 # 6");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[1]/div[1]/div[5]/div[1]/div/input').should('be.visible').type("67856856");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[1]/div[1]/div[6]/div[1]/div/select').select('Colombia').should('have.value', '1');
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[1]/div[1]/div[7]/div[1]/div/select').select('Antioquia').should('have.value', '1');
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[1]/div[1]/div[8]/div[1]/div/select').select('Medellín').should('have.value', '1');
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[1]/div[1]/div[9]/div[1]/div/input').should('be.visible').type("ingeniero de sistemas");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[1]/div[1]/div[10]/div[1]/div/input').should('be.visible').type("4");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[1]/div[2]/div[1]/div[1]/div/input').should('be.visible').type("posgrado");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[1]/div[2]/div[2]/div[1]/div/input').should('be.visible').type("Universidad Nacional");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[1]/div[2]/div[3]/div[1]/div/input').should('be.visible').type("2018");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[1]/div[2]/div[4]/div[1]/div/select').select('Antioquia').should('have.value', '1');
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[1]/div[2]/div[5]/div[1]/div/select').select('Medellín').should('have.value', '1');
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[3]/button[1]').click();
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[2]/div/p[1]').should('exist');
    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[2]/div/p[1]').invoke('text').then((text) => {
      // Verificar que el texto contiene el título esperado
      const tituloParte2 = 'Información laboral';
      expect(text.toLowerCase()).to.include(tituloParte2.toLowerCase());
    });
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[2]/div/div[1]/div[1]/div/input').should('be.visible').type("desarrollador front");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[2]/div/div[2]/div[1]/div/input').should('be.visible').type("soluciones tecno10");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[2]/div/div[3]/div[1]/div/input').should('be.visible').type("2020");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[2]/div/div[4]/div/div/input').should('be.visible').type("2022");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[2]/div/div[5]/div/div/input').should('be.visible').type("Angular");
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[2]/div/div[5]/div/div/a').click();
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[2]/div/div[6]/ul/li').should('exist');
    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[2]/div/div[6]/ul/li').invoke('text').then((text) => {
      // Verificar que el texto contiene el título esperado
      const palabraClave = 'Angular';
      expect(text.toLowerCase()).to.include(palabraClave.toLowerCase());
    });
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-registro-info-candidato/div/div/form/div[3]/button[2]').click();
    cy.wait(200)

    cy.xpath('//*[@id="toast-container"]/div').should('exist');
    cy.xpath('//*[@id="toast-container"]/div').invoke('text').then((text) => {
      // Verificar que el texto contiene el mensaje esperado
      const mensajeRespuesta = 'Se ha registrado exitosamente';
      expect(text.toLowerCase()).to.include(mensajeRespuesta.toLowerCase());
    });
    cy.wait(1000)

    cy.xpath('/html/body/app-root/div/app-login/div/div[1]/h2').should('exist');
    cy.xpath('/html/body/app-root/div/app-login/div/div[1]/h2').invoke('text').then((text) => {
      // Verificar que el texto contiene el título esperado
      const inicio = 'Inicio de sesión';
      expect(text.toLowerCase()).to.include(inicio.toLowerCase());
    });
    cy.wait(1000)
      

  })
})