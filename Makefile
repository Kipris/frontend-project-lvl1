install:
	npm install	

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

link:
	npm link

lint:
	npx eslint .
