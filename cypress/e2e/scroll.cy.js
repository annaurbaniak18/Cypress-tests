describe('Testing scroll and trigger', () => {
	it('Should scroll down"', () => {
		cy.visit('http://www.automationpractice.pl/index.php?controller=contact');

		cy.get('[title="My orders"]').scrollIntoView().trigger('focus');
		cy.get('[title="My orders"]').click({ delay: 5000 });
	});
	it('Should trigger', () => {
		cy.visit('http://www.automationpractice.pl/index.php');
		cy.get('.facebook-fanbox').trigger('focus');
		cy.get('.facebook-fanbox').click({ delay: 5000 });
	});
});
