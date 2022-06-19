const CodelandUsernameValidationTypescript = (str: string): boolean => {
  // code goes here
  if (str.length > 3 && str.length < 26) {
    const validUser: boolean = /^[A-Za-z]+[A-Za-z0-9_]+[A-Za-z0-9]$/g.test(str);
    return validUser
  }
  else return false
}

// // keep this function call here 
console.log(CodelandUsernameValidation('testerino__2'));