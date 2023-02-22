const people = [
    {
        name: "Micah",
        children: [{
            name: "Elliot"
        }, {
            name: "Sarah"
        }]
    },
    {
        name: "Dany",
        children: [{
            name: "Isaiah",
            children: [{
                name: "Rufus",
                children: [{
                    name: "Mosh"
                }, {
                    name: "Jonny"
                }]
            }, {
                    name: "Dusan"
                }]
            },
            {
                name: "Grant",
                children: [{
                    name: "Braden"
                }]
            }]
    }
]

function findChildren(people, name) {
    // iterate through each object in the given arr
    for(const person of people) {
        // is this who we are looking for?
        if(person.name === name) {
            return person.children
        }
        // we know this is not who we are looking for
        // however, if they have kids we need to check those kids
        else if(person.children) {
            // we call our function recusively passing along the childre
            const children = findChildren(person.children, name)
            // one of two things will happen either our function will retrun children or it will return undefined
            
            // if the return value is truthy we know we found who we are looking for and children have been found
            if(children) {
                // if children have been returned our condition has been met and we can return the children variable
                return children
          }
      } 
    // we know this is not who we are looking for plus this person has no children for us to check
    // our work is finished!
      else {
          return undefined
      }
  }
}

const children = findChildren(people, "Micah");
console.log(children)
