describe('Cadastro', ()=>{
    it('Usuário deve se tornar um entregador', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app/') 
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');

      var entregador = {
            nome : 'Brian',
            cpf : '0909090909',
            email: 'brian@gmail.com',
            whatsapp: '098098080',

            endereco: {
                cep: '04534011',
                rua: "Rua Joaquim Floriano",
                numero: '18',
                complemento: "casa",
                bairro: 'Itaim Bibi',
                cidade_uf: 'São Paulo/SP'

            },
            metodo_entrega: 'Moto'


        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)
        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('.field input[type="button"][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)
        
        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)

        cy.contains('.delivery-method li', "moto").click()

    });
})