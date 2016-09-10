# angularjs-toggler
An angularjs module for toggling objects .

Simple wrapper for toggling objects in web applications as easy as this: 

##Usage

Just add angularjs-toggler.min.js to your project and inject it to your module and you're good to go!

The object you want to show/hide: 
``` <div toggleable="identifier"></div> ```
Triggering the toggle:
```  <button toggler="identifier">click me to toggle!</buton> ```

also you can interact with your toggleable object via ToggleService with functions like: 
`toggle(identifier)` ,  ` open(identifier) ` and ` close(identifier) `

##Contribute

Clone the repository and run `npm install` .
Write your code and just run `gulp` to make dist file.


