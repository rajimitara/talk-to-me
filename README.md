A simple Chat application which interacts with end-user in their day to day activities based on their interests.


A simple Chat application which interacts with end-user in their day to day activities based on their interests.

Tech stack : Nodejs, express , react & Java

Write-up on Node-React How-it-works:

index.js ExpressJS is a Framework used to have a server up and running with least code. In index.js file, we import/require the express module and create a "app" out of it. This app is the default handle for running a server. This "app" variable can be made to listen to a port and can be made a running server. Example: http://expressjs.com/en/starter/hello-world.html

The app can have many "Routes".Example code for Routes : app.get('/', (req, res) => res.send('Hello World!')) Pls go to "Server Routes" section for more info on Routes

server.js server.js file is the place where the above index.js is imported and server is created. A Server is created using this line of code : app.listen(port, () => console.log(Example app listening on port ${port}!)) This is just for logistics and organising code in separate files. The same can be done within index.js as well.

src/views: All the React JSX files are organised inside this folder. Layout.JSX is the root Component which is mounted on the DOM.

Missing code : The code needs a Routes.JS file for react-router logic. Example : https://github.com/reactJS-demo/reactJS-routes/blob/master/src/js/client.js#L13 Code Flow section hss details on the need for react-router.

"Code Flow" section has more details on the Flow of Code when a route is invoked.

webpack-config.js Webpack is a module bundler. It bundles/packages the actual code and also the libraries/modules and creates a "bundle.js" file which is sent to the browser whenever the browser asks for it. It also does other things like Code Splitting. Tree shaking etc.

Note: Pls go to "Browser - Server Communication" section if not intrested in understanding more on Webpack's features

App and Vendor JS : Most of any codebase contains more modules and less custom code. So bundle.js consists of modules as its majority content. These modules are never changed and their versions remain same most of the time. For example, lodash module is used for array utilities. but lodash versipn is very rarely upgraded. Custome code written by developers for business logic changes very rapidly. So webpack splits the bundle.js into two files. 1) app.js which has dev business logic code and 2) vendor.js has the module code which never changes. The advantages of this are explained in "Browser Server Communication" section.

Code Splitting : Each "Route" (for example : www.paypal.com/login) has its own CSS and html needs. It is enough if the browser gets only the css and html needed for that ruote and not the full bundle.js which has code for the whole application. Say, someone uses paypal login page but does not keyin the right password. He doesnt even get to the next page . So its a waste of resources to send the full bundle.js to browser. Code Splitting ensures that the basic minimum css and html is sent from server Tree Shaking : Sometimes developers import some modules but dont use it at all. But they forget to remove it from code. Tree shaking removes all unused module from the codebase.

Browser - Server communication : This is how a browser communicates with the Server

When a user hits a URL on a browser (www.paypal.com) the browser asks the server to send it the css and html first and then the actual data to render on the page.
When server gets a request from browser, it prepates a bundle.js file and sends it back to browser
Browser waits for the bundle.js file and downloads the bundle.js once server sends it. Things to note: the Bigger the size of the bundle.js , more time it takes for browser to downlaod the bundle. The user will see a balnk page as long as the bundle is being downloaded by the browser. So it is best to keep the bundle size to minimum for fast loading of your website.
When a page is hit by user, Browser again asks for bundle.js since it doesnt know if something changed in server . So it again downloads bundle from beginning. this takes long time again. To avoid this, if webpack is used. two files called app.js and vendor.js are created and sent by server. the server tells the browser to "cache" the vendor.js since its not gling to change regularly. The browser can then ask for app.js alone which is small in size. This improves site speed.
Also , with code splitting every "ruote" has its own bundle. for example, login has a "login.js" accounts page has a "account.js". When browser asks for bundle for login , only login.js is sent by browser which makes the site even more faster.
Server Routes: Any website will have many routes. For example, in the case of www.paypal.com Index Route : / is the index route. This is the default route with no URL appended after www.paypal.com Login Route : "/login" - This corresponds to www.paypal.com/login

ExpressJS Routes : ExpressJS framework makes it easy to create routes and to write business logic for the specific route. Most of thr internal work is done by Express and developer just needs to worry abt Business logic. Every route can be defined and declared using the below syntax :

Exampels: Index Route : app.get('/', (req, res) => res.send('Hello World!')) Login Route : app.get('/login', (req, res) => res.send('This is login page!'))

When a route is hit on the broswer, the code within the appropriate Express route is triggered and the besiness logic is executed. More details : https://expressjs.com/en/guide/routing.html

Code Flow: When a route is hit on the browser this is the order in which code is invoked, for example, if someone hits the Index route on the browser.

Code is initiated inside the "Express route" for "/" route. inside "/" route , the business logic is executed. Every route has the following signature : app.<HTTP_REQUEST_TYPE>('<ROUTE_PATH>', (req.res) => <BUSINESS_LOGIC> ) it has a "req" object and a "res" object. req contains all the request params like query params and res needs to vbe populated with the response parames needed for rendering the route Once the business logic runs, the res object can be populated with a json which contains all the data needed to render the route. res has gtwo method: "res.json" and "res.render". "res.json" can be used if the route is a REST API and "res.render" can be used if the route is a web page that renders content on browser. once res.render is ready, code is now directed towards react-router file "routes.js" For more info on react-router, Pls read "What is React Router" section below router decices which Component to be rendered and the Component is converted from JSX to Plain JS and packaged into bundle.js

Once bundle,js and response are ready, server sends it to tbr broswer for rendering.

What is React router ? Server needs to know which React Component needs to be Rendered for which Route . For example, server needs to know that "Login Route" has to be rendered on the page using the "Login.JSX" React Component. This mapping between a back-end Express route and a Front End React component is handled by a module called React-router. React-router needs the detailed mapping of all the routes and corresponding Components to be rendered and this is done by developers in the routes.js file. Example : https://github.com/reactJS-demo/reactJS-routes/blob/master/src/js/client.js#L13
