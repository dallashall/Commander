```
{
  currentUser: {
    id: 1,
    username: "user-name"
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
      name: 'A-Team',
      description: 'A fantastic group of ...people, mostly',
      user_id: 1
    }
  },
  teamMembers: {
    1: {
      id: 1,
      name: 'Fun Guy',
    },
    2: {
      id: 2,
      name: 'Drew'
    }
  }
  projects: {
    1: {
      name: 'Send Rocks Into Space',
      description: 'Creating the first series of micro-moons as a new-age real-estate venture',
      team_id: 1
    }
  },
  tasks: {
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
```
