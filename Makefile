.PHONY: build up stop

build:
	docker build --platform linux/amd64 -t logic-fox-vite .

up: build
	docker run --rm -it \
		--platform linux/amd64 \
		--name logic-fox-vite \
		-p 5173:5173 \
		-v "$(CURDIR):/app" \
		-v /app/node_modules \
		logic-fox-vite

stop:
	docker stop logic-fox-vite

.PHONY: front-build

vite-build:
	docker run --rm \
		--platform linux/amd64 \
		-v "$(CURDIR):/app" \
		-v /app/node_modules \
		logic-fox-vite npm run build