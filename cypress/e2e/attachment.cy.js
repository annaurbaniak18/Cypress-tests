describe('Testing Attachment', () => {
	it('Should attach File in the contact form"', () => {
		cy.visit('http://www.automationpractice.pl/index.php?controller=contact');

		cy.get('#fileUpload').attachFile(
			'../fixtures/mobile-phone-g6f9a45c31_1920.jpg'
		);
		cy.get('span.filename').should(
			'contain',
			'mobile-phone-g6f9a45c31_1920.jpg'
		);
	});
});
