import { Injectable } from "@nestjs/common";
import * as WebSocket from "ws";

@Injectable()
export class WSService {
    // wss://echo.websocket.org is a test websocket server
    private ws = new WebSocket("wss://echo.websocket.org");

    constructor() {
        //A new exchange rate should be pushed to the frontend every 30 seconds.
        this.ws.on("open", () => {
            setInterval(() => {
                this.ws.send(Math.floor(Math.random() * (12000 - 5000 + 1) + 5000))
        }, 30000);
        });

        this.ws.on("message", function(message) {
            console.log(message);
        });
    }


    send(data: any) {
        this.ws.send(data);
    }

  
}