# Day 1
---------
+ Styling is easier when I create a mock HTML layout before making components. It also makes constructing the components very quick.
+ Do not use onEnter calls that point to each other's routes unless you like infinite loops.
+ Flexboxes are the future.
+ Now thinking of main interface as a dashboard, which simplifies routing.
+ #componentWillUpdate will still finish loading the component, even if there is a redirect to interupt it. (Yay asynchronicity!)
+ The backend is the rock.
+ Testing piecewise is good, so long as the pieces are in decent-sized chunks.

# Day 2
--------
+ Made a design decision to make API endpoints on team_members. This avoids any kind of nested routes and also allows for member roles in the future, with minimal effort in the now.