import * as express from "express";

export class ApiRoute {

	static create(): express.Router {
		console.log("[ApiRoute::create] Creating api route.");
		const routes: express.Router = express.Router();

		routes.post("/pressure", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
			try {
				let param: string = req.body.value;
				return res.json({result: null, value: param});
			} catch (err) {
				return next(err);

			}
		});
		return routes;
	}

}