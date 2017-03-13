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
|`/projects`|ProjectContainer|
|`/projects/new`|ProjectFormContainer|
|`/projects/:projectId`|ProjectDetails|
|`/projects/:projectId/edit`|ProjectFormContainer|
|`/tasks`|TasksContainer|
|`/tasks/new`|TaskFormContainer|
|`/tasks/:taskId`|TaskDetails|
|`/tasks/:taskId/edit`|TaskFormContainer|
