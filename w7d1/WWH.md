# What was hard?

- Props.children
- Props
- JSX

JSX => JavaScript & XML
XML => eXtensible Markup Language
HTML => XHTML

```jsx
<header className="" style={{fontSize:20}}>
  <h1>Hello!</h1>
</header>

React.createElement("header", ...)

createTweetElement = () => {
  const $section = $("<section>")
}

`<header>`
```

Tastes, Smells, Looks, Not HTML!

JSX like EJS ?

```jsx
function SomeComponent = (props) => {

  return <h1>Something! {props.name}</h1>
}

<SomeComponent name="Bob">
```
