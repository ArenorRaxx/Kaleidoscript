const subscribers: Function[] = [];

export default {
	subscribe(callback: Function): Function{
		subscribers.push(callback);

		return () => {
			const index = subscribers.findIndex((subscribed: Function) => subscribed === callback);
			subscribers.splice(index, 1);
		}
	},

	set: function (value: boolean) {
		subscribers.forEach(toCall => {
			toCall(value);
		})
	},	
}
