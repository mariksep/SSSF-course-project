# SSSF-course-project
## Endpoint
`https://env-3354092.jelastic.metropolia.fi/graphql
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


