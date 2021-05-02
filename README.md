# SSSF-course-project

# DESTINATIONS

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
{
  Destination(id: "608d4b88d94c6b0c94981306") {
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
