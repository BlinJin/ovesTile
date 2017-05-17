export interface IServerOptions {
	port: number;
	host: string;
	secure: boolean;
}

export interface IServerAddress {
	port: number;
	family: string;
	address: string;
}