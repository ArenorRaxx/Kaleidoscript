import { tweened } from "svelte/motion";
import { quartOut } from "svelte/easing";

let toggle: boolean = false;

const subscribers: Function[] = [];

export default {
	widthControler: tweened(100, {
		duration: 1000,
		easing: quartOut
	}),
	subscribe(callback: Function): Function{
		subscribers.push(callback);

		return () => {
			const index = subscribers.findIndex(
				(subscribed: Function) => subscribed === callback
			);
			subscribers.splice(index, 1);
		}
	},

	set: function () {
		toggle = !toggle;
		const newValueOfVisuWidth: number = 50 + (toggle ? 0 : 50);
		this.widthControler.set(newValueOfVisuWidth);
		subscribers.forEach((toCall) => {
			toCall(toggle);
		})
	},

	get toggle(): boolean {
		return (toggle);
	}
}
