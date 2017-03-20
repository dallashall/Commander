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
|`/`|redirect to `/signup` or `/dashboard`|
|`/signup` & `/signin`| Auth|
|`/dashboard`|Dashboard, TeamContainer, TeamMembersContainer, ProjectsContainer|
|`/dashboard/teams/new`|TeamFormContainer|
|`/dashboard/teams/edit`|TeamFormContainer|
|`/dashboard/teams/edit/team_members`|TeamMemberFormContainer|
|`/dashboard/projects/`|ProjectDetails|
|`/dashboard/projects/new`|ProjectFormContainer|
|`/dashboard/projects/edit`|ProjectFormContainer|
|`/dashboard/tasks`|TasksContainer|
|`/dashboard/tasks/new`|TaskFormContainer|
|`/dashboard/tasks/:taskId`|TaskDetails|
|`/dashboard/tasks/:taskId/edit`|TaskFormContainer|
