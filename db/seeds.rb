User.delete_all

Team.delete_all
TeamMember.delete_all
Project.delete_all
Task.delete_all
TaskAssignment.delete_all

User.create([
  {username: "Demo User", password: "12345678", session_token: "IcWruDe_7oDPZPKXFFa2aw"},
  {username: "Bob", password: "password", session_token: "_AthRNbKJcAa8KrJAWWxKg"},
  {username: "Sally", password: "password", session_token: "0jjelvxV1N4MgOrxOZTnrw"},
  {username: "Jane", password: "password", session_token: "L8VbYLSPk_Vt3piL5135Gw"},
  {username: "John", password: "password", session_token: "y7yUUhqVtu0DVC9nLVnGRw"},
  {username: "Jon", password: "password", session_token: "_yoXBPelaIkcbRBk3X7Ycw"},
  {username: "Dylan", password: "password", session_token: "hgT3Qjonky923JSjt5SqWQ"},
  {username: "Dillon", password: "password", session_token: "e2UaWzVTam5L2hTb6xw9AQ"},
  {username: "May", password: "password", session_token: "j6oj6af5NNHblLUgAPH4cw"},
  {username: "Gene", password: "password", session_token: "qhWPfZ-u2V36kwTfUZlp6Q"},
  {username: "Samson", password: "password", session_token: "o_VA82S5EHfUco-B1JzY3w"},
  {username: "Carl", password: "password", session_token: "eMGsp2WubSKeSQzgmESH4w"},
  {username: "Brad", password: "password", session_token: "aQsIoVGe7xWh6MK8CPxlPA"},
  {username: "Drew", password: "password", session_token: "2nL3n9n8Waj0gFYkZmMtSQ"},
  {username: "Kat", password: "password", session_token: "8KZz952UkmyugRsRpECT-g"}
])
Team.create([
  {user_id: 8, name: "Merchandise-Team", description: nil},
  {user_id: 8, name: "PR-Team", description: nil},
  {user_id: 1, name: "A/V", description: nil},
  {user_id: 1, name: "Media", description: nil}
])
TeamMember.create([
  {team_id: 1, user_id: 8},
  {team_id: 2, user_id: 8},
  {team_id: 1, user_id: 1},
  {team_id: 2, user_id: 1},
  {team_id: 3, user_id: 1},
  {team_id: 3, user_id: 8},
  {team_id: 3, user_id: 14},
  {team_id: 3, user_id: 12},
  {team_id: 3, user_id: 5},
  {team_id: 3, user_id: 3},
  {team_id: 4, user_id: 1},
  {team_id: 4, user_id: 4},
  {team_id: 4, user_id: 7},
  {team_id: 4, user_id: 12},
  {team_id: 4, user_id: 15},
  {team_id: 4, user_id: 5},
  {team_id: 5, user_id: 1},
  {team_id: 5, user_id: 3},
  {team_id: 5, user_id: 8},
  {team_id: 5, user_id: 4},
  {team_id: 5, user_id: 13},
  {team_id: 5, user_id: 15},
  {team_id: 6, user_id: 1},
  {team_id: 6, user_id: 11},
  {team_id: 6, user_id: 4},
  {team_id: 6, user_id: 13},
  {team_id: 6, user_id: 12},
  {team_id: 6, user_id: 10},
  {team_id: 7, user_id: 1},
  {team_id: 7, user_id: 2},
  {team_id: 7, user_id: 3},
  {team_id: 7, user_id: 11},
  {team_id: 7, user_id: 9},
  {team_id: 7, user_id: 6}
])
Project.create([
  {user_id: 1, team_id: 3, name: "Update A/V Carts", description: "Clients are expecting up-to-date equipment in our venues, and we will deliver. All 10 carts need an overhaul."},
  {user_id: 1, team_id: 3, name: "Troubleshooting Training", description: "We have received several complaints about technical issues when working with our newer technicians."},
  {user_id: 1, team_id: 3, name: "Rigging Training", description: "Rigging, Co. will be onsite for a beginner course on entertainment rigging."},
  {user_id: 1, team_id: 1, name: "Company Brochure", description: "We need input from all team-leaders to make our new brochure."},
  {user_id: 1, team_id: 1, name: "Branded USB Drives", description: "We are handing out branded USB drives at our conferences and to potential clients."},
  {user_id: 1, team_id: 7, name: "Time Lapse for Upcoming Conventions", description: "We have two major conventions coming up, and we need AMAZING time-lapse video."}
])
Task.create([
  {project_id: 1, user_id: 1, name: "Purchase TVs", description: "TVs should be 70\", 4K UHD, with HDMI ports and timed-shutoffs.", status: 1},
  {project_id: 1, user_id: 1, name: "Purchase Adapters", description: "Clients are bringing a variety of devices. We need to have all of the popular Mac, Intel, and PC adapters to allow a client to easily connect to the HDMI in the TV (audio needs to go through the TV, as well).", status: 1},
  {project_id: 1, user_id: 1, name: "Purchase Computers", description: "Each cart needs a Mac Mini and a micro-form-factor PC. All should have the Office Suite (or Keynote and other Mac equivalents). Disable automatic updating.", status: 1},
  {project_id: 1, user_id: 1, name: "Surplus Old Equipment", description: "Research the current market value for the old equipment, taking into account condition and age. Send this information, along with the equipment, to the surplus warehouse. The funds should go into the AV account.", status: 1},
  {project_id: 2, user_id: 1, name: "Audio Troubleshooting", description: "Techs should be able to trace the entire sound path for any given input and intuitively know how to fix simple feedback or 'popping/humming' issues.", status: 1},
  {project_id: 4, user_id: 1, name: "Maps", description: "We need maps of our large venues. Please send several mocked-event maps, as well.", status: 1},
  {project_id: 4, user_id: 1, name: "Food Services", description: "Send in our main food services that we offer. Send a copy of our catering policy, as well. The copy/layout team will write the brief.", status: 1},
  {project_id: 5, user_id: 1, name: "Logo SVG to Printer", description: "Have the graphic designers send several versions of our logos as SVGs to the printer. Let them know that the logos will printed on USB drives.", status: 1},
  {project_id: 5, user_id: 1, name: "Venue Map PDFs and Brochure", description: "Compile Venue Maps and Brochure into one PDF to put on the USB drives.", status: 1},
  {project_id: 4, user_id: 1, name: "A/V Services Paragraph", description: "Send in a paragraph statement of the main services we offer. If anything is unique, bold the text. Our copy/layout team will handle the wording, so it doesn't need to be perfect.", status: 1},
  {project_id: 3, user_id: 1, name: "Rigging Headcount", description: "We need a final headcount for the training.", status: 3},
  {project_id: 3, user_id: 1, name: "Order Meals", description: "Order breakfast and lunch for the 2 trainers and the crew members attending the training.", status: 2},
  {project_id: 6, user_id: 1, name: "Order Cameras", description: "We need two high-quality (>24mp) cameras that are compatible with our tethering software. Nikon or Canon. MUST have excellent low-light.", status: 4},
  {project_id: 6, user_id: 1, name: "Order Camera Mounts and Battery Packs", description: "The cameras need to be able to run for 12 hours without charging. We will be mounting them on pips and beams in the rafters.", status: 3},
  {project_id: 5, user_id: 1, name: "A/V Services Video", description: "Put together a short montage of video clips from our high-profile events. We should have some time-lapse videos from some of the concerts. Keep it around 1 min.", status: 2},
  {project_id: 2, user_id: 1, name: "Display Troubleshooting", description: "Techs should know how to check and set custom resolutions, debug lagging video, and convert various presentation files on the fly (video, PowerPoint, Keynote, PDF, etc..)", status: 4},
  {project_id: 3, user_id: 1, name: "Update Staff Details", description: "Add rigging credential to all employees who complete the training. For some employees this may give them enough points for a raise. Check with HR and Payroll.", status: 1}
])
TaskAssignment.create([
  {user_id: 1, task_id: 10},
  {user_id: 8, task_id: 11},
  {user_id: 1, task_id: 15},
  {user_id: 1, task_id: 9},
  {user_id: 14, task_id: 5},
  {user_id: 12, task_id: 5},
  {user_id: 5, task_id: 5},
  {user_id: 1, task_id: 5},
  {user_id: 1, task_id: 16},
  {user_id: 1, task_id: 17}
])
