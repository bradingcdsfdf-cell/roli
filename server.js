const express = require("express");
const app = express();

app.get("/player/:userId", async (req, res) => {
	const userId = req.params.userId;

	try {
		const response = await fetch(`https://www.rolimons.com/playerapi/player/${userId}`);
		const data = await response.json();

		res.json({
			value: data.value || 0,
			rap: data.rap || 0
		});
	} catch (err) {
		res.json({
			value: 0,
			rap: 0
		});
	}
});

app.listen(process.env.PORT || 3000, () => {
	console.log("Server running");
});
