import Action from "../../../Source/Frame/General/Action";
import {RootState} from "../index";

export class RatingUIState {
	smoothing = 5;
}
export class ACTRatingUISmoothnessSet extends Action<number> {}
export function RatingUIReducer(state = new RatingUIState(), action: Action<any>): RatingUIState {
	if (action.Is(ACTRatingUISmoothnessSet))
		return {...state, smoothing: action.payload};
	return state;
}

// selectors
// ==========

export function GetRatingUISmoothing() { 
	return State().main.ratingUI.smoothing;
}