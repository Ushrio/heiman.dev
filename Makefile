.PHONY: build run clean deploy

VERSION ?= latest

build:
	hugo --destination docs

run:
	hugo server

clean:
	rm -rvf docs
	rm -rvf public

deploy:
	git add docs/
	git commit -m "Rebuild"
	git push origin master
