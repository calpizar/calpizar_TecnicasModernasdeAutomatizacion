<reference types="Cypress" />

//Exercise 1 Type and Send Keys
context('Typeandsendkeys', () => {
    it('should type and sendkeys', () => {
      cy.get('.action-email').type('fake@email.com').should('have.value','fake@email.com')
      .type('{ctrl}{control}').type('A').should('have.value',' ')
      cy.get('.action-disabled').type('Text typed inside disabled textarea',{force: true}).
      should('have.value','Text typed inside disabled textarea')
    });
});
//Exercise 2.1 Focus
context('Focus', () => {
    it('should set cursor to focus on field', () => {
      cy.get('.action-focus').focus()
      .should('have.class','focus')
      .prev().should('have style', 'color:orange;')
    });
});

//Exercise 2.2 Blur
context('Blur', () => {
    it('should focus on field input and blur', () => {
      cy.get('.action-blur').type('Blurry').blur
      .should('have.class','error')
      .prev().should('have style', 'color:red;')
    });
});

//Exercise 3 Submit a Form
context('Submit a Form', () => {
    it('should submit a form', () => {
      cy.get('.action-form').find('[type="text"]')
      cy.get('.action-form').submit()
      .next().should('contain', 'Your form has been submitted!')
    });
});

 //Exercise 4.1 Popover and canvas
context('click toggle and interact with canvas', () => {
    it('should click toggle and interact with canvas', () => {
      cy.get('.action-btn').click().should('have.class','Popover')
      cy.get('#action-canvas')
      .click(80,75)
      .click(170,75)
      .click(80,165)
      .click(100,165)
      .click(125,190)
      .click(150,185)
      .click(170,165)
    });
});

//Exercise 4.2 Multiple clicks and force
context('click multiple elements and force click', () => {
    it('should click multiple elements and force click', () => {
      cy.get('.action-labels>.label').click()
      cy.get('#action-canvas').click({multiple: true})
      cy.get('.action-opacity>.btn').click({force: true})
    });
});

//Exercise 5 Double click element
context('Double click element', () => {
    it('should double click element', () => {
      cy.get('.action-div').dblclick().should('not.be.visible')
      cy.get('.action-input-hidden').should('be.visible')
    });
});
    
//Exercise 6 Right click element
context('Right click element', () => {
    it('should right click element', () => {
      cy.get('.action-div').rightclick().should('not.be.visible')
      cy.get('.action-input-hidden').should('be.visible')
    });
});

//Exercise 7.1 Checkbox
context('Check checkboxes', () => {
    it('should check enabled and disabled checkboxes', () => {
      cy.get('.action-checkboxes[type="checkbox"]').not('[disabled]')
      .check().should('be.checked')
      cy.get('.action-checkboxes[disabled]')
      .check({force: true}).should('be.checked')
      cy.get('.action-checkboxes[type="checkbox"]').check('checkbox3').should('be.checked')
    });
});

//Exercise 7.2 Radio Button
context('Check radio buttons', () => {
    it('should check enabled and disabled radio buttons', () => {
      cy.get('.action-radios[type="radio"]').check('radio1').should('be.checked')
      cy.get('.action-radios[type="radio"]').check('radio2').should('be.checked')
      cy.get('.action-radio[disabled]')
      .check({force: true}).should('be.checked')
    });
});

//Exercise 8 Uncheck
context('Uncheck checkboxes', () => {
    it('should uncheck enabled checkboxes', () => {
      cy.get('.action-check[type="checkbox"]').not('[disabled]')
      .uncheck().should('not.be.checked')
      cy.get('.action-check[disabled]')
      .uncheck({force: true}).should('not.be.checked')
    });
});

//Exercise 10.1 Horizontal Scroll
context('Use horizontal scroll panel', () => {
    it('should horizontal-scroll', () => {
      cy.get('#scroll-horizontal button').should('not.be.visisble')
      cy.get('#scroll-horizontal button').scrollIntoView().should('be.visisble')
    });
});

//Exercise 10.2 Vertical Scroll
context('Use vertical scroll panel', () => {
    it('should vertical-scroll', () => {
      cy.get('#scroll-vertical button').should('not.be.visisble')
      cy.get('#scroll-vertical button').scrollIntoView().should('be.visisble')
    });
});

//Exercise 10.3 Both Scroll
context('Use both scroll panel', () => {
    it('should both-scroll', () => {
      cy.get('#scroll-both button').should('not.be.visisble')
      cy.get('#scroll-both button').scrollIntoView().should('be.visisble')
    });
});

//Exercise 11 Range Input
context('Use drag and drop rangel', () => {
    it('should drag and drop range', () => {
      cy.get('.trigger-input-range').invoke('val', 23).trigger('change')
      .get('input[type=range]').siblings('p').should('have.text','23')
    });
});
