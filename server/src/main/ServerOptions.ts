import {IServerOptions} from "./IServer";

export class ServerOptions {
	port: number;
	host: string;
	secure: boolean;

	constructor({port = 80, host = "localhost", secure = false}: IServerOptions) {
		this.port = port;
		this.host = host;
		this.secure = secure;
	}
}