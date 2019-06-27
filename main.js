// Create instances of your classes
// Create the loadData and renderData functions - these should use the relevant instance
const data=new APIManager
data.loadData()
const render=new Renderer
render.render(data.data)
console.log(data.data)