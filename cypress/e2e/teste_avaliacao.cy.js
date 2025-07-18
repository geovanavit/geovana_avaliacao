describe('Login e Carrinho', () => {

    beforeEach(() => {
        cy.visit('/')

    })

    it('Login bem-sucedido', () => {
        cy.login('standard_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html')
        cy.contains('Products').should('be.visible')
    })

    it('Login com usuário inválido', () => {
        cy.login('usuario_invalido', 'secret_sauce')
        cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
    })

    it('Login com senha vazia', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Password is required')
    })

    it('Adiciona item ao carrinho com sucesso', () => {
        cy.login('standard_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html')
        cy.contains('Products').should('be.visible')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('contain', '1')
        cy.get('.shopping_cart_link').click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
    })
})
