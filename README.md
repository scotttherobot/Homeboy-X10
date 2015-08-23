### Homeboy-X10

This is a REST-ish bridge for controlling X10 devices using Mochad and a CM19
USB RF thingy. Requires Mochad installed and running.

Configure known X10 devices using the `devices.json` file and fire up `app.js`.
It'll launch a basic web interface on port 8080 which you can use to control
your devices. It'll also provide a REST-ish API that you can use in conjunction
with anything that can consume such an api. You could use it (as I do) with
my Android-based remote program, [Homeboy-Android](https://github.com/scotttherobot/Homeboy-Android).
