/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
    let weeks = 0;
    let shortProg = 800;
    let fullProg = 1300;
    if (knowsProgramming === true){
      weeks = Math.ceil(shortProg / config[focus]);
      }
    else{
      weeks = Math.ceil (fullProg / config[focus]);
      }
    return weeks;
  };
  