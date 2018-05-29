import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response } from "ask-sdk-model"

export class HelloHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'hello';
    }

    handle(handlerInput: HandlerInput): Response { //  Response | Promise<Response>
        console.log('hello request init');
        const responseBuilder = handlerInput.responseBuilder;

        return responseBuilder
                       .speak('hello to you too')
                       .reprompt('what was that?')
                       .getResponse();
    }   
}