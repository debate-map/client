import {configure, onReactionError} from "web-vcore/nm/mobx.js";
import {O, HandleError, ConfigureMobX} from "web-vcore";
import {ignore} from "web-vcore/nm/mobx-sync.js";
import {Graphlink} from "web-vcore/nm/mobx-graphlink.js";
import {immerable, setUseProxies, setAutoFreeze} from "web-vcore/nm/immer.js";
import {MainState} from "./main.js";
import {GraphDBShape} from "dm_common/Source/DBShape";

//ConfigureMobX();

export class RootState {
	// [immerable] = true; // makes the store able to be used in immer's "produce" function

	@O main = new MainState();

	// @O forum: any;
	// @O feedback: Feedback_RootState;
	// @O.ref feedback = new Feedback_RootState(); // needed due to details of how mobx/immer work -- will probably make unneeded later
	//@O.ref feedback: Feedback_RootState; // O.ref needed due to details of how mobx/immer work -- will probably make unneeded later

	/* @O @ignore firebase: any;
	@O @ignore firestore: any; */
	@O @ignore graphlink: Graphlink<RootState, GraphDBShape>;

	// @O @ignore vMenu: VMenuState;
}

export const store = new RootState();
G({store});