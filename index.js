function receivesAFunction(fn) {
	fn();
}

function returnsANamedFunction() {
	return function namedFunction () {}
}

function returnsAnAnonymousFunction() {
	return function () {}
}
