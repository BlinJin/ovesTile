import * as http from "http";
import {ServerApplication} from "./ServerApplication";
import * as https from "https";
import * as net from "net";
import ErrnoException = NodeJS.ErrnoException;
import {IServerAddress, IServerOptions} from "./IServer";
import {ServerOptions} from "./ServerOptions";


export class Server {
	private provider: net.Server;
	private config: ServerOptions;

	protected constructor() {
	}

	private configure(config: ServerOptions = new ServerOptions({} as IServerOptions)): this {
		this.config = config;
		this.provider.listen(this.config.port, this.config.host);
		return this;
	}

	public static bootstrap(app: ServerApplication): Server;
	public static bootstrap(app: ServerApplication, config: ServerOptions): Server;
	public static bootstrap(app: ServerApplication, config?: ServerOptions): Server {
		const server: Server = new Server();

		if (config.secure) {
			server.provider = https.createServer(app.proxy);
		} else {
			server.provider = http.createServer(app.proxy);
		}

		server.provider.on("error", (error: ErrnoException) => server.errorHandler(error));
		server.provider.on("listening", () => server.lookupHandler());

		server.provider.ref();

		return server.configure(config);
	}

	public address(): IServerAddress {
		return this.provider.address();
	}

	private errorHandler(error: ErrnoException): void {
		if (error.syscall !== "listen") {
			throw error;
		}

		switch (error.code) {
			case "EACCES":
				console.error(new Error(`Opening ${this.config.port} requires elevated privileges`));
				process.exit(1);
				break;
			case "EADDRINUSE":
				console.error(new Error(`${this.config.port} is already in use`));
				process.exit(1);
				break;
			default:
				throw error;
		}
	}

	private lookupHandler(): void {
		const addressObject: IServerAddress = this.provider.address();
		console.log(`Server is listening on ${addressObject.address}:${addressObject.port}`);
	}

}