// Object.freeze() vs Object.seal() vs Object.preventExtensions();

/**
 * Object.freeze()
 * - No addition
 * - No deletion
 * - No change 
 * of properties allowed. 
 * you can not change the configurability, enumerability data and accessor properties.
 * 
 * - A Frozen object's prototype is immutable: i.e, you can not replace the entire 
 * prototype, while you can add properties in the prototype.
 * /
 
/**
 * Object.seal()
 * - No addition
 * - No Deletion
 * - Change allowed if the property is writable
 * It makes all existing properties as non-configurable.
 * 
 * - A sealed object's prototype is immutable: i.e, you can not replace the entire 
 * prototype, while you can add properties in the prototype.
 */

/**
 * Object.preventExtensions()
 * - No addition
 * - Deletion allowed
 * - prevents addition of own properties. Properties can still be added to the object prototype.
 * - A non-extensible object's prototype is immutable: i.e, you can not replace the entire
 * prototype, while you can add properties in the prototype.
 */

// In all the three cases above
/**
 * You can do this
 * tragetObject.__proto__.cool = function Cool() {};
 *
 * BUT
 *
 * This will throw a typeError
 * tragetObject.__proto__= { oh: 'hai' };
 *
 *
 *     ** tragetObject - tragetObject is either frozen, sealed or non-extensible object
 */
