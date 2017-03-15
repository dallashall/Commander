Commander
=========
[Live App](https://taskcommander.herokuapp.com)

[Trello](https://trello.com/b/EW2cAlfv/commander)

Minimum Viable Product
----------------------
Commander is a project management app inspired by Asana, with a Rails backend and React/Redux frontend.
- [ ] Hosting on Heroku
- [ ] Signup/Login/Logout and Demo account
- [ ] Projects
- [ ] Tasks
- [ ] Teams
- [ ] User Profiles
- [ ] Production README

Design Docs
-----------
* [Wireframes](./wireframes.md)
* [React Components](./component_hierarchy.md)
* [API Endpoints](./api_endpoints.md)
* [DB Schema](./schema.md)
* [Sample State](./sample_state.md)

Implementation Timeline
-----------------------
### **Phase 1:** Backend setup, Front End User Authentication (2 days)
**Objective:**
+ Functioning Rails project with front-end Authentication
+ Styling complete for login components

### **Phase 2:** Projects (2 days)
**Objective:**
+ CRUD operations for Projects through API
+ Changes reflected in components

### **Phase 3:** Task Model, API, and components (2 days)
**Objective:**
+ CRUD operations for Tasks through API
+ Tasks belong to Projects
+ Changes reflected in components

### **Phase 4:** Teams Model, API, and components (2 days)
**Objective:**
+ CRUD operations for Teams through API
+ Teams have many projects
+ Changes reflected in components

### **Phase 5:** User Profiles (1 days)
**Objective:**
+ Profiles show User's teams, projects, and tasks
+ Users have a default team called 'My Team'
+ Styling completed

### **Bonus:**
**Task Assignments**
+ User can assign a task to one or more team_members

**Calendar**
+ User can assign a due-date to a task.
+ Tasks appear on calendar.

**Comments**
+ User can comment on tasks.
