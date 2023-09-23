describe('Open page', () => {
	it('Open shop site', () => {
		cy.visit('https://skleptest.pl/');
	});
	it('Go to shop category', () => {
		cy.get('a[title="Most Wanted"]').click();
	});
});
