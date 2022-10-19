import { pathOr, pipe, trim } from "ramda";

// takes an event object, grabs its target.value, defaults to '', and trims it
// const getInputValue = (event) => trim(pathOr("", ["target", "value"], event));
// const getInputValue = pipe(pathOr("", ["target", "value"]), trim);

export default pipe(pathOr("", ["target", "value"]), trim);
