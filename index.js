const employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
  };
  function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
      ...obj,
      [key]: value
    };
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
  }
  function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj; 
  }
  function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
  }