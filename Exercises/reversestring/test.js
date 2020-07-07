const reverse = require('./index');

test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
    expect(reverse('angela')).toEqual('alegna');
});

test('Reverse reverses a string', () => {
    expect(reverse('jabel')).toEqual('lebaj');
});