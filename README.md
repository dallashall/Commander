[![Build Status](https://travis-ci.org/dallashall/Commander.svg?branch=master)](https://travis-ci.org/dallashall/Commander)

# TaskCommander
---------
A powerful project and task management app for teams. Built with a Rails 5 back-end and a React/Redux front-end.

[TaskCommander](https://taskcommander.herokuapp.com)

## Features
The design follows the principal Flux/React ideology of having a single source of *truth* (i.e. the master-state). Following this pattern gives rise to a few interesting scenarios.

### Change Once, Update Everywhere
There are quite a few times when it's useful to make a change on one a component in one part of an app and have those changes immediately show on a separate component in another part of the app. Consider the following animation:

![Animation of changes being reflected in multiple locations](docs/elevated-state.gif)

How does this work?

Let's focus on the two active components: TaskListItem, and TaskListDetail. Both are *stateless* components. TaskListItem receives a Task JSON object from AllTaskListItems. TaskListDetail receives a Task JSON object from SelectedTask.

In the TasksReducer, we update both the selected task and each individual task in one go. All changes pass down to their individual components, and it looks like simple magic to the user.

### Component Animations

![Components sliding in after link is pressed](docs/animations.gif)

Component animations were introduced to add a deeper level of visual satisfaction.

React is not an animation-friendly front-end framework. Initially, I attempted to use the React CSSTransitionGroup package as a simple way of animating various parts of Task Commander. Unfortunately, more bugs were introduced (both with styling and with logic).

By diving into the CSSTransitionGroup source code, I was able to reconstruct the basic pattern and animate my components without needlessly nesting them in other non-semantic tags (CSSTransitionGroup wraps components in `<span></span>` by default).

### Instant Search
![Animation of searching, adding, and dropping team-members](docs/instant-search.gif)

The there is a slice of state for all of the 'known-members' for the logged-in user. Since all the members of the selected team have already been loaded and preserved as slice of state, the search was implemented on the front-end to avoid needless queries to the backend.

Here, again, we are harnessing the redux cycle and the benefit of an elevated state to allow for changes made in one component to be immediately visible in another component.

### Team Invites via Email
![Typing an email address and clicking the 'invite member' button](docs/email-invite.gif)

(Email address intentionally hidden for this example)

Users have the ability to invite new and existing Task Commander members to join their team. After entering in an email address, the back-end generates a unique, single-use link that will add an existing user to the team or allow a new user to sign up *and* add the new user to the team.


## Roadmap
For a single-user or teams, this app is fully functional. The following will be released in the near future.

### [Upgrade to Rails 5.1, React 16, and React Router 4](https://github.com/dallashall/Commander/tree/update-to-latest-react)

This app was written just as react-router 4 was released and before I knew very much about the benefits of [normalized state with Redux](https://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html#). 
  - Normalize Redux store
    - Re-write/simplify api-utils, actions, and reducers
  - Re-write components to be primarily functional
    - Remove unecessary lifecycle calls with better state shape
  - Remove unecessary DOM elements
    - Utilize fragments for multi-element rendering
  - Simplify front-end routing
    - Custom logic-route components for easier-to-read code
  - Clean and optimize back-end routes
    - Remove unecessary routes
    - Slim down controllers
  - Testing
    - Test front-end logic with unit-tests (Jest/Enzyme)
    - Test content with snapshots (Jest/Enzyme)
    - Test backend logic with unit tests (Rspec)
    - Add integration tests for models (Rspec)
    - Test API endpoints (Postman)

### Task/Project Comments
 - Users will be able to write messages on projects and tasks, viewable by team-members.

### Instant Updates
 - Changes made by a team-member in a different browser will be immediately viewable in the user's window.

### ~~Animations~~ (Completed and Released)

### ~~Team Invites~~ (Completed and Released!)