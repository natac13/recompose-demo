### Important
- No longer is this library curried by default. 
  + However all the HOC can still be `compose`d together 


### Why 
- No need for ES6 class syntax
- Prevent abuse of the `setState()` API. 
- Only uses props therefore the components are pure
- Encourages the practice of 'smart' vs 'dumb' components.
- Components are more reusable and less coupled
- Discourage giant components. 
- Encourage the practice of building large things out of small understandable pieces.