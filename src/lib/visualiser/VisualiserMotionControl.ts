import ToggleVisualiser from "./ToggleVisualiser"
import type { Tweened } from "svelte/motion";
import { tweened } from "svelte/motion";
import { quartOut } from "svelte/easing";
import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

let	isToggle: boolean = false;

const slider: Tweened<number> = tweened(100, {
		duration: 1000,
		easing: quartOut
})
slider.subscribe((actualWidthOfVisualiser: number) => {
	if (actualWidthOfVisualiser === 50)
		ToggleVisualiser.set(true);
	else
		ToggleVisualiser.set(false);
})

const toggleSwitch: Writable<boolean> = writable(false);
toggleSwitch.subscribe((toggle: boolean) => {
	if (toggle === true)
		slider.set(50);
	else
		slider.set(100);
	isToggle = toggle;
})

export default {
	slider,
	toggleSwitch,
	switch: function () {
		toggleSwitch.update((toggle: boolean) => !toggle);
	},
	get toggle(): boolean {
		return (isToggle);
	}
}