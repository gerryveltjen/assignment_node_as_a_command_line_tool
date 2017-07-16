// Split input by spacing into an array
//
// foreach element in the array
//   if isNan =>
//     push to action array
//   else =>
//     push to number array
//
// instantiate result as undefined
//
// foreach action in action array
//   if action = operator(add,sub,mult,div) =>
//     if result = undefined =>
//       result = doCalculation(action,number[0],number[1])
//       i = 1
//     else =>
//       result = doCalculation(action,result,number)
//     i++
//     print result
//   else =>
//     action = -v or --version => print version number
//     action = -h or --help => print explanation
    
