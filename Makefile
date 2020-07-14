install:
	npm install

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js

link:
	sudo npm link

lint:
	npx eslint .
