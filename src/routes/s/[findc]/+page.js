/**@type import('@sveltejs/kit').PageLoad*/
export function load({ params }) {
	const { findc } = params;

	return {
		findColor: findc
	};
}
