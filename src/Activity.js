class Activity {

/**
 * @param {string} type
 * @param {number} distance
 * @param {number} duration
  */

  constructor(type, distance, duration) {
      this.type = type
      this.distance = distance
      this.duration = duration
  }

/**
 * @return {string[]} Types of activities
 */

  static getSportTypes() {
      return ['running', 'cycling', 'walking']
  }
  
/**
 * @return {true} if the conditions are met
 * @return {fasle} if the conditions are not met
 */

  isValid() {
      const types = ['running', 'cycling', 'walking']
      const vitesse = this.distance / this.duration
      if (typeof(this.type) !== "string")
          return false;
      if (types.includes(this.type) === false)
          return false;
      if (this.distance < 0 || this.duration < 0)
          return false;
      if (this.type == 'running' && vitesse > 18)
          return false;
      if (this.type == 'cycling' && vitesse > 50)
          return false;
      if (this.type == 'walking' && vitesse > 7)
          return false;
      return true;
  }
}

class Marathon extends Activity {

/**
 * @return {true} if the conditions are met
 * @return {fasle} if the conditions are not met
 */

  isValid() {
      const vitesse = this.distance / this.duration
      if (this.type != 'running')
          return false;
      if (this.distance != 42.195)
          return false;
      if (vitesse > 15)
          return false;
      return true;
  }
}
 
const activity = new Activity("cycling", 50, 10)
const marathon = new Marathon("cycling", 42.195, 4)



//Je laisse les consoles log en commentaire si jamais vous voulez tester avec 

/*
console.log("Activity types: ", Activity.getSportTypes())
console.log("Activity_type:", activity.type);
console.log("Activity.isValid:", activity.isValid());
console.log("Marathon_type:", marathon.type);
console.log("Marathon.isValid:", marathon.isValid());

*/