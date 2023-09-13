# W5D5 - Express Breakout

Questions?

- Login / Auth ?

Identification vs Auth

```jsx
  app.get("/login/:userId" , (req, res) => {
    req.session.userId = req.params.userId

    res.redirect("/")
  })


  app.get("/dashboard", (req, res) => {
    const userId = req.session.userId

    fetchUserById(userId).then(...)
  })
```

- Styling implementation

Work in the /styles, style will appear /public/styles when you access the page
