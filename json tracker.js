const index = 1;
function getObject(theObject) {
    let result = null;
    if(theObject instanceof Array) {
        for(let i = 0; i < theObject.length; i++) {
            result = getObject(theObject[i]);
        }
    }
    else
    {
        for(let prop in theObject) {
          /*THE KEY YOU WANT TO LOOK FOR*/
            if(prop == 'id') {
              /* INDEX IS THE VALUE YOU WANT TO ACCESS */
                if(theObject[prop] == index) {
                    return theObject;
                }
            }
            if(theObject[prop] instanceof Object || theObject[prop] instanceof Array)
                result = getObject(theObject[prop]);
        }
    }
    return result;
}
const myObject = {
        id:0,
        name: "third state",
        value:"valeur",
        status: "text",
        type: [{
              id:1,
              name: "object state",
              value:"valeur",
              status: "text",
              type: [
                      {
                        id:2,
                        name: "third state",
                        value:"valeur",
                        status: "text",
                        type:[]
                      },{
                        id:3,
                        name: "third state",
                        value:"valeur",
                        status: "text",
                        type:{}
                                      }

                      ]
        }]
  };
const result = getObject(myObject);
console.log(result);
