# Animal Farm

## React Set up

npm init vite animalfarm
cd animalfarm
npm install
npm run dev

## Node.JS Setup

cd server
npm init -y
npm install express cors chance

### Run

node .

## Tail wind -

https://tailwindcss.com/docs/guides/vite

`npm install -D tailwindcss postcss autoprefixer`
`npm install @heroicons/react`

`npx tailwindcss init`
`npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch`

### Guide

https://v1.tailwindcss.com/components/forms

### Resources

https://fonts.google.com/
https://colorhunt.co/

## Glide Date Grid

`npm i @glideapps/glide-data-grid`
`npm i lodash marked react-responsive-carousel`

## Testing

### set up

`npm install -D vitest`
`npm i -D jsdom @testing-library/react`
`npm i @testing-library/user-event`
`npm i -D msw ` - this is for mocking requests
`npm i -D resize-observer-polyfill` - for window.ResizeObserver
`npm install whatwg-fetch --save` - polly fill for fetch

run: `npm run test`

### Guides

- https://www.eternaldev.com/blog/testing-a-react-application-with-vitest/
- https://vitest.dev/guide/mocking.html
