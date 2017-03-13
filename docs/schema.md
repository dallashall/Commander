# Schema Info
--------
## users
| column name | data type | details |
|------------ | --------- | ------- |
|id| integer| not null, primary key|
| username | string | not null, unique, indexed |
|email| string| not_null, unique, indexed|
|password_digest| string| not null|
|session_token| string| not null, unique, indexed |

## projects
| column name | data type | details |
|------------ | --------- | ------- |
|id| integer| not null, primary key|
|user_id| integer | not null, indexed |
|team_id| integer | not null, indexed |
|name| string| not null, indexed, unique (with team_id)|
|description| text| -|

## teams
| column name | data type | details |
|------------ | --------- | ------- |
|id| integer| not null, primary key|
|user_id| integer| not null, indexed|
|name| string| not null, indexed, unique (with user_id)|
|description| text| -|

## tasks
| column name | data type | details |
|------------ | --------- | ------- |
|id| integer| not null, primary key|
|user_id| integer | not null, indexed |
|name| string| not null, indexed|
|description| text| -|
|statuses| integer | array: true, default: [], indexed|

## team_members
| column name | data type | details |
|------------ | --------- | ------- |
|id| integer| not null, primary key|
|user_id | integer| not null, indexed|
|team_id | integer| not null, indexed|

## task_assignments
| column name | data type | details |
|------------ | --------- | ------- |
|id| integer| not null, primary key|
|user_id| integer| not null, indexed|
|task_id| integer| not null, indexed|
