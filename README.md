# dynamic_ux_form
This project is run to explore a new method of automated UI/UX design. 

`data.js` includes an array of question objects. 

output will be like this
```
{
    setup: ['', '', ''], // based on the general setup
    duration: int, // time in second
    feedback: int, // between 1 to 100
}

```

general setup is a cobination of these options: 
```
[
    ["select", "radio"],
    ["onebyone", "list"], 
    ["background", "no-background"],
]
```