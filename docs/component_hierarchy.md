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

### TaskDetail
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
