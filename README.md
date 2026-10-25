# Dimporium Order Form

An order form for Dimporium, my small 3D printing side project. Customers fill out what they want printed, attach a sketch or photo if they have one, and send the order to me straight from their phone's share menu.

**Live site:** https://louisdimaano.github.io/order-form/

## Features

- Order details, color and material choices, custom text, and an optional deadline
- Required fields are checked before the form can be submitted
- Customers can attach sketches or photos from their camera or gallery
- Builds an order summary that skips any questions left blank and trims extra spaces
- Send button opens the phone's share menu with the summary and photos already attached
- Copy button as a backup for devices that can't share
- Works on phones (fields stack on small screens)
- Light and dark mode based on the device's settings

## Privacy

Nothing a customer enters is saved or uploaded by the page. Everything runs in the browser on their device, and their order and photos only leave their phone when they tap Send and choose how to send it.

## Built With

- HTML
- CSS (custom properties, CSS Grid, media queries)
- JavaScript (no frameworks or libraries)
- Web Share API and Clipboard API
- Hosted on GitHub Pages

## What I Learned

This was my first project built with HTML, CSS, and JavaScript from scratch. Some of the things I learned:

- How HTML elements nest inside each other, and how one missing closing tag can shift everything after it
- Using CSS variables so the whole color scheme, including dark mode, can be changed in one place
- Making a layout respond to screen size with CSS Grid and media queries
- Reading form data with JavaScript and building output from it
- Testing edge cases, like submitting with only the required fields filled in
- Reading error messages in the browser console to track down bugs
- How adding a new feature can break old code (adding photo uploads broke the step that trimmed spaces from answers)
- Checking that a browser supports a feature before using it, and giving a backup option when it doesn't
- Testing on real devices: Outlook on Windows needed a different kind of line break, and Gmail on Android removed line breaks completely
- Using Git to save my progress, pulling changes before pushing, and fixing a merge conflict

## Running It Locally

1. Clone or download this repository
2. Open `index.html` in a browser

No installs or build steps needed. For the Send button, run it with a local server (I used the Live Server extension in VS Code) or use the live site, since browsers only allow sharing on secure pages.

## Future Improvements

- Send orders straight to my email when the customer taps Submit, without them having to pick an app or type my address
- Turn the color field into a dropdown of filament colors I have in stock
- Keep the summary easy to read in email apps that remove line breaks
