# SSSF-course-project

The application is designed for people who want to plan their trips.
In the application, the user gets to add travel destinations and places they want to visit.
Destinations and attractions can be edited and deleted.

<b>Things to test in frontend:</b><br>
Login/register<br>
Add destination<br>
 (location is required)<br>
Add attraction to it<br> 
Modify/delete attraction<br>
 (location is required for editing)<br>
Modify/delete destination <br>
(for editign destination you may need to sign in again to see the changes)<br>
Test user:<br>
username:mapapp<br> 
password:mapapp_1



## Endpoint
`https://env-3354092.jelastic.metropolia.fi/graphql
`
## Front
`
https://sssf-mapapp.netlify.app/
`

# User
### Register
```
mutation {
  register(username: "username", password: "password") {
    token
    username
    id
  }
}
```
### Login
```
{
  login(username: "username", password: "password") {
    token
    id
    username
  }
}
```
### Users Data
```
{
  user(id: "users id") {
    id
    token
    username
    Destinations {
      name
      DestinationLocation {
        coordinates
      }
      Attractions {
        name
        type
        destinationID
        AttractionLocation {
          coordinates
        }
      }
    }
  }
}

```

# Destinations

### Get all destination 
```
{
  Destinations {
    id
    name
    userID
    DestinationLocation {
      coordinates
    }
    Attractions {
      id
      destinationID
      name
      type
      AttractionLocation {
        coordinates
      }
    }
  }
}
```
### Get one destination
```
{
  Destination(id: "Destination id") {
    id
    name
    userID
    DestinationLocation {
      coordinates
    }
    Attractions {
      id
      destinationID
      name
      type
      AttractionLocation {
        coordinates
      }
    }
  }
}
```
### Delete destination  ( needs users token )
```
mutation {
  deleteDestination(id: "Destination id") {
    id
  }
}
```
### Add destionation ( userID is required and needs users token to headers )
```
mutation {
  addDestination(
    name: "Some name"
    userID:"users id"
    DestinationLocation: { coordinates: [lat, lng] }
  ) {
    name
    DestinationLocation {
      coordinates
    }
  }
}
``` 
### Modify destination ( destination id is required and needs users token to headers )
```
mutation {
  modifyDestination(id: "destination id", name: "name" DestinationLocation: { coordinates: [lat, lng] } ) {
    DestinationLocation{coordinates}
    name
  }
}
```
# Attractions 

### Get one attraction
```
{
  Attraction(id: "attraction id") {
    id
    destinationID
    name
    type
    AttractionLocation{coordinates}
  }
}
```
### Add attraction ( destinationID is reguired and needs users token to headers. Type in front end is select object with options Food, Museum, Park and Landmark )
```
mutation {
  addAttraction(
    destinationID: "Destination id"
    name: "some name"
    type: "park"
    AttractionLocation: { coordinates: [51.0, -0.09] }
  ) {
    name
    id
    AttractionLocation {
      coordinates
    }
  }
}
```
### Modify attraction (id is required and needs users token to headers )
```
mutation {
  modifyAttraction(
    id: "attraction id"
    name: "Vessel Hudson yards"
    type: "Park"
  ) {
    name
    type
  }
}
```
### Delete attraction (id is required and needs users token to headers )
```
mutation {
  deleteAttraction(id: "attraction id") {
    id
  }
}
```


