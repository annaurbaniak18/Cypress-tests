describe('Testing scroll and trigger', () => {
	it('Logowanie użytkownika', () => {
		cy.login('annaurbaniak12@gmail.com', '3yYbpj8F2');
		// Możesz dodać asercje, aby sprawdzić, czy użytkownik jest zalogowany poprawnie
	});

	it('Inny test, który wymaga logowania', () => {
		cy.login('annaurbaniak12@gmail.com', '3yYbpj8F2');
		cy.get('[title="Addresses"]').click();
		// Wykonuj test, który wymaga, aby użytkownik był zalogowany
	});
});
