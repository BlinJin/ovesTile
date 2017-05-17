import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import {ApiRoute} from "../routes/ApiRoutes";
import * as path from "path";

const STATIC: string = path.join(__dirname, "../../../", "/client/src");

export class ServerApplication {
	get proxy(): express.Application {
		return this._proxy;
	}

	private _proxy: express.Application;

	constructor() {
		// create express js application
		this._proxy = express();
		// configure application
		this.config();
		// add routes
		this.routes();
		// add api
		this.api();
	}

	/**
	 * Create REST API routes
	 *
	 * @class Server
	 * @method api
	 */
	public api(): void {
		// empty for now
	}

	/**
	 * Configure application
	 *
	 * @class Server
	 * @method config
	 */
	public config(): void {

		this._proxy.use(express.static(STATIC));

		this._proxy.use(morgan("short"));
		// mount json form parser
		this._proxy.use(bodyParser.json());
		// mount query string parser
		this._proxy.use(bodyParser.urlencoded({
			extended: true
		}));

		// error handling
		this._proxy.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
			console.error(err);
			return res.status(500).send(err.message);
		});
	}

	/**
	 * Create and return Router.
	 *
	 * @class Server
	 * @method config
	 * @return void
	 */
	private routes(): void {
		// IndexRoute
		// use router middleware
		this._proxy.use("/control", ApiRoute.create());
		// catch 404 and forward to error handler
		this._proxy.get("*", (req: express.Request, res: express.Response) => {
			return res.status(404).send();
		});
	}
}