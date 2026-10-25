# 3D Print Order Form

An order form for my 3D printing side business. Customers fill out what they want printed, and the form turns their answers into a clean summary they can copy and send to me.



## Features

- Order details, color and material choices, custom text, and an optional deadline
- Required fields are checked before the form can be submitted
- Builds an order summary that skips any questions left blank
- One-click copy button for the summary
- Works on phones (fields stack on small screens)
- Light and dark mode based on the device's settings

## Built With

- HTML
- CSS (custom properties, CSS Grid, media queries)
- JavaScript (no frameworks or libraries)

## What I Learned

This was my first project built with HTML, CSS, and JavaScript from scratch. Some of the things I learned:

- How HTML elements nest inside each other, and how one missing closing tag can shift everything after it
- Using CSS variables so the whole color scheme, including dark mode, can be changed in one place
- Making a layout respond to screen size with CSS Grid and media queries
- Reading form data with JavaScript and building output from it
- Testing edge cases, like submitting with only the required fields filled in
- Reading error messages in the browser console to track down bugs

## Running It Locally

1. Clone or download this repository
2. Open `index.html` in a browser

No installs or build steps needed.

## Future Improvements

- Send orders straight to my email instead of having customers copy and paste the summary
- Let customers attach sketches or reference images
- Turn the color field into a dropdown of filament colors I have in stock
