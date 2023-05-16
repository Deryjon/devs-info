export function devList(data, id) {
  return `
	<li id="${id}">${data.name} Dev | <i>${data.job}</i> | Hired by <b>${data.name}</b> 
	<button
	class="delete bg-red-500 py-2 px-4 rounded-md text-white text-xs"
>
	<i class="fas fa-trash pointer-events-none"></i>
</button></li>
	<style>
			#${id}{
				background: ${data.color};
				margin: 0 auto;
				width: 700px;
				list-style:none;
			}
			.delete {
				background: red;
				padding: 10px;
				border-radius: 5px;
				color:white;
				font-size: 14px;
			}
		</style>`;
}
