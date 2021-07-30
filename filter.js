/**
 *  AVAILABLE FILTERS:
 *  ["AVAILABLE_IMMEDIATELY", "FRESH_GRAD", "JUNIOR", "JAVASCRIPT", "PHP", "AWS", "REACT", "JAVA"]
 *
 *  "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" will override all the other filters if specified
 *
 *  if "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" are both specified as filter, "FRESH_GRAD" will be ignored
 *
 *
 *  Exercise: refactor this code
 *  - take care of naming variables
 *  - get rid of the 'for loops'
 *  - move it to modern JS!
 *  - oh, there are missing tests/scenario
 *
 *   happy refactory :)
 */

const AVAILABLE_IMMEDIATELY_FILTER = "AVAILABLE_IMMEDIATELY";
const FRESH_GRAD_FILTER = "FRESH_GRAD";

function filter(candidates, filters) {
  if (!filters.length) return candidates;

  const availableImmediately =
    filters.indexOf(AVAILABLE_IMMEDIATELY_FILTER) !== -1;
  const freshGrad =
    !availableImmediately && filters.indexOf(FRESH_GRAD_FILTER) !== -1;

  return candidates.filter(({ options }) => {
    if (!options || !options.length) {
      return false;
    }

    if (availableImmediately) {
      return options.some(({ code }) => code === AVAILABLE_IMMEDIATELY_FILTER);
    }

    if (freshGrad) {
      return options.some(({ code }) => code === FRESH_GRAD_FILTER);
    }

    return filters.every(filterItem =>
      options.some(({ code }) => filterItem === code)
    );
  });
}

module.exports = filter;
