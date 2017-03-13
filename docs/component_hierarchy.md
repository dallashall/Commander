# Component Hierarchy
------
### AuthFormContainer
+ AuthForm

### HomeContainer
+ Sidebar
  + Teams (Selector)
  + TeamContainer
+ Header
+ Main

### TeamContainer
+ TeamDetails
+ TeamMembers
+ Projects (Selector)
+ ProjectContainer

### ProjectContainer
+ ProjectDetails

### TasksContainer
+ Tasks

### TaskDetails
+ StatusButtons (toggle)

### NewTeamContainer
+ NewTeam
  + current_user.id

### ProjectFormContainer
+ NewProject/EditProject
  + params.teamId

### TaskFormContainer
+ NewTask/EditTask
+ AssignmentSelector
+ StatusButtons

### SearchContainer (Bonus)

|Route|Component|
|-----|---------|
|`/`|Main|
|`/signup` & `/signin`| Auth|
|`/teams/`|TeamContainer|
|`/teams/new`|TeamFormContainer|
|`/teams/:teamId`|TeamDetails|
|`/teams/:teamId/edit`|TeamFormContainer|
|`/teams/:teamId/projects`|ProjectContainer|
|`/teams/:teamId/projects/new`|ProjectFormContainer|
|`/teams/:teamId/projects/:projectId`|ProjectDetails|
|`/teams/:teamId/projects/:projectId/edit`|ProjectFormContainer|
|`/teams/:teamId/projects/:projectId/tasks`|TasksContainer|
|`/teams/:teamId/projects/:projectId/tasks/new`|TaskFormContainer|
|`/teams/:teamId/projects/:projectId/tasks/:taskId`|TaskDetails|
|`/teams/:teamId/projects/:projectId/tasks/:taskId/edit`|TaskFormContainer|
