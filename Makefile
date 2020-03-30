all:
	@(zola check)
	@(zola build --output-dir docs)

publish:
	@(zola check)
	@(zola build --output-dir docs)
	@(git push origin master)

serve:
	@(zola serve --output-dir docs)