# API Endpoints

## HTML API
| Label | Method | URL | Result |
| ----- | ------ | --- | ------ |
| Root  | 'GET'  | '/' | Loads React App|

## JSON API
| Controller | Method   | URL            | Notes |
| ---------- | -------- | -------------- | ----- |
| Users      | 'POST'   | '/api/users/'  | New User|
| Users      | 'PATCH'  | '/api/users/'  | Update User|
| - | - | - | - |
| Session    | 'POST'   | '/api/session' | Login |
| Session    | 'DELETE' | '/api/session' | Logout |
| - | - | - | - |
| Projects   | 'GET'    | '/api/projects' | Index (search by name)|
| Projects    | 'POST' | '/api/projects' | New Project|
| Projects    | 'PATCH' | '/api/projects/:id' | Update Project|
| Projects    | 'GET' | '/api/projects/:id' | Show Project|
| Projects    | 'DELETE' | '/api/projects/:id' | Delete Project|
| - | - | - | - |
| Teams   | 'GET'    | '/api/teams' | Show all teams |
| Teams    | 'POST' | '/api/teams' | New Team|
| Teams    | 'PATCH' | '/api/teams/:id' | Update Team|
| Teams    | 'GET' | '/api/teams/:id' | Show Team|
| Teams    | 'DELETE' | '/api/teams/:id' | Delete Team|
| - | - | - | - |
| Tasks   | 'GET'    | '/api/tasks' | Show all tasks |
| Tasks    | 'POST' | '/api/tasks' | New Task|
| Tasks    | 'PATCH' | '/api/tasks/:id' | Update Task|
| Tasks    | 'GET' | '/api/tasks/:id' | Show Task|
| Tasks    | 'DELETE' | '/api/tasks/:id' | Delete Task|
