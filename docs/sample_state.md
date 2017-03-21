```
{
  session: {
    currentUser: {
      username: "Demo User",
      id: 1,
      associates: {
        //..associated users
      }
    }
  },
  forms: {
    signUp: {
      errors: []
    },
    logIn: { // same as signUp
      errors: []
    },
    createProject: {
      errors: []
    },
    createTeam: {
      errors: []
    },
    createTask: {
      errors: []
    }
  },
  teams: {
    1 : {
      id: 1,
      name: 'A-Team',
      description: 'A fantastic group of ...people, mostly',
      owner: {
        username: "Other User",
        id: 2
      }
    }
  },
  teamMembers: {
    1: {
      id: 1,
      name: 'Fun Guy',
      user_id: 1,
      team_id: 1
    },
    2: {
      id: 2,
      name: 'Drew',
      user_id: 1,
      team_id: 1
    }
  },
  team: {
    id: 1,
    name: 'A-Team',
    description: 'A fantastic group of ...people, mostly',
    owner: {
      username: "Other User",
      id: 2
    }
  },
  projects: {
    allProjects: {
      1: {
        name: 'Send Rocks Into Space',
        description: 'Creating the first series of micro-moons as a new-age real-estate venture',
        team_id: 1
      }
    },
    teamProjects: {
      1: {
        name: 'Send Rocks Into Space',
        description: 'Creating the first series of micro-moons as a new-age real-estate venture',
        team_id: 1
      }
    },
    currentProjects: {
      name: 'Send Rocks Into Space',
      description: 'Creating the first series of micro-moons as a new-age real-estate venture',
      team_id: 1
    }
  },
  tasks: {
    projectTasks: {
      1: {
        project_id: 1,
        name: 'Collect Spare Rocks',
        description: 'Collect 7 tonnes of rocks',
        statuses: [1, 3]
      },
      2: {
        project_id: 1,
        name: 'Buy Old Rockets',
        description: 'Call Bruce Willis, too.',
        statuses: [2, 3]
      }
    },
    allTasks: {
      1: {
        project_id: 1,
        name: 'Collect Spare Rocks',
        description: 'Collect 7 tonnes of rocks',
        statuses: [1, 3]
      },
      2: {
        project_id: 1,
        name: 'Buy Old Rockets',
        description: 'Call Bruce Willis, too.',
        statuses: [2, 3]
      }
    }
  }
}
```
