# Component Hierarchy
------
### AuthFormContainer
+ AuthForm

### Dashboard
+ Sidebar
  + Teams (Selector)
  + TeamContainer
+ Header
+ Main

### TeamContainer
+ TeamDetails
+ TeamMembersContainer

### TeamMemberContainer
+ TeamMembers

### TeamMembersFormContainer
+ TeamMemberForm

### TeamMemberForm
+ state.currentUser.associates (all known members)
+ TeamMembers (based on state.team)

### ProjectContainer
+ ProjectDetails
+ Projects

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
