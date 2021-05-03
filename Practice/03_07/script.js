/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


// var book = {
//     title: "Bible",
//     type: "Religious",
//     size: "Large",
//     translation: "KJV",
//     myBible : function() {
//         return this.title + "is" + this.size;
//     }
// };

var book = {
    title: "Bible",
    type: "Religious",
    size: "Large",
    translation: "KJV",
    
} 

const user = {
    id: 444,
    email: 'myra@dev.com',
    personalInfo: {
        name: 'Myra',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
        }
    }
}