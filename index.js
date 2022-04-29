const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string){
    return drivers.filter(function(el){
        if (el === string){
            return string
        }else if(el === string.toLowerCase()){
            return string
        }
        }
    )
}

function fuzzyMatch(drivers, string){
    const stringLength = string.length
    return drivers.filter(function(el){
        return el.slice(0, stringLength) === string 
    }
    )
}

function matchName(drivers, string){
    return drivers.filter(function(el){
        return el.name === string
    })
}