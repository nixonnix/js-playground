/**
 * Suppose we have the requirement that when a user tries to open a page, the correct content can only be seen if the following conditions are met:

The user is a registered user of this site
The user’s level is not less than 1
The user must be a front-end development engineer
The type of user is an active user

Simple implementation


function checkAuth(data) {
  if (data.role !== 'registered') {
    console.log('The user is not a registered user');
    return false;
  }
  if (data.grade < 1) {
    console.log("The user's level is less than 1");
    return false;
  }
  if (data.job !== 'FE') {
    console.log('The user is not a front-end development engineer');
    return false;
  }
  if (data.type !== 'active user') {
    console.log('The user is not an active user');
    return false;
  }
}


with Strategy pattern
 */

function Strategy() {
  const job = ["FE", "BE"];
  const validations = {
    checkRole(data) {
      if (data !== "registered") {
        console.log("The user is not a registered user");
        return false;
      }
      return true;
    },
    checkLevel(data) {
      if (data < 1) {
        console.log("The user's level is less than 1");
        return false;
      }
      return true;
    },
    checkJob(data) {
      if (!job.includes(data)) {
        console.log("The user is not a front-end development engineer");
        return false;
      }
      return true;
    },
    checkType(data) {
      if (data !== "active user") {
        console.log("The user is not an active user");
        return false;
      }
      return true;
    },
  };
  const rules = [];
  this.add = function (rule, data) {
    rules.push(function () {
      return validations[rule](data);
    });
  };
  this.validate = function () {
    return rules.every((rule) => rule());
  };
}

const validator = new Strategy();

validator.add("checkRole", "registereda");
validator.add("checkJob", "FE");

console.log("All validateion passed --- ", validator.validate());

export default Strategy;
